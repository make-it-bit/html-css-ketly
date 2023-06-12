const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  if (!name) return 'Nimi puudub!';

  // kui nimes on numbrid, returni ja lisa DOM'i vastav error

  try {
    await fetch('https://app.headlessforms.cloud/api/v1/form-submission/dBkK49lqz1', {
      method: 'POST',
      body: new FormData(document.getElementById('form')),
    });
    window.location.href = 'thankyou.html';
  } catch (error) {
    // proovi errorist saada kätte info, et post url on vale ja lisa DOM'i selle kohta info
    // https://app.headlessforms.cloud/api/v1/form-submission/dBkKweoidjweioj3290u9
    //
    // ära postita body või postita puudulik body
    alert(new Error('Midagi juhtus! Proovi uuesti!'));
  }
});
