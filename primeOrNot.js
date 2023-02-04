
let n = 500;   //enter your own value
let count = 0;
for (i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log(n + " is divisible by " + i);
        count = 1;
    }
}
if (count == 0) {
    console.log(n + " is prime");
}
