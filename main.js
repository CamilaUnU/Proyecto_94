var canvas = new fabric.Canvas('myCanvas');
// Crea la variable del lienzo

//Establece las posiciones iniciales para las imágenes de la pelota y el hoyo.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
		});
	new_image();
	}
	// escribe código para cargar la imagen del golf en el lienzo
	

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj =Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
		});
	// escribe código para cargar la imagen de la pelota en el lienzo

	
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y el hoyo para finalizar el juego. 
	Y las coordenadas del id coordinates coinciden, entonces elimina la pelota.  
	muestra "¡FIN DEL JUEGO!" 
	y haz el borde del lienzo "rojo".*/

	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
    }

    document.getElementById("hd3").innerHTML="¡Metistela pelota!";
    document.getElementById("myCanvas").style.borderColor="red";
		
	function up()
	{
		if(ball_y >=0)
		{
			ball_y = ball_y - block_image_height;
			console.log("altura de la imagen =" + block_image_height);
			console.log("Cuando se presiona la flecha hacia abajo, X = " + ball_x + " , Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image()
		}
		// Escribe código para mover la pelota hacia arriba
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura de la imagen =" + block_image_height);
			console.log("Cuando se presiona la flecha hacia abajo, X = " + ball_x + " , Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image()
		}
		 // Escribe código para mover la pelota hacia abajo.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("ancho de la imagen =" + block_image_width);
			console.log("Cuando se presiona la flecha izquierda, X = " + ball_x + " , Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image();

			// Escribe código para mover la pelota a la izquierda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("ancho de la imagen =" + block_image_width);
			console.log("Cuando se presiona la flecha derecha, X = " + ball_x + " , Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image();

			// Escribe código para mover la pelota a la derecha.
		}
	}
	
}

