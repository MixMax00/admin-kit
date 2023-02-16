// toggle bar sidebar

$(document).ready(function(){
    $("#toggleBar").click(function(){
        $("#sidebar").toggleClass("hide");
        $(".main").toggleClass("show");
        $(".sidebar").toggleClass("hideMobile");
    });
});

