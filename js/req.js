//console.log('register');
//var register  = function(){

  $(document).ready(function () {
    $("#add_row").click();
    var req = [];
    $.ajax({
      url: 'http://140.124.181.160:8080/softwareEngineer/projects/' + localStorage.getItem("project_id"),
      type:"GET",
      success: function(msg){
          // JSON get here

          project = eval(msg);
          console.log(project);
          var i = 1;

          
            /////
            $.ajax({
              url: 'http://140.124.181.160:8080/softwareEngineer/projects/' + localStorage.getItem("project_id") +'/requirements',
              type:"GET",
              dataType: "json",
              success: function(msg){
                var requirements = eval(msg);
                jQuery.each(requirements , function(index, value){
                console.log(value);
                console.log(value.id);
                console.log(value.name);
                console.log(value.description);
                console.log(i);
                $('input[name="id' + i + '"]').val(value.id);
                $('input[name="name' + i + '"]').val(value.name);
                $('textarea[name="desc' + i + '"]').val(value.description);
                $("#add_row").click();
                i++;
               });
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

console.log('newReq');
var newReq  = function(_name, _desc){
  
  var obj = {
    name: _name,
    description: _desc,
    comment: " "
  };
  console.log(JSON.stringify(obj));
  $.ajax({
   //api的url
   url: "http://140.124.181.160:8080/softwareEngineer/projects/"+ localStorage.getItem("project_id")+"/requirements",
   method: 'post',
   dataType: 'json',
   contentType: 'application/json',
   data: JSON.stringify(obj),
   error: function(err) {
     console.log(err);
     $.msgBox({
      title: "Ooops",
      content: "ERROR occurred!!!",
      type: "error",
      showButtons: false,
      opacity: 0.9,
      autoClose:true
    });

      // $('#info').html('<p>An error has occurred</p>');
    },
    success: function(data) {
      console.log(data);
    }
    

  });
}

var add_req = function(elem){
    console.log(elem);
    var name = $("[name='name"+elem.name+"']").val();
    var desc = $("[name='desc"+elem.name+"']").val();
    console.log(name+" "+desc);
    newReq(name, desc);
}