var $bok = $("#bokchoy");

var leftSpeed = (Math.random() * 4) + 1
var topSpeed = (Math.random() * 4) + 1
var leftDir = 1
var topDir = 1


function bounceBok() {
	var maxLeft = $(window).width() - $bok.width();
	var maxTop = $(window).height() - $bok.height();

	var curTop = parseInt($bok.css('top'));
	var curLeft = parseInt($bok.css('left'));

	leftPos = curLeft + leftSpeed*leftDir
	
	if (leftPos > maxLeft || leftPos < 0) {
		leftDir = -leftDir
		leftSpeed = (Math.random() * 4) + 1
		if (leftPos > maxLeft) {
			leftPos = maxLeft
		} else {
			leftPos = minLeft
		}
	} 

	topPos = curTop + topSpeed*topDir

	if (topPos > maxTop || topPos < 0) {
		topDir = -topDir
		topSpeed = (Math.random() * 4) + 1
		if (topPos > maxTop) {
			topPos = maxTop
		} else {
			topPos = minTop
		}
	} 
   

	 
	$bok.css({ left: leftPos, top: topPos });
};

bounceBok();
setInterval(bounceBok, 1);