document.addEventListener("DOMContentLoaded", () => {

    // 1. Rolagem suave nos links do menu
    const linksMenu = document.querySelectorAll("nav a");

    linksMenu.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 2. Menu
    const nav = document.querySelector("nav");

    // 3. Botão voltar ao topo
    const botaoTopo = document.createElement("button");
    botaoTopo.id = "voltarTopo";
    botaoTopo.innerHTML = "↑";
    botaoTopo.title = "Voltar ao topo";

    botaoTopo.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: var(--verde-principal);
        color: white;
        font-size: 22px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 2px 8px rgba(0,0,0,.2);
        transition: .3s;
    `;

    document.body.appendChild(botaoTopo);

    // Alterar menu e mostrar botão
    window.addEventListener("scroll", () => {

        if (nav) {
            nav.style.transition = "background-color .3s";

            if (window.scrollY > 50) {
                nav.style.backgroundColor = "#4E342E";
            } else {
                nav.style.backgroundColor = "var(--marrom)";
            }
        }

        botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
    });

    // Voltar ao topo
    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    botaoTopo.addEventListener("mouseenter", () => {
        botaoTopo.style.backgroundColor = "#246427";
    });

    botaoTopo.addEventListener("mouseleave", () => {
        botaoTopo.style.backgroundColor = "var(--verde-principal)";
    });

    // 4. Destaques
    const destaques = document.querySelectorAll(".destaque, .lista-pontos li");

    destaques.forEach(item => {

        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.02)";
            item.style.boxShadow = "0 3px 10px rgba(0,0,0,.15)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
            item.style.boxShadow = "none";
        });

    });

    // 5. Animação das seções
    const secoes = document.querySelectorAll("section");

    if ("IntersectionObserver" in window && secoes.length > 0) {

        const observador = new IntersectionObserver((entradas) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {
                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform = "translateY(0)";
                }

            });

        }, {
            threshold: 0.1
        });

        secoes.forEach(secao => {
            secao.style.opacity = "0";
            secao.style.transform = "translateY(20px)";
            secao.style.transition = "all .6s ease";

            observador.observe(secao);
        });
    }

    // 6. Mensagem de boas-vindas
    window.setTimeout(() => {
        alert("🌱 Bem-vindo! Este trabalho apresenta a importância do agronegócio, tecnologia e sustentabilidade para o Brasil — desenvolvido para o Concurso Agrinho.");
    }, 700);

});