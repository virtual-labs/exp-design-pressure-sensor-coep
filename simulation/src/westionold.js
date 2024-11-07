function wheatStoneCon(){

$("#canvas-div").html('');
$("#main-div-conf").html('');
$("#tableDesign").html("");

$("#delete-btn").prop("hidden",false);
$("#validateCon").prop("hidden",false);


$("#centerText2").html('SELECT THE COMPONENTS');
      $("#centerText1").html('CONNECT WHEATSTONE BRIDGE');


const myDiv = document.getElementById('canvas-div'); // Or use querySelector if needed
    
    // Step 3: Change the size of the div
    myDiv.style.width = '900px';  // Set the width
    myDiv.style.height = '300px'; // Set the height
    
const myDiv1 = document.getElementById('main-div-conf'); // Or use querySelector if needed
    
    // Step 3: Change the size of the div
    myDiv1.style.width = '900px';  // Set the width
    myDiv1.style.height = '600px'; // Set the height    
    


const shapeLibrary = Raphael("canvas-div", "100%", "100%");
    const canvas = Raphael("main-div-conf", "100%", "100%");

    let selectedShape = null;
    let connectionStart = null;
    let selectedConnection = null;
    let connections = [];
    let addedImages = new Set();
    var p_text = canvas.text(50, 400, "Instruction").attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 20});
    var p_text = canvas.text(300, 420, "Connect the connections and validate using validate button").attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 18});
    var p_text = canvas.text(300, 440, "select the link and click on delete button to delete connection").attr({ 'fill': 'black', 'font-weight': 'bold' ,"font-size": 18});
    // Define images with their respective dot positions, sizes, and static positions in the shapeLibrary
    const images = [
        {
            src: "images/powerSupply.png",
            dots: [
                { id: "dot1", xOffset: 135, yOffset: 72 },   // Top-center
                { id: "dot2", xOffset: 135, yOffset: 98 }    // Bottom-center
            ],
            width: 200, // Set specific width
            height: 200, // Set specific height
            x: 50,  // Set specific x position
            y: 50  // Set specific y position
        },
        {
            src: "images/wheatStoneOutline1.png",
            dots: [
                { id: "dot3", xOffset: 100, yOffset:12 },   // Top-center
                { id: "dot4", xOffset: 100, yOffset: 194 },  // Bottom-center
                { id: "dot5", xOffset: 5, yOffset: 103 },  // left-center
                { id: "dot6", xOffset: 195, yOffset: 103 }  // right-center
            ],
            width: 220,  // Set specific width
            height: 220, // Set specific height
            x: 280, // Set specific x position
            y: 40  // Set specific y position
        },
        {
            src: "images/outVolt.png",
            dots: [
                { id: "dot7", xOffset: 77, yOffset:20 },   // left
                { id: "dot8", xOffset: 2, yOffset: 20 },  // Bottom-center
               
            ],
            width: 80,  // Set specific width
            height: 40, // Set specific height
            x: 560, // Set specific x position
            y: 115  // Set specific y position
        }
    ];
    
    
   images.forEach((image) => {
    const img = shapeLibrary.image(image.src, image.x, image.y, image.width, image.height);

    img.data("dots", image.dots);

    img.node.addEventListener('mousedown', (event) => {
        event.preventDefault();

        if (addedImages.has(image.src)) {
//            alert("This image is already on the canvas.");
            return;
        }

        const cursorPosition = getCursorPosition(event);
        const newShape = canvas.image(image.src, cursorPosition.x, cursorPosition.y, image.width, image.height).attr(img.attrs);

        addedImages.add(image.src);

        newShape.drag(onMoveCanvas, onStartCanvas, onEndCanvas);

        newShape.node.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedShape) {
                // Hide border of the previously selected shape
            }
            selectedShape = newShape;
            selectedConnection = null;
        });

        const dotsData = img.data("dots");
        const dots = createDotsForShape(newShape, dotsData);

        dots.forEach(dot => {
            dot.drag(onMoveCanvasDot, onStartCanvasDot, onEndCanvasDot);
            dot.node.addEventListener('click', (e) => {
                e.stopPropagation();
                handleDotConnection(dot);
            });
        });

        newShape.data("dots", dots);

        newShape.drag(onMoveCanvas, onStartCanvas, function () {
            onEndCanvas.call(this);
        });
    });
});



