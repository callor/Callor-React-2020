/**
 * JS 배열의 첨자
 * 보통 배열은 첨자(index)가 배열의 개수보다 작아야 한다
 * JS에서 배열의 개수보다 큰 첨자(index)를 사용하여 참조를 하면 undefined를
 * 배열의 개수보다 큰 첨자(index)를 사용하여 값을 저장하면
 * 사용한 첨자 만큼 배열 개수가 증가하고, 값이 저장된다
 * 그리고 값이 없는 배열요소는 empty 값이 설정된다
 *  *
 */
const arr = [10];
console.log(arr[10]);
arr[10] = 100;

console.table(arr);

console.log(arr); // [ <10 empty items>, 100 ]
console.log(arr.length);

const arr1 = Array(10).fill(0);
console.table(arr1);

for (let i = 0; i < 10; i++) {
    console.log(arr1[i]);
}

const objs = [{ a: 1, b: 2, c: 3 }];
console.log(objs[3]?.a);
