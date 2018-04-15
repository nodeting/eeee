$(function() {

//	let local = localStorage;
//
//	if(!local.getItem("f")) {
//		local.setItem("f", "[]");
//	}

//	$(".list a").tap(function() {
//
//		let arr = JSON.parse(local.getItem("f"));
//
//		if(arr.includes($(this).text())) {
//			alert("已经收藏过了")
//		} else {
//			arr.push($(this).text())
//			alert("恭喜！收藏成功")
//		}
//
//		local.setItem('f', JSON.stringify(arr));
//
//		me();
//	})

//	function me() {
//		let meStr = local.getItem("f");
//
//		let meBrr = JSON.parse(meStr);
//
//		let meS = "";
//
//		meBrr.forEach((val, idx) => {
//
//			meS += val;
//
//		})
//
//		$(".me").html(meS);
//	}
//	me();

	new IScroll('#wrapper', {
		mouseWheel: true,
		scrollbars: true
	});

	$("footer ul").on("tap", 'li', function() {
		var is = $(this).attr("is");
		if(is == "#wrapper") {
			$(".header").hide();
			$(".return").show();
		}else if(is == "home") {
			$(".fav").hide();
			$(".return").hide();
		}
		console.log($(this).index())
		var idx = $(this).index();
		$(".main > div").eq(idx).css({
			transform: "translate3d(0,0,0)",
			transition: "all 0.3s"
		}).siblings().css({
			transform: "translate3d(100%,0,0)",
			transition: "all 0.3s"
		})
	})

	$(".home ul").on("tap", 'li', function() {
		var idx = $(this).index();

		$(".main > div").eq(idx).css({
			transform: "translate3d(0,0,0)",
			transition: "all 0.3s"
		}).siblings().css({
			transform: "translate3d(100%,0,0)",
			transition: "all 0.3s"
		})
	})
	$.ajax({
		url: 'js/data.json',
		dataType: 'json',
		success: function(data) {
			Data = data.data;
			console.log(Data)
			for(var i = 0; i < Data.length; i++) {
				$('.bb').append(
					`
					    	<dl>
							<dt><img src="${Data[i].imgSrc}"/></dt>
							<dd>
								<h5>${Data[i].doctorName}<a>主治医生</a></h5>
								<p>${Data[i].hospital}</p>
								<p>${Data[i].describe}</p>
								<img src="img/2.png"/>
							</dd>
						</dl>
					    		
					    `)
			}

		}
	})
	$(".fff").addClass('animated bounceInLeft').tap(function(){
		$(".fff").addClass('animated rollOut')
	})
})