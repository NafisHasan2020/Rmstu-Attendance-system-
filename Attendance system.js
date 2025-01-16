/ Retrieve attendance records from localStorage when the page loads
window.onload = function() {
    const records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    const ul = document.getElementById('attendance-records');
    
    // Loop through the records and display them
    records.forEach(record => {
const li = document.createElement('li');
        li.textContent = `record.studentName -{record.status}`;
        ul.appendChild(li);
    });
};

// Event listener for the form submission
document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission behavior (page reload)

    // Get the values from the input fields
    const studentName = document.getElementById('student-name').value;
    const status = document.getElementById('status').value;

    // Retrieve the existing attendance records from LocalStorage
    const records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    // Create a new record object with student name and attendance status
    const newRecord = {
        studentName: studentName,
        status: status
    };

    // Push the new record into the existing records array
    records.push(newRecord);

    // Store the updated records back into LocalStorage
    localStorage.setItem('attendanceRecords', JSON.stringify(records));

    // Clear the form input fields
    document.getElementById('student-name').value = '';
    document.getElementById('status').value = 'present';

    // Create a new list item for the attendance list