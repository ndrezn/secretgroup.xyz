var leftSpeed = (Math.random() * 4) + 1
var topSpeed = (Math.random() * 4) + 1
var leftDir = 1
var topDir = 1


function moveDiv() {
	var $bok = $("#bokchoy");

	var curTop = parseInt($bok.css('top'));
	var curLeft = parseInt($bok.css('left'));
	
	var maxLeft = $(window).width() - $bok.width();
	var maxTop = $(window).height() - $bok.height();
	var minLeft = $bok.width()
	var minTop = $bok.height()

	leftPos = curLeft + leftSpeed*leftDir
	
	if (leftPos > maxLeft || leftPos < minLeft) {
		leftDir = -leftDir
		leftSpeed = Math.floor((Math.random() * 4) + 1)
		if (leftPos > maxLeft) {
			leftPos = maxLeft
		} else {
			leftPos = minLeft
		}
	} 

	topPos = curTop + topSpeed*topDir

	if (topPos > maxTop || topPos < minTop) {
		topDir = -topDir
		topSpeed = Math.floor((Math.random() * 4) + 1)
		if (topPos > maxTop) {
			topPos = maxTop
		} else {
			topPos = minTop
		}
	} 
   

	 
	$bok.css({ left: leftPos, top: topPos });
};

moveDiv();
setInterval(moveDiv, 1);