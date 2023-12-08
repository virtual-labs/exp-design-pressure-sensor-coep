

var pipesize;
var angle;
var flowRate;
var fluid;
var dist;
var calculateFrequency;
var ArrayJson=[];
var CalculateFMasterJson={};

function fmimic(pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect){
	console.log("Hello Flow FMIMIC");
//	$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('FLOW MEASUREMENT MIMIC');
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
var pipesize=parseInt(pipeSizeSelect);
var angle=parseInt(angleSelect);
var flowRate=parseInt(flowRateSelect);
var fluid=parseInt(fluidSelect);
var dist=parseInt(distSelect);
var calculateFrequency=angle+flowRate+fluid;




var circle,circle1;
var simuli=0;
var time=1000;
var waves;
var waveflag=0;
var wavesUP,wavesDOWN;

var start=paper.image("images/start.png", (x1-150), (y1-200), 150, 150);


pipeDesign ();	
crossSensor();
//FLOW ULTRASONIC SENSOR WORKING SIULATION
//pipeDesign ();	
//crossSensor();
function pipeDesign (){
//var dtxt= paper.rect(x1-70, y1+20, 250, 60) .attr({'stroke-width' : 2} );
//paper.text(x1+45, y1+50, "0123456789") .attr({'font-size': 40,'font-family':'digital-clock-font'});
		
var pipe = paper.rect(x1+100, y1+140, 500, 140) .attr({'stroke' : '#000' , 'stroke-width' : 5 });
var btm_line = paper.path("M "+(x1+100)+" "+(y1+280)+" l 0 20 l 500 0 l 0 -20 z").attr({'stroke' : '#000' , 'stroke-width' : 5 , "fill":"#d5dcde"});
var top_line = paper.path("M "+(x1+100)+" "+(y1+125)+" l 0 20 l 500 0 l 0 -20 z").attr({'stroke' : '#000' , 'stroke-width' : 5 , "fill":"#d5dcde"});
bubble();
}


function crossSensor(){
//	var sensor=paper.image("images/USensor.png",(x1+100),(y1+125),50,50)
		var sensorTop = paper.image("images/US.png", (x1+240), (y1+92), 70, 33);
		var s1=paper.text((x1+270), (y1+75),"Transmitter").attr({'font-size':20,'stroke':'#800000'});
		var sensorBottom = paper.image("images/US.png", (x1+380), (y1+300), 70, 33);
		var s1=paper.text((x1+415), (y1+345),"Receiver").attr({'font-size':20,'stroke':'#800000'});

}


////streatSensor();
//function streatSensor(){
//	var streatSensor =paper.image("images/levelPS.png", (x1+195), (y1+9), 300, 150).transform( 'r-2');
////	var streatSensor =paper.image("images/levelSensor.png", (x1+225), (y1+55), 150, 150).transform( 'r50');	
//}


function bubble(){
	var arr = [];	
	arr[0]=paper.path('M' +(x1+100)+ ' ' +(y1+213)+ 'l 20 0 ').attr({'stroke': '#74CCF4','stroke-width':130, 'stroke-opacity': 0.4});
	arr[0].animate({path :'M' +(x1+100)+ ' ' +(y1+213)+ 'l 241 0 '},time, function(){
			
	arr[1]=paper.path('M' +(x1+341)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#74CCF4','stroke-width':130, 'stroke-opacity': 0.4});
	arr[1].animate({path :'M' +(x1+341)+ ' ' +(y1+213)+ 'l 259 0 '},time, function(){
	});
	});
	    
function generateCircles2(){
			
  setTimeout(function(){
    totalDelay += 1;
    var yPos = y1 + Math.floor(Math.random() * (30 - 1 + 1) + 1);
    var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    var circle = paper.circle((x1+100), 170+yPos, size);
//    var time1 = Math.floor(Math.random() * 3000)+1000-time;
    circle.attr('fill',"#0B1418");
 
    var cirAni = Raphael.animation({cy:170+yPos, cx: x1+600}, time, generateCircles3());
    circle.animate(cirAni.delay(100));
     
    }, 200);
}

function generateCircles3(){             

setTimeout(function(){
  var yPos = y1 + Math.floor(Math.random() * (30 - 1 + 1) + 1)
  var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);

  var circle1 = paper.circle((x1+100),235+yPos, size);
//  var time2 = Math.floor(Math.random() * 2000)+1000-time;
  circle1.attr("fill", "#0B1418");
  
  var cirAni1 = Raphael.animation({ cx:x1+600, cy:yPos+240}, time, generateCircles2());
  circle1.animate(cirAni1.delay(100));

  },200);

}
var totalDelay = 0;
generateCircles2();

}

//crosswaves();
function crosswavesFlow(){
var waves_arr = [];	
	waves_arr[0]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	waves_arr[0].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 '},time, function(){
	wavesDOWN=paper.image("images/downW.png", (x1+255), (y1+105), 80, 70);
	wavesDOWN.animate({transform: ['t',120,140]}, 1000);			
	
	waves_arr[1]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	waves_arr[1].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 '},time, function(){
	wavesDOWN.remove();
	wavesUP=paper.image("images/up.png", (x1+370), (y1+250), 80, 70);	
	wavesUP.animate({transform: ['t',-125,-140]}, 1000);
	
	waves_arr[2]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	waves_arr[2].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l0 0 '},time, function(){
		wavesUP.remove();
		});
	});		
	});
	
}



start.click(function(){
 wavesFlow= setInterval(crosswavesFlow,3000);
 	
})	
}

function addToFlowMasterJSON(){
	                  tempJson={};	
						tempJson.pipesize=pipesize;
						tempJson.angle = angle;
						tempJson.flowRate = flowRate;
						
						tempJson.fluid = fluid;
						tempJson.dist = dist;
						tempJson.calculateFrequency = calculateFrequency;
						ArrayJson.push(tempJson);
						TimeMasterJson.demo = ArrayJson;
						console.log(CalculateFMasterJson);
						tableCreateFlow(CalculateFMasterJson);

}

