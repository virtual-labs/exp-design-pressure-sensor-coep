
function tableCreate(masterJson)		
{
			console.log(masterJson);
			var tableMainDiv='<div class="col-sm-12">'
//					+ '<div class=" well well-lg">'
////					+'<center class="blink"> TAKE ALL '+applicationName+' READINGS. </center>'
////					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
//				    +'<table class="table table-bordered table-responsive" >'
//					+ ' <thead>'
 + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <tr>'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th scope="col"><center>Pressure (Kpa)</center></th>'
					+ '   <th scope="col"><center >Thickness (cm)</center></th>'
					+ '  <th scope="col"><center>Radius(cm)</center></th>'
//					+ '  <th scope="col"><center>distPath</center></th>'
//					+ '  <th scope="col"><center>speed</center></th>'
					+ '  <th scope="col"><center>Calculated Y</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=1; i < masterJson.demo.length; i++,p++) {
					tableMainDiv += '<tr>'
					            +'<td>'+p+'</td>'
								+'   <td><center style="color:red;">' + masterJson.demo[i].frequency + '</center></td>'
								+' <td><center style="color:red;">' + masterJson.demo[i].distanceInput + '</center></td>'
								+ ' <td><center>' + masterJson.demo[i].speedOFsound + '</center></td>'
//						        + '<td><center>' + masterJson.demo[i].distPath + '</center></td>'
//						        + ' <td><center>' + masterJson.demo[i].speed + '</center></td>'
						        + '<td><center>' + masterJson.demo[i].calculateTime + '</center></td>'
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
					 if(tableReading==4)
					 {
						tableMainDiv +='<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextLevel"  ><b>NEXT LEVEL </b></button></div>'
					}
					
					$("#tableDesign").html(tableMainDiv);
					 tableReading++;
					 console.log("tableReading "+tableReading);
					$("#nextLevel").click(function() {
						$("#selectMethod").prop('hidden',true);
						$("#submitconfig").prop('disabled',true);
						$("#frequency").prop('disabled',true);
						$("#distance").prop('disabled',true);
						$("#fluidType").prop('disabled',true);	
						$("#nextLevel").prop('disabled',true);
						mainPage2();
					});
					$("#selectMethod").change(function() {
						methodType=$("#methodType").val();
						if(methodType==1)
						{
							
							mainPage2();
							
							
						}
						else if(methodType==2)
						{
							mainPage3();
						}
						else
						{
							alert("Select Method Type  .");
						}
						
					});
					
				}	
				


//Flow MEASUREMENT
function tableCreateFlow(masterJson)		
{
			console.log(masterJson);
			var tableMainDiv='<div class="col-sm-12">'
//					+ '<div class=" well well-lg">'
////					+'<center class="blink"> TAKE ALL '+applicationName+' READINGS. </center>'
////					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
//				    +'<table class="table table-bordered table-responsive" >'
//					+ ' <thead>'
 + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <tr>'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th scope="col"><center>Frequency (Hz)</center></th>'
					+ '   <th scope="col"><center >Distance (cm)</center></th>'
					+ '  <th scope="col"><center>Speed of Sound (m/s)</center></th>'
//					+ '  <th scope="col"><center>distPath</center></th>'
//					+ '  <th scope="col"><center>speed</center></th>'
					+ '  <th scope="col"><center>Calculated Time (sec)</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=1; i < masterJson.demo.length; i++,p++) {
					tableMainDiv += '<tr>'
					            +'<td>'+p+'</td>'
								+'   <td><center style="color:red;">' + masterJson.demo[i].frequency + '</center></td>'
								+' <td><center style="color:red;">' + masterJson.demo[i].distanceInput + '</center></td>'
								+ ' <td><center>' + masterJson.demo[i].speedOFsound + '</center></td>'
//						        + '<td><center>' + masterJson.demo[i].distPath + '</center></td>'
//						        + ' <td><center>' + masterJson.demo[i].speed + '</center></td>'
						        + '<td><center>' + masterJson.demo[i].calculateTime + '</center></td>'
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
					 if(tableReading==4)
					 {
						tableMainDiv +='<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextLevel"  ><b>NEXT LEVEL </b></button></div>'
					}
					
					$("#tableDesign").html(tableMainDiv);
					 tableReading++;
					 console.log("tableReading "+tableReading);
					$("#nextLevel").click(function() {
						$("#selectMethod").prop('hidden',false);
						$("#submitconfig").prop('disabled',true);
						$("#frequency").prop('disabled',true);
						$("#distance").prop('disabled',true);
						$("#fluidType").prop('disabled',true);	
						$("#nextLevel").prop('disabled',true);	
					});
					
					$("#selectMethod").change(function() {
						methodType=$("#methodType").val();
						
							mainPage3();
						
						
					});
					
				}






	
//Level MEASUREMENT
function tableCreateLevel(masterJson)		
{
			console.log(masterJson);
			var tableMainDiv='<div class="col-sm-12">'
//					+ '<div class=" well well-lg">'
////					+'<center class="blink"> TAKE ALL '+applicationName+' READINGS. </center>'
////					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
//				    +'<table class="table table-bordered table-responsive" >'
//					+ ' <thead>'
 + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <tr>'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th scope="col"><center>Frequency (Hz)</center></th>'
					+ '   <th scope="col"><center >Distance (cm)</center></th>'
					+ '  <th scope="col"><center>Speed of Sound (m/s)</center></th>'
//					+ '  <th scope="col"><center>distPath</center></th>'
//					+ '  <th scope="col"><center>speed</center></th>'
					+ '  <th scope="col"><center>Calculated Time (sec)</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=1; i < masterJson.demo.length; i++,p++) {
					tableMainDiv += '<tr>'
					            +'<td>'+p+'</td>'
								+'   <td><center style="color:red;">' + masterJson.demo[i].frequency + '</center></td>'
								+' <td><center style="color:red;">' + masterJson.demo[i].distanceInput + '</center></td>'
								+ ' <td><center>' + masterJson.demo[i].speedOFsound + '</center></td>'
//						        + '<td><center>' + masterJson.demo[i].distPath + '</center></td>'
//						        + ' <td><center>' + masterJson.demo[i].speed + '</center></td>'
						        + '<td><center>' + masterJson.demo[i].calculateTime + '</center></td>'
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
					 if(tableReading==4)
					 {
						tableMainDiv +='<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextLevel"  ><b>NEXT LEVEL </b></button></div>'
					}
					
					$("#tableDesign").html(tableMainDiv);
					 tableReading++;
					 console.log("tableReading "+tableReading);
					$("#nextLevel").click(function() {
						$("#selectMethod").prop('hidden',false);
						$("#submitconfig").prop('disabled',true);
						$("#frequency").prop('disabled',true);
						$("#distance").prop('disabled',true);
						$("#fluidType").prop('disabled',true);	
						$("#nextLevel").prop('disabled',true);	
					});
					$("#selectMethod").change(function() {
						methodType=$("#methodType").val();
						
							mainPage2();
							
						
						
					});
					
				}
