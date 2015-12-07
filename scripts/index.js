$(document).ready(function (){
  $('#trigger').click(function() {
      var i = Math.floor(Math.random() * collection['images'].length);
      var result = collection['images'][i]['image_src'];

      $('#container').append('<img src="'+result+'"/>');

  })

  $('#remove').click(function() {
    $('#container').find('img').remove()
  })

  $('#block').click(function() {
    $('#container').find('img').css({'display':'block'});
  })



})

//instructions:

// Write a script that , when you click on the button,
// adds a new fox RANDOM image to the container div.
// All foxes should be floated.  Make another button to remove all foxes.

// Stretch:   Make several buttons that change the way the foxes are
// added and displayed.  Example:  a new add button would change all
// to display: block in the existing dom and add a new random fox which is
// also display: block.  Hit the display float button and they all change
// back to float and it adds a new floated random fox.
