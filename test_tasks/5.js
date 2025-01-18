function Region(name, area, population) {
  this.name = name;
  this.area = area;
  this.population = population;
}

Region.prototype.about = function () {
  console.log(`Region: ${this.name}`);
  console.log(`Area: ${this.area} km^2`);
  console.log(`Population: ${this.population}`);
};

function Country(name, area, population, capital) {
  Region.call(this, name, area, population);
  this.capital = capital;
}

Country.prototype = Object.create(Region.prototype);
Country.prototype.constructor = Country;

Country.prototype.about = function () {
  Region.prototype.about.call(this);
  console.log(`Capital: ${this.capital}`);
};

function City(name, area, population, boroughs) {
  Region.call(this, name, area, population);
  this.boroughs = boroughs;
}

City.prototype = Object.create(Region.prototype);
City.prototype.constructor = City;

City.prototype.about = function () {
  Region.prototype.about.call(this);
  console.log(`Boroughs: ${this.boroughs.join(", ")}`);
};

const ukraine = new Country("Ukraine", 603500, 41660000, "Kyiv");
ukraine.about();

console.log("\n");

const kharkiv = new City("Kharkiv", 839, 2965000, [
  "Slobodkiy",
  "Osnovjanskiy",
  "Kyivskiy",
  // І так далі
]);
kharkiv.about();
