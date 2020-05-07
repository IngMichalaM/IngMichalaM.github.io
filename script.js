console.log("The script is loaded")
// console.log('The script was loaded correctly .') 

let currentPhoto = 0; // which photo is being displayed.
// console.log('Index of the current photo is ' + (currentPhoto))  
// $(".thumbnail").css('border', '1px solid #ddd') // defulat 
// $("[data-number-1]").css('border', 'red 4px solid');
//$('[data-number="1"]').css('border', '#ddd 4px solid');

// $(".thumbnail").css('border', '2px solid green')

// object with 3 fields for the pictures
// id: photo, photo-title, photo-description
// Put them into a JavaScript object with 3 fields (photo, title, desciption)
// Using jQuery load the photo and the texts into their proper places



// arrays for the name , title and descritpino
// whach out for the correct path and the correct "/" or "\"

    // lets do it differently all in onw 
    /*
let imagesData = [
    {photo_number:'1', photo: 'image/vyber/im01.jpg', title: 'The Orange Sunset', description:  'Like from a different world. Or from a cave nest of an increadible huge bird monster.'},
    {photo_number:'2', photo: 'image/vyber/im02.jpg', title: 'The Howling Wolf',  description: 'You cannot see this very often. A lonelly beast, a lonelly tree and thousands of stars above.'},
    {photo_number:'3', photo: 'image/vyber/im4.jpg', title: 'The Tree',  description: 'A lonely tree with a lonely swing and thousands of blooming pink roses.'},
    {photo_number:'4', photo:  'image/vyber/im7.jpg', title: 'The Unicorn',  description: 'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead.'}, 
    {photo_number:'5', photo:  'image/vyber/im11.jpg', title: 'The Sun in the Forest',  description: 'What can one say. We all know it.'}, 
    {photo_number:'6', photo:  'image/vyber/im14.jpg', title: 'The Stout Unicorn ',  description: "In European folklore, the unicorn is often depicted as a white horse-like or goat-like animal with a long horn and cloven hooves (sometimes a goat's beard)."}, 
    {photo_number:'7', photo:  'image/vyber/im15.jpg', title: 'The Unicorns',  description: 'Jack takes Lili to the lair of the unicorns.'}, 
    {photo_number:'8', photo:  'image/vyber/im21.jpg', title: 'On The Run',  description: 'Will he ever escape the Enchanted Forest?'}, 
    ];*/

    let imagesData = [
      {photo: 'image/vyber/im01.jpg', title: 'The Orange Sunset', description:  'Like from a different world. Or from a cave nest of an increadible huge bird monster.'},
      {photo: 'image/vyber/im02.jpg', title: 'The Howling Wolf',  description: 'You cannot see this very often. A lonelly beast, a lonelly tree and thousands of stars above.'},
      {photo: 'image/vyber/im4.jpg', title: 'The Tree',  description: 'A lonely tree with a lonely swing and thousands of blooming pink roses.'},
      {photo:  'image/vyber/im7.jpg', title: 'The Unicorn',  description: 'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead.'},       
      {photo:  'image/vyber/im11.jpg', title: 'The Sun in the Forest',  description: 'What can one say. We all know it.'}, 
      {photo:  'image/vyber/im14.jpg', title: 'The Stout Unicorn ',  description: "In European folklore, the unicorn is often depicted as a white horse-like or goat-like animal with a long horn and cloven hooves (sometimes a goat's beard)."}, 
      {photo:  'image/vyber/im15.jpg', title: 'The Unicorns',  description: 'Jack takes Lili to the lair of the unicorns.'}, 
      {photo:  'image/vyber/im21.jpg', title: 'On The Run',  description: 'Will he ever escape the Enchanted Forest?'}, 
      ];

    // $("[data-number=1]").css('border', 'black 4px solid');
   
    //$("[data-number='1']").css('border', '#ddd 4px solid');
    
    // {photo:  '', title: '',  description: ''}, na pak 
                        
 /* works    $('#photo').attr('src', imagesData[currentPhoto].photo); // works
    $('#photo').attr('alt', "here should be a photo"); // no change in the cycle, works
    $('#photo-title').text(imagesData[currentPhoto].title);  // works
    $('#photo-description').text(imagesData[currentPhoto].description);// works 
*/