// Deletion handling
document.getElementById('delete-btn').addEventListener('click', () => {
	actFlg = 0;
    if (selectedShape) {
        const dots = selectedShape.data("dots");
        dots.forEach(dot => {
            connections = connections.filter(({ connection, start, end }) => {
                if (start === dot || end === dot) {
                    connection.remove();
                    return false;
                }
                return true;
            });
            dot.remove();
        });
        addedImages.delete(selectedShape.attr("src")); // Remove from the added images set
        selectedShape.remove();
        selectedShape = null;
    } else if (selectedConnection) {
        selectedConnection.connection.remove();
        connections = connections.filter(({ connection }) => connection !== selectedConnection.connection);
        selectedConnection = null;
    }
});

var actFlg = 0;
var idd = 1;
function checkAllConnections() {  
    let allValid = true; // Assume all connections are valid initially  
    let connectedDots = new Set(); // To store the IDs of connected dots  

    // Iterate over each connection  
    connections.forEach(({ start, end }) => {  
        const startId = start.data("id");  
        const endId = end.data("id");  

        // Check if this connection is valid  
        const isValidConnection = validConnections[startId] && validConnections[startId].includes(endId);  

        if (!isValidConnection) {  
            allValid = false; // If any connection is invalid, set the flag to false  
            console.log(`Invalid connection between ${startId} and ${endId}`);  
            actFlg = 1;
        } else {  
            console.log(`Valid connection between ${startId} and ${endId}`);  
            // Add the connected dots to the set  
            connectedDots.add(startId);  
            connectedDots.add(endId);  
            actFlg = 1;
        }  
    });  
      
    // Check if all dots are connected (assuming you have a collection of all required dot IDs)  
    const allDots = new Set(Object.keys(validConnections));  
    if (![...allDots].every(id => connectedDots.has(id))) {  
        allValid = false;  
        console.log("Some dots are not connected properly.");  
    }  
     
    // Show alerts based on the validations  
    if (allValid) { 
	    $("#delete-btn").prop("hidden",true);
	    $("#validateCon").prop("hidden",true); 
	        $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("All connections are valid and all dots are connected!");
//        alert("All connections are valid and all dots are connected!");  
        $("#main-div-conf").html("");
		
		htm = '<div class="row" id="timeAnswer">'
				     +'<div class="col-sm-6">'
				       +'<label  id=""  class="" style="font-size:16px;margin-top:35px;">Calculate radial stress  at r = '+ri+' mm :</label>'
				       +'</div>'
			           +'<div class="col-sm-3">'
				       +'<input type="text" id="checkAns" style="margin-top:35px;width:100%;"  class=" form-control"/>'
				       +'</div>'
				       +'<div class="col-sm-3">'
				       +'<br><button type="submit" id="btnAnsCheck" style="margin-top:17px; width:100%;" class=" btn btn-danger" data-toggle="modal" data-target="#selectCheck" >Submit</button>'
//				       + '<button type="button"  class="btn btn-primary btnStyle" id="next" hidden >Next Level</button>'
				       +'</div>'
				   
				  	  
				  	   $("#main-div-conf").html(htm); 
//				 $("#calculatePressure").html(Calculate);	 
		 
		  
			   $("#canvas-div").html("");
			 	labels2 = '<div class="row" >'
				 +'<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Material : 8.852 &times 10<sup>-12</sup> </center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-2" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Radius : '+radius+'mm </center> </label>'
	               +'</div>'
	 
	                + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Pressure : '+pressure+'mm</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Thickness : '+thickness+'mm</center> </label>'
	               +'</div>'
  					+'</div>'
					+'<br>'
    		  $("#canvas-div").html(labels2);
    		   $("#centerText").html('CALCULATION');
			    mimic2();
    } else {
	    if(actFlg==1){
	       if (idd <= 3) {
				
				if (allValid) {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("All connections are valid and all dots are connected!");
//        alert("All connections are valid and all dots are connected!");  
        $("#main-div-conf").html("");
		
		htm = '<div class="row" id="timeAnswer">'
				     +'<div class="col-sm-6">'
				       +'<label  id=""  class="" style="font-size:16px;margin-top:35px;">Calculate radial stress  at r = '+ri+' mm :</label>'
				       +'</div>'
			           +'<div class="col-sm-3">'
				       +'<input type="text" id="checkAns" style="margin-top:35px;width:100%;"  class=" form-control"/>'
				       +'</div>'
				       +'<div class="col-sm-3">'
				       +'<br><button type="submit" id="btnAnsCheck" style="margin-top:17px; width:100%;" class=" btn btn-danger" data-toggle="modal" data-target="#selectCheck" >Submit</button>'
//				       + '<button type="button"  class="btn btn-primary btnStyle" id="next" hidden >Next Level</button>'
				       +'</div>'
				   
				  	  
				  	   $("#main-div-conf").html(htm); 
//				 $("#calculatePressure").html(Calculate);	 
		 
		  
			   $("#canvas-div").html("");
			 	labels2 = '<div class="row" >'
				 +'<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Material : 8.852 &times 10<sup>-12</sup> </center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-2" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Radius : '+radius+'mm </center> </label>'
	               +'</div>'
	 
	                + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Pressure : '+pressure+'mm</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Thickness : '+thickness+'mm</center> </label>'
	               +'</div>'
  					+'</div>'
					+'<br>'
    		  $("#canvas-div").html(labels2);
    		   $("#centerText").html('CALCULATION');
			    mimic2();
					
	                       
				} else if (!allValid) {
					
			$(".modal-header").html("Failed Connection ");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Some connections are invalid or some dots are not connected properly.");	
					

				}
	
	
			} else if (idd == 4) {
				
				$(".modal-header").html("Appropriate Connection");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			
			modelImg = '<img src="images/wheatStoneConnections.png" class="img-responsive" alt="Cinque Terre">'
            $("#MsgModal").html(modelImg);
			
			}else {
					

	
				} 
			idd++;				
	
//        alert("Some connections are invalid or some dots are not connected properly.");  
    }
    else{
	       $(".modal-header").html("Failed Connection ");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select the components and connect them");
    }
    }  
}  

