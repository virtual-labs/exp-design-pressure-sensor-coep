var ArrayJson=[];
var voltflag = 0; var er,et;
function mainPage3(){
	
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
     $("#selectMethod").prop('disabled',true);
      $("#centerText1").html('Wheat Stone Bridge');
      $("#centerText2").html('CONFIGURATION');
      var htm = '<img src="images/demoBridge.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select the Voltage (V): </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="vlt"  style="height:auto;">'
	   +'<option value="0">--- Select the Voltage --- </option>'
	   	+'<option value="6">6</option>'
	   +'<option value="7">7</option>'
	   +'<option value="8">8</option>'
	   +'<option value="9">9</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Gauge Factor : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="fct" " style="height:auto;">'
	   +'<option value="0">--- Select Gauge --- </option>'
	   +'<option value="2" >2 </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Pressure : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="press" " style="height:auto;">'
	   +'<option value="0">--- Select Pressure --- </option>'
	   +'<option value="1" >1</option>'
	   +'<option value="2">2</option>'
	   +'<option value="3">3</option>'
	   +'<option value="4">4</option>'
	   +'<option value="5">5</option>'
	   +'<option value="6">6</option>'
	   +'<option value="7">7</option>'
	   +'<option value="8">8</option>'
	   +'<option value="9">9</option>'
	   +'<option value="10">10</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'   
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 5px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b> CALCULATE VOLTAGE </b></button>' 
	    +'</div>'
	    
	  +'<br>' 
      +'<br>'
	         
		+'<div class="row" id="wiston" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Output Voltage: </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
		+'<input type="text" id="CalTime" style= 8px;width:80%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
		+'<button type="button"  "  class="btn btn-danger btnStyle" id="vltOutput" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 5px; "  class="btn btn-danger btnStyle" id="next" data-toggle="modal" data-target="#selectCheck" hidden ><b> Next Level</b></button>' 
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
			voltage = $("#vlt").val();
		   gfactor = $("#fct").val();
		   Pressure1  = $("#press").val();
		
		   
		   if(vlt == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Voltage </b>");

	}else if(fct == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Guage factor </b>");

	
	}else if (Pressure1 == 0 ){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Pressure </b>");
	} else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured successfully</b>");		
		$("#vlt").prop('disabled',true);
		$("#fct").prop('disabled',true);
		
		if (Pressure1 == 1){
			 er = TimeMasterJson.reading[0].er;
			 et = TimeMasterJson.reading[0].et;
		}
		else if (Pressure1 == 2){
			 er = TimeMasterJson.reading[1].er;
			 et = TimeMasterJson.reading[1].et;
		}else if (Pressure1 == 3){
			 er = TimeMasterJson.reading[2].er;
			 et = TimeMasterJson.reading[2].et;
		}else if (Pressure1 == 4){
			 er = TimeMasterJson.reading[3].er;
			 et = TimeMasterJson.reading[3].et;
		}else if (Pressure1 == 5){
			 er = TimeMasterJson.reading[4].er;
			 et = TimeMasterJson.reading[4].et;
		}else if (Pressure1 == 6){
			 er = TimeMasterJson.reading[5].er;
			 et = TimeMasterJson.reading[5].et;
		}else if (Pressure1 == 7){
			 er = TimeMasterJson.reading[6].er;
			 et = TimeMasterJson.reading[6].et;
		}else if (Pressure1 == 8){
			 er = TimeMasterJson.reading[7].er;
			 et = TimeMasterJson.reading[7].et;
		}else if (Pressure1 == 9){
			 er = TimeMasterJson.reading[8].er;
			 et = TimeMasterJson.reading[8].et;
		}else if (Pressure1 == 10){
			 er = TimeMasterJson.reading[9].er;
			 et = TimeMasterJson.reading[9].et;
		}
		
		   
		  $("#canvas-div").html(""); 
		  
		  bridgeCalculate();
		   
//		   lmimic(pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect);
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
						
//						tableCreate(masterJson);
}

	
	});

	             
}