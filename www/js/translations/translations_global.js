const translationsMenu = {
    en: {
      'onas': 'About us',
      'kontakt': 'Contact',
      'restaurace': 'Restaurant',
      'ubytovani': 'Accommodations',
      'svatby': 'Weddings',
      'balicky': 'Advantageous stay packages',
      'cenik': 'Price list',
      'galerie': 'Gallery',
      'rezervace': 'Reservation',
    },
    cz: {
        'onas': 'O nás',
        'kontakt': 'Kontakt',
        'restaurace': 'Restaurace',
        'ubytovani': 'Ubytování',
        'svatby': 'Svatby',
        'balicky': 'Pobytové balíčky',
        'cenik': 'Ceník',
        'galerie': 'Galerie',
        'rezervace': 'Rezervace',
    },
    pl: {
        'onas': 'O nas',
        'kontakt': 'Kontakt',
        'restaurace': 'Restauracja',
        'ubytovani': 'Zakwaterowanie',
        'svatby': 'Śluby',
        'balicky': 'Korzystne pakiety pobytowe',
        'cenik': 'Cennik',
        'galerie': 'Galerierie',
        'rezervace': 'Rezerwacja',
    },
    de: {
        'onas': 'Über uns',
        'kontakt': 'Hochzeit',
        'restaurace': 'Restaurant',
        'ubytovani': 'Unterkünfte',
        'svatby': 'Hochzeiten',
        'balicky': 'Günstige Aufenthaltspakete',
        'cenik': 'Preisliste',
        'galerie': 'Galerie',
        'rezervace': 'Reservierung',
    }
  };

  function loadLanguageFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang) {
      changeLanguage(lang);
      changeLanguageMenu(lang);
    } else {
      changeLanguage('cz');
      changeLanguageMenu('cz');
    }
  }

  window.addEventListener('load', loadLanguageFromUrl);

  function updateLinks(language) {
    document.querySelectorAll('a').forEach(link => {
      const url = new URL(link.href);
      url.searchParams.set('lang', language);
      link.href = url.toString();
    });
  }


  function changeLanguageMenu(language) {
    reset();
    document.getElementById(language).classList.add('aktivni');
    document.getElementById('onas').textContent = translationsMenu[language].onas;
    document.getElementById('kontakt').textContent = translationsMenu[language].kontakt;
    document.getElementById('restaurace').textContent = translationsMenu[language].restaurace;
    document.getElementById('ubytovani').textContent = translationsMenu[language].ubytovani;
    document.getElementById('svatby').textContent = translationsMenu[language].svatby;
    document.getElementById('balicky').textContent = translationsMenu[language].balicky;
    document.getElementById('cenik').textContent = translationsMenu[language].cenik;
    document.getElementById('galerie').textContent = translationsMenu[language].galerie;
    document.getElementById('rezervace').textContent = translationsMenu[language].rezervace;

    const url = new URL(window.location);
    url.searchParams.set('lang', language);
    window.history.pushState({}, '', url);

    updateLinks(language);
  }

  function reset(){
    jazyky = document.getElementsByClassName('jazyk')
    for (var i = 0; i < jazyky.length; i++) {
        jazyky[i].classList.remove("aktivni");
      }
  }
