//getting ref of all input feilds
const nameref = document.getElementById("name");
const emailref = document.getElementById("email");
const gparef = document.getElementById("gpa");
const ageref = document.getElementById("age");
const degreeref = document.getElementById("degree");

//creating array for table
const students = [
  // {
  //   ID: 1,
  //   name: "Alice",
  //   age: 21,
  //   degree: "Btech",
  //   email: "alice@example.com",
  // },
];

//gettingref for button
const btn = document.getElementById("btn");
console.log(btn);

//creating event listener for button to cpature values of forms when enetered
const listener = () => {
  console.log(
    nameref.value +
      " " +
      emailref.value +
      " " +
      gparef.value +
      " " +
      ageref.value +
      " " +
      degreeref.value
  );

  //creating new row
  const newrow = document.createElement("tr");

  //creating id cell in the row
  const idcell = document.createElement("td");
  idcell.textContent = students.length + 1;
  newrow.appendChild(idcell);

  //creating name cell in the row
  const namecell = document.createElement("td");
  namecell.textContent = nameref.value;
  newrow.appendChild(namecell);

  //creating email cell in the row
  const emailcell = document.createElement("td");
  emailcell.textContent = emailref.value;
  newrow.appendChild(emailcell);

  //creating age cell in the row
  const agecell = document.createElement("td");
  agecell.textContent = ageref.value;
  newrow.appendChild(agecell);

  //creating gpa cell in the row
  const gpacell = document.createElement("td");
  gpacell.textContent = gparef.value;
  newrow.appendChild(gpacell);

  // creating  edit icons cell in the row
  const editIcon = document.createElement("i");
  editIcon.className = "fas fa-edit edit-icon";
  // Adding event listener to edit icon
  editIcon.addEventListener("click", () => {
    // Populate the form fields with the row data
    nameref.value = namecell.textContent;
    emailref.value = emailcell.textContent;
    ageref.value = agecell.textContent;
    gparef.value = gpacell.textContent;
    degreeref.value = degreecell.textContent;
  });

  // creating  delete icons cell in the row
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt delete-icon";
  // Adding event listener to delete icon
  deleteIcon.addEventListener("click", () => {
    // Remove the row when delete icon is clicked
    newrow.remove();
  });

  // Create a span element to hold the icons
  const iconsSpan = document.createElement("span");
  iconsSpan.className = "icons-span";
  iconsSpan.appendChild(editIcon);
  iconsSpan.appendChild(deleteIcon);

  //creating degreecell cell in the row
  const degreecell = document.createElement("td");
  degreecell.textContent = degreeref.value;
  degreecell.appendChild(iconsSpan);
  newrow.appendChild(degreecell);

  //append new row to the table body by getting table body ref
  const tablebodyref = document.querySelector(".studenttable tbody");
  tablebodyref.appendChild(newrow);

  //clearing the input field
  nameref.value = "";
  emailref.value = "";
  gparef.value = "";
  ageref.value = "";
  degreeref.value = "";

  // Add the new student to the students array
  students.push({
    ID: students.length + 1,
    name: namecell.textContent,
    age: agecell.textContent,
    email: email.textContent,
    gpa: gpacell.textContent,
    degree: degreecell.textContent,
  });

  console.log(students);
};

btn.addEventListener("click", listener);

//search bar functionality
// Get references to the input field and table body
const searchInput = document.getElementById("search");
const tableBody = document.querySelector(".studenttable tbody");

// Function to filter and update the table
function updateTable(filter, nameref, emailref, gparef, ageref, degreeref) {
  tableBody.innerHTML = ""; // Clear existing rows

  students.forEach((student) => {
    if (
      student.name.toLowerCase().includes(filter) ||
      student.email.toLowerCase().includes(filter) ||
      student.degree.toLowerCase().includes(filter)
    ) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${student.ID}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
                <td>${student.gpa}</td>
                <td>${student.degree}
                <span>
                <i class="fas fa-trash-alt delete-icon"></i>
                <i class="fas fa-edit edit-icon"></i>
                </span>
                </td>
            `;
      tableBody.appendChild(newRow);

      // Adding event listener to delete icon
      const deleteIcon = newRow.querySelector(".delete-icon");
      deleteIcon.addEventListener("click", () => {
        // Remove the row when delete icon is clicked
        newRow.remove();
      });

      // Adding event listener to edit icon
      const editIcon = newRow.querySelector(".edit-icon");
      editIcon.addEventListener("click", () => {
        // Populate the form fields with the row data
        nameref.value = student.name;
        emailref.value = student.email;
        ageref.value = student.age;
        gparef.value = student.gpa;
        degreeref.value = student.degree;
      });
    }
  });
}

// Add input event listener to the search input
searchInput.addEventListener("input", (event) => {
  const filter = event.target.value.toLowerCase();
  updateTable(filter, nameref, emailref, gparef, ageref, degreeref);
});

// Initial table update
updateTable("", nameref, emailref, gparef, ageref, degreeref);
