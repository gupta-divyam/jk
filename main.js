canvas=document.getElementById("myCanvas")

carX=5;
carY=225;
ctx= canvas.getContext("2d")
valurspeed= 10
function add() {
	background_ing_tag= new Image()
	background_ing_tag.onload= uploadBackground;
	background_ing_tag.src="parkingLot.jpg"
	
	car_ing_tag= new Image()
	car_ing_tag.onload= uploadgreencar;
	car_ing_tag.src="car2.png"
}

function uploadBackground() {
	ctx.drawImage(background_ing_tag,0,0,canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(car_ing_tag,carX,carY,75,180)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carY >= 0){
        carY= carY - valurspeed; 
        uploadBackground();
        uploadgreencar();
      }
}

function down()
{
	if(carY <= canvas.height-100){
        carY= carY + valurspeed; 
        uploadBackground();
        uploadgreencar();
      }
}

function left()
{
	if(carX >= 0){
        carX= carX - valurspeed; 
        uploadBackground();
        uploadgreencar();
      }
}

function right()
{
	if(carX <= canvas.width-100){
        carX= carX + valurspeed; 
        uploadBackground();
        uploadgreencar();
      }
}
