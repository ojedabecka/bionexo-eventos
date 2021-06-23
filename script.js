function openEvent(eventName) {
    var i;
    var x = document.getElementsByClassName("events");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(eventName).style.display = "block";
  }