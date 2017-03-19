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
        this.emit(':ask', "Ich weiss nicht wo deine Bestellung ist", "Ich habe keine Ahnung wo deine Bestellung ist", "frag mich nicht")
    },
    'SagHalloNutzer' : function () {
        this.emit(':ask', "Hallo Nutzer, frage nach deiner Bestellung")
    },
    'LieferungWurdeVerzoegert' : function () {
        this.emit(':tell', "Ich weiß nicht warum deine Bestellung verzögert wurde")
    },
    'WasHabeIchBestellt' : function () {
        this.emit(':tell', "Ich weiß nicht was du bestellt hast", "Streng dein eigenes Gehirn an")
    },
    'KannEsSchneller' : function () {
        this.emit(':tell', "Nein geduldige dich", "Geduld ist die Mutter aller Tugenden", "Wie wäre es mit abwarten und Tee trinken")
    },
    'KriegeIchErstattung' : function() {
        this.emit(':tell', "Vielleicht", "Versuchs doch")
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
    },
    'StelleUnserTeamVorIntent': function () {
        this.emit('StelleTeamVor')
    },
    'StelleTeamIdeeVorIntent': function () {
        this.emit('StelleTeamIdeeVor')
   }, 
    'StelleTeamVor': function () {
       this.emit(':tell', "Das Team das mich die letzten Tage Programmiert hat Nennt sich tork to träck es. besteht aus Winnie Julian Konrad Konstantin Timo und natürlich dem besten Coach von allen Thomas")
    },
     'StelleTeamIdeeVor': function () {
       this.emit(':tell', "das Thema der Idee ist Bestellungen in jeglicher größe zu Orten und Informationen über die Bestellung auf Nachfrage zu geben")
    },
     'WarumBrauchtManUnsIntent': function () {
       this.emit('ManBrauchtUnsFuer')
    },
     'ManBrauchtUnsFuer': function () {
       this.emit(':tell', "Ein Sprachgesteuertes Zuhause Oder ein Sprachgesteuerter Arbeitsplatz bietet viele Vorteile zum Beispiel wenn ein Mechaniker schmutzige Hände hat und dadurch keinen Laptop oder PC nutzen kann Bietet die Sprachsuche den Vorteil Zeit zu sparen und seine  Tastatur zu schonen")
    },
     'WieFunktionierstDuIntent': function () {
        this.emit('IchFunktioniereDurch')
    }, 
    'IchFunktioniereDurch': function () {
        this.emit(':tell', "tork to träck wurde mit Verschieden Technologien gebaut. Hinter mir steht die Amazon Cloud und Node jay es. Node jay es ist eine serverseitige Plattform in der Softwareentwicklung zum Betrieb von Netzwerkanwendungen. Insbesondere lassen sich Webserver damit realisieren. Node jay es wird in der JavaScript-Laufzeitumgebung „V8“ ausgeführt, die ursprünglich für Google Chrome entwickelt wurde, und bietet daher eine ressourcensparende Architektur, die eine besonders große Anzahl gleichzeitig bestehender Netzwerkverbindungen ermöglicht. Alexa ist eine Künstliche Intelligenz auf der letztendlich die app tork to träck läuft.")
    }
};
