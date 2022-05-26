$(function () {
  var player = $("window");

  // Give the document a mousemove event handler
  $(window).on("mousemove", function (e) {
    // If we are hovering over one of the div elements, exit the function
    // if (e.target.nodeName === "DIV") {
    //   return;
    // }

    // Loop through each div and set its rotation separately from each other one
    $(".drop").each(function () {
      // Declare all variables using "let" instead of "var" to avoid closure side-effects
      // of scope sharing

      //  Current position
      let p1 = {
        x: $(this).offset().left,
        y: $(this).offset().top,
      };

      // Future position
      let p2 = {
        x: e.offsetX,
        y: e.offsetY,
      };

      // Angle between them in degrees
      let angleDeg =
        (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI - 90;

      if (angleDeg >= 360) {
        angleDeg -= 360;
      }

      // Just move the div that we're looping over at the moment
      $(this).css("-webkit-transform", "rotate(" + angleDeg + "deg)");
      console.log(angleDeg);
    });
  });
});