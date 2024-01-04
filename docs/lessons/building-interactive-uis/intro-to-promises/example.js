

const boo = () => {
  let foo = 5;

  for (let i=0; i<foo; i++) {
    console.log(`I am a foo: ${i}`);
  }
};

function main() {
  console.log(`This should be an iife.`);
  boo();
}

main();
