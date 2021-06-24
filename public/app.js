/* eslint-disable no-plusplus */
document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;
  console.log(pathname);
  const ajaxSend = (formData) => {
    fetch(`${pathname}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.ok ? response.json() : response.status)
      .then((response) => console.log(JSON.stringify(formData)))
      .catch((error) => console.error(error));
  };

  const forms = document.getElementsByTagName('form');
  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      let formData = new FormData(this);
      formData = Object.fromEntries(formData);
      ajaxSend(formData);
      forms[i].reset();
    });
  }
});
