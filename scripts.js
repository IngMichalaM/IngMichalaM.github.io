
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
    // if is empty, change the background color to red
    $('#nameInputField').css('background', '#FF0000')   
    // but don't add an empty item. You can even use an alert: 
             // alert('Input can not be left blank');
   } else {
     // now, since the input is valid, do all the changes: 
     //   add it to the list and 
     //   change the color of the input and the of the button
      $( "ul" ).append( "<li>" + nameInputField.value +" </li>" )     
      // could be also $('ul').append(`<li>${$('input').val()}</li>`);
      countClick++; // counting the clicks
      console.log('Number of clicks: ' + countClick); // writes number of clics to the consol log
      let colorPick = countClick%2; // modulo - it will be alway 0 or 1 - then pick the color from the array of two colors 
      // change the color of the button based on the number of clicks :-)
      $('button').css('background', myColors[colorPick]) // color of the "add" button
      $('#nameInputField').css('background', myColors[colorPick])   // color of the input 
      
      // adding the signs - trash and tick - append to the <li>, so <li> is "parent"
      $("li:last-child").append(         
        "<img src='trash_sign.png' alt='trash' class='image-trash' />"             
      )

      $("li:last-child").append(         
        "<img src='tick_sign.png' alt='tick' class='image-tick' />  "             
      )     
   } // end of else
 
    // needs to be deleted AFTER it checks wheter it is empty or not 
    $("#nameInputField").val(""); // delete value from input  
}); // end of "click" function

//  text line-through (cz: skrtnout polozku seznamu)
$("ul").on("click", "li", function(){ 
  $(this).toggleClass("scratched"); // scratched - defined as style in css (text-decoration: line-through;)
})


// ---- handling the clicks on the trash and tick ikon
// removes the item 
 $("ul").on("click", ".image-trash", function(){
  // $(this).remove(); // removes only the image of the bin
  $(this).parent().remove(); 
});

// change the color item to green (and teh cross out stays)
$("ul").on("click", ".image-tick", function(){
  // $(this).remove(); // removes only the image of the bin
  $(this).parent().css('color', 'green'); 
});
