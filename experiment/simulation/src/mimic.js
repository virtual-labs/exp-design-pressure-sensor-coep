function mimic(pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect){
//	$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('MIMIC');
    $("#centerText").html('CACULATION');

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
var Wlevel=200;
//var application=1;
var circle,circle1;
var simuli=0;
var time=1000;
var waves;
var waveflag=0;
var wavesUP,wavesDOWN;
//if(application==1){
//pipeDesign ();	
//crossSensor();
//}else{
//	
//}
//
var start=paper.image("images/start.png", (x1-150), (y1-200), 150, 150);
//tankDesign();
function tankDesign(){
	var w= 60;
var h= 30;
var color ='#11c9f2';
var color1='#ffffff';
var levelSensor=paper.image("images/levelPS.png", (x1-50), (y1-150), 150, 100);

var tank = paper.path('M'+x1+' '+y1+' '+'A 50 25 0 0 1 450 200 l 0 300 A 50 25 0 0 1 200 500 z').attr({'stroke-width':3} );

var bwater=paper.path('M'+(x1+0)+','+(y1+300)+'l 250 0 A 50 25 0 0 1 200 500 z').attr({'fill':'#11c9f2','stroke-width':3 });

var Wborder=paper.path('M'+(x1+1.5)+','+(y1+300)+'l 247 0').attr({'stroke':'#11c9f2','stroke-width':4});
//var waterlevel_line=paper.path('M'+(x1+1.5)+','+(y1+298)+'l 247 0').attr({'stroke':'red','stroke-width':});

var inlet = paper.path('M'+(x1)+' '+(y1)+'l -100  0 l ').attr({'stroke-width':3 } );
//	'M'+(x1+125)+' '+(y1-62)+'l 0  -80 l 100 0 l 0 -15 l 15 15 l 0 -30 l -10 0 l 20 0 l-10 0 l 0 30 l 15 15 l 0 -30 l -30 30 l 0 -15 l 0 15 l 30 -30 l 0 15 l 100 0');          
//	inlet
//	paper.text(530, 80, "Inlet").attr({'font-size': 24});
var d1= paper.path('M'+(x1-30)+' '+(y1)+'l 0 -15 l 30 30 l 0 -30 l -30 30 l 0 -15 ');
        
var outlet =paper.path('M'+(x1+125)+' '+(y1+363)+'l 0  80 l 100 0 l 0 -15 l 15 15 l 0 -30 l -10 0 l 20 0 l-10 0 l 0 30 l 15 15 l 0 -30 l -30 30 l 0 -15 l 0 15 l 30 -30 l 0 15 l 100 0');        
    outlet.attr({'stroke-width':3 } );
var d2= paper.path('M'+(x1+225)+' '+(y1+443)+' l 0 -15 l 30 30 l 0 -30 l -30 30 l 0 -15 ');
function waterFill(){
	var Waterfill_arr = [];	
	Waterfill_arr[0]=paper.path('M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 0 ').attr({'stroke': '#11c9f2','stroke-width':247});
	Waterfill_arr[0].animate({path :'M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 '+(-Wlevel)+''},time, function(){
			
//	arr[1]=paper.path('M' +(x1+341)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#74CCF4','stroke-width':130, 'stroke-opacity': 0.4});
//	arr[1].animate({path :'M' +(x1+341)+ ' ' +(y1+213)+ 'l 259 0 '},time, function(){
//	});
	});
}   
}

   
    
start.click(function(){
	waterFill();
})


pipeDesign ();	
crossSensor();
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
		var sensorBottom = paper.image("images/uS.png", (x1+380), (y1+300), 70, 33);
}


////streatSensor();
//function streatSensor(){
//	var streatSensor =paper.image("images/levelPS.png", (x1+195), (y1+9), 300, 150).transform( 'r-2');
////	var streatSensor =paper.image("images/levelSensor.png", (x1+225), (y1+55), 150, 150).transform( 'r50');	
//
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
//function crosswaves(){
//	
//	waveflag=1;
////waves=paper.image("images/waves.png", (x1+250), (y1+138), 100, 50).transform('r255');	
////c.animate({transform: ['t',60,0]}, 1000);
//
//}


start.click(function(){
		
	
	var waves_arr = [];	
	waves_arr[0]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	waves_arr[0].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 2 0 '},time, function(){
	wavesDOWN=paper.image("images/downW.png", (x1+255), (y1+105), 80, 70);
	wavesDOWN.animate({transform: ['t',120,140]}, 1000);			
	
	waves_arr[1]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
	waves_arr[1].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l -2 0 '},time, function(){
	wavesDOWN.remove();
	wavesUP=paper.image("images/up.png", (x1+370), (y1+250), 80, 70);	
	wavesUP.animate({transform: ['t',-125,-140]}, 1000);
//	wavesUP.remove();	
	});		
	});
	wavesUP.remove();
})	
	
//	if(waveflag==2){
//		waves.animate({transform: ['t',30,-120]}, 1000);
//		}
	



function tank(){
	var tank=paper.images("images/up.png", (x1+370), (y1+250), 80, 70);
}


















