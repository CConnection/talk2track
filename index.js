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
    'WarumWurdeMeineLieferungVerzoegertIntent': function () {
        this.emit('LieferungWurdeVerzoegert')
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
    'LieferungWurdeVerzoegert' : function () {
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
    'IstMeineBestellungVersandbereitIntent': function () {
        this.emit('BestellungVersandbereitIn')
    },
    'MeineBestellungKommt' : function () {
        this.emit(':tell', "Ich weiss nicht wann deine Bestellung kommt")
    },
    'BestellungGefertigtIn': function () {
        this.emit(':tell', "Sie ist gefertigt")
    },
    'BestellungVersandbereitIn': function () {
        this.emit(':tell', "Sie ist bereits verschickt")
    }
};
