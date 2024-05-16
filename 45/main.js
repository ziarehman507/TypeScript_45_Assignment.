function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Example usage:
var myCar = createCar('Toyota', 'Camry', 'color:blue', 'year: 2024');
console.log(myCar);
