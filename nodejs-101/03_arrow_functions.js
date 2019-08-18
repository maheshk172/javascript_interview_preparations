const TesterObject = {
    funct1: function() {
        console.log(this);
    },

    funct2: () => {
        console.log(this);
        console.log('inside funct2')
    },

    add: (a, b) => {
        console.log('inside add');
        console.log(`${a} + ${b} = ${a+b}`);
    },

    //SHORTHAND
    sub: (a, b) => console.log(`${a} + ${b} = ${a-b}`),
    
    //VERY MUCH SHORT HAND
    printDouble: a => console.log(`${a} * 2 == ${a*2}`),

    mapAndSquare: arr => arr.map(a => console.log(a*a))
    
};

TesterObject.funct1();
TesterObject.funct2();
TesterObject.add(11, 12);
TesterObject.sub(100, 4);
TesterObject.printDouble(200);
TesterObject.mapAndSquare([1, 2, 3, 4]);