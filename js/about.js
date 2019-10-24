function randomRedirect(curPage){
	var redirects = ['remain.html', 'about.html']
	var curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	while (curDirect == curPage){
		curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	}
	
	location.href = curDirect
}