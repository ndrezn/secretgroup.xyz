var $bok = $("#bokchoy");

var horSpeed = $(window).width() * .002
var verSpeed = $(window).height() * .002

var leftSpeed = (Math.random() * horSpeed) + 1
var topSpeed = (Math.random() * verSpeed) + 1
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
		leftSpeed = (Math.random() * horSpeed) + 1
		if (leftPos > maxLeft) {
			leftPos = maxLeft
		} else {
			leftPos = 0
		}
	} 

	topPos = curTop + topSpeed*topDir

	if (topPos > maxTop || topPos < 0) {
		topDir = -topDir
		topSpeed = (Math.random() * verSpeed) + 1
		if (topPos > maxTop) {
			topPos = maxTop
		} else {
			topPos = 0
		}
	} 
   

	 
	$bok.css({ left: leftPos, top: topPos });
};

bounceBok();
setInterval(bounceBok, 1);