const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const savetoLocalStorage = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(savetoLocalStorage);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageTextarea.value = message;
  }
});
form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim()
  };
  localStorage.setItem(savetoLocalStorage, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const message = messageTextarea.value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });

  form.reset();
  localStorage.removeItem(savetoLocalStorage);
});