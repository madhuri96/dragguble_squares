var chooseSquare;

const move = function (element) {
  const elements = document.querySelectorAll('.square');

  elements.forEach((element) => {
    element.addEventListener('mousedown', () => {
      element.style.position = 'absolute';
      chooseSquare = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseSquare.style.left = x - 50 + 'px';
        chooseSquare.style.top = y - 50 + 'px';

        console.log(chooseSquare);
      };
    });
  });
  document.onmouseup = function (e) {
    chooseSquare = null;
    document.onmousemove = null; // clear the event handler
  };
};
