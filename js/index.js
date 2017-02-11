document.addEventListener('DOMContentLoaded',function(){
	class heroes{
		constructor(n, f, v, i, e, r){
			this.nombre = n;
			this.fuerza = f;
			this.vida = v;
			this.imagen = new Image();
			this.imagen.src = i;
			this.imagen.className = "imagen"
			this.especial = e
			this.rabia = r
		}
		hablar(){
			alert(this.nombre)
		}
		mostrar(){
	  	var identificador = this.nombre
	  	div.innerHTML = div.innerHTML + '<div id=' + identificador + ' class="personaje"></div>'
	  	var div2 = document.getElementById(identificador);
	  	div2.appendChild(this.imagen);
	  	div2.innerHTML = div2.innerHTML + '<h3>' + this.nombre + '</h3></br>' + '<p>Vida: ' + this.vida + '</p>' + '<p>Fuerza: ' + this.fuerza + '</p>' + '<p>Especial: ' + this.especial + '</p>'+ '<p>Rabia: ' + this.rabia + '</p>'
	   	gladiador = document.getElementById("Gladiador");
		guerrero = document.getElementById("Guerrero");
		asesina = document.getElementById("Asesina");
	  }
	  combate(){
	  	div.innerHTML = div.innerHTML + "<div id=" + this.nombre + "></div>"
	  	var div2 = document.getElementById(this.nombre)
	  	var rabia = this.rabia
	  	var segundoId = this.nombre + "2";
	  	var tercerId = this.nombre + "3";
	  	var cuartoId = this.nombre + "4";

	  	var vidaValor = this.vida;
	  	div2.appendChild(this.imagen);
	  	div2.innerHTML = div2.innerHTML + "<p id=" + segundoId +">Vida:" + vidaValor + "</p><p>Especial</p><div class='especial' id="+ tercerId + "></div><button value=" + this.nombre + " class='boton'>¡Atacar!</button>"
	  	
	  	for (var i = rabia; i > 0; i--) {
	  		var rabiaId = document.getElementById(tercerId);
	  		rabiaId.innerHTML = rabiaId.innerHTML + "<div class='rabia'></div>";
	  	};
	  	
	
	  };
	};
	var div = document.getElementById('div');
	var clasePersonajes = document.getElementsByClassName("personaje")
	
	var personajes = [];
	personajes.push(new heroes("Gladiador", 50, 1000, "img/hombre.png", "Puñote", 7));
	personajes.push(new heroes("Guerrero", 100, 500, "img/gato.png", "Ejecucion", 6));
	personajes.push(new heroes("Asesina", 75, 750, "img/mujer.png", "Degradación", 4));

	var malos = [];
	malos.push(new heroes("Zombie", 10, 500, "img/zombie.png", "Poder", 5));
	malos.push(new heroes("Alien", 20, 600, "img/alien.png", "Poder", 5));
	malos.push(new heroes("Bruja", 30, 1000, "img/bruja.png", "Poder", 4));


	var start = document.getElementById("start");
	start.onclick = function() {
		start.style.display = "none"
		for(var p of personajes){
			p.mostrar()	
		}
		eleccion();
	}
var gladiador;
var guerrero;
var asesina;
var heroeElegido
	function eleccion(){
		function seleccion(e){
			div.innerHTML = ""
			e.combate()
			malos[0].combate()
			ataque();
			heroeElegido = e;
		};
		gladiador.onclick = function(){
			seleccion(personajes[0])
		};
		guerrero.onclick = function(){
			seleccion(personajes[1])
		};
		asesina.onclick = function(){
			seleccion(personajes[2])
		};
	}
	
	function ataque(){
		var perBueno = document.getElementsByClassName("boton")[0];
		var perMalo = document.getElementsByClassName("boton")[1];

		perBueno.onclick = function(){
			var nombreBueno = perBueno.nombre;
			var vidaBueno = nombreBueno + "2"

			console.log(vidaBueno.innerHTML)
		};
		perMalo.onclick = function(){
		};
	};
});

