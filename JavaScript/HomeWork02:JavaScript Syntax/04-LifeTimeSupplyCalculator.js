function calcSupply(age, maxAge, food, foodPerDay) {
    var yearConsumate = maxAge - age
    var daysConsume = yearConsumate * 365 + (yearConsumate / 4);
    console.log(foodPerDay * daysConsume + 'kg of ' + food + ' until I am ' + maxAge + ' years old')
}

calcSupply(38, 118, 'chokolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nuts', 1.1);