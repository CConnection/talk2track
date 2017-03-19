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
       this.emit(':ask', "Das Team, das mich die letzten Tage programmiert hat, nennt sich tork to träck. Es besteht aus den Mitgliedern Winnie, Julian, Konrad, Konstantin, Timo und natürlich dem besten Coach von allen, Thomas.", "Hallo noch da?")
    },
     'StelleTeamIdeeVor': function () {
       this.emit(':ask', "Unsere Idee war es, auf Nachfrage Informationen über Bestellungen in jeglicher Form auf eine effiziente Weise zu übermitteln.", "Hallo noch da?")
    },
     'WarumBrauchtManUnsIntent': function () {
       this.emit('ManBrauchtUnsFuer')
    },
     'ManBrauchtUnsFuer': function () {
       this.emit(':ask', "Ein sprachgesteuertes Zuhause oder sprachgesteuerte Arbeitsplätze bieten viele Vorteile. Wenn beispielsweise ein Mechaniker gerade schmutzige Hände hat, kann man mithilfe der Sprachsuche die Tastatur zu schonen und dabei auch noch Zeit zu sparen.", "Hallo noch da?")
    },
     'WieFunktionierstDuIntent': function () {
        this.emit('IchFunktioniereDurch')
    }, 
    'IchFunktioniereDurch': function () {
        this.emit(':ask', "Tork to träck wurde mit verschieden Technologien gebaut. Hinter mir steht Node jay es. Es ist eine serverseitige Plattform, in der Softwareentwicklung zum Betrieb von Netzwerkanwendungen genutzt wird. Besonders gut lassen sich damit Webserver realisieren. Node jay es wird in der JavaScript-Laufzeitumgebung „V8“ ausgeführt, die ursprünglich für Google Chrome entwickelt wurde. Daher bietet es eine ressourcensparende Architektur, die eine besonders große Anzahl gleichzeitig bestehender Netzwerkverbindungen ermöglicht. Alexa ist eine Künstliche Intelligenz in der Amazon Cloud, auf der letztendlich die App tork to träck läuft.", "Hallo noch da?")
    },
     'DankeIntent': function () {
        this.emit('Danke')
    },
     'Danke': function () {
        this.emit(':tell', "gerne. Applaus bitte in drei. zwei. eins. Jetzt hahahahahahaha", "Hallo noch da?")
    }
};
