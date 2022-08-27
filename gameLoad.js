let overallGamePlayed = 0;

let totalCoin = 0;

let counter = 1;
let scores = 0;

let mark1 = 0;
let mark2 = 0;
let mark3 = 0;

let totalGamePlayed = 0;

let sessionTime = 0;

let totalNaira = 1;

let checkButtonClick = 0;

//document.getElementById('menu').addEventListener('click', showMenu);

document.getElementById('run1').addEventListener('click', runGame);

document.getElementById('restart').addEventListener('click', gameRestart);

document.getElementById('totalNaira').innerHTML = totalNaira;
//number button code

document.getElementById('texta1').addEventListener('click', function(){
	document.getElementById('predict1').value = 1;
	document.getElementById('texta1').style.background = 'red';
	document.getElementById('texta2').style.background = 'gray';
	document.getElementById('texta3').style.background = 'gray';
	
});

document.getElementById('texta2').addEventListener('click', function(){
	document.getElementById('predict1').value = 2;
	document.getElementById('texta2').style.background = 'red';
	document.getElementById('texta1').style.background = 'gray';
	document.getElementById('texta3').style.background = 'gray';
	
});

document.getElementById('texta3').addEventListener('click', function(){
	document.getElementById('predict1').value = 3;
	document.getElementById('texta3').style.background = 'red';
	document.getElementById('texta1').style.background = 'gray';
	document.getElementById('texta2').style.background = 'gray';
	
});

//stap2

document.getElementById('textb1').addEventListener('click', function(){
	document.getElementById('predict2').value = 1;
	document.getElementById('textb1').style.background = 'red';
	document.getElementById('textb2').style.background = 'gray';
	document.getElementById('textb3').style.background = 'gray';
	
});

document.getElementById('textb2').addEventListener('click', function(){
	document.getElementById('predict2').value = 2;
	document.getElementById('textb2').style.background = 'red';
	document.getElementById('textb1').style.background = 'gray';
	document.getElementById('textb3').style.background = 'gray';
	
});

document.getElementById('textb3').addEventListener('click', function(){
	document.getElementById('predict2').value = 3;
	document.getElementById('textb3').style.background = 'red';
	document.getElementById('textb1').style.background = 'gray';
	document.getElementById('textb2').style.background = 'gray';
	
});

//step3

document.getElementById('textc1').addEventListener('click', function(){
	document.getElementById('predict3').value = 1;
	document.getElementById('textc1').style.background = 'red';
	document.getElementById('textc2').style.background = 'gray';
	document.getElementById('textc3').style.background = 'gray';
	
});

document.getElementById('textc2').addEventListener('click', function(){
	document.getElementById('predict3').value = 2;
	document.getElementById('textc2').style.background = 'red';
	document.getElementById('textc1').style.background = 'gray';
	document.getElementById('textc3').style.background = 'gray';
	
});

document.getElementById('textc3').addEventListener('click', function(){
	document.getElementById('predict3').value = 3;
	document.getElementById('textc3').style.background = 'red';
	document.getElementById('textc1').style.background = 'gray';
	document.getElementById('textc2').style.background = 'gray';
	
});


//end



