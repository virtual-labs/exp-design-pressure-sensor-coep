

var pipesize;
var angle;
var flowRate;
var fluid;
var dist;
var calculateFrequency;
var ArrayJson=[];
var FrequencyMasterJson={};


function lmimic(pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect){
	console.log("Hellow LMIMIC");
	$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('LEVEL MEASUREMENT MIMIC');
    $("#centerText2").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =900;
	var h = 900;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	
//paper = new Raphael(document.getElementById('canvas'), 1000, 700);
var x1=200;
var y1=200;
//max of y_value=305 and min _value=
var pipesize=parseInt(pipeSizeSelect);
var angle=parseInt(angleSelect);
var flowRate=parseInt(flowRateSelect);
var fluid=parseInt(fluidSelect);
var dist=parseInt(distSelect);
var calculateFrequency=angle+flowRate+fluid;

var Wlevel=200;
var circle,circle1;
var simuli=0;
var time=1000;
var waves;
var waveflag=0;
var wavesUP,wavesDOWN;







	tankDesign()

var d1,d2;
var start=paper.image("images/start.png", (x1-150), (y1-200), 150, 150);


////LEVEL ULTRASONIC SENSOR WORKING SIULATION

function tankDesign(){
	var w= 60;
var h= 30;
var color ='#11c9f2';
var color1='#ffffff';

var levelSensor=paper.image("images/levelPS.png", (x1+10), (y1-140), 200, 105).rotate(-4);

var tank = paper.path('M'+x1+' '+y1+' '+'A 50 25 0 0 1 450 200 l 0 300 A 50 25 0 0 1 200 500 z').attr({'stroke-width':3} );
var inlet = paper.path('M'+(x1)+' '+(y1)+'l -130  0 l ').attr({'stroke-width':3 } );
//	'M'+(x1+125)+' '+(y1-62)+'l 0  -80 l 100 0 l 0 -15 l 15 15 l 0 -30 l -10 0 l 20 0 l-10 0 l 0 30 l 15 15 l 0 -30 l -30 30 l 0 -15 l 0 15 l 30 -30 l 0 15 l 100 0');          
//	inlet
//	paper.text(530, 80, "Inlet").attr({'font-size': 24});
 d1= paper.path('M'+(x1-80)+' '+(y1+15)+'l 0 -30 l 30 30 l 0 -30 l -30 30 l 15 -15 l 0 -30 l 15 0 l -30 0 l 15 0 l 0 30 ').attr({'fill':'red'});
var fwater=paper.text((x1-120),(y1-15),"Inlet").attr({'font-size':25,'stroke':'#800000'});  
var outlet =paper.path('M'+(x1+125)+' '+(y1+363)+'l 0  80 l 140 0').attr({'stroke-width':3 } );
d2= paper.path('M'+(x1+195)+' '+(y1+458)+'l 0 -30 l 30 30 l 0 -30 l -30 30 l 15 -15 l 0 -30 l 15 0 l -30 0 l 15 0 l 0 30 ').attr({'fill':'red'});
var dwater=paper.text((x1+270),(y1+458),"Outlet").attr({'font-size':25,'stroke':'#800000'});
}

d1.click(function(){
	d1.attr({'fill':'green'});
	waterFill();
});

d2.click(function(){
	d2.attr({'fill':'green'});
	waterdrain();
});

function waterdrain(){
	var Waterdrain_arr = [];	
	Waterdrain_arr[0]=paper.path('M' +(x1+125)+ ' ' +(y1-5)+ 'l 0 0 ').attr({'stroke': '#fff','stroke-width':247});
	Waterdrain_arr[0].animate({path :'M' +(x1+125)+ ' ' +(y1-5)+ 'l 0 '+(Wlevel)+''},time, function(){
			
	Waterdrain_arr[1]=paper.path('M' +(x1+341)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#74CCF4','stroke-width':130, 'stroke-opacity': 0.4});
	Waterdrain_arr[1].animate({path :'M' +(x1+341)+ ' ' +(y1+213)+ 'l 0 0 '},time-1000, function(){
		var bwater=paper.path('M'+(x1+0)+','+(y1+300)+'l 250 0 A 50 25 0 0 1 200 500 z').attr({'fill':'#fff','stroke-width':3 });
var Wborder=paper.path('M'+(x1+1.5)+','+(y1+300)+'l 247 0').attr({'stroke':'#fff','stroke-width':4});
     d2.attr({'fill':'red'});
	});
	});
}

function waterFill(){
	
	var Waterfill_arr = [];	
	
	Waterfill_arr[0]=paper.path('M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 0 ').attr({'stroke': '#11c9f2','stroke-width':247});
	Waterfill_arr[0].animate({path :'M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 0'},time-500, function(){
	var bwater=paper.path('M'+(x1+0)+','+(y1+300)+'l 250 0 A 50 25 0 0 1 200 500 z').attr({'fill':'#11c9f2','stroke-width':3 });
	var Wborder=paper.path('M'+(x1+1.5)+','+(y1+300)+'l 247 0').attr({'stroke':'#11c9f2','stroke-width':4});
//var waterlevel_line=paper.path('M'+(x1+1.5)+','+(y1+298)+'l 247 0').attr({'stroke':'red','stroke-width':});

	
	Waterfill_arr[1]=paper.path('M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 0 ').attr({'stroke': '#11c9f2','stroke-width':247});
	Waterfill_arr[1].animate({path :'M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 '+(-Wlevel)+''},time, function(){
		console.log("Wlevel value = "+Wlevel);
			d1.attr({'fill':'red'});
			var waterlevelYvalue=paper.path('M' +(x1+50)+ ' ' +(y1+300)+ 'l 50 0 ').attr({'stroke':'red'});
		});
	});
	
} 
 

  var downWaveY= ((y1-5)+Wlevel);  
 var upWaveY= ((y1+300)-Wlevel);
function levelWaves(){
var wavesL_arr = [];	
	wavesL_arr[0]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	wavesL_arr[0].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 '},500, function(){
	
	wavesDOWN=paper.image("images/downW.png", (x1+40), (y1-65), 80, 70);
	wavesDOWN.animate({transform: ['t',40,Wlevel]}, 1000);			
	
	console.log("Y value Down ="+downWaveY)
	
	wavesL_arr[1]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	wavesL_arr[1].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 '},time, function(){
//	wavesDOWN.remove();
	wavesUP=paper.image("images/levelUpWaves.png", (x1+80), (upWaveY-30), 80, 70);	
	wavesUP.animate({transform: ['t',40, -(y1)]}, 1000);
	console.log("Y value UP ="+upWaveY);
	
	wavesL_arr[2]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	wavesL_arr[2].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l0 0 '},time, function(){
//		wavesUP.remove();
		});
	  });
	});	
}




start.click(function(){	
 wavesFlow= setInterval(crosswavesFlow,3000);

	
	
})	




}
function addToLevelMasterJSON(){
	                  tempJson={};	
						tempJson.pipesize=pipesize;
						tempJson.angle = angle;
						tempJson.flowRate = flowRate;
						
						tempJson.fluid = fluid;
						tempJson.dist = dist;
						tempJson.calculateFrequency = calculateFrequency;
						ArrayJson.push(tempJson);
						TimeMasterJson.demo = ArrayJson;
						console.log(FrequencyMasterJson);
						tableCreateLevel(FrequencyMasterJson);

}


