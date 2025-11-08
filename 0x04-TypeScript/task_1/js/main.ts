
// Teacher interface
interface Teacher {
  readonly firstName: string;         
  readonly lastName: string;           
  fullTimeEmployee: boolean;           
  yearsOfExperience?: number;          
  location: string;                   
  [key: string]: any;                
}

const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'Paris',
  contract: true,   
};

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
