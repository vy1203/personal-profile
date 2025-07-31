document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');
  const downloadBtn = document.getElementById('downloadCV');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  });

  downloadBtn.addEventListener('click', () => {
    const fileUrl = '.\profile.cv'; 
    const fileName = 'cv.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Resume downloaded via JavaScript!');
  });
});
