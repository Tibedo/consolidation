const collection = [
    {
      name: "Pikachu VMAX",
      drawer: "Illustration : Akira Egawa",
      year: 2019,
      edition: "Sword & Shield",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Holo rare", "Promo", "Secret rare" ],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    
    {
      name: "Dracaufeu V Shiny",
      drawer: "Illustration : bloblo",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "Mew",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "Mewtwo",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "Rayquaza",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "Entei",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "Noctali",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "dragonite",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "Gengar",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    },
    {
      name: "Arceus",
      drawer: "Illustration : blabla",
      year: 1994,
      edition: "Ex Emerald",
      picture: "img/pikachu.jpeg",
      price: "MINT : 7€",
      rarity: ["Ultra rare", "Foil"],
      languages: ["French", "English", "Japanese", "Italian"]
    }


  ];

  
 
  const main = document.querySelector("main")

  for (const card of collection) {

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
    rarity.innerText = card.rarity[2]

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
    language.className = "drawer"
    language.innerText = card.languages[2]
    
    
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
       
  }

  