// Add a button to trigger the final validation  
document.getElementById('validateCon').addEventListener('click', checkAllConnections);

//let connectionStart = null;
//let selectedConnection = null;
//let connections = [];
let dots = []; // Initialize an empty array to store the dots

function handleDotConnection(dot) {
    // Check if the dot is already in the dots array
    if (!dots.includes(dot)) {
        dots.push(dot);
    }

    if (!connectionStart) {
        connectionStart = dot;
    } else {
        if (connectionStart !== dot) {
            const startId = connectionStart.data("id");
            const endId = dot.data("id");

            const isValidConnection = validConnections[startId] && validConnections[startId].includes(endId);

            const pathString = generateSmoothConnection(connectionStart, dot);
            const connectionAttrs = isValidConnection
                ? { stroke: "black", "stroke-width": 2 }
                : { stroke: "black", "stroke-width": 2 };

            const connection = canvas.path(pathString).attr(connectionAttrs);

            connections.push({ connection, start: connectionStart, end: dot });

            connection.node.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up to the canvas click event
                if (selectedConnection) {
                    selectedConnection.connection.node.classList.remove('selected-connection');
                }
                selectedConnection = { connection, start: connectionStart, end: dot };
                connection.node.classList.add('selected-connection');
                selectedShape = null; // Deselect any shape
            });

            selectedConnection = { connection, start: connectionStart, end: dot }; // Set the selected connection
        }
        connectionStart = null;
    }
}

function isConnectionValid() {
    if (selectedConnection) {
        const { start, end } = selectedConnection;
        const startId = start.data("id");
        const endId = end.data("id");
        
        // Check if the connection is valid
        return validConnections[startId] && validConnections[startId].includes(endId);
    }
    return false;
}

