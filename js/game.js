// JavaScript Document

var roll = {
	Msgs: ["一等獎", "二等獎", "三等獎", "四等獎", "五等獎", "六等獎", "七等獎", "八等獎"],
	index: 0, //当前位置索引
	times: 0, //次数
	roundTimes: 0, //圈数
	timer: 0, //循环器
	speed: 300, //转动速度
	isActive: false, //游戏是否在运行
	Init: function() {
		///初始化
		this.roundTimes = 0;
		this.isActive = true;
	},
	Start: function(cls, ocls, callback) {
		var that = this;
		if(that.isActive == true) {
			alert('游戏正在进行!');
			return;
		}
//		if(that.times == 4) {
//			alert('只有四次机会');
//			return;
//		}
		that.Init();
		var random = parseInt(Math.random() * 8);
		var interVal = setInterval(function() {
			if(that.index == 8) {
				that.index = 0;
				that.roundTimes++;
			}
			if(that.roundTimes == 3) {
				if(that.index==random){
					that.isActive = false;
					clearInterval(that.timer);
					if(Object.prototype.toString.call(callback) == '[object Function]') {
						callback.call(this, that.index, that.Msgs[that.index],$(cls + that.index).find('img').attr('src'));
					}
				}
			} 
			$(ocls).removeClass('active');
			$(cls + that.index).addClass('active');
			that.index++;
					
		}, 50);
		that.timer = interVal;
		that.times++;
	}
}