function randomRedirect(curPage){
	var redirects = ['secrets/remain', 'secrets/connection', 'secrets/change', 'secrets/walk', 'secrets/orange', 'secrets/save']
	var curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	while (curDirect == curPage){
		curDirect = redirects[Math.floor(Math.random()*redirects.length)]
	}
	
	location.href = curDirect
}