//Iterables
//See "JavaScript Symbols: But Why?"

const myFavouriteSongs = [
  "Moça",
  "Rapusel",
  "Gostava Tanto de Você",
  "Deixou-me"
];

//For loop
for (let index = 0; index < myFavouriteSongs.length; index++) {
  console.log("For:" + myFavouriteSongs[index]);
}

//while loop
let index = 0;
while (index < myFavouriteSongs.length) {
  console.log("While:" + myFavouriteSongs[index]);
  index++;
}

// for-og loop
for (const value of myFavouriteSongs) {
  console.log("of" + value);
}

const myFavouriteSongsByGenre = {
  allGenres: {
    MPB: ["Moça", "Sozinho", "Garota de Ipanema"],
    Rap: ["Inner City Travellin' Man", "Deixou-me", "Blinded By The Lights"],
    Fado: [
      "Gente da Minha Terra",
      "Escrevi o Teu Nome no Vento",
      "Bia da Mouraria"
    ]
  },
  getAllMySongs() {
    const songs = [];

    for (const song of this.allGenres.MPB) {
      songs.push(song);
    }

    for (const song of this.allGenres.Rap) {
      songs.push(song);
    }

    for (const song of this.allGenres.Fado) {
      songs.push(song);
    }

    console.log(songs);
    return songs;
  }
};

document.getElementById(
  "myGenres"
).innerHTML = myFavouriteSongsByGenre.getAllMySongs().join(", ");
