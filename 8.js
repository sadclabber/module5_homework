let vegetables = new Map([
    ["tomato", "red"],
    ["cucumber", "green"],
    ["radish", "purple"]
]);

vegetables.forEach(function(value, key){
    console.log(`Ключ - ${key}, значение - ${value}`);
});