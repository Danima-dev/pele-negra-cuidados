function carregaDicas(){
    var explicacoes = {
        dica1: {
          nome: "Filtro solar com toque seco",
          descricao:
            "Se você é daquelas pessoas que acredita que por ter o tom mais escuro, não precisa de proteção solar, esqueça disso agora mesmo. O filtro solar é essencial para todos os tipos de pele, inclusive para quem possui mais melanina. O indicado é um fator a partir de 30, com toque seco para segurar o brilho e deixar um toque macio.",
          imagem: "https://img.freepik.com/fotos-gratis/retrato-de-jovem-com-corte-de-cabelo-afro-e-aplicar-creme_273609-21306.jpg?w=740&t=st=1675807838~exp=1675808438~hmac=87ee92ce6f6aec1d7a32bd6615a5a76ac39da465246119b4dbcd5d2ebb0e0938",
        },
    
        dica2: {
          nome: "Esfolie a pele toda semana",
          descricao:
            "Outra dica de cuidados com a pele negra que é fundamental é a esfoliação regular. Ela ajuda a remover a camada superficial da pele, reduzindo as impurezas e removendo as células mortas que causam acne e cravos. Sua pele ficará menos oleosa e as chances de foliculite e manchas diminuem.",
          imagem: "https://img.freepik.com/fotos-gratis/tiro-na-cabeca-de-uma-linda-mulher-de-pele-escura-usa-mascara-facial-de-esfoliante-de-cafe-mantem-as-maos-nas-bochechas-sorri-amplamente-usa-uma-toalha-branca-na-cabeca-modelos-internos-contra-parede-branca-tratamento-facial_273609-31029.jpg?w=740&t=st=1675801459~exp=1675802059~hmac=2fa3edde05959214c59885015975ae9385c5cbb7ce139cd65133850f833ff188https://revistaabm.com.br/storage/2021/04/15/4eb2009f9c9bdef66b458e4d4c013ac540225442.jpg",
        },
    
        dica3: {
          nome: "Experimente o sabonete em gel",
          descricao:
            "Se você possui uma pele oleosa, uma dica é a utilização de sabonete em gel ao invés do sabonete em barra durante a skincare. O ideal é que você lave o rosto duas vezes ao dia, ou seja, pela manhã e pela noite.",
          imagem: "https://img.freepik.com/fotos-gratis/retrato-de-jovem-com-corte-de-cabelo-afro-lavando-a-pele_273609-21307.jpg?w=740&t=st=1675801598~exp=1675802198~hmac=c2f708e6fc1390887cd867a2584b587ab819f5c9b8b8fcc270dd8f7a3412f380.jpg",
        },
    
        dica4: {
          nome: "Utilize boas maquiagens",
          descricao:
            "Hoje existe uma série de marcas de maquiagem que tem investido bastante em cores para os mais variados tons de pele. Então, o que vale é testar, buscar referências e escolher bons produtos para utilizar.",
          imagem: "https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-aplicando-maquiagem-no-rosto-enquanto-se-olha-no-espelho_23-2149206639.jpg?w=360&t=st=1675801753~exp=1675802353~hmac=382470a2a76fe23e12abfe44e3a7e6f9e62ec9fa1af05899ff38892e5593059a.jpg",
        },
    
        dica5: {
          nome: "Use a Vitamina C",
          descricao:
            "Além do protetor solar com toque seco, outro produto bastante recomendado para os cuidados com a pele negra é a Vitamina C. Ela ajuda a prevenir manchas e contribui no tratamento de outros procedimentos estéticos que a paciente esteja realizando.jpg",
          imagem: "https://img.freepik.com/fotos-gratis/close-up-mulher-aplicando-soro_23-2148945239.jpg?w=740&t=st=1675801972~exp=1675802572~hmac=91a15a961803dc32d879fc55b6c6d50087b055c473e99afb5b15420e9af3188d",
        },
    
        dica6: {
          nome: "Produtos para seu tipo de pele",
          descricao:
            "Sua pele seca, mais oleosa ou mista? Embora a maioria das peles negras sejam oleosas, cada mulher possui uma característica diferente. Por isso, é muito importante ter uma noção de como ela é para manter os cuidados com a pele negra.",
          imagem: "https://img.freepik.com/fotos-gratis/close-up-mulher-segurando-espelho_23-2148945172.jpg?w=740&t=st=1675804104~exp=1675804704~hmac=ad588ee14103276f76ad8bbe782a5fe13e1822fdc6feb4c2037a6312e294dc2c",
        },
      };
    
      var content = document.getElementById("content");

      for (var bio in explicacoes) {
        content.innerHTML +=
          '<div class="card">' +
          '<img src="' +
          explicacoes[bio].imagem +
          '"/>' +
          "<details>" +
          "<summary>" +
          explicacoes[bio].nome +
          "</summary>" +
          "<p>" +
          "<footer>" +
          explicacoes[bio].descricao +
          "</p>"+
          "</details></div>" +
          "</footer>";
      }
}

carregaDicas();