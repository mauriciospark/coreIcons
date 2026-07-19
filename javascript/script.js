/*
  ============================================================================
  PROPRIETÁRIO: Maurício Spark
  MARCA: Spark
  PROJETO: CoreIcons
  VERSÃO: 1.0.0
  LINHAGEM: SPARK
  ============================================================================
  Documento de Planejamento de Escopo
  COPYRIGHT: © 2026 / Maurício Spark.
  ============================================================================
*/

// CoreIcons Library — catálogo com cartões 3D (perspectiva + inclinação)
(function () {
  'use strict';

  /** Base do site publicado (GitHub Pages etc.). Sobrescreva antes dos scripts: window.CORE_ICONS_PUBLIC_BASE = 'https://usuario.github.io/coreIcons'; */
  function getPublicSiteBase() {
    if (
      typeof window.CORE_ICONS_PUBLIC_BASE === 'string' &&
      window.CORE_ICONS_PUBLIC_BASE.trim()
    ) {
      return window.CORE_ICONS_PUBLIC_BASE.replace(/\/+$/, '');
    }
    return 'https://mauriciospark.github.io/coreIcons';
  }

  function publicImageUrl(icon) {
    var base = getPublicSiteBase();
    var path =
      'fotos/' + icon.file.split('/').map(encodeURIComponent).join('/');
    return base + '/' + path;
  }

  const searchInput = document.getElementById('search-input');
  const iconsGrid = document.getElementById('icons-grid');
  const iconCount = document.getElementById('icon-count');
  const resultsCount = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  const searchTerm = document.getElementById('search-term');
  const toast = document.getElementById('toast');
  const gridViewBtn = document.getElementById('grid-view');
  const listViewBtn = document.getElementById('list-view');

  const iconModal = document.getElementById('icon-modal');
  const modalBackdrop = iconModal && iconModal.querySelector('[data-close-modal]');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalIconImg = document.getElementById('modal-icon-img');
  const modalTitle = document.getElementById('modal-title');
  const modalUrlInput = document.getElementById('modal-url');
  const modalSlugInput = document.getElementById('modal-slug');
  const modalHintSample = document.getElementById('modal-hint-sample');
  const modalCopyUrlBtn = document.getElementById('modal-copy-url');
  const modalCopyNameBtn = document.getElementById('modal-copy-name');

  let icons = [];
  let currentView = 'grid';
  let searchQuery = '';

  const reduceMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    loadIcons();
    setupEventListeners();
    setupModalListeners();
    updateIconCount();
    renderIcons();
    fetchGitHubStars();
  }

  function loadIcons() {
    if (typeof CoreIcons !== 'undefined' && CoreIcons.getAll().length > 0) {
      icons = CoreIcons.getAll().map(function (i) {
        return { slug: i.slug, name: i.name, file: i.file };
      });
    } else if (typeof coreIconsData !== 'undefined') {
      icons = coreIconsData.map(function (icon) {
        return {
          slug: icon.name,
          name: formatIconName(icon.name),
          file: icon.file,
        };
      });
    } else {
      console.error('coreIconsData not found. Verifique se data.js está carregado.');
      icons = [];
    }
  }

  function formatIconName(name) {
    return String(name)
      .split('-')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  function setupEventListeners() {
    searchInput.addEventListener('input', debounce(handleSearch, 200));

    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });

    gridViewBtn.addEventListener('click', function () {
      setView('grid');
    });
    listViewBtn.addEventListener('click', function () {
      setView('list');
    });
  }

  function setupModalListeners() {
    if (!iconModal) return;

    function closeModal() {
      iconModal.classList.remove('modal--open');
      iconModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', closeModal);
    }
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }
    if (modalCopyUrlBtn && modalUrlInput) {
      modalCopyUrlBtn.addEventListener('click', function () {
        copyText(modalUrlInput.value, 'URL copiada');
      });
    }
    if (modalCopyNameBtn && modalSlugInput) {
      modalCopyNameBtn.addEventListener('click', function () {
        copyText(modalSlugInput.value, 'Nome copiado');
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && iconModal.classList.contains('modal--open')) {
        closeModal();
      }
    });
  }

  function openIconModal(icon) {
    if (!iconModal || !modalIconImg || !modalTitle || !modalUrlInput || !modalSlugInput) {
      return;
    }

    var localSrc =
      typeof CoreIcons !== 'undefined'
        ? CoreIcons.urlFor(icon)
        : 'fotos/' +
        icon.file.split('/').map(encodeURIComponent).join('/');

    modalIconImg.src = localSrc;
    modalIconImg.alt = icon.name;
    modalTitle.textContent = icon.name;

    var url = publicImageUrl(icon);
    modalUrlInput.value = url;

    var slug = icon.slug || '';
    modalSlugInput.value = slug;

    if (modalHintSample) {
      modalHintSample.textContent =
        getPublicSiteBase() + '/fotos/' + icon.file;
    }

    iconModal.classList.add('modal--open');
    iconModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalUrlInput.focus();
    modalUrlInput.select();
  }

  function copyText(text, toastMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          showToast(toastMsg);
        },
        function () {
          fallbackCopyRaw(text, toastMsg);
        }
      );
    } else {
      fallbackCopyRaw(text, toastMsg);
    }
  }

  function fallbackCopyRaw(text, toastMsg) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(toastMsg);
    } catch (err) {
      showToast('Não foi possível copiar');
    }
    document.body.removeChild(textArea);
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const args = arguments;
      const later = function () {
        clearTimeout(timeout);
        func.apply(null, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    renderIcons();
  }

  function setView(view) {
    currentView = view;
    gridViewBtn.classList.toggle('active', view === 'grid');
    listViewBtn.classList.toggle('active', view === 'list');
    iconsGrid.classList.toggle('list-view', view === 'list');
  }

  function getFilteredIcons() {
    if (!searchQuery) return icons;
    return icons.filter(function (icon) {
      const slug = (icon.slug || '').toLowerCase();
      return (
        icon.name.toLowerCase().includes(searchQuery) ||
        slug.includes(searchQuery) ||
        icon.file.toLowerCase().includes(searchQuery)
      );
    });
  }

  function renderIcons() {
    const filtered = getFilteredIcons();
    updateResultsCount(filtered.length);

    if (filtered.length === 0 && searchQuery) {
      noResults.classList.remove('hidden');
      searchTerm.textContent = searchQuery;
    } else {
      noResults.classList.add('hidden');
    }

    iconsGrid.innerHTML = '';

    filtered.forEach(function (icon) {
      iconsGrid.appendChild(createIconCard(icon));
    });
  }

  function bindCardTilt(card, inner) {
    if (reduceMotion) return;

    var maxTilt = 14;

    function onMove(e) {
      if (iconsGrid.classList.contains('list-view')) {
        inner.style.transform = '';
        return;
      }
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      var rotY = px * 2 * maxTilt;
      var rotX = -py * 2 * maxTilt;
      inner.style.transform =
        'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateZ(12px)';
    }

    function onLeave() {
      inner.style.transform = '';
    }

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  }

  function createIconCard(icon) {
    var card = document.createElement('div');
    card.className = 'icon-card';
    card.dataset.name = icon.name;
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.title =
      'Clique para ver a URL pública; Shift+clique para copiar HTML do <img>';

    var inner = document.createElement('div');
    inner.className = 'icon-card-inner';

    var img = document.createElement('img');
    img.src =
      typeof CoreIcons !== 'undefined'
        ? CoreIcons.urlFor(icon)
        : 'fotos/' +
        icon.file.split('/').map(encodeURIComponent).join('/');
    img.alt = icon.name;
    img.loading = 'lazy';

    var name = document.createElement('span');
    name.className = 'icon-name';
    name.textContent = icon.name;

    inner.appendChild(img);
    inner.appendChild(name);
    card.appendChild(inner);

    card.addEventListener('click', function (ev) {
      if (ev.shiftKey) {
        copyToClipboard(icon, ev);
        return;
      }
      openIconModal(icon);
    });
    card.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        if (ev.shiftKey) {
          copyToClipboard(icon, ev);
        } else {
          openIconModal(icon);
        }
      }
    });

    bindCardTilt(card, inner);
    return card;
  }

  function copyToClipboard(icon, e) {
    var useHtml = e && e.shiftKey;
    var textToCopy = useHtml
      ? typeof CoreIcons !== 'undefined'
        ? CoreIcons.imgHtml(icon.slug, {
          width: 48,
          height: 48,
          alt: icon.name,
        })
        : '<img src="fotos/' +
        icon.file.split('/').map(encodeURIComponent).join('/') +
        '" alt="' +
        icon.name.replace(/"/g, '&quot;') +
        '" width="48" height="48">'
      : icon.name;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(
        function () {
          showToast(
            useHtml
              ? 'HTML copiado para a área de transferência'
              : 'Copiado: ' + textToCopy
          );
        },
        function () {
          fallbackCopy(textToCopy, useHtml);
        }
      );
    } else {
      fallbackCopy(textToCopy, useHtml);
    }
  }

  function fallbackCopy(textToCopy, useHtml) {
    var textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(
        useHtml
          ? 'HTML copiado para a área de transferência'
          : 'Copiado: ' + textToCopy
      );
    } catch (err) {
      showToast('Não foi possível copiar');
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 2000);
  }

  function updateIconCount() {
    if (iconCount) iconCount.textContent = icons.length;
  }

  function updateResultsCount(count) {
    if (searchQuery) {
      resultsCount.textContent =
        count + ' resultado' + (count !== 1 ? 's' : '');
    } else {
      resultsCount.textContent = 'Total: ' + count + ' ícones';
    }
  }

  function fetchGitHubStars() {
    var starsBtn = document.getElementById('github-stars-btn');
    var starsCount = document.getElementById('github-stars-count');

    if (!starsBtn || !starsCount) return;

    fetch('https://api.github.com/repos/mauriciospark/coreIcons')
      .then(function (response) {
        if (!response.ok) throw new Error('Erro ao buscar estrelas');
        return response.json();
      })
      .then(function (data) {
        var stars = data.stargazers_count;
        starsCount.textContent = stars + ' estrela' + (stars !== 1 ? 's' : '');
      })
      .catch(function (error) {
        starsCount.textContent = '★ GitHub';
      });

    starsBtn.addEventListener('click', function () {
      window.open('https://github.com/mauriciospark/coreIcons', '_blank');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
