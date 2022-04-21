const collection = [
    {
      name: "Pikachu Poncho",
      drawer: "Draw : Kouki Saitou",
      year: 2013,
      edition: "XY",
      picture: "img/pikachuponcho.jpeg",
      price: "700€",
      rarity: "Promo",     //????????????//
      languages: "Japanese",     //??????????????//
    },
    
    {
      name: "Dracaufeu V Shiny",
      drawer: "Draw : 5ban Graphics",
      year: 2020,
      edition: "La voie du maître",
      picture: "img/dracaufeu.png",
      price: "420€",
      rarity: "Secret rare",
      languages: "French",
    },
    {
      name: "Mew ancient",
      drawer: "Draw : ?*?*",
      year: 1999,
      edition: "From cinema movie",
      picture: "img/mew.jpeg",
      price: "25€",
      rarity: "Promo",
      languages: "???",
    },
    {
      name: "Mewtwo GX",
      drawer: "Draw : 5ban Graphics",
      year: 2017,
      edition: "Shining Legends",
      picture: "img/mewtwo.jpeg",
      price: "6€",
      rarity: "Ultra Rare",
      languages: "English",
    },
    {
      name: "Rayquaza VMAX ",
      drawer: "Draw : Anesaki Dynamic",
      year: 2021,
      edition: "Evolving Skies",
      picture: "img/rayquaza.jpeg",
      price: "169€",
      rarity: "Secret Rare",
      languages: "English",
    },
    {
      name: "Sulfura de Galar v",
      drawer: "Draw : aky CG Works",
      year: 2022,
      edition: "Brillant Stars",
      picture: "img/sulfura.jpeg",
      price: "32€",
      rarity: "Secret Gold",
      languages: "English",
    },
    {
      name: "Umbreon Star",
      drawer: "Draw : Mazakazu Fukuda",
      year: 2007,
      edition: "POP Series 5",
      picture: "img/noctali.jpeg",
      price: "3350€",
      rarity: "Ultra Rare",
      languages: "English",
    },
    {
      name: "Dracolosse V ",
      drawer: "Draw : Atsushi Furusawa",
      year: 2021,
      edition: "Evolving Skies",
      picture: "img/dracolosse.png",
      price: "150€",
      rarity: "Ultra Rare",
      languages: "French",
    },
    {
      name: "Ectoplasma",
      drawer: "Draw : Hironobu Yoshida",
      year: 2001,
      edition: "Pokemon card web",
      picture: "img/gengar.jpeg",
      price: "540€",
      rarity: "Holographique",
      languages: "Japanese",
    },
    {
      name: "Magicarp",
      drawer: "Draw : Ken Sugimod",
      year: 1996,
      edition: "Unnumbered Promo",
      picture: "img/magicarp.jpeg",
      price: "400.000€",
      rarity: "Promo",
      languages: "Japanese",
    }


  ];

  
 
  const main = document.querySelector("main")

  //for (const card of collection) {
    collection.forEach (card => {

    console.log(card.name);
    console.log(card.picture);
    console.log(card.drawer);
    

    const article = document.createElement("article")
    article.className = "cards"

    const div1 = document.createElement("div")
    div1.className = "rarityyear"

    const div2 = document.createElement("div")
    div2.className = "editionprice"



    const name = document.createElement ("h1")
    name.className = "cardname"
    name.innerText = card.name

    const image = document.createElement ("img")
    image.className = "img"
    image.src = card.picture

    const rarity = document.createElement ("p")
    rarity.className = "rarity"
    rarity.innerText = card.rarity

    const year = document.createElement ("p")
    year.className = "year"
    year.innerText = card.year

    const edition = document.createElement ("p")
    edition.className = "edition"
    edition.innerText = card.edition

    const price = document.createElement ("p")
    price.className = "price"
    price.innerText = card.price


    const drawer = document.createElement ("aside")
    drawer.className = "drawer"
    drawer.innerText = card.drawer

    const language = document.createElement ("section")
    language.className = "language"
    language.innerText = card.languages
    
    
    article.appendChild(name)
    article.appendChild(image)

    article.appendChild(div1)
    article.appendChild(div2)

    div1.appendChild(rarity)
    div1.appendChild(year)

    div2.appendChild(edition)
    div2.appendChild(price)

    article.appendChild(drawer)

    article.appendChild(language)

    main.appendChild(article)
       
  })

 

