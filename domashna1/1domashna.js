const cities = [
    {
      name: 'Skopje',
      population: '500'
    },
    {
      name: 'Barcelona',
      population: '65'
    },
    {
      name: 'Bilbao',
      population: '833'
    }
  ];
  
  let minPopulation = Infinity;
  let nameOfCityMinPopulation = '';
  
  cities.forEach(city => {
    if (parseInt(city.population) < minPopulation) {
      minPopulation = city.population;
      nameOfCityMinPopulation = city.name;
    }
  });
  
  console.log('Least populated city is: ' + nameOfCityMinPopulation);
  console.log('With population of: ' + minPopulation);