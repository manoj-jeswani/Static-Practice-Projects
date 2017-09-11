var gotuname="";
		function send_msg(message)
		{

			var prevcontent=$("#container").html();



			if(prevcontent.length>9)
				prevcontent+="<br>";	
			//making bot more natural by doing that the 
			//reply of bot doesn't come instantly but after a short pause
			//this is done by each time simply instantly displaying 
			//the prev content and also the current msg but then 
			//instantly hiding current msg so it does not appear 
			//on screen and then after a delay of 500 ms it is 
			//displayed on screen 
			//this is done by enclosing current msg in class and performing actions by pointing to that class 
			$("#container").html(prevcontent+"<span class='currentmsg'>"+"<span class='bot'>ChatBot: </span>"+message+"</span>");
			$(".currentmsg").hide();
			$(".currentmsg").delay(500).fadeIn();
			$(".currentmsg").removeClass("currentmsg");
			//remove class is used to remove 'currentmsg' class 
			//association with the msg since the msg is no longer current as it has already been sent
			//if we don't remove class then 'currentmsg' class 
			//always remains asssociated with all the msgs sent by 
			//chat bot till now and all get hidden and fade in each time
			//which is not required 
					
	

		}



		function get_username()
		{
			send_msg("Hello, What is your name?");
		}

		function ai(message)
		{
			if(gotuname.length<3)
			{
				gotuname=message;
				send_msg("Nice to meet you "+gotuname+", how are you doing?");
			}

			if(message.indexOf("how are you")>=0)
				send_msg("Thanks, I am good.");

			if(message.indexOf("time")>=0)
				{	var date= new Date();
					var h=date.getHours();
					var m=date.getMinutes();
					send_msg("Current time is: "+h+":"+m);
				}


		}


		$(function()
		{
			get_username();
			$("#textbox").keypress(function(event){
			if(event.which==13) /*key code of enter key is 13*/
			{
				if($("#esend").prop("checked")) /*checking if checkbox is checked*/
				{
					

					$("#send").click();
					event.preventDefault();  /*if checkbox is checked then it has to send message if enter key pressed then that enter key should not create new line in the message so to prevent new line creation we do*/
					}
				}



			});


		$("#send").click(function()
		{

			var username="<span class='uname'>You: </span>"	
			newmsg=$("#textbox").val()
			$("#textbox").val("");	
		

			var prevcontent=$("#container").html();
			/*prevcontent contains the value previously present in container just before our latest message goes into it*/



			//	console.log(prevcontent.length);
			/*
			9 is the length of blank content present in container at the very beginning of the chat
			*/


			/*this below condition helps us to prevent new line being added at very first start of the chat
			*/ 
			if(prevcontent.length>9)
				prevcontent+="<br>";	
			//so if previous content length > 9, i.e it is some valueable chat msg then only add a new line after it

			$("#container").html(prevcontent+username+newmsg);/*
			above one helps us to append msgs in container one after the other thus preventing them from getting overwritten
			*/


			/*this below statement is used so that whenever a new message is sent by a user the scroll bar automatically scrolls so as to show up the latest messages in the container
			*/
			/*
			scrollTop requires current container content's height/scrollHeight as argument*/ 
			$("#container").scrollTop($("#container").prop("scrollHeight"));
			ai(newmsg);

		});	
 



		});
		