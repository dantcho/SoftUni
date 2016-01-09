function calcCylinderVol(arr){
    var r = arr[0];
    var h = arr[1];
    var baseArea = Math.PI*r*r;
    var volume = baseArea * h;
    console.log(volume.toFixed(3));
}
calcCylinderVol([2,4]);
calcCylinderVol([5,8]);
calcCylinderVol([12,3]);
