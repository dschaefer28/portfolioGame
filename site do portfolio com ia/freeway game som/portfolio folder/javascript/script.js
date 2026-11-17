window.openNav = function () {
    var sidebar = document.getElementById('mySidebar');
    var main = document.getElementById('main');
    if (!sidebar || !main) return;
    sidebar.style.width = '300px';
    sidebar.setAttribute('aria-hidden', 'false');
    main.style.marginLeft = '300px';
    var firstLink = sidebar.querySelector('a');
    if (firstLink) firstLink.focus();
};

window.closeNav = function () {
    var sidebar = document.getElementById('mySidebar');
    var main = document.getElementById('main');
    if (!sidebar || !main) return;
    sidebar.style.width = '0';
    sidebar.setAttribute('aria-hidden', 'true');
    main.style.marginLeft = '0';
    var openBtn = document.querySelector('.openbtn');
    if (openBtn) openBtn.focus();
};

window.abrirQuemSou = function () {
    var target = document.getElementById('detalhes-eu');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.add('highlight-temp');
        setTimeout(function () {
            target.classList.remove('highlight-temp');
        }, 1200);
    }
};

window.scrollCarousel = function (direction) {
    var track = document.getElementById('carouselTrack');
    if (!track) return;
    var card = track.querySelector('.project-card');
    if (!card) return;

    var cardStyle = window.getComputedStyle(card);
    var marginRight = parseFloat(cardStyle.marginRight) || 0;
    var scrollAmount = card.offsetWidth + marginRight;

    track.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
};

window.abrirJogoFreeway = function (url) {
    window.open(url || 'freeway/index.html', '_blank', 'noopener');
};

document.addEventListener('DOMContentLoaded', function () {
    var track = document.getElementById('carouselTrack');
    if (!track) return;

    var URL_JOGO = 'freeway/index.html';

    if (!track.querySelector('.project-shortcut')) {
        var atalho = document.createElement('a');
        atalho.href = URL_JOGO;
        atalho.target = '_blank';
        atalho.rel = 'noopener';
        atalho.className = 'project-card project-shortcut';
        atalho.style.display = 'flex';
        atalho.style.flexDirection = 'column';
        atalho.style.justifyContent = 'space-between';
        atalho.style.padding = '26px';
        atalho.style.textDecoration = 'none';
        atalho.style.background = 'linear-gradient(145deg, var(--navy-mid) 0%, var(--navy-light) 100%)';

        atalho.innerHTML =
            '<div>' +
                '<span style="font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); font-weight: 500; display: block; margin-bottom: 8px;">Jogo · HTML5 Canvas &amp; JS</span>' +
                '<h3 style="font-family: \'Cormorant Garamond\', serif; font-size: 26px; color: var(--white); font-weight: 400; line-height: 1.15; margin-bottom: 8px;">Freeway<br><em style="font-style: italic; color: var(--gold-light);">Atari 2600</em></h3>' +
                '<p style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">Recriação multiplayer local do clássico de 1981 com áudio e física em Canvas.</p>' +
            '</div>' +
            '<span style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-light); font-weight: 500;">Jogar Agora &#8599;</span>';

        track.insertBefore(atalho, track.firstChild);
    }
});

document.addEventListener('click', function (e) {
    var sidebar = document.getElementById('mySidebar');
    if (!sidebar) return;
    var isOpen = sidebar.style.width && sidebar.style.width !== '0px';
    if (!isOpen) return;
    var openBtn = document.querySelector('.openbtn');
    var clickedInside = sidebar.contains(e.target) || (openBtn && openBtn.contains(e.target));
    if (!clickedInside && window.innerWidth <= 600) {
        closeNav();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
});