
  function createCar(manufacturer, model, ...options) {
    
  let car = {
    manufacturer: manufacturer,
    model: model,
  };

options.forEach(option =>{
    let [key, value] = option.split(":")
    car[key]= value
})

    return car;
  }
  
  // Example usage:
  const myCar = createCar('Toyota', 'Camry', 'color:blue', 'year: 2024');
  console.log(myCar);
  