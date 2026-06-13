// ==========================================
// Lógica de Acessibilidade (Tamanho da Fonte)
// ==========================================
let currentFontSize = 16;
const htmlElement = document.documentElement;

document.getElementById('btn-a-plus').addEventListener('click', () => {
    let novaFonte = currentFontSize + 2;
    if (novaFonte >= 12 && novaFonte <= 24) {
        currentFontSize = novaFonte;
        htmlElement.style.setProperty('--font-base', `${currentFontSize}px`);
    }
});

document.getElementById('btn-a-minus').addEventListener('click', () => {
    let novaFonte = currentFontSize - 2;
    if (novaFonte >= 12 && novaFonte <= 24) {
        currentFontSize = novaFonte;
        htmlElement.style.setProperty('--font-base', `${currentFontSize}px`);
    }
});

// ==========================================
// Lógica de Acessibilidade (Alto Contraste)
// ==========================================
document.getElementById('btn-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// ==========================================
// Renderização do Carrossel (Depoimentos/Cases)
// ==========================================
const casesData = [
    {
        nome: "Fazenda Rio Verde, Cascavel",
        texto: "Depois de implementar a estratégia de demanda, fechamos contratos diretos com as cooperativas sem intermediários."
    },
    {
        nome: "AgroTech Sementes, Londrina",
        texto: "Nossa autoridade digital explodiu. As vendas B2B aumentaram em 140% em menos de 6 meses."
    },
    {
        nome: "Produtor Independente, Maringá",
        texto: "Eu não sabia como me posicionar. O marketing focado no agro mudou a forma como o mercado enxerga meu produto."
    }
];

const carouselContainer = document.getElementById('carousel-container');
casesData.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'carousel-item';
    slide.innerHTML = `
        <p>"${item.texto}"</p>
        <h4 style="margin-top: 1rem; color: var(--primary-color);">— ${item.nome}</h4>
    `;
    carouselContainer.appendChild(slide);
});

// ==========================================
// Renderização do Acordeão (FAQ)
// ==========================================
const faqData = [
    {
        pergunta: "Por que investir em Marketing no Agronegócio?",
        resposta: "O mercado paranaense é altamente competitivo. Ter apenas um bom produto já não basta; é preciso que distribuidores e clientes finais conheçam sua qualidade e a procedência da sua safra."
    },
    {
        pergunta: "Como mapeamos a demanda?",
        resposta: "Utilizamos análise de dados de consumo e tendências de exportação para posicionar sua marca exatamente onde os grandes compradores estão procurando."
    },
    {
        pergunta: "Os resultados são focados no produtor rural?",
        resposta: "Sim. Nossas metodologias são desenhadas exclusivamente para a realidade, ciclo de safra e modelo de negócios do produtor agro paranaense."
    }
];

const accordionContainer = document.getElementById('accordion-container');
faqData.forEach((item, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';
    accordionItem.innerHTML = `
        <button class="accordion-header" id="faq-btn-${index}">${item.pergunta}</button>
        <div class="accordion-content">
            <p>${item.resposta}</p>
        </div>
    `;
    accordionContainer.appendChild(accordionItem);
});

// Lógica de abertura/fechamento do Acordeão
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;
        const isActive = currentItem.classList.contains('active');
        
        // Fecha todos
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // Abre se não estava aberto
        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});