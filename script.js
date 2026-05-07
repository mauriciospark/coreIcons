const iconsGrid = document.getElementById('icons-grid');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const resetSearchBtn = document.getElementById('reset-search');
const emptyState = document.getElementById('empty-state');
const totalIconsEl = document.getElementById('total-icons');
const filteredIconsEl = document.getElementById('filtered-icons');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalUrl = document.getElementById('modal-url');
const modalNameInput = document.getElementById('modal-name-input');
const copyUrlBtn = document.getElementById('copy-url-btn');
const copyNameBtn = document.getElementById('copy-name-btn');

let allIcons = [];
let filteredIcons = [];

function init() {
  if (typeof coreIconsData === 'undefined') {
    console.error('coreIconsData não encontrado. Verifique se data.js está carregado.');
    return;
  }

  allIcons = coreIconsData;
  filteredIcons = [...allIcons];

  updateStats();
  renderIcons(filteredIcons);
  setupEventListeners();
}

function updateStats() {
  totalIconsEl.textContent = allIcons.length;
  filteredIconsEl.textContent = filteredIcons.length;
}

function renderIcons(icons) {
  if (icons.length === 0) {
    iconsGrid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  const html = icons.map(icon => `
    <div class="icon-card" data-name="${escapeHtml(icon.name)}" data-file="${escapeHtml(icon.file)}" onclick="openModal('${escapeHtml(icon.name)}', '${escapeHtml(icon.file)}')">
      <div class="copy-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </div>
      <img src="fotos/${icon.file}" alt="${escapeHtml(icon.name)}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23666%22><rect width=%2224%22 height=%2224%22/></svg>'">
      <div class="icon-name">${escapeHtml(icon.name)}</div>
    </div>
  `).join('');

  iconsGrid.innerHTML = html;
}

function openModal(name, file) {
  const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
  const fullUrl = `${baseUrl}/fotos/${file}`;
  
  modalImg.src = `fotos/${file}`;
  modalImg.alt = name;
  modalName.textContent = name;
  modalUrl.value = fullUrl;
  modalNameInput.value = name;
  
  modalOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.style.display = 'none';
  document.body.style.overflow = '';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function filterIcons(query) {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    filteredIcons = [...allIcons];
  } else {
    filteredIcons = allIcons.filter(icon =>
      icon.name.toLowerCase().includes(normalizedQuery)
    );
  }

  updateStats();
  renderIcons(filteredIcons);
}

function setupEventListeners() {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    filterIcons(query);
    clearSearchBtn.style.display = query ? 'flex' : 'none';
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterIcons('');
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
  });

  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterIcons('');
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      filterIcons('');
      clearSearchBtn.style.display = 'none';
      searchInput.blur();
    }
  });

  modalClose.addEventListener('click', closeModal);
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  copyUrlBtn.addEventListener('click', () => {
    copyToClipboard(modalUrl.value);
  });

  copyNameBtn.addEventListener('click', () => {
    copyToClipboard(modalNameInput.value);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
      closeModal();
    }
  });}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`"${text}" copiado!`);
  }).catch(err => {
    console.error('Erro ao copiar:', err);
    fallbackCopy(text);
  });
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    showToast(`"${text}" copiado!`);
  } catch (err) {
    console.error('Fallback copy falhou:', err);
    showToast('Erro ao copiar. Selecione manualmente.');
  }

  document.body.removeChild(textarea);
}

let toastTimeout;
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

document.addEventListener('DOMContentLoaded', init);
