// 1. Rolagem suave nos links do menu
const linksMenu = document.querySelectorAll('nav a');
linksMenu.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        // Verifica se o destino existe antes de rolar
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Alterar cor do menu ao rolar a página
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    // Verifica se o menu existe
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#4E342E';
            nav.style.transition = 'background-color 0.3s ease';
        } else {
            nav.style.backgroundColor = 'var(--marrom)';
        }
    }

    // Mostrar ou esconder botão de voltar ao topo
    const botaoTopo = document.getElementById('voltarTopo');
    if (botaoTopo) {
        botaoTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});

// 3. Efeito de destaque ao passar o mouse
const destaques = document.querySelectorAll('.destaque, .lista-pontos li');
destaques.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.02)';
        item.style.boxShadow = '0 3px 10px rgba(0,0,0,0.15)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = 'none';
    });
});

// 4. Botão de voltar ao topo
const botaoTopo = document.createElement('button');
botaoTopo.id = 'voltarTopo';
botaoTopo.innerHTML = '↑';
botaoTopo.title = 'Voltar ao topo';
botaoTopo.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--verde-principal);
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 22px;
    cursor: pointer;
    display: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    z-index: 999;
    transition: background-color 0.3s ease;
`;
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

botaoTopo.addEventListener('mouseover', () => {
    botaoTopo.style.backgroundColor = '#246427';
});
botaoTopo.addEventListener('mouseout', () => {
    botaoTopo.style.backgroundColor = 'var(--verde-principal)';
});

// 5. Animação ao aparecer as seções
const secoes = document.querySelectorAll('section');
if (secoes.length > 0) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    secoes.forEach(secao => {
        secao.style.opacity = '0';
        secao.style.transform = 'translateY(20px)';
        secao.style.transition = 'all 0.6s ease';
        observador.observe(secao);
    });
}

// 6. Mensagem de boas-vindas (CORREÇÃO PRINCIPAL DE SINTAXE)
window.addEventListener('load', () => {
    setTimeout(() => {
        alert("🌱 Bem-vindo! Este trabalho apresenta a importância do agronegócio, tecnologia e sustentabilidade para o Brasil — desenvolvido para o Concurso Agrinho.");
    }, 700);
});