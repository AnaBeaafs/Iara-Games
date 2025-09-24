// Carrossel principal (menu lateral e display)
const menuItems = document.querySelectorAll('#carouselMenu li');
const mainDisplay = document.getElementById('mainDisplay');
const title = document.getElementById('gameTitle');
const description = document.getElementById('gameDescription');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Atualiza estilo ativo
        document.querySelector('.carousel-menu li.active')?.classList.remove('active');
        item.classList.add('active');

        // Atualiza conteúdo
        const img = item.getAttribute('data-image');
        const txt = item.getAttribute('data-title');
        const desc = item.getAttribute('data-description');

        mainDisplay.style.backgroundImage = `url('${img}')`;
        title.textContent = txt;
        description.textContent = desc;
    });
});

// Modal
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus();
    });
}

// Scroll lateral para cards de jogos
const scrollAmount = 320;
const cardsContainer = document.getElementById('cardsContainer');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

scrollLeft.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


// Fade-out ao clicar em links internos
document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    // Só aplicar se for link interno
    if (href && !href.startsWith('http') && !href.startsWith('#') && !link.hasAttribute('target')) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    }
});
