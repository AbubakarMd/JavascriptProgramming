var me = "abubakar";
console.log("first " + me);


myself();


function myself() {
    // var me = "abu"; // it will have value abu, as it inside its own scope
    console.log("second " + me); // it will have value of me from global variable

    fun();

    function fun() {
        var me = "bakar";
        console.log("third " + me);
    }
}
