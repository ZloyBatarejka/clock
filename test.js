const hourHand = document.querySelector(".hour");
const mituteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");



function StartClock(){
	const date = new Date();
	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hours = minutes/60 + date.getHours();
	secondHand.style.transform = `rotate(${seconds*6}deg)`;
	mituteHand.style.transform = `rotate(${minutes*6}deg)`
	hourHand.style.transform = `rotate(${hours*30}deg)`
	
}



setInterval(StartClock,1000)
