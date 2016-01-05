var pid = [];
$(document).ready(function(){
	var projectNum = 0;
  
    $.ajax({
      url: 'http://140.124.181.160:8080/softwareEngineer/projects/' + localStorage.getItem("project_id"),
      type:"GET",
      success: function(msg){
          // JSON get here

          project = eval(msg);
          console.log(project);
          
            $.ajax({
              url: 'http://140.124.181.160:8080/softwareEngineer/projects/' + localStorage.getItem("project_id") +'/requirements',
              type:"GET",
              dataType: "json",
              success: function(msg){
              	console.log(msg)
                var requirements = eval(msg);
                var theader = "<tr><th>#</th>";
                $.each(requirements , function(index, value){
                	pid.push(value.id);
                  theader += "<th scope='row'>"+value.name+"</th>";
                	projectNum++;
               });
                theader +="</tr>";
                $(theader).appendTo("#matrix");
              },
              error:function(err){
                console.log(err);
              }
            });
          },
          error:function(err){
            console.log(err);
            $.msgBox({
             title: "Ooops",
             content: "ERROR occurred!!!",
             type: "error",
             showButtons: false,
             opacity: 0.9,
             autoClose:true
           });
          }
        });
//////////////////////

	$.ajax({
      url: 'http://140.124.181.160:8080/softwareEngineer/projects/' + localStorage.getItem("project_id"),
      type:"GET",
      success: function(msg){
          // JSON get here

          project = eval(msg);
          console.log(project);
          var i = 1;
            $.ajax({
              url: 'http://140.124.181.160:8080/softwareEngineer/projects/' + localStorage.getItem("project_id") +'/tests',
              type:"GET",
              dataType: "json",
              success: function(msg){
              	console.log(msg)
                var tests = eval(msg);
                var theader = "";
                var addtd;
                	
                $.each(tests , function(index, value){
                  theader = "";
                  console.log("!");
                	theader += "<tr><td scope='row'>"+value.name+"</td>";
                	for(var i = projectNum-1; i>=0; i--){
                		if(value.requirementid==pid[i]){
                      theader+="<td>"+value.requirementid;
                      theader+="</td>";
                    }
                    else{
                      theader+="<td>0</td>"
                    }
                  };
                  theader +="</tr>";
                  $(theader).appendTo("#matrix");
              })
              },
              error:function(err){
                console.log(err);
              }
            });
            /////

          },
          error:function(err){
            console.log(err);
            $.msgBox({
             title: "Ooops",
             content: "ERROR occurred!!!",
             type: "error",
             showButtons: false,
             opacity: 0.9,
             autoClose:true
           });
          }
        });




});


    