const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  if (formValidation(formData)) {
    try {
      await fetch('https://app.headlessforms.cloud/api/v1/form-submission/dBkedgywelqz1', {
        method: 'POST',
        body: new FormData(document.getElementById('form')),
      });
      window.location.href = './thankyou.html';
    } catch (error) {
      if (error instanceof TypeError) {
        if (error.message === 'Failed to fetch') {
          alert('Vormi postitus-veebiaadress on vigane, mistõttu vormi edastamine ebaõnnestus! Proovi uuesti!');
          window.location.href = './contact.html';
        }
      }
    }
  }
});

const formValidation = (formData) => {
  const firstName = formData.get('first-name');
  const email = formData.get('email');

  const alertMessage = document.querySelector('.alert-message');
  if (alertMessage) {
    alertMessage.remove();
  }

  if (!firstName) {
    const firstNameLabel = document.getElementById('fname');
    const p = document.createElement('p');
    p.classList.add('alert-message');
    p.innerText = 'Eesnime väli jäi tühjaks! Proovi uuesti!';
    firstNameLabel.parentNode.insertBefore(p, firstNameLabel.nextSibling);
    return false;
  } else if (/\d/.test(firstName)) {
    const firstNameLabel = document.getElementById('fname');
    const p = document.createElement('p');
    p.classList.add('alert-message');
    p.innerText = 'Eesnimi sisaldab numbreid, kuid ei tohiks! Proovi uuesti!';
    firstNameLabel.parentNode.insertBefore(p, firstNameLabel.nextSibling);
    return false;
  } else if (!email) {
    const emailLabel = document.getElementById('email');
    const p = document.createElement('p');
    p.classList.add('alert-message');
    p.innerText = 'Meiliaadressi väli jäi tühjaks! Proovi uuesti!';
    emailLabel.parentNode.insertBefore(p, emailLabel.nextSibling);
    return false;
  } else {
    return true;
  }
};
