$(function(){

	map();

	

	function leida1(){
	var myChart = echarts.init(document.getElementById('map'));
	
	
	myChart.setOption(option);
	// window.addEventListener("resize",function(){
    //     myChart.resize();
    // });
	 
	}


	
	
})
// var myselect = document.getElementById('attr_select')
// var index = myselect.selectedIndex
// attribution = myselect.options[index].value
// var myselect = document.getElementById('city_select')
// var index = myselect.selectedIndex
// city = myselect.options[index].value
// console.log(city)
// console.log(attribution)
// set = randomdata(cities, attribution)
// cities_ = set[0]
// color_num = set[1]
// max_min = get_maxmin(cities)
// max_ = max_min[0]
// min_ = max_min[1]
var myChart = echarts.init(document.getElementById('map'));

var Weather_colors = ['#ff8003'/*气温*/, '#A9A9A9'/*气压*/, '#1E90FF'/* 湿度*/, '#00FA9A'/*风速*/]

var Shadow_colors = ['#F8F8FF'/*气温阴影*/, '#F5F5F5'/*气压*/, '#F0FFFF'/* 湿度*/, '#F0FFF0'/*风速*/]

var Weather_units = ['气温(K)', '气压(Kpa)', '%', 'm/s']
var Gradients = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']

let cities = [
	{
		name: "北京",
		value: [116.24, 39.55]
	},
	{
		name: "广州",
		value: [113.23333,23.16667]
	},
   
	{
		name: "重庆",
		value: [106.54, 29.59]
	},
	{
		name: "杭州",
		value: [120.19, 30.26]
	},
	{
		name: "上海",
		value: [121.4648, 31.2891]
	},
	{
		name: "济南",
		value: [117.000923, 36.675807]
	},
	{
		name: "石家庄",
		value: [115.48333,38.03333]
	},
	{
		name: "长春",
		value: [125.35000,43.88333]
	},
	{
		name: "哈尔滨",
		value: [127.63333,47.75000]
	},
	{
		name: "沈阳",
		value: [123.38333,41.80000]
	},
	{
		name: "呼和浩特",
		value: [111.670801, 41.818311]
	},
	{
		name: "乌鲁木齐",
		value: [87.68333,43.76667]
	},
	{
		name: "兰州",
		value: [103.73333,36.03333]
	},
	{
		name: "宁夏",
		value: [106.26667,37.46667]
	},
	{
		name: "太原",
		value: [112.53333,37.86667]
	},
	{
		name: "西安",
		value: [108.95000,34.26667]
	},
	{
		name: "郑州",
		value: [113.65000,34.76667]
	},
	{
		name: "合肥",
		value: [117.283042, 31.86119]
	},
	{
		name: "南京",
		value: [119.78333,32.05000]
	},
	{
		name: "福州",
		value: [118.30000,26.08333]
	},
	{
		name: "南昌",
		value: [115.90000,28.68333]
	},
	{
		name: "南宁",
		value: [108.320004, 22.82402]
	},
	{
		name: "海口",
		value: [110.35000,20.01667]
	},
	{
		name: "贵阳",
		value: [106.71667,26.56667]
	},
	{
		name: "长沙",
		value: [113.00000,28.21667]
	},
	{
		name: "武汉",
		value: [114.298572, 30.584355]
	},
	{
		name: "成都",
		value: [104.06667,30.66667]
	},
	{
		name: "昆明",
		value: [102.73333,25.05000]
	},
	{
		name: "拉萨",
		value: [91.00000,30.60000]
	},
	{
		name: "西宁",
		value: [96.75000,36.56667]
	},
	{
		name: "天津",
		value: [117.20000,39.13333]
	},
	{
		name: "台北",
		value: [121.30, 25.03]
	},
	{
		name:'香港',
		value:[114.10000,22.20000]
	},
	{
		name:'澳门',
		value:[113.50000,22.20000],
	}

]

function randomdata(dataset, attribution){
	var res = []
	if(attribution == '温度'){
		ThisColor_num = 0
		for(var i=0; i<dataset.length; i++){
			res.push({
				name: dataset[i].name,
				value: dataset[i].value.concat(Math.random()*70+200)
			});
		}
	}
	else if(attribution == '气压'){
		ThisColor_num = 1
		for(var i=0; i<dataset.length; i++){
			res.push({
				name: dataset[i].name,
				value: dataset[i].value.concat(Math.random()*13+1000)
			});
		}
	}
	else if(attribution == '湿度'){
		ThisColor_num = 2
		for(var i=0; i<dataset.length; i++){
			res.push({
				name: dataset[i].name,
				value: dataset[i].value.concat(Math.random()*100)
			});
		}
	}
	else{
		ThisColor_num = 3
		for(var i=0; i<dataset.length; i++){
			res.push({
				name: dataset[i].name,
				value: dataset[i].value.concat(Math.random()*70-35)
			});
		}
	}
	
	return [res, ThisColor_num];
}

function count(o){
	var t = typeof o;
	if(t == 'string'){
		return o.length;
	}else if(t == 'object'){
		var n = 0;
		for(var i in o){
			n++;
		}
		return n;
	}
	return false;
}

