function randomRedirect(curPage){
	var redirects = ['remain', 'connection', 'change', 'walk', 'orange', 'save']
	var curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	while (curDirect == curPage){
		curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	}
	
	location.href = curDirect
}