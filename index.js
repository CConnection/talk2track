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
        this.emit(':ask', "Ich habe keine Ahnung wo deine Bestellung ist", "Hallo noch da?")
    },
    'SagHalloNutzer' : function () {
        this.emit(':ask', "Moin, frage nach deiner Bestellung", "Hallo noch da?")
    },
    'LieferungWurdeVerzoegert' : function () {
        this.emit(':ask', "Ich weiß nicht warum deine Bestellung verzögert wurde", "Hallo noch da?")
    },
    'WasHabeIchBestellt' : function () {
        this.emit(':ask', "Streng dein eigenes Gehirn an", "Hallo noch da?")
    },
    'KannEsSchneller' : function () {
        this.emit(':ask', "Wie wäre es mit abwarten und Tee trinken", "Hallo noch da?")
    },
    'KriegeIchErstattung' : function() {
        this.emit(':ask', "Vielleicht", "Versuchs doch", "Hallo noch da?")
    },
    'BestesTeam' : function () {
        this.emit(':ask', "Jedes Team, in dem ich nicht zum Einsatz komme, ist es nicht einmal wert, erwähnt zu werden.", "Hallo noch da?")
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
        this.emit(':ask', "Ich weiss nicht wann deine Bestellung kommt", "Hallo noch da?")
    },
    'BestellungGefertigtIn': function () {
        this.emit(':ask', "Sie ist gefertigt", "Hallo noch da?")
    },
    'BestellungVersandbereitIn': function () {
        this.emit(':ask', "Sie ist bereits verschickt", "Hallo noch da?")
    },
    'StelleUnserTeamVorIntent': function () {
        this.emit('StelleTeamVor')
    },
    'StelleTeamIdeeVorIntent': function () {
        this.emit('StelleTeamIdeeVor')
   }, 
    'StelleTeamVor': function () {
       this.emit(':ask', "Das Team das mich die letzten Tage Programmiert hat Nennt sich tork to träck. es besteht aus Winnie Julian Konrad Konstantin Timo und natürlich dem besten Coach von allen Thomas", "Hallo noch da?")
    },
     'StelleTeamIdeeVor': function () {
       this.emit(':ask', "das Thema der Idee ist Bestellungen in jeglicher größe zu Orten und Informationen über die Bestellung auf Nachfrage zu geben", "Hallo noch da?")
    },
     'WarumBrauchtManUnsIntent': function () {
       this.emit('ManBrauchtUnsFuer')
    },
     'ManBrauchtUnsFuer': function () {
       this.emit(':ask', "Ein Sprachgesteuertes Zuhause Oder ein Sprachgesteuerter Arbeitsplatz bietet viele Vorteile zum Beispiel wenn ein Mechaniker schmutzige Hände hat und dadurch keinen Laptop oder PC nutzen kann Bietet die Sprachsuche den Vorteil Zeit zu sparen und seine  Tastatur zu schonen", "Hallo noch da?")
    },
     'WieFunktionierstDuIntent': function () {
        this.emit('IchFunktioniereDurch')
    }, 
    'IchFunktioniereDurch': function () {
        this.emit(':ask', "tork to träck wurde mit Verschieden Technologien gebaut. Hinter mir steht die Amazon Cloud und Node jay es. Node jay es ist eine serverseitige Plattform in der Softwareentwicklung zum Betrieb von Netzwerkanwendungen. Insbesondere lassen sich Webserver damit realisieren. Node jay es wird in der JavaScript-Laufzeitumgebung „V8“ ausgeführt, die ursprünglich für Google Chrome entwickelt wurde, und bietet daher eine ressourcensparende Architektur, die eine besonders große Anzahl gleichzeitig bestehender Netzwerkverbindungen ermöglicht. Alexa ist eine Künstliche Intelligenz auf der letztendlich die app tork to träck läuft.", "Hallo noch da?")
    },
     'DankeIntent': function () {
        this.emit("Danke. Applaus bitte in 3. 2. 1. Jetzt hahahahahaha", "Hallo noch da?")
    },
     'Danke': function () {
        this.emit(':tell', "gerne")
    }
};
