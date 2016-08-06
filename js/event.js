var eventUtil = {
	// 封装添加事件监听程序
	addEvent: function(ele, type, hander) {
		if (ele.addEventListener) {
			ele.addEventListener(type, hander, false);
			alert("chrome");
		} else if (ele.attachEvent) {
			ele.attachEvent("on" + type, hander);
			alert("ie");
		} else {
			ele["on" + type] = hander;
			alert("0级");
		}
	},
	// 封装移除事件监听程序
	romoveEvent: function(ele, type, hander) {
		if (ele.removeEventListener) {
			ele.removeEventListener(type, hander, false);

		} else if (ele.attachEvent) {
			ele.detachEvent("on" + type, hander);

		} else {
			ele["on" + type] = null;

		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getType: function(event) {
		return event.type;
	},
	getElement: function (event){
		return event.target||event.srcElement;
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagatiom: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
};