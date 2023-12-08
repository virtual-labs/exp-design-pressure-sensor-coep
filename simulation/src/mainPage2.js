var ArrayJson=[];
function mainPage2(){
	console.log("MAIN PAGE 2");
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
      $("#selectMethod").prop('disabled',true);
      $("#centerText1").html(' MIMIC');
      $("#centerText").html('CONFIGURATION');
      var htm = '<img src="images/deflection_curve.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
   
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select the Ri: </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="ri"  style="height:auto;">'
	   +'<option value="0">--- Select the Ri --- </option>'
	   	+'<option value="60" >60</option>'
	   +'<option value="70">70</option>'
	   +'<option value="80">80</option>'
	   +'<option value="90">90</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Ro  : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="rt" " style="height:auto;">'
	   +'<option value="0">--- Select Ro --- </option>'
	   +'<option value="10" >10 </option>'
	   +'<option value="20">20</option>'
	    +'<option value="30">30</option>'
	     +'<option value="40">40</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   +'<div class="row">'
	   
	   
	  
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'

    
    +'<div class="row" id="timeAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Time (sec): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalTime" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAsnTime" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    
    
    
	     + ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg123">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'  
		$("#main-div-conf").html(selection);	
    
    id=0;
     $("#checkAsnTime").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns==""){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == calculateTime) {
							$("#modelMsg123").html("done ");
							$("#timeAnswer").prop('hidden',true);
							id=0;
							
							addToMasterJSON();
							$("#CalTime").val('');
							
						} else if (flowAns != calculateTime) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula : Distance=Time * (speed of Sound/2)</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
							addToMasterJSON();
							$("#CalTime").val('');
							id=0;
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +calculateTime+'</b>');
						}
					}
					id++;
					}
					
//					
				});
				
    
    
    
    
    
    
    
     $("#submitconfig").click(function() {
		 ri = $("#ri").val();
		 rt = $("#rt").val();
		
		
		  $("#main-div-conf").html("");
		
		htm = '<div class="row" id="calculatePressure">'
				     +'<div class="col-sm-5">'
				       +'<label  id=""  class="" style="font-size:16px;margin-top:35px;">Calculated answer is :</label>'
				       +'</div>'
			           +'<div class="col-sm-3">'
				       +'<input type="text" id="checkAns" style="margin-top:35px;width:100%;"  class=" form-control"/>'
				       +'</div>'
				       +'<div class="col-sm-3">'
				       +'<br><button type="submit" id="btnAnsCheck" style="margin-top:17px;width:100%;" class=" btn btn-primary" data-toggle="modal" data-target="#mimicModel" >Submit</button>'
//				       + '<button type="button"  class="btn btn-primary btnStyle" id="next" hidden >Next Level</button>'
				       +'</div>'
				  	  +'</div>'   
				  	   $("#main-div-conf").html(htm); 
//				 $("#calculatePressure").html(Calculate);	 
		 
		  
			   $("#canvas-div").html("");
			 	labels2 = '<div class="row" >'
				 +'<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Material : 8.852 &times 10<sup>-12</sup> </center> </label>'
	               +'</div>'
	              
//	               + '<div class="col-sm-2" id="labelSelected">'
//	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Length : </center> </label>'
//	               +'</div>'
	 
	                + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Distance : '+1+'mm</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Width : '+2+'mm</center> </label>'
	               +'</div>'
  +'</div>'
		+'<br>'
    		  $("#canvas-div").html(labels2);
    		   $("#centerText").html('CALCULATION');
			    mimic2();
				


	});

	             
}