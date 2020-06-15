/**
 * SlowMath Library
 * Covalence, LLC
 */

let slowMath = (function () {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };

    function add(a, b) {
        return wait(1000).then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(+ a + + b);
            } else {
                return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
            }
        });
    }

    function subtract(a, b) {
        return wait(1000).then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a - b);
            } else {
                return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
            }
        });
    }

    function multiply(a, b) {
        return wait(1000).then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a * b);
            } else {
                return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
            }
        });
    }

    function divide(a, b) {
        return wait(1000).then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+ b === 0) {
                return Promise.reject(new Error('Cannot divide by zero.'));
            } else if (shouldResolve) {
                return Promise.resolve(a / b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
            }
        });
    }

    function remainder(a, b) {
        return wait(1000).then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+ b === 0) {
                return Promise.reject(new Error('Cannot divide by zero for remainder.'));
            } else if (shouldResolve) {
                return Promise.resolve(a % b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
            }
        });
    }

    function negativeCheck(a, b) {
        return a > -1 && b > -1;
    }

    return {
        add,
        subtract,
        multiply,
        divide,
        remainder
    };
})();
// let slowPromise = new Promise( (resolve) => {
//     resolve(slowMath.add(6,2))
// }).then((result) => {
//     console.log(result)
//     return slowMath.multiply(result,2)
// }).then((result) =>{
//     console.log(result)
//     return slowMath.divide(result,4)
// }).then((result) => {
//     console.log(result)
//     return slowMath.subtract(result, 3)
// }).then((result) => {
//     console.log(result)
//     return slowMath.add(result,98)
// }).then((result) => {
//     console.log(result)
//     return slowMath.remainder(result,2)
// }).then((result) => {
//     console.log(result)
//     return slowMath.multiply(result,50)
// }).then((result) => {
//     console.log(result)
//     return slowMath.remainder(result,40)
// }).then((result) => {
//     console.log(result)
//     return slowMath.add(result,32)
// })
// .then((result) => {
//     console.log(`the meaning of life is 42`)
// }).catch((error) => {
//      console.log(error)})

let doMath = async () => {
    try {
        let wait = await slowMath.add(6, 2);
        console.log(wait)
        wait = await slowMath.multiply(wait, 2);
        console.log(wait)
        wait = await slowMath.divide(wait, 4);
        console.log(wait)
        wait = await slowMath.subtract(wait, 3)
        console.log(wait)
        wait = await slowMath.add(wait, 98);
        console.log(wait)
        wait = await slowMath.remainder(wait, 2);
        console.log(wait)
        wait = await slowMath.multiply(wait, 50);
        console.log(wait)
        wait = await slowMath.remainder(wait, 40);
        console.log(wait)
        wait = await slowMath.add(wait, 32);
        console.log(`the meaning of life is  ${wait}`)
    } catch (err) {
        console.log(err)
    }
}

doMath()