// ------------ function, where the photo number is input ----------
let loadPhoto = (photoNumber) => {       
    // the default border
      $(".thumbnail").css('border', '1px solid #ddd') // as the default 
    // $(".thumbnail").css('border', '2px solid green')
     // $(".thumbnail").css('border', 'none')
    // $(".thumbnail:hover").css('box-shadow', '0 0 10px 1px rgba(0, 0, 0, 1)'); // geting it back  to default 

   // console.log("now WITHIN the function 'loadPhoto' with the parameter  " +photoNumber)
   // console.log("[data-number="+imagesData[currentPhoto].photo_number+"] printed");

    $('#photo').attr('src', imagesData[photoNumber].photo); // works
    $('#photo').attr('alt', "here should be a photo"); // no change in the cycle, works
    $('#photo-title').text(imagesData[photoNumber].title);  // works
    $('#photo-description').text(imagesData[photoNumber].description);// works 
    
    
    // also highlight the propre thumbnail
    //$('h1').toggleclass('highlighted_thumbnail');
    // works $('.thumbnail').toggleClass('highlighted_thumbnail');
    // not workingfor the run number on, before the arrowas are clicked  $("[data-number="+imagesData[photoNumber].photo_number+"]").css('border', 'black 4px solid');
    $("[data-number="+imagesData[photoNumber].photo_number+"]").css('border', 'black 4px solid');
    // $("[data-number="+imagesData[photoNumber].photo_number+"]").toggleClass('highlighted_thumbnail');

    // probably doing by indexClicked = $(event.target).attr('data-number');
    // $("[data-number="+imagesData[photoNumber].photo_number+"]").css('box-shadow', ' 0px 0px 20px 1px  red')
    // worsk ok console.log('the "data-number" atribute is: ' +  imagesData[photoNumber].photo_number)
  }
  //console.log("now calling the function 'loadPhoto' with the parameter  " +currentPhoto)
  loadPhoto(currentPhoto); // calling the function. The "currentPhoto"
    // changes based on the click on the right arrow

// --------- the right arrow click ------------------

$('.right').click(() => {
  currentPhoto++;
  if (currentPhoto > (imagesData.length-1)) {
    currentPhoto = 0;       
    }
    loadPhoto(currentPhoto); // calling the function. The "currentPhoto"
    // changes based on the click on the right arrow    
  console.log('Index of the current photo is ' + currentPhoto)  
})

$('.left').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
      currentPhoto =  (imagesData.length-1);       
      }
      loadPhoto(currentPhoto); // calling the function. The "currentPhoto"
      // changes based on the click on the right arrow    
    console.log('Index of the current photo is ' + currentPhoto)  
  })
  

// ------------ create the thumbnails for each picture -------------
// the structure in teh html is now like this: 
        // <a href="image\vyber\im01.jpg" >
        // <img src="image\vyber\im01.jpg" alt="im01" class="thumbnail">
        // </a>
// the data structure here is like this: 
        // imagesData = [
        //    {photo: 'image/vyber/im01.jpg', title: 'The Orange Sunset', description:  'Like from a different world. Or from a cave nest of an increadible huge bird monster.'},
        //    {photo: 'image/vyber/im01.jpg', title: 'The title', description:  'Like from .... '},

// ---  this is the working one ---
imagesData.forEach((item, index) => {
  $( ".thumbnails_container" ).append( 
     // works "<img src=" + item.photo + " class='thumbnail' data-number= '" +   item.photo_number + "'>")// works
// this was before, when the data-number was in theinput array : "<div class='each_thumbnail_div'><img src=" + item.photo + " class='thumbnail' data-number= '" +   item.photo_number + "'> <div class='thumbnail_title'>" + item.title + "</div></img></div>")
"<div class='each_thumbnail_div'><img src=" + item.photo + " class='thumbnail' data-number= '" + index + "'> <div class='thumbnail_title'>" + item.title + "</div></img></div>")
       // ------------- create the small hiden titles as well ----------
      // place them and hide them
      // only show them when hoover - toggleClass
      
  });

  $("[data-number="+imagesData[0].photo_number+"]").css('border', 'black 4px solid');
  //$("[data-number-1]").css('border', 'red 4px solid');

// ----------- visibility of the titles of the thumbnails ---------
 // (event) => {
 //   $(event.target).parent().children('.hidden-title').css('visibility', 'unset');
 // }
 //<div class="each_thumbnail_div">
 //<img src="image\vyber\im01.jpg" alt="im01" class="thumbnail" data-number="1">
 //<div class="thumbnail_title">thumb1111111 1111nail Im 01 title</div>
//</img></div>

// .thumbnail_title {
  //visibility: hidden; 
  // visible
//  $(".each_thumbnail_div:hoover").css('visibility', 'visible'); 
 // background: green;
