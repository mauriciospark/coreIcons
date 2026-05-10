/*
  ============================================================================
  PROPRIETÁRIO: Maurício Spark
  MARCA: Spark
  PROJETO: Core Icons Library
  VERSÃO: 1.0.0
  LINHAGEM: SPARK
  ============================================================================
  Documento de Planejamento de Escopo
  COPYRIGHT: © 2026 / Maurício Spark.
  ============================================================================
*/

/**
 * CoreIcons — API JavaScript para usar os mesmos ícones do catálogo em qualquer página.
 * Depende de data.js (variável global coreIconsData) ou de CoreIcons.useData([...]).
 */
(function (global) {
  'use strict';

  var basePath = 'Documentos/';
  var icons = [];

  function formatDisplayName(slug) {
    return String(slug)
      .split('-')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  function normalizeIcon(entry) {
    if (!entry || typeof entry.name !== 'string' || typeof entry.file !== 'string') {
      return null;
    }
    return {
      slug: entry.name,
      name: formatDisplayName(entry.name),
      file: entry.file,
    };
  }

  function setBasePath(path) {
    basePath = path.slice(-1) === '/' ? path : path + '/';
  }

  function useData(data) {
    icons = Array.isArray(data)
      ? data.map(normalizeIcon).filter(Boolean)
      : [];
  }

  function getAll() {
    return icons.slice();
  }

  function getBySlug(slug) {
    if (slug == null || slug === '') return null;
    var s = String(slug).toLowerCase();
    for (var i = 0; i < icons.length; i++) {
      if (icons[i].slug.toLowerCase() === s) return icons[i];
    }
    return null;
  }

  function search(query) {
    var q = String(query || '')
      .toLowerCase()
      .trim();
    if (!q) return getAll();
    return icons.filter(function (icon) {
      return (
        icon.slug.toLowerCase().includes(q) ||
        icon.name.toLowerCase().includes(q) ||
        icon.file.toLowerCase().includes(q)
      );
    });
  }

  function urlFor(iconOrSlug) {
    var icon =
      typeof iconOrSlug === 'string' ? getBySlug(iconOrSlug) : iconOrSlug;
    if (!icon || !icon.file) return '';
    var seg = icon.file.split('/').map(encodeURIComponent).join('/');
    return basePath + seg;
  }

  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  /**
   * @param {string|object} iconOrSlug slug ou objeto ícone
   * @param {{ alt?: string, class?: string, width?: number|string, height?: number|string }} [attrs]
   */
  function imgHtml(iconOrSlug, attrs) {
    var icon =
      typeof iconOrSlug === 'string' ? getBySlug(iconOrSlug) : iconOrSlug;
    if (!icon) return '';
    var a = attrs || {};
    var alt = a.alt != null ? a.alt : icon.name;
    var parts = [
      '<img src="' + escapeAttr(urlFor(icon)) + '"',
      'alt="' + escapeAttr(alt) + '"',
    ];
    if (a.class != null) parts.push('class="' + escapeAttr(a.class) + '"');
    if (a.width != null) parts.push('width="' + escapeAttr(String(a.width)) + '"');
    if (a.height != null) parts.push('height="' + escapeAttr(String(a.height)) + '"');
    parts.push('>');
    return parts.join(' ');
  }

  var CoreIcons = {
    version: '1.0.0',
    setBasePath: setBasePath,
    getBasePath: function () {
      return basePath;
    },
    useData: useData,
    getAll: getAll,
    getBySlug: getBySlug,
    search: search,
    urlFor: urlFor,
    imgHtml: imgHtml,
  };

  global.CoreIcons = CoreIcons;

  if (typeof coreIconsData !== 'undefined') {
    useData(coreIconsData);
  }
})(typeof window !== 'undefined' ? window : this);
