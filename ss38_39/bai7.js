function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const specialChars = document.getElementById('specialChars').checked;

    const charset = [];
    if (uppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (lowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (numbers) charset.push('0123456789');
    if (specialChars) charset.push('!@#$%^&*()_+[]{}|;:,.<>?');

    if (charset.length === 0) {
      alert('Chọn ít nhất một tùy chọn cho password.');
      return;
    }

    const password = Array.from({ length }, () => {
      const randomCharset = charset[Math.floor(Math.random() * charset.length)];
      return randomCharset[Math.floor(Math.random() * randomCharset.length)];
    }).join('');

    document.getElementById('password-input').value = password;
  }

  function copyToClipboard() {
    const passwordInput = document.getElementById('password-input');
    passwordInput.select();
    document.execCommand('copy');
    alert('Password đã được copy vào clipboard!');
  }