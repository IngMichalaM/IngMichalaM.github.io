
console.log('The script was loaded correctly .') 

// since the default value is not being display by the html :-/, this might fix it
$("input").val('2 bottles of milk');

/* works well
$('#myButton').click( () => {
  $( "ul" ).append( "<li>" + nameInputField.value +" </li>" )     
  $('button').css('background', 'green') 
  $("#nameInputField").val(""); // delete value from input  
}) ; */

let myColors = ['#CC99FF', '#FF99FF'];
// light purple , orange light 
// works let myColors = ['red', 'green'];
let countClick = 0; 

// works ok as well
$('#myButton').on('click', function() {  
   // check that the input is not empty 
   if($('input').val() == ''){
    // if is empty, change the background color 
    $('#nameInputField').css('background', '#FF0000')   
     // alert('Input can not be left blank');
   } else {
     // now, since the input is valid, do all the changes: 
     //   add it to the list and 
     //   change the color of the input and the button
      $( "ul" ).append( "<li>" + nameInputField.value +" </li>" )     
      // could be also $('ul').append(`<li>${$('input').val()}</li>`);
      countClick++; // counting the clicks
      console.log('Number of clicks: ' + countClick);
      let colorPick = countClick%2; 
      // change the color of the button based on the number of clicks :-)
      $('button').css('background', myColors[colorPick]) 
      $('#nameInputField').css('background', myColors[colorPick])   
      // works $('button').css('background', 'green')       
   }
 
    // needs to be deleted AFTER it checks wheter it is empty or not 
    $("#nameInputField").val(""); // delete value from input  

});

/* not working , does not matter if <li> or <ul> is used as selector 
$('li').click(() => {
  // not working $(this).css('text-decoration', 'line-through')
   $(this).toggleClass('scratched'); // scratched - defined as style in css
}); */


//  text line-through (cz: skrtnout polozku seznamu)
$("ul").on("click", "li", function(){ 
  $(this).toggleClass("scratched"); // scratched - defined as style in css (text-decoration: line-through;)
})


$("p").click(() => {
  alert("The paragraph was clicked on.");
}); 

/*
.stroked{ text-decoration: line-through; }

then just:

$(document).ready(function() {
    $(".button1").click(function() {
    $("ul li:nth-child(1)").toggleClass('stroked');
    });
});
 */


/* od jineho ucastnikskrtnout polozku seznamu
$("ul").on("click", "li .todo-text", function(){ // CORRECT
  $(this).toggleClass("scratched"); // CORRECT
})*/
       
