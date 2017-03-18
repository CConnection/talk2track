'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SagHalloNutzer');
    },
    'WoIstMeineBestellungIntent': function () {
        this.emit('MeineBestellungIst')
    },
    'MeineBestellungIst' : function () {
        this.emit(':tell', "Ich weiss nicht wo deine Bestellung ist")
    },
    'SagHalloNutzer' : function () {
        this.emit(':tell', "Hallo Nutzer, frage nach deiner Bestellung")
    }
};