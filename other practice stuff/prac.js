  var draggable = document.getElementById('draggable');
  draggable.addEventListener('touchmove', function(event) {
  
    // Place element where the finger is
    draggable.style.left = event.pageX-25 + 'px';
    draggable.style.top = event.pageY-25 + 'px';
  }, false);