const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const randomChar = () => char[Math.floor(Math.random() * char.length)];

const generarId = () => {
  let pattern = '';
  let i = 0;
  while (i < 4) {
    let j = 0;
    while (j < 4) {
      pattern += randomChar();
      j += 1;
    }
    if (i < 3) {
      pattern += '-'
    }
    i += 1;
  }
  return pattern;
};

const id = generarId();

console.log('This is the id pattern ==>', id);