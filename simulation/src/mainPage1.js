tableReading=0;
function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText1").html('WORKING OF PRESSURE SENSOR ');
      $("#centerText").html('CONFIGURATION');
      var htm = '<img src="images/diaphragm-pressure.gif" class="img-fluid" >'
      $("#canvas-div").html(htm);
//      animation();
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select Pressure (kpa) : </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="frequency"  style="height:auto;">'
	   +'<option value="0">--- Select Pressure --- </option>'
	   +'<option value="1">1</option>'
	   +'<option value="10">10</option>'
	   +'<option value="100">100</option>'
	   +'<option value="200">200</option>'
	    +'<option value="300">300</option>'
	  +'<option value="400">400</option>'
	  +'<option value="500">500</option>'
	   +'<option value="600">600</option>'
	   +'<option value="1000">1000</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Thickness of Diaphragm (cm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="distance" " style="height:auto;">'
	   +'<option value="0">--- Select Thickness --- </option>'
	   +'<option value="1" >1</option>'
	   +'<option value="2">2</option>'
	   +'<option value="3">3</option>'
	  +'<option value="4">4</option>'

	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   +'<div class="row">'
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Radius (cm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="fluidType" " style="height:auto;">'
	    +'<option value="0">--- Select Radius --- </option>'
	   +'<option value="70" >70  </option>'
	   +'<option value="30">30</option>'
	   +'<option value="35">35</option>'
	  +'<option value="40">40</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
   +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'

      +'<br>' 
      +'<br>' 
     
+'<div class="row" id="timeAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Y: </label>'
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
		id = 1;
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
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b> ");
							$("#timeAnswer").prop('hidden',true);
							id = 1;
							
							addToMasterJSON();
							$("#CalTime").val('');
							
						} else if (flowAns != calculateTime) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula : Y = 3P(1- V "+unescape('%B2')+") (R"+unescape('%B2')+" - r"+unescape('%B2')+")"+unescape('%B2')+"/16Et"+unescape('%B3')+"</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
							addToMasterJSON();
							$("#CalTime").val('');
							id = 1;
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +calculateTime+'</b>');
						}
					}
					id++;
					}
					
//					
				});

//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;
    
     $("#submitconfig").click(function() {
	 frequencySelect=$("#frequency").val();
		  distSelect=$("#distance").val();
		  fluidSelect=$("#fluidType").val();
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
		   console.log("main frequency  =  "+ frequencySelect);	  
		     console.log("distance =   "+distSelect);
		    console.log("fluid TypeSelect =   "+fluidSelect);
		   
		   if(frequencySelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Frequency </b>");
	}else if(distSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Distance </b>");
	}else if(fluidSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Fluid Type </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#pipeSizeSelect").prop('hidden',true);
		$("#fluidSelect").prop('disabled',true);
		$("#distSelect").prop('disabled',true);	
	
		   
		  animation(frequencySelect,distSelect,fluidSelect);

	}	


	
	});

	
	
	             
}



