/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("a").mouseover(function(){
    $(this).css('color', '#57FF69').css('background-color', 'blue');
}).mouseout(function(){
    $(this).css('color', 'black').css('background-color', 'transparent');
});

$(window).load(function(){
    $("#nav1,#nav2,#nav3,#nav4").addClass('contentBox').hide();
});



$('.button-color-1 a').click(function(){
    $("#nav2,#nav3,#nav4").hide();
    $("#nav1").show("fast");
});

$('.button-color-2 a').click(function(){
    $("#nav1,#nav3,#nav4").hide();
    $("#nav2").show("fast");
});

$('.button-color-3 a').click(function(){
    $("#nav1,#nav2,#nav4").hide();
    $("#nav3").show("fast");
});

$('.button-color-4 a').click(function(){
    $("#nav1,#nav2,#nav3").hide();
    $("#nav4").show("fast");
});