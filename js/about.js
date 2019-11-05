function randomRedirect(curPage){
	var redirects = ['remain.html', 'connection.html', 'change.html', 'walk.html', 'orange.html', 'save.html']
	var curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	while (curDirect == curPage){
		curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	}
	
	location.href = curDirect
}