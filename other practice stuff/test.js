$(function(){

				var lf;
				var tp;
				var canvas = document.getElementById("myCanvas");
				var ctx = canvas.getContext("2d");

				var x=canvas.width/2;
				var y=canvas.height-30;
				var ballRadius=10;
				var a=x;
				var b=y;
				var c=x;
				var d=y;
				var e=x;
				var f=y;

				var dx=2;
				var dy=-2;
				var ballColor="yellow";
				var paddleHeight = 10;
				var paddleWidth = 75;
				var paddleX = (canvas.width-paddleWidth)/2;

				//by the above line starting x coordinate of paddle is set such that now always paddle will be formed in the mid of canvas whatever may be the width of canvas or width of paddle

				var leftPressed=false;
				var rightPressed=false;
				var brickRowCount=5;

				var brickColumnCount=9;
				var brickWidth=75;
				var brickHeight=20;
				var brickPadding=10;
				var brickOffsetTop=30;
				var brickOffsetLeft=30;
				var bricks=[];
				var score=0;
				var lives=3;
				var r1=Math.floor(Math.random()*10)%brickRowCount;
				var c1=Math.floor(Math.random()*10)%brickColumnCount;
				var r2=Math.floor(Math.random()*10)%brickRowCount;
				var c2=Math.floor(Math.random()*10)%brickColumnCount;
				var r3=Math.floor(Math.random()*10)%brickRowCount;
				var c3=Math.floor(Math.random()*10)%brickColumnCount;
				var r4=Math.floor(Math.random()*10)%brickRowCount;
				var c4=Math.floor(Math.random()*10)%brickColumnCount;
				var r5=Math.floor(Math.random()*10)%brickRowCount;
				var c5=Math.floor(Math.random()*10)%brickColumnCount;
				var r6=Math.floor(Math.random()*10)%brickRowCount;
				var c6=Math.floor(Math.random()*10)%brickColumnCount;
				//var r7=Math.floor(Math.random()*10)%brickRowCount;
				var r7=brickRowCount-1;
				var c7=Math.floor(Math.random()*10)%brickColumnCount;

				function getOffset(obj) 
						{
							
							  var offsetLeft = 0;
							  var offsetTop = 0;
							  do {
							   	 if (!isNaN(obj.offsetLeft)) {
							  	    offsetLeft += obj.offsetLeft;
							  	  }
							  	 if (!isNaN(obj.offsetTop)) {
							  	    offsetTop += obj.offsetTop;
							  	  }   
							  } while(obj = obj.offsetParent );
							 return {left: offsetLeft, top: offsetTop};
						}   
 
/*
				 function init() 
				 	{*/
					//var  tcanvas = document.getElementById("touchCanvas");
						canvas.addEventListener("touchstart", touch, false);
						var obj=getOffset(canvas);
						lf=obj.left;
						tp=obj.top;

						canvas.addEventListener("touchmove", touch, false);	
    				//}

    			    function touch() 
    			    		{
								    var relativeX=event.touches[0].pageX+canvas.width/4-lf;  //relativeX is the touch position
								   /* if(relativeX-paddleWidth/2>=0 && relativeX+paddleWidth/2<=canvas.width)
									{*/
										paddleX=relativeX-paddleWidth/2;

									//}       
						           event.preventDefault();

 						   }		
				function drawPaddle() 
				{
				    ctx.beginPath();
				    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
				    ctx.fillStyle = "orange";
				    ctx.fill();
				    ctx.closePath();
				}

				function draw()
				{
					ctx.clearRect(0,0,canvas.width,canvas.height);
					//the above cmd clears the content of given rectangle :: here its the canvas 

					drawPaddle();
					
				
							requestAnimationFrame(draw);
						
				}
				draw();

})	;	