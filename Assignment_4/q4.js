// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields;
    this.container = document.getElementById(containerId);
  }

  createForm() {
    const form = document.createElement("form");
    form.id = "generatedForm";

    this.fields.forEach((field, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "field-row";

      const label = document.createElement("label");
      label.htmlFor = `field-${index}`;
      label.textContent = field.label;

      const input = document.createElement("input");
      input.type = field.type;
      input.id = `field-${index}`;
      input.name = field.name || field.label.toLowerCase().replace(/\s+/g, "_") ;
      input.placeholder = field.placeholder || `Enter ${field.label}`;

      wrapper.append(label, input);
      form.appendChild(wrapper);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = this.getFormData(form);
      document.getElementById("formResult").textContent =
        JSON.stringify(data, null, 2);
    });

    this.container.replaceChildren(form);
  }

  getFormData(form = document.getElementById("generatedForm")) {
    const formData = {};
    this.fields.forEach((field, index) => {
      const input = form.querySelector(`#field-${index}`);
      const key = field.name || field.label.toLowerCase().replace(/\s+/g, "_");
      formData[key] = input.value;
    });
    return formData;
  }
}

const fields = [
  { type: "text", label: "Username", name: "username" },
  { type: "email", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" }
];

const formBuilder = new FormBuilder(fields, "dynamicFormContainer");
formBuilder.createForm();
