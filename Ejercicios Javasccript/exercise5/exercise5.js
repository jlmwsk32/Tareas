let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);

let luisIndex = people.indexOf("Luis");
if (luisIndex !== -1) {
  let luisRemoved = people.splice(luisIndex, 1)[0]; 
  people.unshift(luisRemoved); 
}

people.push("Jesus");


for (let person of people) {
  console.log(person);
  if (person === "Maria") {
    break;
  }
}

let mariaIndex = people.indexOf("Maria");
console.log("Index of Maria:", mariaIndex);

console.log(people);

