# Front Door: Unlock Your Apartment Wirelessly

A weekend hack to wire up a [Particle Photon](http://particle.io) WiFi module to an apartment building's intercom system allowing you to wirelessly unlock the building's front door.

![app interface](https://raw.githubusercontent.com/jordanh/frontdoor/master/private/images/front-door-mobile.png)

## Hardware Parts List

Required:
(1) Particle Photon module<br />
(1) 3v 50mA relay<br />
(1) NPN transistor<br />

Wire

Optional:
(1) Photon Internet Button kit<br />

## Hardware Assembly

Connect Particle Photo to relay using the below schematic:

![schematic](https://raw.githubusercontent.com/jordanh/frontdoor/master/private/images/schematic.jpg)

Connect relay's _normally open_ terminal and one of relay's _common_ terminals to contacts on intercom that normally are shorted together when user pushes "door" button.

Close intercom panel.

NOTE: you'll have to find some way to power the Particle module. I've run 5v DC inside the wall.

Program Particle Photon module with script included in
`private/particle/front-door.ino`. If not using Photon
Internet Button carrier board, make certain to comment
outline or remove lines that reference/use Internet Button's LED lighting.

## Software Installation:

1. Install [meteor](http://www.meteor.com) framework
2. Clone this repository
3. Copy `settings.json.example` to `settings.json`
4. Edit `settings.json` and add keys for:
   * Google app authentication
   * Particle device id and API token
   * Whitelist of Google e-mails to give access to your door

5. Add your application to [Google Developers Console](https://console.developers.google.com/)
   * Under APIs &amp; auth→Credentials make sure to add `http://localhost:3000` to _Authorized JavaScript Origins_ and `http://localhost:3000/_oauth/google?close` to _Authorized redirect URIs_

## Usage

To run the application locally:

```bash
$ meteor run --settings settings.json
```

Navigate to http://localhost:3000

Log in using Google.

Click on Lock icon. _Voila!_

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

20-Sep-2015: First public release

## Credits

Jordan Husney <jordan.husney@gmail.com>

## License

Copyright 2015 Jordan Husney

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