//
//function lelelUS(){
//	    var w= 60;
//    var h= 30;
//    var color ='#11c9f2';
//    var color1='#ffffff';
//   
//    var tank = paper.path('M'+x1+' '+y1+' '+'A 50 25 0 0 1 450 200 l 0 300 A 50 25 0 0 1 200 500 z').attr({'stroke-width':3} );
//    
//    var bwater=paper.path('M'+(x1+0)+','+(y1+300)+'l 250 0 A 50 25 0 0 1 200 500 z');
//    var waterBhide=paper.path('M'+(x1+1.5)+','+(y1+300)+'l 247 0').attr({'stroke':'#11c9f2','stroke-width':4});
//    bwater.attr({'fill':'#11c9f2','stroke-width':3 });
//    
//    var inlet = paper.path('M'+(x1+125)+' '+(y1-62)+'l 0  -80 l 100 0 l 0 -15 l 15 15 l 0 -30 l -10 0 l 20 0 l-10 0 l 0 30 l 15 15 l 0 -30 l -30 30 l 0 -15 l 0 15 l 30 -30 l 0 15 l 100 0');          
//        inlet.attr({'stroke-width':3 } );
//        paper.text(530, 80, "Inlet").attr({'font-size': 24});
//        var d1= paper.path('M'+(x1+225)+' '+(y1-142)+'l 0 -15 l 30 30 l 0 -30 l -30 30 l 0 -15 ');
//        
//    var outlet =paper.path('M'+(x1+125)+' '+(y1+363)+'l 0  80 l 100 0 l 0 -15 l 15 15 l 0 -30 l -10 0 l 20 0 l-10 0 l 0 30 l 15 15 l 0 -30 l -30 30 l 0 -15 l 0 15 l 30 -30 l 0 15 l 100 0');        
//        outlet.attr({'stroke-width':3 } );
//        paper.text(530, 618, "Outlet").attr({'font-size': 24});   
//        var d2= paper.path('M'+(x1+225)+' '+(y1+443)+' l 0 -15 l 30 30 l 0 -30 l -30 30 l 0 -15 ');
//        
//      //  upperArc = paper.path('M'+(x1+25)+' '+(y1-18)+ 'l 0 0 q 68 -50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
//	
//  //  lowerArc = paper.path('M'+(x1+25)+' '+(y1+200)+ 'l 0 0 q 68 50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});
// 
//  //increase water level
//   var rect1= paper.rect(x1+360, y1+55, 60, 30).attr({'fill': '#f29db1',opacity1: 0.3 });  
//    paper.text(590,270,'+').attr({'font-size': 30});
//  //Decrease water level  
//    var rect2= paper.rect(x1+450, y1+55, 60, 30).attr({'fill': '#f29db1',opacity1: 0.3 });  
//     paper.text(680,266,'-').attr({'font-size': 40}); 
//  
////  waterlevel(200,500,color);
//
//  
//function waterlevel(x1,y1,color){
//    paper.rect(x1+2,y1-20,245,20).attr({ cx: 200, cy1:290, fill: color,'stroke':color});
//}
//  	var hname = paper.text((x1-50), (y1+340), "H"+" "+y1).attr({'font-size' : 15});
//  	var bwline1 = paper.path('M'+(x1-20)+' '+(y1+300)+'l 10 0');
//	var bwline2 = paper.path('M'+(x1-15)+' '+(y1+300)+'l 0 40');
//	bwline1 = paper.path('M'+(x1-20)+' '+(y1+340)+'l 10 0');
//  	
//function height(x1, y1){	
//	 line1 = paper.path('M'+(x1)+' '+(y1)+'l 10 0');
//	 line2 = paper.path('M'+(x1+5)+' '+(y1)+'l 0 20');
//	 line3 = paper.path('M'+(x1)+' '+(y1+20)+'l 10 0');
//}
//
// 
// function LC_LabelValue(x1, y1, text, color){
//	
//	paper.text(x1, y1, text).attr({
//			stroke : color,
//			'font-size' : 10,
//			"font-family": "sans-serif" 
//		}).toBack();	 
// };
//    
//    
//   // LC_LabelValue((x1 + 379), (y1 + 47),"12.52 mA", "green");  
//      var animd1 = Raphael.animation({ cx: 100, cy: 150, 'fill':'#ffffff'});
//  var waterH=200; 
//  
//    rect1.click(function(){
//      if(waterH>-100){
//      	waterlevel(x1,waterH+300,color);
//    	waterH=waterH-20;
//      	console.log('fill water ='+waterH);
//      	count=paper.text((x1-35),(waterH+321)," "+waterH+"%");
//     	height(x1-20,waterH+300);    
//      }
//     
//	  var anim = Raphael.animation({ cx: 100, cy: 150, 'fill':'green'});
//      d1.animate(anim);
//      d2.animate(animd1);
//
//	
//   })
//   
//   rect2.click(function(){
//	
//	if(waterH<200){
//		waterlevel(x1,waterH+300,color1);
//		waterH=waterH+20;
//		console.log('empty water ='+waterH);
//		count=paper.text((x1-35),(waterH+321)," "+waterH+ "%");
//		height(x1-20,waterH+300);
//	}
//	
//    var anim1 = Raphael.animation({ cx: 200, cy:340, fill: "#f0120e"},500);
//    //var animd2 = Raphael.animation({ cx: 100, cy: 150, 'fill':'#ffffff'});
//    d2.animate(anim1);
//    d1.animate(animd1);
//   
//    })
//}



	
	

}