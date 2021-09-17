// function calculateChange (a, b) {
//     return b-a;
    
// };

// var pecahan = [
//     50000,
//     20000,
//     10000,
//     5000,
//     2000,
//     1000,
//     500,
//     200,
//     50

// ]

// console.log(calculateChange(700649, 800000));
// console.log(calculateChange(575650, 580000));
// console.log(calculateChange(657650, 600000));

// function kembalian (calculateChange) {
//     for {var i = 0, i < a, i--}
// }


// const calculateChange = (total, uang) => {
//     if (uang < total) {
//         return 'not enough money'
//     }
//     let kembalian = uang - total
//     console.log(kembalian)
//     const lembar = ['50000', '20000','10000','5000','1000']
//     let pos = 0
//     const satuan = {'50000' : 0, '20000' : 0, '10000': 0, '5000': 0, '1000' : 0}
//     while(kembalian > 0) {
//         if (kembalian >= lembar[pos]) {
//             satuan[lembar[pos]] += 1
//             kembalian -= lembar[pos]
//             console.log(kembalian)
//         } else {
//             pos += 1
//         }
//     }
//     return satuan
// }

// console.log(calculateChange(275000, 100000));
// console.log(calculateChange(700649, 800000));
// console.log(calculateChange(575650, 580000));
// console.log(calculateChange(657650, 600000));


const calculate = (pay, total) => {
    if (pay < total) {
        return 'not enough money'
    }
    let kembalian = pay - total
    console.log(kembalian)
    const lembar = ['50000', '20000','10000','5000','1000']
    let pos = 0
    const satuan = {'50000' : 0, '20000' : 0, '10000': 0, '5000': 0, '1000' : 0}
    while(kembalian > 0) {
        if (kembalian >= lembar[pos]) {
            satuan[lembar[pos]] += 1
            kembalian -= lembar[pos]
            console.log(kembalian)
        } else {
            pos += 1
        }
    }
    return satuan
}

console.log(calculate(275000, 100000))
console.log(calculate(305000, 100000))
console.log(calculate(5000, 100000))