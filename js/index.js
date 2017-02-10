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
	  	div.innerHTML = div.innerHTML + '<div id="personaje" class="personaje"></div>'
	  	var div2 = document.getElementById('personaje')
	  	div2.appendChild(this.imagen);
	  	div2.innerHTML = div2.innerHTML + '<h3>' + this.nombre + '</h3></br>' + '<p>Vida: ' + this.vida + '</p>' + '<p>Fuerza: ' + this.fuerza + '</p>' + '<p>Especial: ' + this.especial + '</p>'+ '<p>Rabia: ' + this.rabia + '</p>'
	    document.getElementById("personaje").id = identificador
	   	gladiador = document.getElementById("Gladiador");
		guerrero = document.getElementById("Guerrero");
		asesina = document.getElementById("Asesina");
	  }
	};
	var div = document.getElementById('div');
	var clasePersonajes = document.getElementsByClassName("personaje")
	
	var personajes = [];
	personajes.push(new heroes("Gladiador", 50, 1000, "img/hombre.png", "Puñote", 7));
	personajes.push(new heroes("Guerrero", 100, 500, "img/gato.png", "Ejecucion", 6));
	personajes.push(new heroes("Asesina", 75, 750, "img/mujer.png", "Degradación", 4));
	console.log(personajes[0])

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
	function eleccion(){
		function seleccion(e){
			div.innerHTML = ""
			e.mostrar()
		}
		gladiador.onclick = function(){
			seleccion(personajes[0])
		}
		guerrero.onclick = function(){
			seleccion(personajes[1])
		}
		asesina.onclick = function(){
			seleccion(personajes[2])
		}
	}
	
});

