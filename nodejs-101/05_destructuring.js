
const {PI, sqrt, SQRT2 } = Math;

console.log(PI);
console.log(sqrt);


const circle = {
    label: 'circle',
    radius: 2
};

const area = ({radius}) => console.log(`Area: ${radius * radius}`);

area(circle);