const pressed = [];
const secretCode = 'colin';

window.addEventListener('keyup', (event) => {
  pressed.push(event.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // gets us the length by working backwards
  if(pressed.join('').includes(secretCode)) {
    console.log("DING!");
    cornify_add();
  }
  console.log(pressed);
});
