$(document).ready(function () {
 
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });


    //var projects = [];
  $.ajax({
        url: 'http://140.124.181.160:8080/softwareEngineer/member/' + localStorage.getItem("user_id"),
        type:"GET",
        success: function(msg){
          // JSON get here
          projects = eval(msg);
          console.log(projects);
          var i = 0;
          projects.forEach(function(project) {
            /////
            $.ajax({
                  url: 'http://140.124.181.160:8080/softwareEngineer/projects/' + project.project_id,
                  type:"GET",
                  success: function(msg){
                    var projectInformation = eval(msg);
                    console.log(projectInformation);
                    console.log(projectInformation.name);
                    console.log(projectInformation.note);
                    console.log(i);
                    $('input[name="name' + i + '"]').val(projectInformation.name);
                    $('textarea[name="desc' + i + '"]').val(projectInformation.note);
                    $("[data-id='"+i+"']>td>button>input").val(projectInformation.id);
                    $("[name='role"+i+"']").val(project.role);
                    $("#add_row").click();
                    i++;
                  },
                  error:function(err){
                    console.log(err);
                  }
            });
            /////
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


});

$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});

var add_member  = function(){
        console.log('add_member');
        /////////////////////
        /////////////////////
}

console.log('newProject');
var newProject  = function(_name, _desc){
  var obj = {
    name: _name,
    notes: _desc
  };
  console.log(JSON.stringify(obj));
  $.ajax({
   //api的url
   url: "http://140.124.181.160:8080/softwareEngineer/projects",
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
      $.ajax({
        url: "http://140.124.181.160:8080/softwareEngineer/member",
         dataType: 'json',
         method:'post',
         contentType: 'application/json',
         data: JSON.stringify({
          project_id:data.id,
          user_id:localStorage.getItem('user_id'),

          role:"PM",
          username:localStorage.getItem('user_name')
         }),
         error: function(err) {
          console.err(err);
         },
         success: function(data){
          console.log(data);
         }
      })
    },
    method: 'post'
  });
}

var gopage = elem => {
  console.log(elem.childNodes[1].value);
  localStorage.setItem("project_id", elem.childNodes[1].value);
  var name=elem.name.substring(2 );
  var role = $("[name='role"+name+"']").val();
  
  //console.log(localStorage.setItem("role", role));
  setTimeout(function() {
    localStorage.setItem("role", role);
  location.href = "./req.html";

  }, 500);
}


var delete_proj = elem =>{
  var project_id = $("[name='go"+elem.name+"'] [type='hidden']").val();
  console.log(project_id);
  
  $.ajax({
    url: "http://140.124.181.160:8080/softwareEngineer/projects/"+ project_id,
         dataType: 'json',
         method:'delete',
         contentType: 'application/json',
         
         error: function(err) {
          console.err(err);
         },
         success: function(data){
          console.log(data);
         }
  })
}

var add_proj = function(elem){
    console.log(elem);
    var name = $("[name='name"+elem.name+"']").val();
    var desc = $("[name='desc"+elem.name+"']").val();
    $("[name='role"+elem.name+"']").val("PM");
    
    console.log(name+" "+desc);
    newProject(name, desc);
}

