//Example: creating a list of names, updating it, and printing each name.

const names = ["Mari", "Jüri", "Kati"];

// Lisame nime massiivi
names.push("Martin");

// Kuvame kõik nimed
for (const name of names) {
  console.log(name);
}