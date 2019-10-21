console.log('tghtgtgtg')

var horSpeed = $(window).width() * .001
var verSpeed = $(window).height() * .001
var i = 0;

function initializeBok($bok) {
	$bok.leftSpeed = Math.floor((Math.random() * horSpeed) + 1)
	$bok.topSpeed = Math.floor((Math.random() * verSpeed) + 1)
	$bok.leftDir = -1
	$bok.topDir = 1
	return $bok
}


function bounceBok($bok) {	
	var maxLeft = $(window).width() - $bok.width();
	var maxTop = $(window).height() - $bok.height();

	var curTop = parseInt($bok.css('top'));
	var curLeft = parseInt($bok.css('left'));
	var colors = ['#76E8E1', '#87B352', '#CC755E']
	
	leftPos = curLeft + $bok.leftSpeed*$bok.leftDir
	
	if (leftPos > maxLeft || leftPos < 0) {
		
		var curColor = colors[Math.floor(Math.random()*3)]
		
		$bok.css({ "background-color": curColor });
		$bok.leftDir = -$bok.leftDir
		$bok.leftSpeed = Math.floor((Math.random() * horSpeed) + 1)
		if (leftPos > maxLeft) {
			leftPos = maxLeft
		} else {
			leftPos = 0
		}
	} 

	topPos = curTop + $bok.topSpeed*$bok.topDir

	if (topPos > maxTop || topPos < 0) {
		
		var curColor = colors[Math.floor(Math.random()*3) + 1]
		
		$bok.css({ "background-color": curColor });
		$bok.topDir = -$bok.topDir
		$bok.topSpeed = Math.floor((Math.random() * verSpeed) + 1)
		if (topPos > maxTop) {
			topPos = maxTop
		} else {
			topPos = 0
		}
	}
	$bok.css({ left: leftPos, top: topPos });
};

var boks = []
boks.push(initializeBok($('#leek')));
setInterval(function() {bounceBok(boks[0]);}, 4);