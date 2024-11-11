var Er = 0;
var Et = 0;
array = [];

console.log(data);
function mimic2() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);
	resetDivSize();
	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 800;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
	
	$("#delete-btn").prop("hidden",true);
	$("#validateCon").prop("hidden",true);
	$("#tableDesign").html("");
	x = 50;
	y = 0;
	step = 1;
	id = 1;
	ans = 0;

	pressure = parseInt(frequencySelect);
	thickness = parseInt(distSelect);
	radius = parseInt(fluidSelect);
	console.log(pressure);
	console.log(TimeMasterJson);
	//	smallR = 10;
	
//	var p1 = masterJson.demo[0].frequency

	poisRto = 0.25;
	E = 2.07 * Math.pow(10, 5);
	console.log("young module" + E);
	smallR = ri;
	divR = smallR / radius;
	
	calcnt = 0;



	

	var tor_sen;
	if (step == 1) {
		console.log("y"+y_ans);

		smallR = ri;
		divR = smallR / radius;
		console.log("divsion r " + divR);
		Sr = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
		console.log("xvlaue " + Sr);
		step = 2;
		ans1 = Sr.toFixed(2);
		ans = parseFloat(ans1);
	}

	function step2(x, y) {
		x = 50;
		y = 50;
		
		id = 1;
	
		St = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
		console.log("xvlaue " + St);

		step = 2;
		ans1 = St.toFixed(2);
		ans = parseFloat(ans1);
		step2_div = '<div class="row" id="timeAnswer">'
			+ '<div class="col-sm-6">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculate tangential stress  at Ri = '+ri+'mm </label>'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<input type="text" id="stp2Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<br><button type="submit" class="btn btn-danger" id="step2_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step2_div);


		$("#step2_div_submit").click(function() {
			calcnt++;
			var speedAns = $("#stp2Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans;
		if (speedAns ==" " || speedAns == isAlphabetical(speedAns)){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter numeric value ");
			}else{
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step2_div_submit").prop("disabled", true);
				step3(x,y);
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);

				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

//				alert("Entered value is incorrect.Try again ");
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
				


			}


		} else if (id == 4) {

			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/F_5.png" class="img-responsive" alt="Cinque Terre">'
			$("#MsgModal").html(modelImg);

		} else {
			speedAns = $("#stp2Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#step2_div_submit").prop("disabled", true);
				step3(x,y);
				
				event.stopPropagation();
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);




			} else {
				checkAns = 0;
				
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + flow);

			}
		}
		}
		id++;

			
		});
		
		}
		function step3(x,y){
			
			id = 1;

			
			smallR = rt;
			divR = smallR / radius;
			Sr1 = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
			console.log("xvlaue " + Sr);
			step = 2;
			ans1 = Sr1.toFixed(2);
			ans = parseFloat(ans1);
		step3_div = '<div class="row" id="timeAnswer">'
			+ '<div class="col-sm-6">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculate radial stress  at Ro = '+rt+' mm  </label>'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<input type="text" id="stp3Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<br><button type="submit" class="btn btn-danger" id="step3_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step3_div);
		$("#step3_div_submit").click(function() {
			calcnt++;
			var speedAns = $("#stp3Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans;
		if (speedAns ==" " || speedAns == isAlphabetical(speedAns)){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter numeric value");
			}else{
				
	
			
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step3_div_submit").prop("disabled", true);
				step4(x,y);
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);

				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

//				alert("Entered value is incorrect.Try again ");
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");


			}


		} else if (id == 4) {

			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/F_4.png" class="img-responsive" alt="Cinque Terre">'
			$("#MsgModal").html(modelImg);


		} else {
			speedAns = $("#stp3Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#step3_div_submit").prop("disabled", true);
				step4(x,y);
				
				event.stopPropagation();

				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);


			} else {
				checkAns = 0;
//				alert("correct answer is " + flow);
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + flow);


			}
		}
				}
		id++;

			
			
				
		});
		}

		function step4(x,y){
			
			id = 1;
			
			smallR = rt;
			divR = smallR / radius;
			St1 = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
			console.log("xvlaue " + St);

	
			ans1 = St1.toFixed(2);
			ans = parseFloat(ans1);
			
			step4_div = '<div class="row" id="timeAnswer">'
			+ '<div class="col-sm-6">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate tangential stress  at Ro = '+rt+'mm  </label>'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<input type="text" id="stp4Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<br><button type="submit" class="btn btn-danger" id="step4_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step4_div);
		$("#step4_div_submit").click(function() {
			calcnt++;
			var speedAns = $("#stp4Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans;
		if (speedAns ==" " || speedAns == isAlphabetical(speedAns)){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter numeric value");
			}else {
				
		
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step4_div_submit").prop("disabled", true);
				step5(x,y);
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);

				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

//				alert("Entered value is incorrect.Try again ");
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");


			}


		} else if (id == 4) {

			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/F_5.png" class="img-responsive" alt="Cinque Terre">'
			$("#MsgModal").html(modelImg);

		} else {
			speedAns = $("#stp4Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#step4_div_submit").prop("disabled", true);
				step5(x,y);
				
				event.stopPropagation();
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);




			} else {
				checkAns = 0;
				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + flow);
			}
		}
		
			}
		id++;
	
		});
		
		}

		function step5(x,y){
			
			id = 1;
			
			
			smallR = rt;
			divR = smallR / radius;
			Sr = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
			console.log("xvlaue " + Sr);
			St = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
			console.log("xvlaue " + St);
			Er = (Sr - 0.25 * St) / E;
			console.log("er value " + Er);
			ans1 = Er.toFixed(6);
			ans = parseFloat(ans1);
			step5_div = '<div class="row" id="timeAnswer">'
			+ '<div class="col-sm-6">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculate Radial Strain  at Ro = '+rt+'mm   </label>'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<input type="text" id="stp5Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<br><button type="submit" class="btn btn-danger" id="step5_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step5_div);
		$("#step5_div_submit").click(function() {
			calcnt++;
			var speedAns = $("#stp5Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans;
		
		if (speedAns ==" " || speedAns == isAlphabetical(speedAns)){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter numeric value");
			}else
			{
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step5_div_submit").prop("disabled", true);
				step6(x,y);
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);

				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

//				alert("Entered value is incorrect.Try again ");
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");


			}


		} else if (id == 4) {

			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/F_2.png" class="img-responsive" alt="Cinque Terre">'
			$("#MsgModal").html(modelImg);

		} else {
			speedAns = $("#stp5Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;
				step6(x,y);
				$("#step5_div_submit").prop("disabled", true);
			
				
				event.stopPropagation();
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);




			} else {
				checkAns = 0;
				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + flow);

			}
		}
		}
		id++;
	
		});
			
			
		}
		
		function step6(x,y){
			
			
			id = 1;
			
		
			
			smallR = ri;
			divR = smallR / radius;
			Sr1 = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
			console.log("xvlaue " + Sr);
			St1 = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
			console.log("xvlaue " + St);
			Et = (St1 - 0.25 * Sr1) / E;
				console.log("er value " + Et);
			ans1 = Et.toFixed(6);
			ans = parseFloat(ans1);
			
			step6_div = '<div class="row" id="timeAnswer">'
			+ '<div class="col-sm-6">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculate Tangential Strain  at Ri = '+ri+' mm :  </label>'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<input type="text" id="stp6Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-3">'
			+ '<br><button type="submit" class="btn btn-danger" id="step6_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
			+'<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextWb" hidden ><b>NEXT LEVEL </b></button></div>' 
		$("#main-div-conf").append(step6_div);
		$("#step6_div_submit").click(function() {
			calcnt++;
			var speedAns = $("#stp6Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans;
		if (speedAns ==" " || speedAns == isAlphabetical(speedAns)){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter numeric value");
			} else { 
		if (id <= 3) {
			
			if (speedAns == flow) {
				checkAns = 0;

				$("#step6_div_submit").prop("disabled", true);
				step7(x,y);
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);

				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

//				alert("Entered value is incorrect.Try again ");
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");


			}


		} else if (id == 4) {

			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/F_3.png" class="img-responsive" alt="Cinque Terre">'
			
			$("#MsgModal").html(modelImg);

		} else {
			speedAns = $("#stp6Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;
				step7(x,y);
				$("#step6_div_submit").prop("disabled", true);
			
				
				event.stopPropagation();
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);




			} else {
				checkAns = 0;
				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + flow);

			}
		}
		}
		id++;
	
		});
			
			
			
		}
		
		calculation = {};
		function step7(x,y){
		
			
			$("#nextWb").prop('hidden',false); 
			
			$("#nextWb").click(function() {
//				calculationRegister();
					
					calculation.calculation = calcnt;
					data.calculation = calculation;
					console.log(data);
					mainPage3();
					tableCreateFlow(TimeMasterJson);
			});
     
		}
		round(x+50,y+100);
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
		
		curve(x+50,y-50);
		function curve(x,y){
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
		}
		}
		


	$("#btnAnsCheck").click(function() {
		calcnt++;
		var speedAns = $("#checkAns").val().trim();
		console.log("ans check" + speedAns);
		flow = ans;
		
		if (speedAns ==" " || speedAns == isAlphabetical(speedAns)){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter numeric value");
			}
			else { 
			if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);

				
				step2();

				//event.stopPropagation();
			} else if (speedAns != flow) {

			
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");


			}


		} else if (id == 4) {

			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/F_4.png" class="img-responsive" alt="Cinque Terre">'
			$("#MsgModal").html(modelImg);

		} else {
			speedAns = $("#checkAns").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);

				step2();
			
				event.stopPropagation();
				$("#submitErrorCheck").prop("disabled",true);
				 $("#errorCheck").prop("disabled",true);
				 $("#senCheck").prop("hidden",false);




			} else {
				checkAns = 0;
				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + flow);
			
			}
		}
		}
		id++;
	});
	calculationRegister();
	function calculationRegister(){
		
//	for(var i = 0 ; i< TimeMasterJson.demo.length; i++){
	for(var i = 1 ; i< 11; i++){
		tempJson={};
//		var press = TimeMasterJson.demo[i].frequency ;
		var press = i
		smallR = rt;
		divR = smallR / radius;
		var Sr = (3 * press * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
		var St = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
		smallR1 = ri;
		divR1 = smallR1 / radius;
		var Sr1 = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR1 * divR1));
		var St1 = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR1 * divR1));
		var Er = (Sr - 0.25 * St) / E;
		var Et = (St1 - 0.25 * Sr1) / E;
		console.log(press+"pressure"+Sr+"sr");
						tempJson.preesure = press;
						tempJson.sr = Sr;
						tempJson.st = St;
						tempJson.sr1 = Sr1;
						tempJson.st1 = St1;
						tempJson.er = Er;
						tempJson.et = Et;
						tempJson.er1 = Er.toFixed(6);
						tempJson.et1 = Et.toFixed(6);
						array.push(tempJson);
						TimeMasterJson.reading = array;
						console.log(TimeMasterJson);
						
		}				
					
						
						
	


}


}