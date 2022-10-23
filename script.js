const { body } = document;

function changeBackground(number) {
    lastBackground = body.className;
    newBackground = `background-${number}`
    console.log(newBackground);
    body.className = '';
    switch (number) {
      case '1':
        body.classList.add('background-1');
        break;
      case '2':
        body.classList.add('background-2');
        break;
      case '3':
        body.classList.add('background-3');
        break;
      case '4':
        body.classList.add('background-4');
        break;
      case '5':
        body.classList.add('background-5');
        break;
  
      default:
        break;
    }


    if (newBackground === lastBackground) {
        body.className = '';
      }
    }






    








