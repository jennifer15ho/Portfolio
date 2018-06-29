$(document).ready(function(){
    
    $(".top 1").css("color" ,"purple");
    
    $(".row .footer .1").click(function(){
        show("#lightbox");
    });
});

function show(selecter){
    $(selecter).css({display: "block"});
}
function hide(selecter){
    $(selecter).css({display: "none"});
}