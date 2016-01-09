function equation(a, b, c) {
    var x1, x2, d = b * b - (4 * a * c);
    if (d >= 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        if (d != 0) {
            console.log('X1 = ' + x1);
            console.log('X2 = ' + x2);
        } else  console.log('X = ' + x1);

    } else console.log('No real roots')
}
equation(2, 5, -3);
equation(2, -4, 2);
equation(4, 2, 1);