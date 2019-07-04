function init(){
	// btnsEvent
	for(var i = 0; i < btns.length; i++){
		btns[i].onclick = btnsEvent(i)
	}
	// windowEvent
	windowEvent()
}
function baseEvent(folder, picNum){
	var num = 0
	var animaSrc = 'Animations/'
	if(window.timer){
		clearInterval(window.timer)
	}
	window.timer = setInterval(function(){
		num++
		if(num < 10){
			cat.src = animaSrc + folder + '/' + folder + '_0' + num + '.jpg'
		}else if(num == picNum+1){
			clearInterval(window.timer)
		}else{
			cat.src = animaSrc + folder + '/' + folder + '_' + num + '.jpg'
		}
	}, 80)
}
function windowEvent(){
	var w = document.body.offsetWidth
	var h = document.body.offsetHeight
	// 位置坐标
	var head = [0.23, 0.20, 0.77, 0.50]  
	var footRight = [0.35, 0.9, 0.48, 0.96]
	var footLeft = [0.5, 0.9, 0.63, 0.96]
	var stomach = [0.35, 0.65, 0.65, 0.87]
	// hitPicSrc: [area, picNum]
	var obj = {
		'knockout': [head, 80], 
		'footLeft': [footLeft, 29],
		'footRight': [footRight, 29],
		'stomach': [stomach, 33]
	}
	window.onclick = function(event){
		var x = event.x / w
		var y = event.y / h
		var hitPicInfo = judgeArea(x, y)
		if(hitPicInfo){
			hitEvent(hitPicInfo[0], hitPicInfo[1])
		}
	}
	function judgeArea(x, y){
		function isInArea(arr){
			return (x > arr[0] && x < arr[2] && y > arr[1] && y < arr[3])	
		}
		for(var item in obj){
			if(isInArea(obj[item][0])){
				// return [hitPicSrc, picNum]
				return [item, obj[item][1]]
			}
		}
	}
}
function btnsEvent(i){
	var animaSrc = 'Animations/'
	var btnPicNum = [12, 80, 39, 27, 23, 55]
	return function(){
		var btnPicSrc = this.id
		baseEvent(btnPicSrc, btnPicNum[i])
	}
}
function hitEvent(hitSrc, picNum){
	baseEvent(hitSrc, picNum)
}
// untoken : 中文字符，少了引号等 