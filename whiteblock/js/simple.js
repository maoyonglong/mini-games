function createBlackPos(){
			var pos = []
			forEach(uls, function(i){
				pos[i] = Math.round(Math.random()*3)
			})
			return pos
		}
		function changeBlackPos(){
			return Math.round(Math.random()*3)
		}
		function showBlackPos(pos){
			forEach(uls, function(i, v){
				var li = v.children[pos[i]]
				li.style.background = 'black'
	})
}
function forEach(arr, callback){
	var i
	for(i = 0; i < arr.length; i++){
		callback(i, arr[i])
	}
}
function init(){
	var endLis = uls[len - 1].children
	var secondEndLis = uls[len - 2].children
	var pos = []
	// 随机生成黑色位置
	pos = createBlackPos()
	// 渲染黑色位置
	showBlackPos(pos)
	// 将最后的ul颜色设为蓝色
	forEach(endLis, function(i, v){
		v.style.background = '#10fefe'
	})
	secondEndLis[pos[len - 2]].innerText = '点击开始'
	// 初始化开始事件
	initStartEvent(secondEndLis[pos[len - 2]])

}
function initEvent(startLi){
	var lis = document.querySelectorAll('li')
	var count = 0
	forEach(lis, function(i, v){
//		if(i === 0){
//			v.parentNode.tag = true
//		}
		v.onclick = function(){
			var tag = this.parentNode.tag
			// 判断是否点中黑色块
			var flag = judge.call(this)
//					console.log(flag)
			if(flag && tag){
				tag = undefined
				v.style.background = '#ccc'
				score++
				var srcIdx = Math.ceil(Math.random()*4)
				musicEff.src = '../mp3/' + srcIdx + '.mp3'
				musicEff.play()
				move()
			}else if(!flag){
				gameOver()
			}
			if(isEndGame()){
				alert('游戏胜利')
			}
//					if(count === )
		}
	})
}
function initStartEvent(startLi){
	startLi.onclick = function(){
		// 去掉文字
		this.innerText = ''
		// 初始化游戏事件
		initEvent()
		var srcIdx = Math.ceil(Math.random()*4)
		musicEff.src = '../mp3/' + srcIdx + '.mp3'
		musicEff.play()
		this.parentNode.tag = true
		// 开始游戏
		startGame()
	}
}
function startClock(){
	var time = 0
	var m = 0
	var s = 0
	clockTimer = setInterval(function(){
		time++
		m = parseInt(time/60)
		s = parseInt(time%60)
		clock.innerText = toDub(m)+":"+toDub(s)
	}, 1000/60)
}
//补零
function toDub(n){
    return n<10?"0"+n:""+n;
}
function judge(){
	return this.style.background === 'black'
}
function isEndGame(){
	return count == 25
}
function move(){
	var speed = 0
	var target = 0
	count++
	timer = setInterval(function(){
		var top = box.offsetTop
		target = -41
		speed = (target - box.offsetTop) / 5
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		box.style.top = box.offsetTop + speed + 'px'
		if(top==target) {
			clearInterval(timer);
			box.style.top = -142 + 'px'
			var uls = document.querySelectorAll('ul')
	var ele = box.removeChild(uls[len-1])
	var firstUl = uls[0]
	box.insertBefore(ele, firstUl)
	var children = ele.children
	forEach(ele.children, function(i, v){
		if(count <= 20) 
		v.style.background = '#fff'
		else{
			v.style.background = 'green'
		}
	})
	if(count <= 20){
		var pos = changeBlackPos()
		children[pos].style.background = 'black'
	}
	
	console.log(box.offsetTop)
	uls[len-2].tag = true
		}
	}, 30)
	
}
function startGame(){
	startClock()
	move()
}
function gameOver(){
	alert('游戏结束')
}