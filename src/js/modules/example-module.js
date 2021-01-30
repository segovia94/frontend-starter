// This is an example of an ES Module (ESM).
export default function exampleModule() {
  (async () => {
    await setTimeout(async function() {
      console.log('this is an ESM loaded natively in the browser.')
    }, 3000);
    
  })();
}
