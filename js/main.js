console.log("yo, dawg. how goes it?")

const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength);

const keys = Object.keys(empireStateBuilding);
const value = Object.values(empireStateBuilding);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ": " + value[i]);
}

const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album`);
