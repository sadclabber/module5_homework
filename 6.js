let arr = [1, 1, 1, 1, 1, 1];
let a = 0;
for (let i = 0; i < arr.length; i = i + 1) {
    for (let k = i + 1; k < arr.length; k = k + 1) {
        if (arr[i] != arr[k]) {
            a++;
        }
    };
};

if (a > 0) {
    console.log('false');
} else {
    console.log('true');
};