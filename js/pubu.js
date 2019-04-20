var box = document.getElementById('right-box');
var items = box.children;
var gap = 20;

window.onload = function() {
	waterFall();
	function waterFall() {
		var pageWidth = getClient().width;
		var itemWidth = items[0].offsetWidth;
		var columns = parseInt(pageWidth * 0.55 / (itemWidth + gap));
		var arr = [];
		for(var i = 0; i < items.length; i++) {
			if(i < columns) {
				items[i].style.top = 30;
				items[i].style.left = (itemWidth + gap) * i + 30 + 'px';
				arr.push(items[i].offsetHeight);

			} else {
				var minHeight = arr[0];
				var index = 0;
				for(var j = 0; j < arr.length; j++) {
					if(minHeight > arr[j]) {
						minHeight = arr[j];
						index = j;
					}
				}
				items[i].style.top = arr[index] + gap + 30 + 'px';
				items[i].style.left = items[index].offsetLeft + 'px';
				arr[index] = arr[index] + items[i].offsetHeight + gap;
			}
		}
	}
	window.onresize = function() {
		waterFall();
	};

	window.onscroll = function() {
		if(getClient().height + getScrollTop() >= items[items.length - 1].offsetTop) {
			var datas = [
				"img/1.jpg",
				"img/2.jpg",
				"img/3.jpg",
				"img/4.jpg",
				"img/5.jpg",
				"img/6.jpg",
				"img/7.jpg",
				"img/8.jpg",
				"img/9.jpg",
				"img/10.jpg",
				"img/11.jpg",
				"img/12.jpg",
				"img/13.jpg",
				"img/14.jpg",
				"img/15.jpg",
				"img/16.jpg",
				"img/17.jpg",
				"img/18.jpg",
				"img/19.jpg",
				"img/20.jpg"
			];
			for(var i = 0; i < datas.length; i++) {
				var div = document.createElement("div");
				div.className = "item";
				div.innerHTML = '<img src="' + datas[i] + '" alt="">';
				box.appendChild(div);
			}
			waterFall();
		}

	};
};


function getClient() {
	return {
		width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}
}
function getScrollTop() {
	return window.pageYOffset || document.documentElement.scrollTop;
}