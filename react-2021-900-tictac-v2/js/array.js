const names = ["홍길동", "이몽룡", "성춘향"];
const _names = names.slice(0, names.length + 1);
console.log(_names);

const friend = [
    { 성적: [90, 90, 80] },
    { 성적: [10, 30, 80] },
    { 성적: [20, 50, 70] },
    { 성적: [30, 60, 60] },
];

console.log(friend);
console.log(friend.slice(0, 3));
const current = friend[friend.length - 1];
console.log("slice", current);
// const 성적표 = current.성적.slice();
console.log(current.성적.slice());
console.log([...current.성적]);
