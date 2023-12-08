function mimic2() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);
	console.log("hey");
	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 800;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('#canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('#canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	x = 50;
	y = 50;
	step = 1;
	id = 1;
	ans = 0;

//	thickness = thickType;
//	pressure = pressure;
//	radius = radiusType;
	
	pressure = parseInt(frequencySelect);
	thickness = parseInt(distSelect);
	radius = parseInt(fluidSelect);
	//	smallR = 10;

	poisRto = 0.25;
	E = 2.07 * Math.pow(10, 5);
	console.log("young module" + E);
	




	

	var tor_sen;
	if (step == 1) {
		console.log("y"+y_ans);
		tor_sen = paper.text(x + 250, y + 20, "Calculate radial stress  at r = 60mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'red'

			});
		smallR = 60;
		divR = smallR / radius;
		console.log("divsion r " + divR);
		Sr = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
		console.log("xvlaue " + Sr);
		step = 2;
		ans = Sr;
	}

	function step2(x, y) {
//		x = 50;
//		y = 50;
		
		id = 1;
		tor_sen = paper.text(x + 250, y + 20, "Calculate radial stress  at r = 60mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'green'

			});

		var step2 = paper.text(x + 250, y + 60, "Calculate tangential stress  at r = 60mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'red'

			});
		St = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
		console.log("xvlaue " + St);

		step = 2;
		ans = St;
		step2_div = '<div class="row" id="step2_row">'
			+ '<div class="col-sm-4">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculated answer is </label>'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<input type="text" id="stp2Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<br><button type="submit" class="btn btn-danger" id="step2_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#calculationModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step2_div);


		$("#step2_div_submit").click(function() {
			
			var speedAns = $("#stp2Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans.toFixed(2);
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step2_div_submit").prop("disabled", true);
				step3(x,y);
				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

				alert("Entered value is incorrect.Try again ");


			}


		} else if (id == 4) {

			alert("St = 3PR"+unescape('%B2')+"V/8t"+unescape('%B2')+"[(1/v + 1) - (1/v + 3)(r/R)"+unescape('%B2')+"]")

		} else {
			speedAns = $("#stp2Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#step2_div_submit").prop("disabled", true);
				step3(x,y);
				
				event.stopPropagation();



			} else {
				checkAns = 0;
				alert("correct answer is " + flow);

			}
		}
		id++;

			
		});
		
		}
		function step3(x,y){
			
			id = 1;
			
		var step2 = paper.text(x + 250, y + 60, "Calculate tangential stress  at r = 60mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'green'

			});
			var step3 = paper.text(x + 250, y + 90, "Calculate radial stress  at r = 10mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'red'

			});
			
			smallR = 10;
			divR = smallR / radius;
			Sr = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
			console.log("xvlaue " + Sr);
			step = 2;
			ans = Sr;
			
		step3_div = '<div class="row" id="step3_row">'
			+ '<div class="col-sm-4">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculated answer is   </label>'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<input type="text" id="stp3Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<br><button type="submit" class="btn btn-danger" id="step3_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#calculationModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step3_div);
		$("#step3_div_submit").click(function() {
			
			var speedAns = $("#stp3Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans.toFixed(2);
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step3_div_submit").prop("disabled", true);
				step4(x,y);
				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

				alert("Entered value is incorrect.Try again ");


			}


		} else if (id == 4) {

			alert("Sr = 3PR"+unescape('%B2')+"V/8t"+unescape('%B2')+"[(1/v + 1) - (3/v + 1)(r/R)"+unescape('%B2')+"]")

		} else {
			speedAns = $("#stp3Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#step3_div_submit").prop("disabled", true);
				step4(x,y);
				
				event.stopPropagation();



			} else {
				checkAns = 0;
				alert("correct answer is " + flow);

			}
		}
		id++;

			
			
				
		});
		}

		function step4(x,y){
			
			id = 1;
			var step3 = paper.text(x + 250, y + 90, "Calculate radial stress  at r = 10mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'green'

			});
			
			var step4 = paper.text(x + 250, y + 120, "Calculate tangential stress  at r = 10mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'red'

			});
			
			smallR = 10;
			divR = smallR / radius;
			St = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
			console.log("xvlaue " + St);

	
			ans = St;
			
			step4_div = '<div class="row" id="step4_row">'
			+ '<div class="col-sm-4">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculated answer is  </label>'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<input type="text" id="stp4Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<br><button type="submit" class="btn btn-danger" id="step4_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#calculationModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step4_div);
		$("#step4_div_submit").click(function() {
			
			var speedAns = $("#stp4Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans.toFixed(2);
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step4_div_submit").prop("disabled", true);
				step5(x,y);
				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

				alert("Entered value is incorrect.Try again ");


			}


		} else if (id == 4) {

			alert("St = 3PR"+unescape('%B2')+"V/8t"+unescape('%B2')+"[(1/v + 1) - (1/v + 3)(r/R)"+unescape('%B2')+"]")

		} else {
			speedAns = $("#stp4Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#step4_div_submit").prop("disabled", true);
				step5(x,y);
				
				event.stopPropagation();



			} else {
				checkAns = 0;
				alert("correct answer is " + flow);

			}
		}
		id++;
	
		});
		
		}

		function step5(x,y){
			
			id = 1;
			var step4 = paper.text(x + 250, y + 120, "Calculate tangential stress  at r = 10mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'green'

			});
			var step5 = paper.text(x + 250, y + 150, "Calculate Er  at r = 60mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'red'

			});
			
			smallR = 60;
			divR = smallR / radius;
			Sr = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
			console.log("xvlaue " + Sr);
			St = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
			console.log("xvlaue " + St);
			Er = (Sr - 0.25 * St) / E;
			console.log("er value " + Er);
			ans = Er;
			
			step5_div = '<div class="row" id="step5_row">'
			+ '<div class="col-sm-4">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculate answer is   </label>'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<input type="text" id="stp5Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<br><button type="submit" class="btn btn-danger" id="step5_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#calculationModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step5_div);
		$("#step5_div_submit").click(function() {
			
			var speedAns = $("#stp5Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans.toFixed(2);
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step5_div_submit").prop("disabled", true);
				step6(x,y);
				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

				alert("Entered value is incorrect.Try again ");


			}


		} else if (id == 4) {

			alert("Er = (Sr - 0.25 * St) / E")

		} else {
			speedAns = $("#stp5Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;
				step6(x,y);
				$("#step5_div_submit").prop("disabled", true);
			
				
				event.stopPropagation();



			} else {
				checkAns = 0;
				alert("correct answer is " + flow);

			}
		}
		id++;
	
		});
			
			
		}
		
		function step6(x,y){
			
			
			id = 1;
			var step5 = paper.text(x + 250, y + 150, "Calculate Er  at r = 60mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'green'

			});
			var step6 = paper.text(x + 250, y + 180, "Calculate Et  at r = 10mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'red'

			});
			
			smallR = 10;
			divR = smallR / radius;
			Sr = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (3 / 0.25 + 1) * (divR * divR));
			console.log("xvlaue " + Sr);
			St = (3 * pressure * radius * radius * 0.25) / (8 * thickness * thickness) * ((1 / 0.25 + 1) - (1 / 0.25 + 3) * (divR * divR));
			console.log("xvlaue " + St);
			Et = (St - 0.25 * Sr) / E;
				console.log("er value " + Et);
			ans = Et;
			
			
			step6_div = '<div class="row" id="step6_row">'
			+ '<div class="col-sm-4">'
			+ '<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculated answer is :  </label>'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<input type="text" id="stp6Ans" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			+ '</div>'
			+ '<div class="col-sm-4">'
			+ '<br><button type="submit" class="btn btn-danger" id="step6_div_submit" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#calculationModal"  >Submit</button>'
			+ '</div>'
			+ '</div>'
		$("#main-div-conf").append(step6_div);
		$("#step6_div_submit").click(function() {
			
			var speedAns = $("#stp6Ans").val().trim();
		console.log("ans check" + speedAns);
		flow = ans.toFixed(2);
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#step6_div_submit").prop("disabled", true);
				step7(x,y);
				
				
				//event.stopPropagation();
			} else if (speedAns != flow) {

				alert("Entered value is incorrect.Try again ");


			}


		} else if (id == 4) {

			alert("Et = (St - 0.25 * Sr) / E")

		} else {
			speedAns = $("#stp6Ans").val().trim();

			if (speedAns == flow) {
				checkAns = 0;
				step7(x,y);
				$("#step6_div_submit").prop("disabled", true);
			
				
				event.stopPropagation();



			} else {
				checkAns = 0;
				alert("correct answer is " + flow);

			}
		}
		id++;
	
		});
			
			
			
		}
		
		function step7(x,y){
			var step6 = paper.text(x + 250, y + 180, "Calculate Et  at r = 10mm and submit the answer")
			.attr({
				'font-size': 20,
				'fill': 'green'

			});
		}


	$("#btnAnsCheck").click(function() {

		var speedAns = $("#checkAns").val().trim();
		console.log("ans check" + speedAns);
		flow = ans.toFixed(2);
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);
				
				step2();

				//event.stopPropagation();
			} else if (speedAns != flow) {

				alert("Entered value is incorrect.Try again ");


			}


		} else if (id == 4) {

			alert("Sr = 3PR"+unescape('%B2')+"V/8t"+unescape('%B2')+"[(1/v + 1) - (3/v + 1)(r/R)"+unescape('%B2')+"]")

		} else {
			speedAns = $("#checkAns").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);

				step2();
			
				event.stopPropagation();



			} else {
				checkAns = 0;
				alert("correct answer is " + flow);

			}
		}
		id++;
	});



}