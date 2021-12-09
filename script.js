$(document).ready(onReady);

function onReady (){
    console.log('on ready');
$('.box').first().text('I am a humble box');
$('box').css({
    color: 'purple', 
    'font-size': '20px'})
  
// selecy my plantList element 
//append means add another child to the plantList
    $('#plantList').append('<li> Bamboo </li>')
    console.log($('body'));
    $('body').append('<h1> My awesome new jQuery app </h1>')
    $('#soilOrders').append('<li> Oxisol</li>')
    $('#soilOrders').append('<li> Inceptisol </li>')
    /* //get text and   
let divText = $('div').text(),
//grab text and save it to a variable
 $ ('div').text("YOLO");
*/
let h5Text = $( '#welcomeText').text();
console.log('h5 text is ,', h5Text);


};



