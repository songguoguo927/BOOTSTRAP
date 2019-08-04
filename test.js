/**
 * 求最大公约数
 * @param {*} a
 * @param {*} b
 */
function gy(a, b) {
    var min = Math.min(a, b);
    // 最大公约数 
    for ( var  i = min; i > 0; i-- ) {
    　　if( a % i == 0 && b % i == 0 ) {
    　　　　return i;
    　　}
    }

}


console.log(gy(6,4))