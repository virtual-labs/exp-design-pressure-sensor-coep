
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
	var h = 600;

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
	
var x=100;
var y=100;
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



var USworking = paper.image("images/diaphragm-pressure.gif", (x+140), (y+10),430, 380);

//var distanceDig=paper.path("M "+(x+300)+" "+(y+460)+" "+"l "+(-distPath)+" 0 l 0 -25 l 0 50  l 0 -25  l "+(distPath)+" 0  "
//													   +"l "+(distPath)+" 0 l 0 -25 l 0 50   l 0 -25 "+(-distPath)).attr({'stroke-width':5});
// distText= paper.text((x+300),(y+440),"Distance ( "+distanceInput+" cm )").attr({'font-size':25,'stroke':'#800000'});;

//if(distanceInput==2){
//	
//	var txt=paper.text((x+300), (y-10),"Tnsmit / Receive").attr({'font-size':25,'stroke':'#800000'});
//	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
//    var objec_txt=paper.text((x+500), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
//}else if(distanceInput==50){
//	var USworking=paper.image("images/ultrasonic1.gif", (x+120), (y+10),500, 380);
//	var txt=paper.text((x+300), (y-10),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
//	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
//    var objec_txt=paper.text((x+550), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
//}else if(distanceInput==100){
//	var USworking=paper.image("images/ultrasonic1.gif", (x+70), (y-60), 600, 450);
//	var txt=paper.text((x+300), (y-10),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
//	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
//    var objec_txt=paper.text((x+550), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
//	
//}else if(distanceInput==200){
//	var USworking=paper.image("images/ultrasonic1.gif", (x+20), (y-140), 750, 550);
//	var txt=paper.text((x+300), (y-50),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
//	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
//    var objec_txt=paper.text((x+590), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
//	
//}else if(distanceInput==300){
//	var USworking=paper.image("images/ultrasonic1.gif", (x-30), (y-140), 900, 550);
//	var txt=paper.text((x+300), (y-50),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
//	var US_txt=paper.text((x+50), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
//    var objec_txt=paper.text((x+650), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
//}else{
//
//	var USworking=paper.image("images/ultrasonic1.gif", (x-90), (y-140), 1100, 550);
//	var txt=paper.text((x+300), (y-50),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
//	var US_txt=paper.text((x+30), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
//	var objec_txt=paper.text((x+710), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
//}


$("#timeAnswer").prop('hidden',false);


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