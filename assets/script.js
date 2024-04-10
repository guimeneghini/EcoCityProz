/* -------------------------- Página Home -------------------------- */
let time = 5000;
let cont = 0;

let banner1 = "assets/img/banner_home_01.png";
let banner2 = "assets/img/banner_home_02.png";
let banner3 = "assets/img/banner_home_03.png";

function trocarBanner() {
    cont++;
    switch (cont) {
        case 1:
            document.getElementById("slider").src = banner2;
            break;
        case 2:
            document.getElementById("slider").src = banner3;
            break;
        default:
            cont = 0;
            document.getElementById("slider").src = banner1;
    }
}

function start() {
    setInterval(() => {
        trocarBanner();
    }, time)
}

window.addEventListener("load", start);

/* ------------------------------------------------------------------ */


/* -------------------------- PÁGINA CIDADES ------------------------- */

/* const arrayCidades = [
    {
        imagem: "/assets/img/recursos_naturais.jpg", alt: "imagem recursos naturais",
        titulo: "Gestão dos recursos naturais",
        paragrafo: "A proteção dos mananciais e a redução do desperdício de água são primordiais. Aproveitamento da água da chuva, reuso, construções sustentáveis, dessalinização e despoluição são outros pontos importantes. Além disso, a eficiência energética é necessária, logo, serão priorizadas energias renováveis, como solar e eólica.",
    },

    {
        imagem: "/assets/img/residuos_solidos.jpg", alt: "imagem residuos sólidos",
        titulo: "Destinação dos resíduos sólidos",
        paragrafo: "A responsabilidade é compartilhada, ou seja, indústria, distribuidores, prefeituras e consumidores serão os responsáveis pelos resíduos sólidos e cada um deverá contribuir para que tenham uma disposição final adequada. Reutilização, reciclagem, substituição de matérias-primas, uso de embalagens mais sustentáveis e métodos mais eficientes de produção estão entre as soluções para alcançar a sustentabilidade nesse quesito.",
    },

    {
        imagem: "/assets/img/transporte.jpg", alt: "imagem transportes limpos",
        titulo: "Meios de transporte limpos",
        paragrafo: "Naturalmente haverá uma diminuição dos carros na rua. A mobilidade deve ser limpa, usando carros elétricos e investindo em transporte público de alto rendimento. É preciso fazer a gestão do uso do solo e uma distribuição mais equilibrada do espaço viário para ser bem-sucedido.",
    },

    {
        imagem: "/assets/img/areas_verdes.jpg", alt: "imagem areas verdes",
        titulo: "Investimento em áreas verdes",
        paragrafo: "Não só em parques, mas em canteiros, avenidas e calçadas. Projetos de plantio de árvores e outras iniciativas para trazer a natureza para o espaço urbano. Painéis solares e hortas no telhadoajudarão na geração de energia renovável e na produção agrícola em pequena escala. É importante lembrar que a tarefa de construir um futuro sustentável nas cidades é responsabilidade de todos, mas diversas ações já devem entrar na rotina diária das pessoas e empresas.",
    },
]

for (let i = 0; i < arrayCidades.length; i++) {
    // Criar um elemento:
    let cidadesMidBox = document.createElement("div");

    // Adicionar uma 'class' à 'div' criada
    cidadesMidBox.classList.add("cidades-mid-box");

    // Criar renderização dinâmica do conteúdo
    cidadesMidBox.innerHTML = `
        <img class="cidades-mid-box-img" src="${arrayCidades[i].imagem}" alt="${arrayCidades[i].alt}">
        <h4 class="cidades-mid-box-titulo">${arrayCidades[i].titulo}</h4>
        <p class="cidades-mid-box-paragrafo">${arrayCidades[i].paragrafo}</p>
        `

    // Adicionar o elemento criado e manipulado na página:
    let cidadesMid = document.querySelector("section.cidades-mid");
    cidadesMid.appendChild(cidadesMidBox);
} */

// /* ---------------------------------------------------------------- */


/* ------------------------- PÁGINA ENERGIA ------------------------- */

