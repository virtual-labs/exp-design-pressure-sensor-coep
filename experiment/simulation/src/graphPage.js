
function graphReading(){

$("#main-div-conf").html('');	
$("#canvas-div").html('');	
$("#canvas-div-sub").html('');
 $("#tableDesign").html("");

$("#centerText1").html('CHARACTERIZATION');
$("#centerText").html('GRAPH');

var xdata = [];
var ydata = [];
var graphData1 = [];

var xdata1 = [];
var ydata1 = [];
var graphData2 = [];
rendValFlg = 0;

for (var i = 0; i < TimeMasterJson.volt.length; i++) {
    xdata[i] = parseFloat(TimeMasterJson.volt[i].press);
    ydata[i] = parseFloat(TimeMasterJson.volt[i].volt);
}

for (var j = 0; j < TimeMasterJson.volt.length; j++) {
    graphData1.push([xdata[j], ydata[j]]);
}

for (var i = 0; i < TimeMasterJson.volt.length; i++) {
//    xdata[i] = parseFloat(graphJson.demo[i].selectedLoad);
    ydata1[i] = parseFloat(TimeMasterJson.volt[i].err);
}

for (var j = 0; j < TimeMasterJson.volt.length; j++) {
    graphData2.push([xdata[j], ydata1[j]]);
}






// Finding the highest point for both Standard and Observed data
var maxStandard = Math.max.apply(null, ydata);
var maxStandardIndex = ydata.indexOf(maxStandard);
//var maxStandardPoint = [xdata[maxStandardIndex], maxStandard];

var maxObserved = Math.max.apply(null, ydata1);
var maxObservedIndex = ydata1.indexOf(maxObserved);
//var maxObservedPoint = [xdata1[maxObservedIndex], maxObserved];


const combinedData = xdata.map((x, index) => ({  
    x: x,  
    graphData1: graphData1[index],  
    graphData2: graphData2[index]  
}));  

// Sort the combined data based on x values  
combinedData.sort((a, b) => a.x - b.x);  

// Extract sorted values back into separate arrays  
const sortedXdata = combinedData.map(data => data.x);  
const sortedGraphData1 = combinedData.map(data => data.graphData1);  
const sortedGraphData2 = combinedData.map(data => data.graphData2);  

Highcharts.chart('main-div-conf', {
	exporting: { enabled: true },
	credits: { enabled: false},
    chart: {
        type: 'line'
    },
    title: {
        text: 'Observations'
    },
    xAxis: {
        title: {
            text: 'Selected Pressure'
        },
        // No need to specify categories if using x and y objects
    },
    yAxis: {
        title: {
            text: 'Output Voltage'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true,
            marker: {
                enabled: true,
                radius: 4
            }
        }
    },
    tooltip: {
        enabled: true,
        shared: true,
        valueDecimals: 2
    },
    series: [{
        name: 'Standard',
        data: sortedGraphData1,  // First series data
        color: '#50c7d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }, {
        name: 'Observed',
        data: sortedGraphData2,  // Second series data
        color: '#8250d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }]
});


var htm1 = '<img src="images/amplifier.png" class="img-fluid" >'
      $("#tableDesign").html(htm1);

var sortedData = TimeMasterJson.volt.sort(function(a, b) {  
    return a.press - b.press; // Change this to the desired property for sorting  
});  



tableMainDiv =	'<div class="">'
			        + '<table class=" table table-bordered "  style ="overflow-x: auto;height: 300px;margin-top: 10px;">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Pressure (Pa)</center></th>'
					+ '   <th><center>Calculated Output (mV)</center></th>'
					+ '  <th><center>Observed Output (mV)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
				for(i=0,p=1;i<TimeMasterJson.volt.length;i++,p++)
						{
						tableMainDiv +='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+TimeMasterJson.volt[i].press+'</td>'
							+'      <td>'+TimeMasterJson.volt[i].volt1+'</td>'
							+'      <td>'+TimeMasterJson.volt[i].err1+'</td>'					
				
							+'    </tr>'
						}
        		
        			tableMainDiv +='    </tbody>'
        			tableMainDiv +='    </table>'
//        			tableMainDiv +='    <tr>'

        
       
        
        $("#canvas-div").html(tableMainDiv);

       
	    
	    var htm = '';
	     
	      htm += '<div class="row"  >'
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	             
	             + '<div class="col-sm-6">'
	             +'<label class="text-primary" style="margin-left:10px;font-size: x-large;"><center>Pressure Sensor Configuration  </center></label>'
 	               
	             +'</div>'
	            
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	            +'</div>'
	            
	               +'<div class="row"  >'
                   + '<div class="col-sm-1">'	               
	               +'</div>'
                   + '<div class="col-sm-5" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"><center>Selected Thickness : '+thickness+'mm  </center></label>'
	               +'</div>'
	              
	               + '<div class="col-sm-5" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Selected Radius : '+radius+'mm </center> </label>'
	               +'</div>'
	               
	              
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               +'</div>'
	               
	               +'<div class="row"  >'
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Young'+"'"+'s Modulus : 2.07 &times 10 &#x2075 N/mm<sup>2</sup></center> </label>'
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Poisson Ratio : 0.25 </center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'	               
	               +'</div>'	               
	               +'</div>'
	               
	                +'<div class="row"  >'
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Gauge Factor (f) : '+gfactor+'</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Supply Voltage : '+voltage+'V</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'	               
	               +'</div>'	               
	               +'</div>'
	              
	             +  '<div class="row"  >'
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	             
	             + '<div class="col-sm-6">'
	             +'<label class="text-primary" style="margin-left:10px;font-size: x-large;"><center> Pressure Sensor Performance  </center></label>'
 	               
	             +'</div>'
	            
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	            +'</div>'
	              
	              
	                +   '<div class="row" id="selLoadErr" >'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select Pressure (pa) :  </label>'
				   +'</div>'
				   
				          +'<div class="col-sm-4">'
						   +'<select  class="form-control " id="loadErr" " style="height:auto;  margin-top: 9px;">'
						   +'<option value="0">--- Select Pressure --- </option>'
						   +'<option value= "1">'+1+ '</option>'
						   +'<option value="2" >'+2+ ' </option>'
						   +'<option value="3" > '+3+ ' </option>'
						   +'<option value="4" > '+4+ ' </option>'
						   +'<option value="5" > '+5+ ' </option>'
						   +'<option value="6" > '+6+ ' </option>'
						   +'<option value="7" > '+7+ ' </option>'
						   +'<option value="8" > '+8+ ' </option>'	
						   +'<option value="9" > '+9+ ' </option>'
						   +'<option value="10" > '+10+ ' </option>'					  
						  
						   +'</select>'
						   +'</div>'
				   
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitLoadToErrorCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
	               
	              
	              
	               +'<div class="row" id="errCal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Error of selected pressure :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'<input type="number" value="" id="errorCheck"  style="margin:10px;margin-left:1px;width:100%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitErrorCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row" id="senCheck" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Sensitivity of pressure mV/N :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'<input type="number" value="" id="sensitivity"  style="margin:10px;margin-left:1px;width:100%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitSensitivityCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
				   +'<div class="col-sm-12" id="buttonDiv">'
	   				+'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="result" data-toggle="modal" data-target="#selectCheck" hidden ><b> RESULT </b></button>' 
	  				 +'</div>'
	              
	              
	              $("#canvas-div").append(htm);
	        
	        var loadErrVal=0;
	        var selValue = 0;
	        var errcnt = 0;
	        $("#loadErr").change(function(){
		loadErrVal = $("#loadErr").val();
	});
	        
	        $("#submitLoadToErrorCheck").click(function(){
				errcnt++;
		          loadErrVal = parseInt($("#loadErr").val());
		          if(loadErrVal==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
		}else{
			
			if(loadErrVal==1){
				selValue = 1;
			}else if(loadErrVal==2){
				selValue = 2;
			}else if(loadErrVal==3){
				selValue = 3;
			}else if(loadErrVal==4){
				selValue = 4;
			}else if(loadErrVal==5){
				selValue = 5;
			}else if(loadErrVal==6){
				selValue = 6;
			}else if(loadErrVal==7){
				selValue = 7;
			}else if(loadErrVal==8){
				selValue = 8;
			}else if(loadErrVal==9){
				selValue = 9;
			}else if(loadErrVal==10){
				selValue = 10;
			}
	
			
			$("#submitLoadToErrorCheck").prop("disabled",true);
			$("#loadErr").prop("disabled",true);
			$("#errCal").prop("hidden",false);
		}
	});
	       
	     var ranVal1 = 0;
	     var outVal1 = 0;  
	      var errCal = 0; 
	      var idd = 1;
	      
	      var foundObject;
	     $("#submitErrorCheck").click(function(){
		 
		     if(errorCheck=="" || errorCheck == isAlphabetical(errorCheck)){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Appropriate Value");
		}else{ 
			
			
			let userSelectedLoad = selValue;
			let foundObject = TimeMasterJson.volt.find(item => item.press === userSelectedLoad);
//			const outputVoltage = getOutputVoltage(selectedLoadValue);
//			console.log("outputVoltage : "+outputVoltage);
//			  for(var i=0;i<graphJson.demo.length;i++){
//			let selectedLoadValue = graphJson.demo[i].selectedLoad; // This sets selectedLoadValue to 10
//			console.log("selectedLoadValue : "+selectedLoadValue);
//             foundObject = graphJson.demo.find(item => item.selectedLoad === selectedLoadValue);
//             break;
//             }
//             console.log("foundObject : "+foundObject);
			 if(foundObject){
           
	           outVal1 = foundObject.volt;
	           ranVal1 = foundObject.err;  
//         errCal = (outVal1 - ranVal1).toFixed(2);
             errCal = (foundObject.rand).toFixed(6);
//             errCal = errCal.toFixed(2);
//             errCal = parseFloat(errCal);
             
             var errCheckEnter = $("#errorCheck").val();
                if(errCheckEnter==""){
						 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
					} else{
						
		       errCheckEnter = parseFloat($("#errorCheck").val());
						if (idd <= 3) {
				
				if (errCheckEnter == errCal) {
					 $("#submitErrorCheck").prop("disabled",true);
					 $("#errorCheck").prop("disabled",true);
					 $("#senCheck").prop("hidden",false);
	                 
				} else if (errCheckEnter != errCal) {
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");

				}
	
	
			} else if (idd == 4) {
				
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Formula : Error = Standard value - Observed value");

				
			} else {

	
				if (errCal == errCheckEnter) {
				

					$("#submitErrorCheck").prop("disabled",true);
					 $("#errorCheck").prop("disabled",true);
					 $("#senCheck").prop("hidden",false);

					
	
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + errCal);
	
				}
			}
			idd++;
					}
				

			}
			 
		}
		 
	});
	    
	    
	    var sensitivityCal = 0;
	    var idd1=1; 
	    var sencnt = 0;  
	 $("#submitSensitivityCheck").click(function(){
		 sencnt++;
		sensitivityCal = (outVal1/selValue).toFixed(2);
//		sensitivityCal = sensitivityCal.toFixed(2);
		sensitivityCal = parseFloat(sensitivityCal);
		
		var senseEnter = $("#sensitivity").val();
		
		
		 if(senseEnter=="" || senseEnter == isAlphabetical(senseEnter)){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
					} else{
						
						 senseEnter = parseFloat($("#sensitivity").val());
						if (idd1 <= 3) {
				
				if (senseEnter == sensitivityCal) {
					 $("#submitSensitivityCheck").prop("disabled",true);
					 $("#sensitivity").prop("disabled",true);
					 $("#result").prop("hidden",false);					
	                 
				} else if (senseEnter != sensitivityCal) {
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");

				}
	
	
			} else if (idd1 == 4) {
				
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Formula : Sensitivity = Output/Input");

				
			} else {

	
				if (senseEnter == sensitivityCal) {
				 $("#submitSensitivityCheck").prop("disabled",true);
					 $("#sensitivity").prop("disabled",true);
					 $("#result").prop("hidden",false);
	
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + sensitivityCal);
	
				}
			}
			idd1++;
						
					}
		
	});
	              
	       
	   
	              
	             
	            
	             $("#result").click(function(){ 
				   graph = {};
				   graph.sens = sencnt;
				   graph.err = errcnt;
				   data.graph = graph;
				   result();
			   });       
	            
	            
	            
}