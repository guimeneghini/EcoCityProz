const arrayCidades = [
    {
        imagem: "/assets/img/recursos_naturais.jpg", alt:"imagem recursos naturais",
        titulo: "Gestão dos recursos naturais", 
        paragrafo: "A proteção dos mananciais e a redução do desperdício de água são primordiais. Aproveitamento da água da chuva, reuso, construções sustentáveis, dessalinização e despoluição são outros pontos importantes. Além disso, a eficiência energética é necessária, logo, serão priorizadas energias renováveis, como solar e eólica.",
    },

    {
        imagem: "/assets/img/residuos_solidos.jpg", alt:"imagem residuos sólidos",
        titulo: "Destinação dos resíduos sólidos", 
        paragrafo: "A responsabilidade é compartilhada, ou seja, indústria, distribuidores, prefeituras e consumidores serão os responsáveis pelos resíduos sólidos e cada um deverá contribuir para que tenham uma disposição final adequada. Reutilização, reciclagem, substituição de matérias-primas, uso de embalagens mais sustentáveis e métodos mais eficientes de produção estão entre as soluções para alcançar a sustentabilidade nesse quesito.",
    },

    {
        imagem: "/assets/img/transporte.jpg", alt:"imagem transportes limpos",
        titulo: "Meios de transporte limpos",
        paragrafo: "Naturalmente haverá uma diminuição dos carros na rua. A mobilidade deve ser limpa, usando carros elétricos e investindo em transporte público de alto rendimento. É preciso fazer a gestão do uso do solo e uma distribuição mais equilibrada do espaço viário para ser bem-sucedido.",
    },

    {
        imagem: "/assets/img/areas_verdes.jpg", alt:"imagem areas verdes",
        titulo: "Investimento em áreas verdes",
        paragrafo: "Não só em parques, mas em canteiros, avenidas e calçadas. Projetos de plantio de árvores e outras iniciativas para trazer a natureza para o espaço urbano. Painéis solares e hortas no telhadoajudarão na geração de energia renovável e na produção agrícola em pequena escala. É importante lembrar que a tarefa de construir um futuro sustentável nas cidades é responsabilidade de todos, mas diversas ações já devem entrar na rotina diária das pessoas e empresas.",
    },
    ];
    
    for(let i = 0; i < arrayCidades.length; i++) {
        // Criar um elemento:
        let cidadesMidBox = document.createElement("div");
    
        // Adicionar uma 'class' à 'div' criada
        cidadesMidBox.classList.add("cidades-mid-box");
    
        // Criar renderização dinâmica do conteúdo
        cidadesMidBox.innerHTML =`
        <img class="cidades-mid-box-img" src="${arrayCidades[i].imagem}" alt="${arrayCidades[i].alt}">
        <h4 class="cidades-mid-box-titulo">${arrayCidades[i].titulo}</h4>
        <p class="cidades-mid-box-paragrafo">${arrayCidades[i].paragrafo}</p>
        `
    
        // Adicionar o elemento criado e manipulado na página:
        let cidadesMid = document.querySelector("section.cidades-mid");
        cidadesMid.appendChild(cidadesMidBox);
    }