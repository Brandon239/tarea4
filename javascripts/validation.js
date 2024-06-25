const form = document.getElementById('form');
const emailInput = form.email;
const emailConfirmInput = form.email_confirm;
const errorMessage = document.querySelector('.error-message');

emailConfirmInput.addEventListener('input', () => {
  validateEmails();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmails();
  if (!emailConfirmInput.classList.contains('invalid')) {
    form.submit();
  }
});

function validateEmails() {
  if (emailConfirmInput.value !== emailInput.value && emailConfirmInput.value.trim() !== '') {
    emailConfirmInput.classList.add('invalid');
    errorMessage.style.display = 'block';
  } else {
    emailConfirmInput.classList.remove('invalid');
    errorMessage.style.display = 'none';
  }


}