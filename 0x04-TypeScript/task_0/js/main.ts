// Create interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create students
const student1: Student = {
  firstName: 'Faith',
  lastName: 'Ogbor',
  age: 21,
  location: 'Nigeria'
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Lagos'
};

// Create array
const studentsList: Student[] = [student1, student2];

// Display in table
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
