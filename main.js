class Manga {
  id = 0;
  name = '';
  description = '';
  chapters = [];
  coverLink = '';
  tags = [];

  constructor() {}
}

function loadManga(manga) {
  console.log('loading ' + manga.name);
}

function createMangaLink(manga) {
  const but = document.createElement('button');
  const img = document.createElement('img');
  but.appendChild(img);
  img.src = manga.coverLink;
  img.loading = 'lazy';
  but.addEventListener('click', () => loadManga(manga));
  return but;
}
function createGallery(p_title) {
  const title = document.createElement('h2');
  const gallery = document.createElement('div');
  const galleryContainer = document.createElement('div');

  title.appendChild(document.createTextNode(p_title));
  galleryContainer.appendChild(title);
  galleryContainer.appendChild(gallery);
  gallery.classList.add('gallery');
  galleryContainer.classList.add('galleryContainer');
  return galleryContainer;
}

addEventListener('load', () => {
  const content = document.querySelector('.content');

  let manga = new Manga();
  manga.name = 'Murder License Kiba';
  manga.coverLink =
    'https://avt.mkklcdnv3.com/avatar_225/18497-murder_license_kiba.jpg';
  manga.chapters.push(
    ...`Murder License Kiba - Chapter 16: Shikisoku Zekuu
Murder License Kiba - Chapter 15: Iron Lady
Murder License Kiba - Chapter 14: Fangs In The Raging Sea!!
Murder License Kiba - Chapter 13: The Tiananmen Square Incident
Murder License Kiba - Chapter 12: A Dark Religion
Murder License Kiba - Chapter 11: The World's Strongest
Murder License Kiba - Chapter 10: The Heisei Revolution
Murder License Kiba - Chapter 9: Diamond Hitman(Unfinished Translation)
Murder License Kiba - Chapter 8: Kiba In Ny (Part 2)
Murder License Kiba - Chapter 7: Kiba In Ny (Part 1)
Murder License Kiba - Chapter 6: Fangs In The Jungle!
Murder License Kiba - Chapter 5: Vestiges Of The Mother, Woman Of The Shadows
Murder License Kiba - Chapter 4: Demonic Human Experiments
Murder License Kiba - Chapter 3: An Unknown Woman
Murder License Kiba - Vol.1 Chapter 2 : Red Tiger
Murder License Kiba - Vol.1 Chapter 1 : The Man With The Murder License!!`.split(
      '\n'
    )
  );
  let gal = createGallery('testing');
  for (let i = 0; i < 100; ++i) {
    let ma = createMangaLink(manga);
    gal.children[1].appendChild(ma);
  }
  content.appendChild(gal);
  {
    let gal = createGallery('testing');
    for (let i = 0; i < 100; ++i) {
      let ma = createMangaLink(manga);
      gal.children[1].appendChild(ma);
    }
    content.appendChild(gal);
  }
  {
    let gal = createGallery('testing');
    for (let i = 0; i < 100; ++i) {
      let ma = createMangaLink(manga);
      gal.children[1].appendChild(ma);
    }
    content.appendChild(gal);
  }
  {
    let gal = createGallery('testing');
    for (let i = 0; i < 100; ++i) {
      let ma = createMangaLink(manga);
      gal.children[1].appendChild(ma);
    }
    content.appendChild(gal);
  }
});
