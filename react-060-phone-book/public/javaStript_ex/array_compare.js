/*
우리는 shouldComponentUpdate 로직을 굉장히 간단하게 작성해주었는데 어떻게 이런게 가능 한 것일까요?

불변성에 대해 알아보자.
그 이유는, 우리가 불변성을 지켜줬기 때문입니다.

만약에 우리가 배열을 직접 건들여서 수정해줬다고 가정해봅시다..
그럴때는 이렇게 !== 하나로 비교를 끝낼수가 없습니다.
*/

const array = [1, 2, 3, 4];
const sameArray = array;
sameArray.push(5);

console.log(array !== sameArray); // false

/*
우리가 sameArray = array 를 했다고 해서 
기존에 있던 배열이 복사되는것이 아니라 똑같은 배열을 가르키고 있는 
레퍼런스가 하나 만들어진 것이기 때문에, 
우리가 sameArray 에 push 를 하게 된다고 해서 array 와 sameArray 가 달라지지 않습니다.

하지만, 다음 코드와 같이 불변성을 유지하면
*/
// const array = [1, 2, 3, 4];
const differentArray = [...array, 5];
// 혹은 = array.concat(5)
console.log(array !== differentArray); // true

/*
위 코드와 같이 바로바로 비교가 가능하다는 것이죠.
이는 객체를 다룰때도 마찬가지입니다.
*/
// NO
const object = {
  foo: "hello",
  bar: "world"
};
const sameObject = object;
sameObject.baz = "bye";
console.log(sameObject !== object); // false

// YES
const object = {
  foo: "hello",
  bar: "world"
};

const differentObject = {
  ...object,
  baz: "bye"
};
console.log(differentObject !== object); // true
