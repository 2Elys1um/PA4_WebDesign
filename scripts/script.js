(() => {
  const form = document.querySelector("#inquiry-form");
  if (!(form instanceof HTMLFormElement)) return;

  const successMessage = document.querySelector("#form-success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      const firstInvalidField = form.querySelector(":invalid");
      if (firstInvalidField instanceof HTMLElement) firstInvalidField.focus();
      return;
    }

    if (successMessage instanceof HTMLElement) {
      successMessage.classList.remove("d-none");
      successMessage.focus();
    }
    form.reset();
    form.classList.remove("was-validated");
  });
})();