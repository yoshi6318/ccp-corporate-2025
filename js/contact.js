(() => {
  const form = document.getElementById('contactForm');
  const iframe = document.getElementById('hidden_iframe');
  const status = document.getElementById('formStatus');
  if (!form || !iframe || !status) return;

  let submitting = false;
  const inputs = form.querySelectorAll('input, textarea, button, select');

  function setDisabled(disabled) {
    inputs.forEach(el => {
      if (el.type !== 'hidden') el.disabled = disabled;
    });
  }

  form.addEventListener('submit', () => {
    submitting = true;
    status.textContent = 'Sending... / 送信中...';
    status.className = 'form-status sending';
    setDisabled(true);
  });

  iframe.addEventListener('load', () => {
    if (!submitting) return; // ignore initial load
    submitting = false;
    // Success feedback
    status.textContent = 'Thank you! Your message has been sent. / 送信しました。ありがとうございます。回答をお待ちくださいませ。';
    status.className = 'form-status success';
    form.reset();
    setDisabled(false);
  });
})();

