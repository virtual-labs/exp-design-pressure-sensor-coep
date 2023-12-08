var ArrayJson=[];
function mainPage3(){
	console.log("MAIN PAGE 3");
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
     $("#selectMethod").prop('disabled',true);
      $("#centerText1").html('LEVEL MEASUREMENT MIMIC');
      $("#centerText2").html('CONFIGURATION');
//      var htm = '<img src="images/ultrasonic1.gif" class="img-fluid" >'
//      $("#canvas-div").html(htm);
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select the Pipe Diameter (inch): </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="pipeSize"  style="height:auto;">'
	   +'<option value="0">--- Select the Pipe size --- </option>'
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
	   +'<label class="labelstyle"> Select Aagle : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="angle" " style="height:auto;">'
	   +'<option value="0">--- Select Angle --- </option>'
	   +'<option value="1" >15&deg; </option>'
	   +'<option value="2">20&deg;</option>'
	    +'<option value="2">25&deg;</option>'
	     +'<option value="2">30&deg;</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Flow Rate (m/s) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="flowRate" " style="height:auto;">'
	   +'<option value="0">--- Select flowRate --- </option>'
	   +'<option value="1" >0.1 </option>'
	   +'<option value="2">2</option>'
	   +'<option value="3">3</option>'
	   +'<option value="4">4</option>'
	   +'<option value="5">5</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	   
	   
	   
	   
	   +'<div class="row" >'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Fluid Type : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="fluidType" " style="height:auto;">'
	   +'<option value="000">--- Select  Speed of Sound --- </option>'
	   +'<option value="1480" >Water </option>'
	   +'<option value="343">Air</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	    
	      +'<div class="row" >'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Fluid Level : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="fluidLevel" " style="height:auto;">'
	   +'<option value="000">--- Select  Speed of Sound --- </option>'
	   +'<option value="1480" >10 </option>'
	   +'<option value="343">50</option>'
	   +'<option value="343">100</option>'
	   +'<option value="343">200</option>'
	   +'<option value="343">300</option>'
	   +'<option value="343">400</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'
	    
	    
	   +'<div class="row" >'
	    +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Distance (m):  </label>'
	   +'</div>'
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control selectConf" id="distance" " style="height:auto;">'
	   +'<option value="00">--- Select Distance --- </option>'
	   +'<option value="10" >1</option>'
	   +'<option value="15">2</option>'
	   +'<option value="20">3</option>'
	   +'<option value="25">4</option>'
	   +'</select>'
	   +'</div>'
	   +'<br>' 
	   +'<br>' 
	   +'<br>' 
	   +'<br>'    
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
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
    
//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;
    
     $("#submitconfig").click(function() {
	 pipeSizeSelect=$("#pipeSize").val();
		   angleSelect=$("#angle").val();
		   flowRateSelect=$("#flowRate").val();
			fluidSelect=$("#fluidType").val();
			fluidLevelSelect=$("#fluidLevel").val();
			distSelect=$("#distance").val();
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
		   console.log("main pipeSize  =  "+ pipeSizeSelect);
		   console.log("angle =   "+angleSelect);
		   console.log("flow_Rate =   "+flowRateSelect);
		    console.log("fluid =   "+fluidSelect);
		    		    console.log("fluidLevel =   "+fluidLevelSelect);
		     console.log("distance =   "+distSelect);
		   
		   
		   if(pipeSizeSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Pipe Size </b>");

	}else if(angleSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Angle </b>");

	}else if(flowRateSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Flow Rate </b>");

	}else if(fluidSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Fluid </b>");

	}else if(fluidLevelSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Fluid Level</b>");

	}else if(distSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Distance </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#pipeSizeSelect").prop('hidden',true);
		$("#angleSelect").prop('disabled',true);
		$("#flowRateSelect").prop('disabled',true);
		$("#fluidSelect").prop('disabled',true);
		$("#distSelect").prop('disabled',true);	
	
		   
		  $("#canvas-div").html("");
		   
		   lmimic(pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect);
//	$("#buttonDiv").html('<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitAnimationConfig" data-toggle="modal" data-target="#selectCheck" disabled><b>  ANIMATION </b></button>');
//
	
	}	

function addToMasterJSON(){
	tempJson={};	
						tempJson.material=materialIdName;
						tempJson.applicationSelection = applicationSelection;
						tempJson.current = current;
						
						tempJson.thickness = thickness;
						tempJson.fluxDensity = fluxDensity;
						tempJson.VoltageOutput = finalAns;
						ArrayJson.push(tempJson);
						thicknessMasterJson.demo = thicknessArrayJson;
						console.log(thicknessMasterJson);
//						tableCreate(masterJson);
}

	
	});

	             
}