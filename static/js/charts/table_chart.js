var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var attributions = ['相干长度', '透过率', '温度',
        '湿度', '总影响'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0]];
var thred = [2, 2, 2, 2, 2]
data = data.map(function (item) {
    return [item[1], item[0], item[2]];
});

console.log(data)
var myChart = echarts.init(document.getElementById("cen-content"))
function table(){
    option_table = {
        title:{
            text: '属性值日历图',
            left:'center',     
            textStyle:{
                color: '#E1FFFF',
                fontSize: 16,
            }
        },
        dataZoom:[
            {
                show: true,
                realtime: true,
                height:18,
                type: 'slider',
                xAxisIndex:0,
                bottom: '0%',
                handleStyle: {
                    color: '#8A2BE2',
                    shadowBlur: 3,
                    shadowColor: '#8A2BE2',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            {
                show: true,
                realtime: true,
                width:18,
                type: 'slider',
                yAxisIndex:0,
                right: '6%',
                handleStyle: {
                    color: '#8A2BE2',
                    shadowBlur: 3,
                    shadowColor: '#8A2BE2',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            {
                type: 'inside',
                xAxisIndex:0,
            },
            {
                type: 'inside',
                yAxisIndex:0,
            }
        ],
        tooltip: {
            position: 'top',
            trigger: 'item',
            formatter: function (param) {
                thisvalue = param.value
                att_num = thisvalue[1]
                //param = param[0];
                tip = attributions[att_num] + ":" + thisvalue[2]
                if(thisvalue[2]>thred[att_num]){
                    tip = tip +"</br><font color='red'>超过规定阈值!<font>"
                }
                return tip;
            }
        },
        animation: false,
        grid: {
            height: '65%',
            top: '20%',
            left: '7%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
                
            },
        },
        yAxis: {
            type: 'category',
            data: attributions,
            splitArea: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            inRange: {
                // color: ['green', 'yellow', 'red']
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            align: 'bottom',
            top: '8%',
            textStyle:{
                color: '#eee',
            },
        },
        series: [{
            name: '当前值',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    myChart.setOption(option_table)
}
table()