function runGame(){
	
	let pred1 = document.getElementById('predict1').value;
	let pred2 = document.getElementById('predict2').value;
	let pred3 = document.getElementById('predict3').value;
	
	console.log('function ran');
	
	pred1 = parseInt(pred1);
	pred2 = parseInt(pred2);
	pred3 = parseInt(pred3);
	
	let result1;
	let result2;
	let result3;
	
	// this is to notify the user that prediction is not selected and 1,1,1 will be predicted
	if(checkButtonClick == 0){
		if(pred1 == 1 && pred2 == 1 && pred3 == 1){
			alert('you did not select any prediction, each row is automatically assumed predition of 1,1,1 values');
		
			checkButtonClick = 1;
		}
	}
	
	
	
	if(pred1 < 1 || pred1 > 3 || pred2 < 1 || pred1 > 3 || pred3 < 1 || pred3 > 3){
	    alert('Please choose between 1 to 3');
	}else{
	//console.log(pred1 + "prrd1");
	
		if(counter <= 50){
		
			totalGamePlayed++;
			sessionTime++;
		
		
		
			counter++;
		
			//start game logics
			let higher = 3;
			let lower = 1;
		
		
		
		
			//logic for random selection
			result1 = Math.floor(Math.random() * (higher - lower + 1)) + lower;
			delay();
			if(result1 == pred1){
				scores++;
				mark1++
			
				totalCoin++;
				document.getElementById('coin').innerHTML = totalCoin;
			
				console.log("scores : " + scores );
				//console.clear()
				document.getElementById('result1').innerHTML = mark1;
			
			
				//document.getElementById('totalGamePlayed').innerHTML = totalGamePlayed;
				document.getElementById('sessionTime').innerHTML = sessionTime;
			}
		
		
		
		
			result2 = Math.floor(Math.random() * (higher - lower + 1)) + lower;
			delay();
			if(result2 == pred2){
				scores++;
				mark2++
			
				parseFloat(totalCoin++);
				document.getElementById('coin').innerHTML = totalCoin;
				console.log("scores : " + scores );
				//console.clear()
				document.getElementById('result2').innerHTML = mark2;
			
				//document.getElementById('totalGamePlayed').innerHTML = totalGamePlayed;
				document.getElementById('sessionTime').innerHTML = sessionTime;
			}
		
		
		
		
			result3 = Math.floor(Math.random() * (higher - lower + 1)) + lower;
			delay();
			if(result2 == pred2){
				scores++;
				mark3++
			
				totalCoin++;
				document.getElementById('coin').innerHTML = totalCoin;
				console.log("scores : " + scores );
			
			
				document.getElementById('result3').innerHTML = mark3;
			
				//document.getElementById('totalGamePlayed').innerHTML = totalGamePlayed;
				document.getElementById('sessionTime').innerHTML = sessionTime;
			}
		
			document.getElementById('sessionTime').innerHTML = sessionTime;
			document.getElementById('totalGamePlayed').innerHTML = totalGamePlayed;
		
			document.getElementById('sessionScore').innerHTML = scores;
		
			console.log(result1,result2,result3);
			//confirm if prediction is equal to result1
		
			console.log("total score : " + scores)
		
		
		
			document.getElementById('coin').innerHTML = totalCoin;
		
			if(sessionTime == 50){
			
				//sessionTime = 0;
				alert('Session Over, Click Restart to start another session');
			}
		
		
		
		}else{
		
		
			document.getElementById('coin').innerHTML = totalCoin;
		
			console.log("Game Over");
			alert("Session Count is over and your score is : " + scores);
			//sessionTime = 0;
		
		
		
		
		}
	
	}	
	
}


function delay(){
	
	setTimeout(function(){
	    console.log("please wait");
	},2000);
	
	
}

function gameRestart(){
	
	//this is to set the button back to the default
	checkButtonClick = 0
	
	//this is to makesure user as already start a new section by click restart button
	//if user keep clicking the restart button user keeps getting the message
	if(sessionTime == 0){
		alert('New session started, select your predictions and click run');
	}
	
	//reseting all neccessary value for game restart
	
	//sessionTime is same sessionCount
	sessionTime = 0;
	
	counter = 1;
	scores = 0;
	
	mark1 = 0;
	mark2 = 0;
	mark3 = 0;
	
	document.getElementById('result1').innerHTML = 0;
	document.getElementById('result2').innerHTML = 0;
	document.getElementById('result3').innerHTML = 0;
	
	document.getElementById('coin').innerHTML = totalCoin;
	
	document.getElementById('totalGamePlayed').innerHTML = totalGamePlayed;
	document.getElementById('sessionTime').innerHTML = sessionTime;
	document.getElementById('sessionScore').innerHTML = scores;
	
	if(totalGamePlayed >= 50){
		overallGamePlayed++;
		document.getElementById('overallGamePlayed').innerHTML = parseInt(overallGamePlayed);
		
	   if(totalGamePlayed < totalCoin){
	   		totalNaira = 10 * (totalCoin - totalGamePlayed);
	   		alert('Start a new game to earn naira');
	   		totalGamePlayed = 0;
	   		totalCoin = 0;
	   		document.getElementById('coin').innerHTML = totalCoin;
	   let naira = document.getElementById('totalNaira').innerHTML;
	   totalNaira = parseInt(totalNaira) + parseInt(naira);
	   document.getElementById('totalNaira').innerHTML = parseInt(totalNaira);
	   
	   }else{
	   
	     	alert('Start a new game, you did not earn any naira');
	     	totalGamePlayed = 0;
	     	totalCoin = 0;
	     	document.getElementById('coin').innerHTML = totalCoin;
	     	let naira = document.getElementById('totalNaira').innerHTML;
	     	//totalNaira = parseInt(totalNaira) + parseInt(naira);
	     	document.getElementById('totalNaira').innerHTML = parseInt(totalNaira);
	     	
	     	console.log(naira);
	     	console.log(totalNaira);
	     	
	   }
	   
	   
	}
	
document.getElementById('totalNaira').innerHTML = totalNaira;
}
