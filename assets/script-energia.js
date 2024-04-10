const arrayEnergia = [
    {
        imagem: "/assets/img/energia_solar.jpg", alt:"imagem energia solar",
        titulo: "Energia Solar", 
        paragrafo: "É capturada através de painéis fotovoltaicos, compostos por células que convertem a luz do sol em eletricidade. Essa tecnologia utiliza a luz solar como fonte inesgotável para gerar energia limpa e renovável. Seus benefícios são notáveis: é uma fonte sustentável, não emite poluentes durante a geração de eletricidade e reduz a dependência de fontes não renováveis.",
    },

    {
        imagem: "/assets/img/energia_hidreletrica.jpg", alt:"imagem energia hidrelétrica",
        titulo: "Energia Hidrelétrica", 
        paragrafo: "É gerada através da força da água em movimento. A energia cinética proveniente de rios ou quedas d'água é capturada por meio de turbinas, que acionam geradores para produzir eletricidade. Esse processo aproveita o ciclo natural da água, sem consumi-la, tornando-se uma fonte renovável e limpa de energia.",
    },

    {
        imagem: "/assets/img/energia_eolica.jpg", alt:"imagem energia eólica",
        titulo: "Energia Eólica",
        paragrafo: "É o processo pelo qual o vento é transformado em energia cinética e, posteriormente, em eletricidade. A conversão da energia do ar em movimento em eletricidade é conhecida como energia eólica. Nesse processo, a energia do vento movimenta pás/hélices, cujo movimento é convertido em energia elétrica nas turbinas por meio de um gerador.",
    },

    ];
    
    for(let i = 0; i < arrayEnergia.length; i++){
        // Criar um elemento:
        let energiaMidBox = document.createElement("div");
    
        // Adicionar uma 'class' à 'div' criada
        energiaMidBox.classList.add("energia-mid-box");
    
        // Criar renderização dinâmica do conteúdo
        energiaMidBox.innerHTML =`
        <img class="energia-mid-box-img" src="${arrayEnergia[i].imagem}" alt="${arrayEnergia[i].alt}">
        <h4 class="energia-mid-box-titulo">${arrayEnergia[i].titulo}</h4>
        <p class="energia-mid-box-paragrafo">${arrayEnergia[i].paragrafo}</p>
        `;
    
        // Adicionar o elemento criado e manipulado na página:
        let energiaMid = document.querySelector("section.energia-mid");
        energiaMid.appendChild(energiaMidBox);
    }