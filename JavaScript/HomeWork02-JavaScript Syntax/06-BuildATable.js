function tablePrint(input) {
    function isFibonachi(n) {
        //A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square (Source: Wiki).
        var cond1 = Math.sqrt((5 * n * n) + 4) % 1 === 0;
        var cond2 = Math.sqrt((5 * n * n) - 4) % 1 === 0;
        if (cond1 || cond2) {
            return true;
        } else return false;
    }

    var output = [];
    output[0] = '<table>';
    output[1] = '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>';
    var startNum = input[0], endNum = input[1];
    for (var i = 0; i <= (endNum - startNum) + 1; i++) {
        var num = (parseInt(startNum) + parseInt(i));
        output[i + 2] = ('<tr><td>') + (num) + ('</td><td>') + (num * num) + ('</td><td>') + (isFibonachi(num) ? 'yes' : 'no' ) + ('</td></tr>');
    }
    output[endNum - startNum + 3] = '</table>';
    for (var i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
}
tablePrint([23, 27])