/* 
 Function utils_getFullScreenheight
 返回当前屏幕浏览器整屏的高度
*/
function utils_getFullScreenheight() {
	return window.innerHeight
}

/* 
 Function utils_loadScript
 动态加载js
*/
function utils_loadScript(url, async, callback){
　　var script=document.createElement('script');
　　　　script.type='text/javascript';
　　　　script.async=async;
　　　　script.src=url;
　　　　document.body.appendChild(script);
　　　　if(script.readyState){   //IE
　　　　　　script.onreadystatechange=function(){
　　　　　　　　if(script.readyState=='complete'||script.readyState=='loaded'){
　　　　　　　　　　script.onreadystatechange=null;
				if(callback && typeof callback === 'function'){
					callback();
				}
　　　　　　　　}
　　　　　　}
　　　　}else{    //非IE
　　　　　	script.onload=function(){
				if(callback && typeof callback === 'function'){
					callback();
				}
			}
　　　　}
}