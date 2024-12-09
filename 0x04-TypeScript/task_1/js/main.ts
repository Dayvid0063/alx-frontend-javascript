interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Usage
const teacher3: Teacher = {
    firstName: 'Ruben',
    fullTimeEmployee: false,
    lastName: 'Amorim',
    location: 'Manchester',
    contract: false,
};

console.log(teacher3);
