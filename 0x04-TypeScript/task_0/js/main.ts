interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "David",
    lastName: "Orji",
    age: 25,
    location: "New York"
};

const student2: Student = {
    firstName: "Henrique",
    lastName: "Crusoe",
    age: 24,
    location: "Los Angeles"
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Function to render table
function renderTable(students: Student[]): void {
    // Create table element
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';

    // Create header row
    const headerRow = table.insertRow();
    const firstNameHeader = headerRow.insertCell();
    const locationHeader = headerRow.insertCell();

    firstNameHeader.textContent = 'First Name';
    locationHeader.textContent = 'Location';

    // Style headers
    [firstNameHeader, locationHeader].forEach(header => {
        header.style.border = '1px solid black';
        header.style.padding = '8px';
        header.style.fontWeight = 'bold';
    });

    // Add data rows
    students.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        const locationCell = row.insertCell();

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        // Style cells
        [firstNameCell, locationCell].forEach(cell => {
            cell.style.border = '1px solid black';
            cell.style.padding = '8px';
        });
    });

    // Append table to document body
    document.body.appendChild(table);
}

// Render the table when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTable(studentsList);
});
