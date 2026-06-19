function calculateMarks() {
    let numSubjects = parseInt(document.getElementById("subjects").value);

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let total = 0;
    let pass = true;

    for (let i = 1; i <= numSubjects; i++) {
        let marks = parseFloat(
            prompt(`Enter marks for Subject ${i} (0 - 100):`)
        );

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid marks entered!");
            return;
        }

        total += marks;

        if (marks < 40) {
            pass = false;
        }
    }

    let average = total / numSubjects;
    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let resultStatus = pass ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h3>Result</h3>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average Marks:</strong> ${average.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${resultStatus}</p>
    `;
}