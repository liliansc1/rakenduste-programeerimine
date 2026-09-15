//Example: awaiting a provided promise and using its result.

const messagePromise = Promise.resolve("Andmed saabusid!");

async function showMessage() {
  const message = await messagePromise;
  console.log(message);
}

showMessage();