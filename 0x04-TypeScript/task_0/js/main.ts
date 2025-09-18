// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Amahle",
  lastName: "Nkosi",
  age: 22,
  location: "Cape Town"
};

const student2: Student = {
  firstName: "Thabo",
  lastName: "Mokoena",
  age: 24,
  location: "Johannesburg"
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Create and render the table
const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = table.insertRow();
const header1: HTMLTableCellElement = document.createElement("th");
const header2: HTMLTableCellElement = document.createElement("th");

header1.textContent = "First Name";
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);

// Populate rows from studentsList
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);