function areAllDotsConnectedProperly() {
    const connectedDots = new Set();

    connections.forEach(({ start, end }) => {
        const startId = start.data("id");
        const endId = end.data("id");

        if (validConnections[startId] && validConnections[startId].includes(endId)) {
            connectedDots.add(startId);
            connectedDots.add(endId);
        }
    });

    // Ensure all dots are connected
    return dots.every(dot => connectedDots.has(dot.data("id")));
}

  
    

    // Add event listener for clicks on the canvas to deselect the shape
    canvas.canvas.addEventListener('click', () => {
        if (selectedShape) {
//             selectedShape.border.hide(); // Hide the border when clicking outside the shape
            selectedShape = null; // Deselect the shape
        }
        if (selectedConnection) {
            selectedConnection.connection.node.classList.remove('selected-connection'); // Remove selected class from connection
            selectedConnection = null; // Deselect the connection
        }
    });
    

    function getCursorPosition(event) {
        const canvasRect = document.getElementById('canvas').getBoundingClientRect();
        return {
            x: event.clientX - canvasRect.left,
            y: event.clientY - canvasRect.top
        };
    }

    function onStartCanvas() {
        this.ox = this.attr("x");
        this.oy = this.attr("y");
    }

    function onMoveCanvas(dx, dy) {
        let newX, newY;
        const canvasRect = canvas.canvas.getBoundingClientRect();
        const canvasWidth = canvasRect.width;
        const canvasHeight = canvasRect.height;
     
        console.log("canvasWidth : "+canvasWidth);
        console.log("canvasHeight : "+canvasHeight);
        
        newX = this.ox + dx;
        newY = this.oy + dy;

        const imgWidth = this.attr("width");
        const imgHeight = this.attr("height");

        console.log("imgWidth : "+imgWidth);
        console.log("imgHeight : "+imgHeight);
        
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + imgWidth > canvasWidth) newX = canvasWidth - imgWidth;
        if (newY + imgHeight > canvasHeight) newY = canvasHeight - imgHeight;

        this.attr({ x: newX, y: newY });
        updateDotsPosition(this);
        updateConnections();

        // Update the border position
        if (this.border) {
            this.border.attr({ x: newX - 2, y: newY - 2 });
        }
    }

    function onEndCanvas() {}

    function onMoveCanvasDot(dx, dy) {
        this.attr({ cx: this.ox + dx, cy: this.oy + dy });
        const shape = this.data("parent");
        updateDotsPosition(shape);
        updateConnections();
    }

    function onStartCanvasDot() {
        this.ox = this.attr("cx");
        this.oy = this.attr("cy");
    }

    function onEndCanvasDot() {}

    function updateDotsPosition(shape) {
        const dots = shape.data("dots");
        const bbox = shape.getBBox();

        dots.forEach(dot => {
            const dotData = dot.data();
            dot.attr({ cx: bbox.x + dotData.xOffset, cy: bbox.y + dotData.yOffset });
        });
    }

    function createDotsForShape(shape, dotsData) {
        const dots = [];
        const bbox = shape.getBBox();
        const dotAttrs = { r: 5, fill: "blue", stroke: "none" };

        dotsData.forEach(dotData => {
            const dot = canvas.circle(bbox.x + dotData.xOffset, bbox.y + dotData.yOffset, 5)
                .attr(dotAttrs)
                .data("parent", shape)
                .data("id", dotData.id)
                .data("xOffset", dotData.xOffset)
                .data("yOffset", dotData.yOffset);
            dots.push(dot);
        });

        return dots;
    }
 
    function updateConnections() {
        connections.forEach(({ connection, start, end }) => {
            const pathString = generateSmoothConnection(start, end);
            connection.attr({ path: pathString });
        });
    }

    

    function generateSmoothConnection(startDot, endDot) {
        const cx1 = startDot.attr("cx");
        const cy1 = startDot.attr("cy");
        const cx2 = endDot.attr("cx");
        const cy2 = endDot.attr("cy");

        // Calculate the distance between the two dots
        const distance = Math.sqrt(Math.pow(cx2 - cx1, 2) + Math.pow(cy2 - cy1, 2));

        // Set a threshold distance
        const distanceThreshold = 100; // Adjust this value as needed

        let path;

        if (distance < distanceThreshold) {
            // If distance is small, use a straight line (shortest path)
            path = `M${cx1},${cy1} L${cx2},${cy2}`;
        } else {
            // If distance is large, use the original zigzag pattern
            const shape1 = startDot.data("parent").getBBox();
            const shape2 = endDot.data("parent").getBBox();

            if (Math.abs(cx1 - cx2) > Math.abs(cy1 - cy2)) {
                if (cx1 < cx2) {
                    path = `M${cx1},${cy1} 
                            L${shape1.x2 + 20},${cy1} 
                            L${shape1.x2 + 20},${cy2} 
                            L${cx2},${cy2}`;
                } else {
                    path = `M${cx1},${cy1} 
                            L${shape1.x - 20},${cy1} 
                            L${shape1.x - 20},${cy2} 
                            L${cx2},${cy2}`;
                }
            } else {
                if (cy1 < cy2) {
                    path = `M${cx1},${cy1} 
                            L${cx1},${shape1.y2 + 20} 
                            L${cx2},${shape1.y2 + 20} 
                            L${cx2},${cy2}`;
                } else {
                    path = `M${cx1},${cy1} 
                            L${cx1},${shape1.y - 20} 
                            L${cx2},${shape1.y - 20} 
                            L${cx2},${cy2}`;
                }
            }
        }

        return path;
    }


    const validConnections = {
        dot1: ["dot3"],
        dot3: ["dot1"],
        dot2: ["dot4"],
        dot4: ["dot2"],
        dot5: ["dot8"],
        dot8: ["dot5"],
        dot6: ["dot7"],
        dot7: ["dot6"]
    };

 }   
