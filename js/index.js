
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
            }, 500); // deve ser o mesmo tempo do CSS
        });
    }
});

// Modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})