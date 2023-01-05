const member = {
  one:{
    img: 'img/uche.jpg',
    imgAlt: 'image of Ibute uchenna',
    name: 'Ibute Uchenna',
    occupation: 'Fashion icon and Professor in Law',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem? ',
  },
  two: {
    img: 'img/Fashion-Influences_Hero.webp',
    imgAlt: 'image of Rihanna',
    name: 'Rihanna',
    occupation: 'Actor,Screenplay Writer,Director, Fashion icon',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem.',
  },
  three: {
    img: 'img/2796ec69-88f9-4f41-837b-144afe0e3d77.jpg',
    imgAlt: 'image of James foster',
    name: 'James Foster',
    occupation: 'Actor, Director, Fashion Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
  },
  four: {
    img: 'img/http___cdn.cnn.com_cnnnext_dam_assets_211029161314-01-zendaya-style-evolution-restricted.jpg',
    imgAlt: 'image of Zendaya',
    name: 'Zendaya',
    occupation: 'Actress, Fashion icon',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
  },
  five: {
    img: 'img/Karl-Lagerfield-Photo-Yahoo-Finance.jpg',
    imgAlt: 'image of Karl Lagerfield',
    name: 'Karl-Lagerfield',
    occupation: 'Fashion icon and Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
  },
  six: {
      img: 'img/Oyin-Adenuga-Emelia-Janes-Green-Nigerian-Independence-Day-Traditional-Bridal-Inspiration-LoveWeddingsNG-feat.png',
      imgAlt: 'image of Oyin Adenuga',
      name: 'Oyin-Adenuga',
      occupation: 'Fashion Designer',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem',
    },
  };
  const cardContainer = document.querySelector('.card');
  
  function createCard(n) {
    const card = document.createElement('div');
    card.classList.add('member-card');
  
    const ImgContainer = document.createElement('div');
    ImgContainer.classList.add('member-image-container');
    const Img = document.createElement('img');
    Img.classList.add('member-img');
    Img.src = n.img;
    Img.alt = n.imgAlt;
    ImgContainer.appendChild(Img);
  
    const TextContent = document.createElement('div');
    TextContent.classList.add('member-text-content');
  
    const Name = document.createElement('h3');
    Name.classList.add('member-name');
    Name.textContent = n.name;
  
    const job = document.createElement('h5');
    job.classList.add('member-job');
    job.textContent = n.occupation;
  
    const Line = document.createElement('div');
    Line.classList.add('grey-line');
  
    const Details = document.createElement('p');
    Details.classList.add('member-details');
    Details.textContent = n.details;
  
    TextContent.appendChild(Name);
    TextContent.appendChild(job);
    TextContent.appendChild(Line);
    TextContent.appendChild(Details);
  
    card.appendChild(ImgContainer);
    card.appendChild(TextContent);
    return card;
  }
  
  function loadCards() {
    const memberList = Object.keys(member);
    if (window.innerWidth > 768) {
      for (let i = 0; i < memberList.length; i += 1) {
        cardContainer.appendChild(createCard(member[memberList[i]]));
      }
    } else {
      for (let i = 0; i < memberList.length; i += 1) {
        const card = createCard(member[memberList[i]]);
        if (i > 1) {
          card.id = 'hidden-card';
          card.classList.toggle('card-hidden');
        }
        cardContainer.appendChild(card);
      }
    }
  }
  loadCards();
  
  const ButtonToggle = document.getElementById('button-orange');
  ButtonToggle.onclick = function () {
    const children = cardContainer.querySelectorAll('#hidden-card');
    for (let i = 0; i < children.length; i += 1) {
      children[i].classList.toggle('card-hidden');
    }
    if (ButtonToggle.textContent === 'MORE') {
      ButtonToggle.innerHTML = 'LESS<span><img src="img/up-arrow-icon.svg" alt="arrow pointing upwards"></span>';
    } else {
      ButtonToggle.innerHTML = 'MORE<span><i class="fa-solid fa-angle-down"></i></span>';
    }
  };
  
  window.onresize = function () {
    while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
    }
    const cardButtonToggle = document.getElementById('button-orange');
    cardButtonToggle.innerHTML = 'MORE<span><i class="fa-solid fa-angle-down"></i></span>';
    loadCards();
  };