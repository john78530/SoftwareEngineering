$(document).ready(function () {
 
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });


    var projects = [];
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
    },
    method: 'post'

  });
}

var gopage = elem => {
  console.log(elem.childNodes[1].value);
  localStorage.setItem("project_id", elem.childNodes[1].value);
  location.href = "./req.html"
}

var add_proj = function(elem){
    console.log(elem);
    var name = $("[name='name"+elem.name+"']").val();
    var desc = $("[name='desc"+elem.name+"']").val();
    console.log(name+" "+desc);
    newProject(name, desc);
}
/*
console.log('getProjects');
var getProjects  = function(){
console.log('dddddddddddddddddddddddddddddd');
  var obj = {
    id:$('')[0].value,
    name: $('#username')[0].value,
    notes: $('#password')[0].value
  }

  // Get all Projects
  var projects = [];

  $.ajax({
        url: 'http://140.124.181.160:8080/softwareEngineer/projects/',
        type:"GET",
        success: function(msg){
          // JSON get here
          projects = $.parseJSON('[' + msg + ']');
          console.log(projects);
          localStorage.setItem("projectID", data.id);
          location.href = "http://john78530.github.io/project.html";
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
}*/

/////////////////////////

  // Get all Projects
  




//console.log('getProjects');
// var getProjects  = function(){

//   // var obj = {
//   //   id: localStorage.getItem("id")
//   // }
//     var obj = {
//     id: $('#username')[0].value,
//     name: $('#password')[0].value,
//   }
//   console.log(JSON.stringify(obj));
//   $.ajax({
//    //api的url
//    url: 'http://140.124.181.160:8080/softwareEngineer/projects',
//    dataType: 'json',
//    contentType: 'application/json',
//    data: JSON.stringify(obj),
//    error: function(err) {
//      console.log(err);
//      $.msgBox({
//       title: "Ooops",
//       content: "ERROR occurred!!!",
//       type: "error",
//       showButtons: false,
//       opacity: 0.9,
//       autoClose:true
//     });

//       // $('#info').html('<p>An error has occurred</p>');
//     },
//     success: function(data) {
//       // var $title = $('<h1>').text(data.talks[0].talk_title);
//       // var $description = $('<p>').text(data.talks[0].talk_description);
//       // $('#info')
//       //    .append($title)
//       //    .append($description);
//       localStorage.setItem("id", data.id);
//       console.log(data);
//       location.href = "http://john78530.github.io/project.html";
//     },
//     method: 'post'

//   });
// }

//console.log('register');
//var register  = function(){

  // var fake = [{},{
  //   //name:"tony"
  //   name:"slfhaslfijh",
  //   desc:"slfhaslfijh"
  // },
  // {
  //   name:"slfhqwrdfsdfaslfijh",
  //   desc:"213"
  // },
  // {
  //
  //   name:"YEE",
  //   desc:"12346789"
  // },
  // {
  //
  //   name:"6746876",
  //   desc:"slfhaslfijh"
  // }];
  //setTimeout(function() {
    // var e = document.getElementById("type");
    // $.getJSON("http://140.124.181.160:8080/softwareEngineer/projects", function(json){
    //    alert("JSON Data: " + json);
    // });

    //var strUser = e.options[e.selectedIndex].value;
    // for(var i in fake){
    //   if(i==0) continue;
    //   $('input[name="name'+i+'"]').val(fake[i].name);
    //   $('textarea[name="desc'+i+'"]').val(fake[i].desc);
    //   $('select[name="action'+i+'"]>option[value="'+fake[i].type+'"]').attr("selected",true);
    //
    //   $("#add_row").click();
    // }
    //$('option#type').val(fake[0].type);
  //}, 1000);
  //  var req = {
  //   reqName:$('#name')[0].value,
  //   reqDate: $('#date')[0].value,
  //   reqDescription: $('#description')[0].value
  //   reqType: $('#type')[0].value
  // };

  //  var req = {
  //   reqName:$('#name')"testName"
  //   reqDate: $('#name')"2015/12/12"
  //   reqDescription:$('#name')"testDES"
  //   reqType:$('#name')"bug"
  // };
// =======
