function showTime() { 
	var date = new Date(); 
	var h = date.getHours(); 
	var m = date.getMinutes(); 
	var s = date.getSeconds(); 

	var time = h + ":" + m + ":" + s; 
	document.getElementById("ClockDisplay").innerText = time; 
	document.getElementById("ClockDisplay").textContent = time; 
} 
setInterval(showTime, 1000);