/* const arrayEnergia = [
    {
        imagem: "/assets/img/energia_solar.jpg", alt: "imagem energia solar",
        titulo: "Energia Solar",
        paragrafo: "É capturada através de painéis fotovoltaicos, compostos por células que convertem a luz do sol em eletricidade. Essa tecnologia utiliza a luz solar como fonte inesgotável para gerar energia limpa e renovável. Seus benefícios são notáveis: é uma fonte sustentável, não emite poluentes durante a geração de eletricidade e reduz a dependência de fontes não renováveis.",
    },

    {
        imagem: "/assets/img/energia_hidreletrica.jpg", alt: "imagem energia hidrelétrica",
        titulo: "Energia Hidrelétrica",
        paragrafo: "É gerada através da força da água em movimento. A energia cinética proveniente de rios ou quedas d'água é capturada por meio de turbinas, que acionam geradores para produzir eletricidade. Esse processo aproveita o ciclo natural da água, sem consumi-la, tornando-se uma fonte renovável e limpa de energia.",
    },

    {
        imagem: "/assets/img/energia_eolica.jpg", alt: "imagem energia eólica",
        titulo: "Energia Eólica",
        paragrafo: "É o processo pelo qual o vento é transformado em energia cinética e, posteriormente, em eletricidade. A conversão da energia do ar em movimento em eletricidade é conhecida como energia eólica. Nesse processo, a energia do vento movimenta pás/hélices, cujo movimento é convertido em energia elétrica nas turbinas por meio de um gerador.",
    },
]

for (let i = 0; i < arrayEnergia.length; i++) {
    // Criar um elemento:
    let energiaMidBox = document.createElement("div");

    // Adicionar uma 'class' à 'div' criada
    energiaMidBox.classList.add("energia-mid-box");

    // Criar renderização dinâmica do conteúdo
    energiaMidBox.innerHTML = `
        <img class="energia-mid-box-img" src="${arrayEnergia[i].imagem}" alt="${arrayEnergia[i].alt}">
        <h4 class="energia-mid-box-titulo">${arrayEnergia[i].titulo}</h4>
        <p class="energia-mid-box-paragrafo">${arrayEnergia[i].paragrafo}</p>
        `

    // Adicionar o elemento criado e manipulado na página:
    let energiaMid = document.querySelector("section.energia-mid");
    energiaMid.appendChild(energiaMidBox);
} */

/* ------------------------------------------------------------------ */


/* -------------------------- Página Empresas ----------------------- */
/* ------------------------------------------------------------------ */


/* -------------------------- Página Contato ------------------------ */
// --- Captura e atribuição de variáveis aos elementos
// Campo Nome:
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

// Campo E-mail:
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Campo Telefone:
let telInput = document.getElementById("tel");
let telLabel = document.querySelector('label[for="tel"]');
let telHelper = document.getElementById("tel-helper");

// Campo Mensagem:
let messageInput = document.getElementById("message");
let messageLabel = document.querySelector('label[for="message"]');
let messageHelper = document.getElementById("message-helper");

// Botão Enviar:
let btnEnviar = document.querySelector('button[type="submint"]');

// Botão Limpar:
let btnLimpar = document.querySelector('button[type="submint"]');

// --- Exibit e ocultar pop-up de campos obrigatórios
function mostrarPopup(input, label) {
    // Exibir popup de um campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });
    // Ocultar popup de um campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper) {
    input.classList.add("correct");
    input.classList.remove("error");
    helper.classList.remove("visible");
}

function estilizarInputIncorreto(input, helper) {
    input.classList.remove("correct");
    input.classList.add("error");
    helper.classList.add("visible");
}

mostrarPopup(nomeInput, nomeLabel);
mostrarPopup(emailInput, emailLabel);
mostrarPopup(telInput, telLabel);
mostrarPopup(messageInput, messageLabel);

// --- Validação de nome
nomeInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    if (valor.length < 3) {
        //Estilo dinâmico para nome incorreto
        nomeHelper.innerText = "O nome precisa ter 3 ou mais caracteres.";
        estilizarInputIncorreto(nomeInput, nomeHelper);
    } else {
        //Estilo dinâmico para nome correto
        estilizarInputCorreto(nomeInput, nomeHelper);
    }
})

// --- Validação de e-mail
emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    if (valor.includes("@") && valor.includes(".com")) {
        //Estilo dinâmico para e-mail válido
        estilizarInputCorreto(emailInput, emailHelper);
    } else {
        //Estilo dinâmico para e-mail inválido
        emailHelper.innerText = "Insira um e-mail válido.";
        estilizarInputIncorreto(emailInput, emailHelper);
    }
})

// --- Validação de telefone
telInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    if (valor.length < 11 || valor.length > 11) {
        //Estilo dinâmico para tel com menos de 11 caracteres
        telHelper.innerText = "Digite seu número com DDD. Apenas números.";
        estilizarInputIncorreto(telInput, telHelper);
    } else {
        //Estilo dinâmico para tel com mais de 11 caracteres
        estilizarInputCorreto(telInput, telHelper);
    }
})

// --- Validação de mensagem
messageInput.addEventListener("blur", (e) => {
    let valor = e.target.value;
    if (valor == "") {
        //Estilo dinâmico para mensagem incorreta
        messageHelper.innerText = "O campo não pode estar vazio.";
        estilizarInputIncorreto(messageInput, messageHelper);
    } else {
        //Estilo dinâmico para mensagem correta
        estilizarInputCorreto(messageInput, messageHelper);
    }
})