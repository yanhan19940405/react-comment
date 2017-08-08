import React from 'react';
import ReactDOM from 'react-dom';
import echarts from 'echarts'

class Smart extends React.Component {
  
  render () {
    return (
      <div id="smart">
      <Waterfall/>
      <Watermall/>
      <Waterfix/>
      </div>
    )
  }
}

class Waterfall extends React.Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const {data}= this.props;
        let myChart = echarts.init(this.refs.waterfall);
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 柱状图' },
            tooltip: {},
            xAxis: {
                data: ["A","B","C","D","E","F"]
            },
            yAxis: {},
            series: [{
                name: 'Y-num',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    render() {
        return(
            <div ref="waterfall"style={{width:"100%", height:"400px"}}></div>

)
       
    }
}

class Watermall extends React.Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const {data}= this.props;
        let myChart = echarts.init(this.refs.watermall);
        // 绘制图表
       myChart.setOption({
       	 title: { text: 'ECharts 饼图' },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'A'},
                {value:274, name:'B'},
                {value:310, name:'C'},
                {value:335, name:'D'},
                {value:400, name:'E'}
            ]
        }
    ]
})
    }

    render() {
        return(
            <div ref="watermall"style={{width:"100%", height:"400px"}}></div>

)
       
    }
}

class Waterfix extends React.Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const {data}= this.props;
        let myChart = echarts.init(this.refs.waterfix);
        // 绘制图表
        var data1 = [];
		var data2 = [];
		var data3 = [];

		var random = function (max) {
		    return (Math.random() * max).toFixed(3);
		};

		for (var i = 0; i < 500; i++) {
		    data1.push([random(15), random(10), random(1)]);
		    data2.push([random(10), random(10), random(1)]);
		    data3.push([random(15), random(10), random(1)]);
		}

       myChart.setOption({
       	 title: { text: 'ECharts 数据伸缩视角' },
          animation: false,
    legend: {
        data: ['scatter', 'scatter2', 'scatter3']
    },
    tooltip: {
    },
    xAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        splitLine: {
            show: true
        }
    },
    yAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        splitLine: {
            show: true
        }
    },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 35
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 29,
            end: 36
        }
    ],
    series: [
        {
            name: 'scatter',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data1
        },
        {
            name: 'scatter2',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data2
        },
        {
            name: 'scatter3',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8,
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data3
        }
    ]
})
    }

    render() {
        return(
            <div ref="waterfix"style={{width:"100%", height:"400px"}}></div>

)
       
    }
}
export default Smart;