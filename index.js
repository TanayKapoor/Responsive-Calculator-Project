var char = '';
const screen = document.getElementById('numbers');

document.getElementById('zero').addEventListener('click', function () {
  if (char.length < 15) {
    char += '0';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('one').addEventListener('click', function () {
  if (char.length < 15) {
    char += '1';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('two').addEventListener('click', function () {
  if (char.length < 15) {
    char += '2';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('three').addEventListener('click', function () {
  if (char.length < 15) {
    char += '3';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('four').addEventListener('click', function () {
  if (char.length < 15) {
    char += '4';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('five').addEventListener('click', function () {
  if (char.length < 15) {
    char += '5';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('six').addEventListener('click', function () {
  if (char.length < 15) {
    char += '6';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('seven').addEventListener('click', function () {
  if (char.length < 15) {
    char += '7';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('eight').addEventListener('click', function () {
  if (char.length < 15) {
    char += '8';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('nine').addEventListener('click', function () {
  if (char.length < 15) {
    char += '9';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('plus').addEventListener('click', function () {
  if (char.length < 15 && Number.isInteger(parseInt(char[char.length - 1]))) {
    char += '+';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('minus').addEventListener('click', function () {
  if (char.length < 15 && Number.isInteger(parseInt(char[char.length - 1]))) {
    char += '-';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document
  .getElementById('multiplication')
  .addEventListener('click', function () {
    if (char.length < 15 && Number.isInteger(parseInt(char[char.length - 1]))) {
      char += '*';
      screen.innerHTML = char;
    } else if (char.length >= 15) {
      char = 'INVALID';
      screen.innerHTML = char;
      char = '';
    }
  });
document.getElementById('division').addEventListener('click', function () {
  if (char.length < 15 && Number.isInteger(parseInt(char[char.length - 1]))) {
    char += '/';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('clear').addEventListener('click', function () {
  char = '';
  screen.innerHTML = char;
});
document.getElementById('point').addEventListener('click', function () {
  if (char.length < 15 && Number.isInteger(parseInt(char[char.length - 1]))) {
    char += '.';
    screen.innerHTML = char;
  } else if (char.length >= 15) {
    char = 'INVALID';
    screen.innerHTML = char;
    char = '';
  }
});
document.getElementById('equal').addEventListener('click', function () {
  if (Number.isInteger(parseInt(char[char.length - 1]))) {
    screen.innerHTML = eval(char);
    char = '';
  }
});
