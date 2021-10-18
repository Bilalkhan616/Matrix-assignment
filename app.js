//taking values from Matrix A

let inputl1 = document.getElementById('l1');
let inputl2 = document.getElementById('l2');
let inputl3 = document.getElementById('l3');
let inputl4 = document.getElementById('l4');
let inputl5 = document.getElementById('l5');
let inputl6 = document.getElementById('l6');
let inputl7 = document.getElementById('l7');
let inputl8 = document.getElementById('l8');
let inputl9 = document.getElementById('l9');

//taking values from Matrix B

let inputr1 = document.getElementById('r1');
let inputr2 = document.getElementById('r2');
let inputr3 = document.getElementById('r3');
let inputr4 = document.getElementById('r4');
let inputr5 = document.getElementById('r5');
let inputr6 = document.getElementById('r6');
let inputr7 = document.getElementById('r7');
let inputr8 = document.getElementById('r8');
let inputr9 = document.getElementById('r9');

//showing values from Matrix C

let inputa1 = document.getElementById('a1');
let inputa2 = document.getElementById('a2');
let inputa3 = document.getElementById('a3');
let inputa4 = document.getElementById('a4');
let inputa5 = document.getElementById('a5');
let inputa6 = document.getElementById('a6');
let inputa7 = document.getElementById('a7');
let inputa8 = document.getElementById('a8');
let inputa9 = document.getElementById('a9');

const matrixAdd = () => {
    let m1 = [
        [Number(inputl1.value),Number(inputl2.value),Number(inputl3.value)],
        [Number(inputl4.value),Number(inputl5.value),Number(inputl6.value)],
        [Number(inputl7.value),Number(inputl8.value),Number(inputl9.value)]
    ];

    let m2 = [
        [Number(inputr1.value),Number(inputr2.value),Number(inputr3.value)],
        [Number(inputr4.value),Number(inputr5.value),Number(inputr6.value)],
        [Number(inputr7.value),Number(inputr8.value),Number(inputr9.value)]
    ];

    console.log(m1);
    console.log(m2);

    let m3 = [
    [Number(inputa1.value),Number(inputa2.value),Number(inputa3.value)],
    [Number(inputa4.value),Number(inputa5.value),Number(inputa6.value)],
    [Number(inputa7.value),Number(inputa8.value),Number(inputa9.value)]
    ];


    for (let i= 0; i < 3 ; i++ ) {

        for( let j = 0; j < 3; j++) {

            m3[i][j] = m1[i][j] + m2[i][j];

        }
    }

    document.getElementById('a1').value = m3[0][0];
    document.getElementById('a2').value = m3[0][1];
    document.getElementById('a3').value = m3[0][2];
    document.getElementById('a4').value = m3[1][0];
    document.getElementById('a5').value = m3[1][1];
    document.getElementById('a6').value = m3[1][2];
    document.getElementById('a7').value = m3[2][0];
    document.getElementById('a8').value = m3[2][1];
    document.getElementById('a9').value = m3[2][2];
}