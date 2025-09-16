class Matematica {

    static somar(a , b) {
     return a + b
        
    }

    static subtrair(a , b) {
        return a - b;
    }

    static fatorial(n) {
        let r = 1;
        for (let i = 1; i <= n; i++) {
        r *= i;

        }
        return r;
    }
}

module.exports = Matematica;