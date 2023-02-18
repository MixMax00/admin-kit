// toggle bar sidebar

$(document).ready(function(){
    $("#toggleBar").click(function(){
        $("#sidebar").toggleClass("hide");
        $(".main-content").toggleClass("show");
        $(".sidebar").removeClass('sidebar-hide');
    });


    $(".sub-menu ul").hide();
    $(".sub-menu a").click(function(){
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa fa-angle-up fa fa-angle-down");
    });



    $(".profile").hide();

    $("#profile").click(function(){
        $(".profile").toggle();
    });
});


