const heading = document.createElement("h2");
heading.textContent = "Student Form";
heading.classList.add("form-heading"); 


const form = document.createElement("form");
form.classList.add("student-form");


const fld = [
  { label: "First Name", type: "text", id: "firstName" },
  { label: "Last Name", type: "text", id: "lastName" },
  { label: "Roll No", type: "text", id: "rollNo" },
  { label: "Gmail", type: "email", id: "gmail" },
  { label: "Password", type: "password", id: "password" },
  { label: "Confirm Password", type: "password", id: "confirmPassword" },
  { label: "Contact", type: "tel", id: "contact" },
  { label: "DOB", type: "date", id: "dob" },
  { label: "Father Name", type: "text", id: "fatherName" },
  { label: "Dept No", type: "text", id: "deptNo" },
  { label: "Year", type: "number", id: "year" },
];


fld.forEach(fld => {
  const label = document.createElement("label");
  label.textContent = fld.label;
  const input = document.createElement("input");
  input.type = fld.type;
  input.id = fld.id;
  input.name = fld.id;

  form.appendChild(label);
  form.appendChild(input);
});


const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);
document.body.appendChild(heading);
document.body.appendChild(form);
