function clickFunc(){
	var preLevel = 0
	var level = 0
	var score = 0
	return function(){
		var flag = judge.call(this)
		// 如果点中老鼠，图片切换
		if(flag){
			this.src = 'img/5.jpg'
			victory.play()
			victory.src = 'mp3/895.mp3'
			changeScore(flag)
			score = parseInt(scoreText.innerText)
			level = Math.floor(score / 10)
			if(preLevel < level){
				preLevel = level
				levelText.innerText = level+1
				clearInterval(timer)
				timer = setInterval(changeImg, 1000 - 200 * level)
			}
		}
		// 如果点中草坪
		else{
			alert('game over')
			window.location.reload()
		}
	}
}

function judge(){
	var exp = new RegExp(picSrc[0])
	src = this.src
    return exp.test(src)
}

function changeScore(flag){
	var score = parseInt(scoreText.innerText)
    flag ? score++ : score--
    scoreText.innerText = '' + score
}

// 定时器
function changeImg(){
    picIdx = Math.round(Math.random()*8)
    imgs[picIdx].src = picSrc[0]
    
    picIdx2 = Math.round(Math.random()*8)
    imgs[picIdx2].src = picSrc[1]
}