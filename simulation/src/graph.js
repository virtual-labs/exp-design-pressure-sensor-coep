
function graph(masterJson)		
{
	console.log(masterJson);
	var xdata=[];
	var ydata=[];
	var graphData1=[];
	 {
		xdata[i] = masterJson.demo[i].frequency;
		ydata[i] = masterJson.demo[i].calculateTime ;
//		name[i]=masterJsonArr[i].materialType;
		
	}
	for (var j = 0; j < masterJson.demo.length; j++) {
			tempArr = [];
			tempArr[0] = parseInt(xdata[j]);
			tempArr[1] = parseInt(ydata[j]);
			graphData1.push(tempArr);

	}
		console.log("xdata "+xdata);
		console.log("ydata "+ydata);
		console.log("graphData1 "+graphData1);
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
		
		console.log("After xdata "+xdata);
		console.log("After ydata "+ydata);
		
		Xmax = parseInt(xdata[xdata.length - 1]);
		Ymax = parseInt(ydata[ydata.length - 1]);
		
		console.log("Xmax "+Xmax);
		console.log("Ymax "+Ymax);
		Xmin = parseInt(xdata[0]);
		Ymin= parseInt(ydata[0]);
		
		console.log("Xmin "+Xmin);
		console.log("Ymin "+Ymin);
		console.log(" Rotameter & magnatic flow meter  " + graphData1);
		Highcharts.chart('graphModel', {
			title: {
				text: ' Natural frequency of the tuning fork changes with the liquid density '
			},
//			subtitle: {
//				text: 'Meter Constant is  pulses (per/ltr)'
//			},
			xAxis: {
				min: 700,
				max: 1500,
				title: {
					text: 'density ( Kg/m&sup3;)'
				},
				labels: {
		            format: '{value} '
		        },
			
			},
			yAxis:
			
			
			
			{
				min: 2000,
				max: 3500,
				title: {
					text: 'frequency (Hz)'
				},
				labels: {
		            format: '{value}'
		        },
			},
			
//			 tooltip: {
//			        headerFormat: '<b>{series.name}</b><br/>',
//			        pointFormat: ''
//			    },
			    tooltip: {
			        formatter: function() {
			            return '  <b> Density :'  + this.x + '</b> <br> <b>frequency   :' + this.y + '</b> ';
			        }
			    },
			series: [
//				{
//					type: 'line',
//					name: 'Standard value',
//					data: [[Xmin, Ymin], [Xmax, Ymax]],
//					marker: {
//						enabled: false
//					},
//					states: {
//						hover: {
//							lineWidth: 0
//						}
//					},
//					enableMouseTracking: false
//				},
				
				{
					type: 'line',
					name: name,

					data: graphData1,
					marker: {
						radius: 4
					}
				}
				]

		});
	
				
		
}