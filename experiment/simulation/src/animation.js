
var frequency;
var distanceInput;
var speedOFsound;
var distPath;
var speed;
var calculateTime;
var ArrayJson=[];
var TimeMasterJson={};
function animation(frequencySelect,distSelect,fluidSelect){
	$("#canvas-div").html('');	
    $("#centerText1").html('WORKING OF PRESSURE SENSOR ');
    $("#centerText").html('CONFIGURATION');

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
	
var x=10;
var y=-50;
pressure = parseInt(frequencySelect);
thickness = parseInt(distSelect);
radius = parseInt(fluidSelect);

 	smallR = 0 ;
	poisRto = 0.25;
	E = 2.07 * Math.pow(10, 5);
	console.log("young module"+E);
	diffR = (Math.pow(radius,2)- Math.pow(smallR,2));
	console.log("radius diff"+diffR);
	numY = 3 * pressure *(1 - Math.pow(poisRto, 2))* Math.pow(diffR,2);
	console.log("numarator"+numY);
	denoY = 16 * E *(Math.pow(thickness, 3));
	console.log("denostor"+denoY);
	y_ans = numY / denoY;
	calculateTime = y_ans.toFixed(2);
	console.log("y"+y_ans);
	

console.log("Time Calculation"+calculateTime)


var diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l 0 0").attr({ 'stroke': '#000', 'stroke-width': 10});
 
  var lenx ;
  var thik,x1,y1;
if (thickness == 1){
	 thik = 2.2;
	 y1 = 195;
} else if (thickness == 2){
	 thik = 4;
	 y1 = 194;
}else if (thickness == 3){
	 thik = 6;
	 y1 = 194;
}else if (thickness == 4){
	  thik = 8;
	  y1 = 193;
}
var pt ; var  pt1; var dep;
if (radius == 70 ){
	std2(x-100,y);
	lenx = 250;
	diaphramStd(x,y);
	pt = 230;
	pt1 = 125;
	x1 = 680;
}else if (radius == 40){
	std2(x-400,y);
	lenx = 100;
	diaphramStd(x,y);
	pt = 80;
	pt1 = 40;
	x1 = 380;
}else if (radius == 50){
	std2(x-300,y);
	lenx = 150;
	diaphramStd(x,y);
	pt = 130;
	pt1 = 75;
	x1 = 480;
}else if (radius == 60){
	std2(x-200,y);
	lenx = 200;
	diaphramStd(x,y);
	pt = 180;
	pt1 = 100;
	x1 = 580;
}else if (radius == 80){
	std2(x,y);
	lenx = 350;
	diaphramStd(x,y);
	pt = 300;
	pt1 = 63;
	x1 = 780;
	
}
 
 
 
 var arrow  = paper.image("images/arrow.png", (x+200+pt), (y+150),50, 30);
	arrow.rotate(270);
	
	var p_text = paper.text(x+220+pt, y + 100, pressure).attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 20});
	var l = paper.path("M "+(x+200)+" "+(y+280)+" l 10 -10 l -10 10 l 10 10").attr({ 'stroke': '#000', 'stroke-width': 2});
	var l = paper.path("M "+(x+200+lenx)+" "+(y+280)+" l -10 -10 l 10 10 l -10 10").attr({ 'stroke': '#000', 'stroke-width': 2});
	var l = paper.path("M "+(x+200)+" "+(y+280)+" l "+lenx+" 0 l").attr({ 'stroke': '#000', 'stroke-width': 2});
	var r_text = paper.text(x+220+pt1, y + 300, radius).attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 20});
	var l = paper.path("M "+(x+200)+" "+(y+280)+" l "+lenx+" 0 l").attr({ 'stroke': '#000', 'stroke-width': 2});
	var t_text = paper.text(x+150, y + 200, thickness).attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 20});
	var l = paper.path("M "+(x+160)+" "+(y+200)+" l 20 0 M "+(x+160)+" "+(y+205)+" l 20 0").attr({ 'stroke': '#000', 'stroke-width': 2});
	var l = paper.path("M "+(x+170)+" "+(y+170)+" l 0 20 l 8 -8 l -8 8 l -8 -8 M "+(x+170)+" "+(y+230)+" l 0 -20 l 8 8 l -8 -8 l -8 8 ").attr({ 'stroke': '#000', 'stroke-width': 2});
	var r = paper.path("M "+(x+205)+" "+(y+y1)+" l 0 8 l 13 2 l 0 -8 z").attr({ 'stroke': 'black', 'stroke-width': 0.5,'fill':'#a86632'});
	var r1 = paper.path("M "+(x+x1)+" "+(y+y1)+" l 0 8 l 10 2 l 0 -8 z").attr({ 'stroke': 'black', 'stroke-width': 0.5,'fill':'#a86632'});
	
	
	function diaphramStd(x,y){
		var l = paper.path("M "+(x+200)+" "+(y+150)+" l 0 100 l").attr({ 'stroke': '#000', 'stroke-width': 4});
		
		var s = paper.path("M "+(x+200)+" "+(y+150)+" l -20 20 M"+(x+200)+" "+(y+170)+"l -20 20 M "+(x+200)+" "+(y+190)+"l -20 20 M "+(x+200)+" "+(y+210)+"l -20 20 M"
		+""+(x+200)+" "+(y+230)+"l -20 20 ").attr({ 'stroke': '#000', 'stroke-width': 1});
		 diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l "+lenx+" 0").attr({ 'stroke': '#000', 'stroke-width': thik});

//		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 35 12 1 0 0 "+(x+800)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': 4});
	}

	
	function std2(x,y){
		var l1 = paper.path("M "+(x+800)+" "+(y+150)+" l 0 100").attr({ 'stroke': '#000', 'stroke-width': 4});
		var s1 = paper.path("M "+(x+800)+" "+(y+150)+" l 20 20 M"+(x+800)+" "+(y+170)+"l 20 20 M "+(x+800)+" "+(y+190)+"l 20 20 M "+(x+800)+" "+(y+210)+"l 20 20 M"+(x+800)+" "+(y+230)+"l 20 20").attr({ 'stroke': '#000', 'stroke-width': 1});
//		diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l 400 0").attr({ 'stroke': '#000', 'stroke-width': 10});
	}
	diaphramCurve(x,y);
	function diaphramCurve(x,y){
//		var x= x1+244;
//			var y=y1+115;
		  diaLine.hide();
//		var l = paper.path("M "+(x+200)+" "+(y+150)+" l 0 100 l").attr({ 'stroke': '#000', 'stroke-width': 4});
//		var l1 = paper.path("M "+(x+800)+" "+(y+150)+" l 0 100").attr({ 'stroke': '#000', 'stroke-width': 4});
//		var l1 = paper.path("M "+(x+200)+" "+(y+200)+" l 600 0").attr({ 'stroke': '#000', 'stroke-width': 10});
	if (pressure == 1){
		dep = 60;
	}else if (pressure == 2){
		dep = 70;
	}else if (pressure == 3){
		dep = 80;
	}else if (pressure == 4){
		dep = 90;
	}else if (pressure == 5){
		dep = 100;
	}else if (pressure == 6){
		dep = 110;
	}else if (pressure == 7){
		dep = 120;
	}else if (pressure == 8){
		dep = 130;
	}else if (pressure == 9){
		dep = 140;
	}else if (pressure == 10){
		dep = 150;
	}
	 
	if (radius == 70 ){
		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 300 "+dep+" 0 0 0 "+(x+700)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': thik});
	}else if (radius == 40){
		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 200 "+dep+" 0 0 0 "+(x+400)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': thik});
	}else if (radius == 50){
		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 200 "+dep+" 0 0 0 "+(x+500)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': thik});
	}else if (radius == 60){
		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 300 "+dep+" 0 0 0 "+(x+600)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': thik});
	}else if (radius == 80){
		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 200 "+20+" 0 0 0 "+(x+800)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': thik});
	}
		
		
		round(x,y+100);
		function round(x,y){
		var r1,r2;
		
		var Rad = 0;
		var x3 = 0;
		if (radius == 40 ){
			Rad = 100;
			x3 = 300;
			r1 = 20;
			r2 = 40;
		}else if (radius == 50){
			Rad = 150;
			x3 = 350;
			r1 = 30;
			r2 = 50;
		}else if (radius == 60){
			Rad = 200;
			x3 = 400;
			r1 = 50;
			r2 = 70;
		}else if (radius == 70){
			Rad = 250;
			x3 = 450;
			r1 = 70;
			r2 = 90;
		}else if (radius == 80){
			Rad = 140;
			x3 = 380;
			r1 = 90;
			r2 = 110;
		}
		
		if(ri == 10){
			r2 = 20;
		}else if (ri == 20){
			r2 = 40;
		}else if(ri == 30){
			r2 = 80;
		}else if (ri == 40){
			r2 = 100;
		}
		
		if(rt == 30){
			r1 =  80;
		}else if (rt == 40){
			r1 = 100;
		}else if(rt == 50){
			r1 = 120;
		}else if (rt == 60){
			r1 = 170;
		}
		
		var pump_circle = paper.circle(x+x3, y +450, r1).attr({ 'stroke': 'black', 'stroke-width': '3', 'stroke-dasharray': '--' });
		
		var pump1 = paper.circle(x+x3, y +450, r2).attr({ 'stroke': 'black', 'stroke-width': '3','stroke-dasharray': '--' });
		var pump2 = paper.circle(x+x3, y +450, Rad).attr({ 'stroke': 'black', 'stroke-width': '3' });
		var l1 = paper.path("M "+(x+x3)+" "+(y+450)+" l "+r2+" 0 l ").attr({ 'stroke': '#000', 'stroke-width': 1});
		var l2 = paper.path("M "+(x+x3)+" "+(y+450)+" l 0 "+r1+" l ").attr({ 'stroke': '#000', 'stroke-width': 1});
		var l3 = paper.path("M "+(x+x3)+" "+(y+450)+" l -"+Rad+" 0 l ").attr({ 'stroke': '#000', 'stroke-width': 1});
		var l1tx = paper.text(x+x3+r2+10, y + 450, "Ri").attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 10});
		var l2tx = paper.text(x+x3+10, y + 450+r1-10, "Ro").attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 10});
		var l3tx = paper.text(x+x3+10-Rad, y + 450+10, "R").attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 10});
		
		}

	}	
	
	





if(flag ==  0){
	$("#timeAnswer").prop('hidden',false);
}




//changenames= setInterval(names,3500);



}
function addToMasterJSON(){
	                  tempJson={};	
						tempJson.frequency=pressure;
						tempJson.distanceInput = thickness;
						tempJson.speedOFsound = radius;
						tempJson.calculateTime = calculateTime;
						ArrayJson.push(tempJson);
						TimeMasterJson.demo = ArrayJson;
						console.log(TimeMasterJson);
						tableCreate(TimeMasterJson);

}