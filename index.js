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
    'WarumWurdeMeineLieferungVerzögertIntent': function () {
        this.emit('LieferungWurdeVerzögert')
    },
    'WelchesTeamIstDasBesteIntent': function () {
        this.emit('BestesTeam')
    },
    'WasHabeIchBestelltIntent': function () {
        this.emit('WasHabeIchBestellt')
    },
    'KannEsSchnellerKommenIntent': function () {
        this.emit('KannEsSchneller')
    },
    'KriegeIchErstattungIntent': function() {
        this.emit('KriegeIchErstattung')
    },
    'MeineBestellungIst' : function () {
        this.emit(':tell', "Ich weiss nicht wo deine Bestellung ist")
    },
    'SagHalloNutzer' : function () {
        this.emit(':tell', "Hallo Nutzer, frage nach deiner Bestellung")
    },
    'LieferungWurdeVerzögert' : function () {
        this.emit(':tell', "Ich weiß nicht warum deine Bestellung verzögert wurde")
    },
    'WasHabeIchBestellt' : function () {
        this.emit(':tell', "Ich weiß nicht was du bestellt hast")
    },
    'KannEsSchneller' : function () {
        this.emit(':tell', "Nein geduldige dich")
    },
    'KriegeIchErstattung' : function() {
        this.emit(':tell', "Vielleicht")
    },
    'BestesTeam' : function () {
        this.emit(':tell', "Jedes Team, in dem ich nicht zum Einsatz komme, ist es nicht einmal wert, erwähnt zu werden.")
    },
    'WannKommtMeineBestellungIntent': function () {
        this.emit('MeineBestellungKommt')
    },
    'IstMeineBestellungGefertigtIntent': function () {    
        this.emit('BestellungGefertigtIn')
    },
    'IstMeineBestellungVersandfertigIntent': function () {
        this.emit('BestellungVersandfertigIn')
    },
    'MeineBestellungIst' : function () {
        this.emit(':tell', "Ich weiss nicht wo deine Bestellung ist")
    },
    'BestellungGefertigtIn': function () {
        this.emit(':tell', "Sie ist gefertigt")
    },
    'BestellungVersandfertigIn': function () {
        this.emit(':tell', "Sie ist bereits verschickt")
    }
};