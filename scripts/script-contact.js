const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  if (formValidation(formData)) {
    try {
      await fetch('https://app.headlessforms.cloud/api/v1/form-submission/dBkK49lqz1', {
        method: 'POST',
        body: formData,
      });
      window.location.href = './thankyou.html';
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        alert('Vormi edastamine ebaõnnestus, sest siht-veebiaadress on vigane! Proovi uuesti!');
      }
      else {
        alert('Tekkis tundmatu viga! Proovi mõne aja pärast uuesti!');
      }
      window.location.href = './contact.html';
      return;
    }
  }
});

const formValidation = (formData) => {
  document.querySelector('.alert-message')?.remove();

  const firstName = formData.get('first-name');
  const email = formData.get('email');

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
