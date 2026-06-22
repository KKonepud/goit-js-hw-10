import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  dataForm: document.querySelector('.form'),
  inputDelay: document.querySelector('.form input[name="delay"]'),
  submitBtn: document.querySelector('.form button[type="submit"]'),
};

refs.dataForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const delay = Number(refs.inputDelay.value);
  const state = document.querySelector('input[name="state"]:checked').value;
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(() => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(() => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
