async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Andmete laadimine ebaõnnestus");
    }

    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.log("Viga:", error.message);
  }
}

getData();