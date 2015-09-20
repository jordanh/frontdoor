_ = lodash;

if (Meteor.isClient) {
  // Initialize the Accounts subsystem:
  Accounts.ui.config({
    requestPermissions: {
      google: ['email']
    },
    passwordSignupFields: 'EMAIL_ONLY'
  });

  // This code only runs on the client
  angular.module('front-door',['angular-meteor']);

  angular.module('front-door').controller('FrontDoorCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {

      $scope.unlockDoor = function() {
        $meteor.call('unlockDoor');
      }

  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    ServiceConfiguration.configurations.remove({
      service: "google"
    });
    ServiceConfiguration.configurations.insert(Meteor.settings.googleService);
  });

  Meteor.methods({
    'unlockDoor': function unlockDoor() {
      var Sparky = Meteor.npmRequire('sparky');
      var particle = new Sparky(Meteor.settings.particle);
      var whitelist = Meteor.settings.userWhitelist;

      if (!Meteor.userId()) {
        throw new Error('not-authorized');
      }

      if (!_.contains(whitelist, Meteor.user().services.google.email)) {
        throw new Error('not-authorized:' +
          Meteor.user().services.google.email
        );
      }
      console.log("unlock!");
      particle.run('unlock', '', function () {});
    }
  });
}
