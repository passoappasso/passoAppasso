import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';
import { nearer } from 'q';

var punteggio = 0;


var app = new Framework7({
  root: '#app', // App root element

  name: 'PON', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

var demoGauge = app.gauge.create({
  el: '.demo-gauge',
  type: 'circle',
  value: punteggio, // barra esterna che aumenterebbe con i punti di interesse
  size: 250,
  borderWidth: 10,
  valueText: punteggio*100+"%", // valore del testo
  valueFontSize: 41,
  valueTextColor: '#2196f3',
  labelText: 'percentuale',
});

$$('.open-alert').on('click', function () {
  app.dialog.alert('Hello');
});

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function banana(name) {
  var x = readCookie(name);
  if(x){
    punteggio = 0.3;
    console.log(punteggio);
  }
}

$$('.button').on('click', function () {
  var value = $$(this).attr('data-value');
  var colore;

  if(value <= 60){
    document.getElementById("prova1").style.display = "flex";
    document.getElementById("prova2").style.display = "flex";
    document.getElementById("prova3").style.display = "flex";
    document.getElementById("prova4").style.display = "none";

    if(value <= 35){
      document.getElementById("prova1").style.display = "flex";
      document.getElementById("prova2").style.display = "flex";
      document.getElementById("prova3").style.display = "none";
      document.getElementById("prova4").style.display = "none";
      if(value <= 10 || value == 0){
        document.getElementById("prova1").style.display = "flex";
        document.getElementById("prova2").style.display = "none";
        document.getElementById("prova3").style.display = "none";
        document.getElementById("prova4").style.display = "none";
      }
    }
  }else{
    document.getElementById("prova1").style.display = "flex";
    document.getElementById("prova2").style.display = "flex";
    document.getElementById("prova3").style.display = "flex";
    document.getElementById("prova4").style.display = "flex";
  }

  if(value < 50){
    colore = "#DC143C";
  }else{
    colore = "#00FA9A";
  }
  demoGauge.update({
    value: value / 100,
    borderColor: colore,
    valueText: value + '%'
  });
});
