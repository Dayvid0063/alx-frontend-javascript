// Task 1: Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Task 2: Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Task 3: printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// printTeacher func
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Task 4: Interface for the StudentClass constructor
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// StudentClass Implementation
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) { }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Examples and Testing

// Creating a Teacher object
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

// Creating a Directors object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

// Using printTeacher function
console.log(printTeacher("John", "Doe"));

// Using StudentClass
const student = new StudentClass("David", "Orji");
console.log(student.displayName());
console.log(student.workOnHomework());
