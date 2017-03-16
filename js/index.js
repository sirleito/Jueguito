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
	  	var quintoId = this.nombre + "5";
	  	var vidaValor = this.vida;
	  	div2.appendChild(this.imagen);
	  	div2.innerHTML = div2.innerHTML + "<p id=" + segundoId +">Vida:" + vidaValor + "</p><p>Especial</p><div class='especial' id="+ tercerId + "></div><button value=" + this.nombre + " class='boton'>¡Atacar!</button>"
	  	datos.push(this.vida);
	  	datos.push(this.fuerza);
	  	datos.push(this.rabia);
	  	datos.push(this.especial)
	  	for (var i = rabia; i > 0; i--) {
	  		var rabiaId = document.getElementById(tercerId);
	  		rabiaId.innerHTML = rabiaId.innerHTML + "<div class='rabia " + quintoId + "'></div>";
	  	};
	  };
	};

	//Los personajes*//

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

	var datos = [];


//Comienzo

	function funcStart() {
		start.style.display = "none"
		for(var p of personajes){
			p.mostrar()	
		}
		eleccion();
	}

	var start = document.getElementById("start");

	start.onclick = function(){
		funcStart()
	}

//Eleccion de los personajes

	var gladiador;
	var guerrero;
	var asesina;
	var heroeElegido;
	var contadorMalos = 0;
	var divMalo;
	var divBueno
	var maloElegido
	var maloRabia

	function seleccionMalo(){

		malos[contadorMalos].combate()			
		maloElegido = malos[contadorMalos]
		maloRabia = maloElegido.nombre + "5"
		divMalo = document.getElementById(maloElegido.nombre)
	}
	function seleccion(e){

			div.innerHTML = ""
			e.combate()
			heroeElegido = e;
			heroeRabia = e.nombre + "5"
			divBueno = document.getElementById(heroeElegido.nombre)
			seleccionMalo()
			ataque();
		};
	function eleccion(){
		
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

//Ataques de los personajes

	var maloRabia;
	var heroeRabia;
	var contadorRabia = 0;
	var contadorRabiaMala = 0;
	var rabiaMala

	function ataque(){
		var perBueno = document.getElementsByClassName("boton")[0];
		var perMalo = document.getElementsByClassName("boton")[1];
		var nombreMalo = perMalo.value;
		var vidaMaloId = nombreMalo + "2";
		var vidaMalo = document.getElementById(vidaMaloId);
		var nombreBueno = perBueno.value;
		var vidaBuenoId = nombreBueno + "2";
		var vidaBueno = document.getElementById(vidaBuenoId);
		perMalo.className += " none"

		perBueno.onclick = function(){
			var cantRabia = document.getElementsByClassName(heroeRabia).length
			var rabiaHeroe = document.getElementsByClassName(heroeRabia)[contadorRabia]
			var cantRabiaMala = document.getElementsByClassName(maloRabia).length
			var rabiaMala = document.getElementsByClassName(maloRabia)[contadorRabiaMala]
			
			
			rabiaBueno();
			rabiaMalo();

			setTimeout(function(){fondoRojo(divMalo)}, 200)
			setTimeout(function(){fondoRojo(document.getElementById(heroeElegido.nombre))}, 400)

			function fondoRojo(a){
					a.className = "fondoRojo"
					setTimeout(function(){
					a.className = ""
				}, 200)

			};
				
				//funcion para el funcionamiento de la rabia
			
			function rabiaBueno(){
				if ( cantRabia > contadorRabia){
					rabiaHeroe.style.background = "green"
					rabiaHeroe.style.border = "solid 1px green"
					contadorRabia ++
					datos[4] = datos[4] - datos[1];
				}else{
					dañoRabia = datos[1] * 2

					alert("¡Ataque especial de tu personaje! " + datos[3] + " daño: " + dañoRabia)
					contadorRabia = 0
					datos[4] = datos[4] - dañoRabia

					for (var i = 0; i < cantRabia; i++) {
						var rabiaRoja = document.getElementsByClassName(heroeRabia)[i]
						rabiaRoja.style.background = "#f44336"
						rabiaRoja.style.border = "solid 1px #ef5350"
					}
				};
				vidaMalo.innerHTML = "Vida: " + datos[4];
				
				//divMalo.style.background = "#f44336"
				//setTimeout(function(){
				//	divMalo.style.background = ""
				//}, 300)
				//console.log(divMalo)
				
			}

			function rabiaMalo(){
				if ( cantRabiaMala > contadorRabiaMala){
					rabiaMala.style.background = "green"
					rabiaMala.style.border = "solid 1px green"
					contadorRabiaMala ++
					datos[0] = datos[0] - datos[5];
				}else{
					dañoRabiaMala = datos[5] * 2

					alert("¡Ataque especial de tu enemigo! " + datos[7] + " daño: " + dañoRabiaMala)
					contadorRabiaMala = 0
					datos[0] = datos[0] - dañoRabiaMala

					for (var i = 0; i < cantRabiaMala; i++) {

						var rabiaRojaMala = document.getElementsByClassName(maloRabia)[i]
						rabiaRojaMala.style.background = "#f44336"
						rabiaRojaMala.style.border = "solid 1px #ef5350"
					}
					
				};
				vidaBueno.innerHTML = "Vida: " + datos[0];
				
			}

			
			
			victoriaDerrota();

			
		};
	};

		//Cuando ya termino la batalla*//


	function victoriaDerrota(){


			if (datos[0] <= "0") {
				div.innerHTML = "<h2 class='resultado'>¡Perdiste, idiota!</h2>"
			}
			if (datos[4] <= "0" && contadorMalos <= 2) {
				div.innerHTML = "<h2 class='resultado'>¡Enemigo derrotado!</h2><button id='continuar' class='continuar'>Continuar con la masacre</button>"
		 		contadorMalos ++

		 		
				var continuar = document.getElementById("continuar");
				continuar.onclick = function(){
				contadorRabia = 0
		 		contadorRabiaMala = 0
				div.innerHTML = ""
				datos = []
				heroeElegido.combate();
				seleccionMalo()
				ataque();	
				} 
			if (datos[4] <= "0" && contadorMalos == 3){
				div.innerHTML = "<h1 class='puto'>Sos el puto amo</h1>"
				}

			};
	};
});

