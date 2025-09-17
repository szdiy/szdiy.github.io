(function() {
  'use strict';

  // 主题存储键名
  const THEME_STORAGE_KEY = 'szdiy-theme';
  
  // 获取主题切换按钮
  const themeToggle = document.getElementById('theme-toggle');
  
  // 获取当前主题
  function getCurrentTheme() {
    try {
      // 优先从 localStorage 获取用户设置
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        return savedTheme;
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
    }
    
    // 其次从系统偏好获取
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  function setTheme(theme) {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      updateToggleButton(theme);
    } catch (error) {
      console.warn('Failed to set theme:', error);
    }
  }

  function updateToggleButton(theme) {
    if (!themeToggle) return;
    
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  function watchSystemTheme() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      mediaQuery.addEventListener('change', function(e) {
        try {
          // 只有在用户没有手动设置主题时才跟随系统
          if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            const systemTheme = e.matches ? 'dark' : 'light';
            setTheme(systemTheme);
          }
        } catch (error) {
          console.warn('Failed to handle system theme change:', error);
        }
      });
    }
  }

  function initTheme() {
    // 检查是否已经设置了主题（防止重复设置）
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (!currentTheme) {
      const theme = getCurrentTheme();
      setTheme(theme);
    } else {
      // 如果已经设置了主题，只需要更新按钮状态
      updateToggleButton(currentTheme);
    }
    
    // 标记主题已完全加载
    document.documentElement.classList.add('theme-loaded');
    watchSystemTheme();
  }
  
  // 绑定事件监听器
  function bindEvents() {
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  }
  
  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      bindEvents();
    });
  } else {
    initTheme();
    bindEvents();
  }

  window.SZDIYTheme = {
    setTheme: setTheme,
    getCurrentTheme: getCurrentTheme,
    toggleTheme: toggleTheme
  };
  
})();
