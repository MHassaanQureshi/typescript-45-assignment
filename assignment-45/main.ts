function carDetails (manufacturer: string, modelName: string, ...ExtraInfo: (string | number)[][]){

    const car = {manufacturer, modelName, ...Object.fromEntries(ExtraInfo)};
    return car;
    };
    
    const myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
    
    console.log(myCarDetails);