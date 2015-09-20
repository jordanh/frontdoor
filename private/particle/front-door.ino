#include "InternetButton/InternetButton.h"

           int                 relay = D1;   // How do we talk to the relay?
const      int           RELAY_ON_MS = 1500; // How long should the relay be on?
InternetButton                     b = InternetButton();

void setup() {
    b.begin();
    
    pinMode(relay,OUTPUT);
    digitalWrite(relay,LOW);
    Particle.function("unlock", unlockSequence);
}


void loop() {
    // Let everybody know that our firmware is running:
    digitalWrite(D7, HIGH);
    delay(500);
    digitalWrite(D7, LOW);
    delay(500);
}

// unlockSequence()
//    command: ignored
int unlockSequence(String command) {
    // Let the world know what's happening visually:
    b.allLedsOn(0,127,0);
    
    digitalWrite(relay, HIGH);
    delay(RELAY_ON_MS);
    digitalWrite(relay, LOW);

    // End visual indication:
    b.allLedsOff();

    return 0;
}