function get_maxmin(dataset){
	min_ = 0
	max_ = 0
	for(var i=0; i<dataset.length; i++){
		if(i==0){
			min_ = max_ = dataset[i].value[2]
		}
		else{
			if(min_>dataset[i].value[2]){
				min_ = dataset[i].value[2]
			}
			if(max_<dataset[i].value[2]){
				max_ = dataset[i].value[2]
			}
		}
	}
	return [max_, min_]
}

function map(){
	var myselect = document.getElementById('attr_select')
	var index = myselect.selectedIndex
	attribution = myselect.options[index].value
	var myselect = document.getElementById('city_select')
	var index = myselect.selectedIndex
	city = myselect.options[index].value
	console.log(city)
	console.log(attribution)
	set = randomdata(cities, attribution)
	cities_ = set[0]
	color_num = set[1]
	max_min = get_maxmin(cities_)
	max_ = max_min[0]
	min_ = max_min[1]
	console.log(max_)
	console.log(min_)
	console.log(color_num)
	console.log(cities_)
	let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="

	option_map = {
		    /*backgroundColor: '#000f1e',*/
		    geo: {
		        map: 'china',
		        aspectScale: 0.85,
		        layoutCenter: ["50%", "50%"], //地图位置
		        layoutSize: '100%',
		        itemStyle: {
		            normal: {
		                shadowColor: '#276fce',
		                shadowOffsetX: 0,
		                shadowOffsetY: 15,
		                opacity: 0.5,
		            },
		            emphasis: {
		                areaColor: '#276fce',
		
		            }
		        },
		        regions: [{
		            name: '南海诸岛',
		            itemStyle: {
		                areaColor: 'rgba(0, 10, 52, 1)',
		
		                borderColor: 'rgba(0, 10, 52, 1)',
		                normal: {
		                    opacity: 0,
		                    label: {
		                        show: false,
		                        color: "#009cc9",
		                    }
		                },
		
		
		            },
		            label: {
		                show: false,
		                color: '#FFFFFF',
		                fontSize: 12,
		            },
		
		
		        }],
		
			},
			tooltip : {
				trigger: 'item'
			},
			visualMap: {
				type: 'continuous',
				orient: 'vertical',
				hoverLink: true,
				max: max_,
				min: min_,
				align: 'left',
				bottom:'15%',
				right:'5%',
				precision:1,
				dimension:2,
				calculable: true,
				text:['High', 'Low'],
				textStyle: {
					color: '#eee'
				},
				inRange:{
					color:[Shadow_colors[color_num], Weather_colors[color_num]],
				}
			},
		    series: [
		        // 常规地图
		        {
		            type: 'map',
		            mapType: 'china',
		            aspectScale: 0.85,
		            layoutCenter: ["50%", "50%"], //地图位置
		            layoutSize: '100%',
		            zoom: 1, //当前视角的缩放比例
		            // roam: true, //是否开启平游或缩放
		            scaleLimit: { //滚轮缩放的极限控制
		                min: 1,
		                max: 2
		            },
		            itemStyle: {
		                normal: {
		                    areaColor: '#0c274b',
		                    borderColor: '#1cccff',
		                    borderWidth: 1.5
		                },
		                emphasis: {
		                    areaColor: '#02102b',
		                    label: {
		                        color: "#fff"
		                    }
		
		                }
		            },
		
		
		        },
		        { //首都星图标
		            name: '首都',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            data: [{
		                name: '北京',
		                value: [116.24, 41.55, 100],
		
		            }, ],
		            symbol: iconRQ,
		            symbolSize: 20,
		            label: {
		                normal: {
		                    show: false,
		                },
		                emphasis: {
							label:{
								show: true,
							},
		                    show: false
		                }
		            },
		
		        },
		        // 区域散点图
		        {
					name: attribution,
		            type: 'effectScatter',
		            coordinateSystem: 'geo',
		            zlevel: 2,
		            symbolSize: 8,
		            rippleEffect: { //坐标点动画
		                period: 3,
		                scale: 3,
		                //brushType: 'fill'
		            },
		            label: {
						show: true,
						position: 'right',
						formatter: '{b}',
						color: '#b3e2f2',
		                // normal: {
		                //     show: true,
		                //     position: 'right',
		                //     formatter: '{b}',
		                //     color: '#b3e2f2',
		                //     fontWeight: "bold",
		                //     fontSize: 16
		                // }
		            },
					data: cities_,
					encode:{
						value:2,
					},
					rippleEffect: {
						brushType: 'stroke'
					},
		            itemStyle: { //坐标点颜色
		                normal: {
		                    show: true,
		                    //color: Weather_colors[color_num],
		                    shadowBlur: 10,
		                    shadowColor: Shadow_colors[color_num],
		                },
		                emphasis: {
		                    areaColor: '#f00'
		                }
		            },
		
		        },
		    ]
	};
		
	// myChart.on('click', function(params) {
	//     console.log(params);
	// });
	myChart.setOption(option_map, true);
	// window.addEventListener("resize",function(){
	//     myChart.resize();
	// });
		
}