//$(".each_thumbnail_div").hover


// --------------- the click function for the thumbnails ------------
// let thumbnails_counter = ["first", "second", "third", "fourth"];

// .thumbnail is the class for the thumbnails 
// this responds to the click, but does not distinguish which one was clickedon
/*$('.thumbnail').click(() => {
     console.log("The thumbnail (we don't know which) was clicked on")  
     // the thumbnails are depicted by:  data-number="1">
  });*/ 
  
  // the  "right way" but it should be INSIDE (!!?) the forEach loop, no idea why 
  $('.thumbnail').click((event) => {
    let indexClicked = $(event.target).attr('data-number');
    console.log("The "  + indexClicked + ". thumbnail was clicked on")
    let numberIndex = parseInt(indexClicked); // now numberIndex is a number
    loadPhoto(numberIndex);

    // data-number is the atribute and its number is saved in imagesData.photo_number
    // this number does not correspond to the number in the data array imagesData.
    // for now it could be easilly chnage that the numbers corrspond to their position in the array, but one coulc
    // easily make mistake while adding new photos and their description.
    // idea is that the data-number does not have to be "synchrous" with its position in the data array 


    // !!!! EDIT !!!!!!! 
    // changed the setup - it is really better to add the data-number in the loop while creating hte thumbnails/photo
    // then it will run exactly order as the photos and then the     "$(event.target).attr('data-number')" 
    // will work

    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    //let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    //$('#clicked').text(data[indexClicked]);


    // here we need the link to the main window i guess. Something like this: 
              //(event) => {
              //currentPhoto = $(event.target).attr('data-number');
             // loadPhoto(indexClicked);
              //}
      // example 
     /* function filterList(keyValue, list) {
        let filteredList = [];
        for(let i = 0; i < list.length; i++) {
            if(list[i]["checked"] === keyValue) {
                filteredList.push(list[i]["value"]);
            }
        }
        return filteredList;
    }

console.log(filterList(true, arr));*/

  }); // end of click function

  
 //------------------------------------------------------------
    // works 
/*let data = {
    photo: 'image/vyber/im4.jpg',
    title: 'The tree',
    description: 'What happened here, why is this a very nice image'
    };*/

    /* 
this works 
let photos_all = [
    'image/vyber/im01.jpg',
    'image/vyber/im02.jpg',
    'image/vyber/im10.jpg'
];

let photos_all_titles = [
    'The Orange Sunset',
    'The Howling Wolf',
    'The Tree'
];

let photos_all_description = [
    'Like from a different world. Or from a cave nest of an increadible huge bird monster.',
    'You cannot see this very often. A lonelly beast, a lonelly tree and thousands of stars above.',
    'A lonely tree with a lonely swing and thousands of blooming pink roses.'
];


let data = {
    photo: photos_all[currentPhoto],
    title: photos_all_titles[currentPhoto],
    description: photos_all_description[currentPhoto]
    };
    
   $('#photo').attr('src', data.photo); // works
   $('#photo').attr('alt', "here should be a photo"); // works
   $('#photo-title').text(data.title);  // works
   // works $('h1').text(data.title); // works
    $('#photo-description').text(data.description);// works */
   
   

    // works 
     // lets do it differently all in onw 
  /*  
let imagesData = {
    photo:      ['image/vyber/im01.jpg',
                'image/vyber/im02.jpg',
                'image/vyber/im10.jpg'],
    title:  ['The Orange Sunset',
            'The Howling Wolf',
            'The Tree'],
    description: [
        'Like from a different world. Or from a cave nest of an increadible huge bird monster.',
        'You cannot see this very often. A lonelly beast, a lonelly tree and thousands of stars above.',
        'A lonely tree with a lonely swing and thousands of blooming pink roses.']
    };


$('#photo').attr('src', imagesData.photo[currentPhoto]); // works
$('#photo').attr('alt', "here should be a photo"); // no change in the cycle, works
$('#photo-title').text(imagesData.title[currentPhoto]);  // works
$('#photo-description').text(imagesData.description[currentPhoto]);// works 
*/

/*as the exercise suggests, you should use the first one, one object should be describing the photo and you can have multiple of those in an array
at this point there's minimal difference in usage, but later you can learn why this is useful if you dive deep into programming.
but just imagine if you have 100 photos and you want to add one more, how hard will be to find the end of the photo array, then the title array, then the description in the code, but if you have the other version you can just find the end of your one array, duplicate the last object and rewrite the values and you're done*/