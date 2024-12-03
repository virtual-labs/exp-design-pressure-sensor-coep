function bridgeCalculate(){
	$("#canvas-div").html('');
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
	x = 100;
	y = 50;
	flg = 3;
	corrOut = 0;
	var txt;
	id = 1;
	var outVolt;
		array1 = [];
		var readLeng = TimeMasterJson.reading.length;
		console.log(readLeng+"reading cound");
		var out = (voltage * gfactor)/4 ;
		var Er = er;
		var Et = et;
		console.log(Er+"er"+Et)
			function calculateVolatge(){
		for(var i = 0 ; i< TimeMasterJson.reading.length; i++)
		{
			tempJson={};
			var pressure = TimeMasterJson.reading[i].preesure;
			var er = TimeMasterJson.reading[i].er;
			var et = TimeMasterJson.reading[i].et;
			var out1 = et+et-er-er;
			var output = out1* out;
			
			var max = -2;
			var min = 2;
			var rand1 = Math.floor(Math.random() * (max - min) ) + min;
			var rand = output * 2/100;
			var volterr = output + rand;
			tempJson.volt = output;
			tempJson.volt1 = output.toFixed(6);
			tempJson.err = volterr;
			tempJson.err1 = volterr.toFixed(6);
			tempJson.press = pressure;
			tempJson.rand = rand;
			
			array1.push(tempJson);
			TimeMasterJson.volt = array1;
			console.log(TimeMasterJson);
		}
		}
		calculateVolatge();
			
		var out1 =  Et+Et-Er-Er;
		outVolt = (out * out1).toFixed(2);
		outVolt = parseFloat(outVolt);
		
//		Volt(TimeMasterJson);
		function Volt(TimeMasterJson){
		if (voltflag == readLeng-1){
		$("#wiston").prop('hidden',true);	
		}else if (voltflag == 1){
		out1 =  Et+Et-Er-Er;
		outVolt = out * out1;
		outVolt = (out * out1).toFixed(2);
		outVolt = parseFloat(outVolt);
		
		}
			
		else{
			
		outVolt1 = TimeMasterJson.volt[voltflag].volt;
		outVolt = (outVolt1).toFixed(2);
		outVolt = parseFloat(outVolt);
		Er = TimeMasterJson.reading[voltflag].er;	
		Et = TimeMasterJson.reading[voltflag].et;
		
		console.log(voltflag);
		console.log(Er);
		console.log(outVolt);
		}
		}
	
	
	$("#wiston").prop('hidden',false);
//	var paper = new Raphael(document.getElementById('canvas-div'),1000,1000);
	 wheatStone = paper.image("images/wheatStoneBridgeE1.png",(x-50), (y-100),700, 600);
	 var l1 = paper.path("M "+(x-50)+" "+(y-50)+" l 700 0 l 0 450 l -700 0 z ").attr({ 'stroke': '#000', 'stroke-width': 1,'stroke-dasharray': '--'});
	 var l2 = paper.path("M "+(x-50)+" "+(y+450)+" l 700 0 l 0 250 l -700 0 z ").attr({ 'stroke': '#000', 'stroke-width': 1,'stroke-dasharray': '--'});
	 var a = paper.path("M "+(x+50)+" "+(y+450)+" l 0 -40 l 10 10 l -10 -10 l -10 10 ").attr({ 'stroke': '#000', 'stroke-width': 2});
	 
//	 var r1 = paper.circle(x+327,y+160,35).attr({'stroke' : '#000' , 'stroke-width' : 3 });
	 var r2 = paper.circle(x+228,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff"});
	 var r3 = paper.circle(x+423,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff" });
	 if(flg==1){
	 paper.text(x+280,y+108,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x+375,y+212,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
 	 paper.text(x+375,y+107,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     paper.text(x+278,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     
//	  paper.text(x+280,y+100,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//	 paper.text(x+385,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
// 	 paper.text(x+380,y+100,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//	 paper.text(x+270,y+215,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});

	 
	 }
	 if(flg == 2){
	 paper.text(x+280,y+108,Er.toFixed(2)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x+375,y+212,Er.toFixed(2)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
 	 paper.text(x+375,y+107,Et.toFixed(2)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     paper.text(x+278,y+212,Et.toFixed(2)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x-6,y+159,voltage+"V").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});
     }
     
     
     if(flg == 3){
	 paper.text(x+180,y+90,Er.toFixed(6)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x+180,y+230,Et.toFixed(6)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
 	 paper.text(x+470,y+90,Et.toFixed(6)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     paper.text(x+470,y+230,Er.toFixed(6)).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x-6,y+159,voltage+"V").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});
     if (corrOut == outVolt){
      txt = paper.text(x+328,50+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#fcb603"});
//     r1.attr({"fill":"green"});
     }else{
	 txt = paper.text(x+328,50+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#e82744"});
//     r1.attr({"fill":"red"});
    
     }
     
     y2 = 420;
     y =  y2;
     x2 = -50;
     x = x2;
     
     var diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l 0 0").attr({ 'stroke': '#000', 'stroke-width': 10});
 
  var lenx ;
  var thik,x1,y1;
  var lenx ;
  var thik,x1,y1;
  pressure = Pressure1;
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
}

		
		
		
	
		
		
//			console.log("output"+out);
		console.log("output"+outVolt);
		var voltcnt = 0 ;
     $("#vltOutput").click(function() {
		 		voltcnt++;
			 	flg = 3;
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns=="" || flowAns == isAlphabetical(flowAns)){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					txt = paper.text(100+328,50+159,flowAns).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#e82744"});
					
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == outVolt) {
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct answer</b> ");
							$("#timeAnswer").prop('hidden',true);
							id = 1;
							
							corrOut = outVolt;
							txt.remove();
							 txt = paper.text(100+328,50+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#fcb603"});
//    						 r1.attr({"fill":"green"});
							
//							addToMasterJSON();
							$("#CalTime").val('');
							wheatarray = {};
					wheatarray.correct = voltflag;
					wheatarray.wrong= voltcnt;
					data.whtStone = wheatarray;
					$("#next").prop('hidden',false);
							
						} else if (flowAns != outVolt) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					txt.remove();
					txt = paper.text(100+328,50+159,flowAns).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#e82744"});
//							
						
						}


					} else if (id == 4)
					 {	
						  modelImg = '<img src="images/F_6.png" class="img-responsive" alt="Cinque Terre">'
						$("#modelMsg123").html(modelImg);

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == outVolt) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
//							addToMasterJSON();
							$("#CalTime").val('');
							id = 1;
							
							corrOut = outVolt;
							txt.remove();
							wheatarray = {};
					wheatarray.correct = voltflag;
					wheatarray.wrong= voltcnt;
					data.whtStone = wheatarray;
					$("#next").prop('hidden',false);
						txt = paper.text(100+328,50+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#fcb603"});
//    						 r1.attr({"fill":"green"});
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct answer is  " +outVolt+'</b>');
						}
					}
					id++;
					}
					
//					
				});
				voltflag++;
				
				if(voltflag == 2){
					wheatarray = {};
					wheatarray.correct = voltflag;
					wheatarray.wrong= voltcnt;
					data.whtStone = wheatarray;
					$("#next").prop('hidden',false);
				}
				
				  $("#next").click(function(){
					  
					  graphReading();
					  
				  });

}
}

