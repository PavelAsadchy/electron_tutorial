const {
  getNode,
  getChrome,
  getElectron,
  ping
} = window.versions;

const { toggle, system } = window.darkMode;

const information = document.getElementById('info');
const pingBtn = document.getElementById('ping');
const respEl = document.getElementById('response');

const darkModeBtn = document.getElementById('toggle-dark-mode');
const systemModeBtn = document.getElementById('reset-to-system');
const themeEl = document.getElementById('theme-source')

const handlePing = async () => {
  const response = await ping();
  respEl.innerText = response;
};

information.innerText = `This app uses Chrome (v${getChrome()}), Node.js (v${getNode()}), and Electron (v${getElectron()})`;
pingBtn.addEventListener('click', handlePing);

darkModeBtn.addEventListener('click', async () => {
  const isDarkMode = await toggle();
  themeEl.innerHTML = isDarkMode ? 'Dark' : 'Light';
});

systemModeBtn.addEventListener('click', async () => {
  await system();
  themeEl.innerHTML = 'System';
});
