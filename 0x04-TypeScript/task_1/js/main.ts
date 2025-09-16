interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Ernest',
  fullTimeEmployee: false,
  lastName: 'Arhin',
  location: 'Assin Fosu',
  contract: false,
};

console.log(teacher3);