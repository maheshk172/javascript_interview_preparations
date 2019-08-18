const mystery = 'answer';
const obj = {
    p1:100,
    p2:200,
    f1() {},
    f2: () => {},
    [mystery]: 500
};

console.log(`obj.mystery: ${obj.mystery}`);
// Dynamic eval - mystery = answer
console.log(`obj.answer: ${obj.answer}`);


