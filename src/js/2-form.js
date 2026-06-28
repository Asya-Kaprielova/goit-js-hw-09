const formData = { 
  email: "", 
  message: "" 
};
const localStorageKey = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);
 formData.email = parsedData.email ?? "";
  formData.message = parsedData.message ?? "";
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener("input", (evt) => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
  formData.message = "";
});