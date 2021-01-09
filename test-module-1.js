/*
//init class
class Calculate {
    add(a,b){
        return a+ b;
    }

    multiply(a,b){
        return a*b;
    }

    divide (a,b){
        return a/b;
    }    
}
*/

// init class & exports the whole class with all methods
module.exports = class Calculate {
    add(a, b){
        return a + b;
    }

    multiply(a, b){
        return a * b;
    }

    divide (a, b){
        return a / b;
    }    
};