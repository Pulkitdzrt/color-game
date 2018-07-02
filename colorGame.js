var numsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();

function init()
{
	setupmodebuttons();
	setupsquares();
	reset();
}

function setupmodebuttons()
{
	for(var i=0; i < modebuttons.length; i++)
{
	modebuttons[i].addEventListener("click", function()
	{
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numsquares=3 : numsquares=6;
		reset();
	})
}

}
function reset()
{
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetbutton.textContent = "new colors";
	message.textContent = "";
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
			squares[i].style.display = "none";
		
	}
	h1.style.background = "#232323";

}


resetbutton.addEventListener("click", function()
{
	reset();
})


function setupsquares(){
	for(var i=0; i<squares.length; i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function()
	{	
		var clickedColor = this.style.background;
		if( clickedColor === pickedColor)
		{
			message.textContent = "CORRECT";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetbutton.textContent = "PLAY AGAIN..!!";
		}
		else
		{
			message.textContent = "OOPS..!! TRY AGAIN";
			this.style.background = "#232323";
		}

	})
}
}

function changeColors(color)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = color; 
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * numsquares);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i=0; i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}









