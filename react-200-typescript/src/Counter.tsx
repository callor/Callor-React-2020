import React, { useState } from "react";

/*
객체를 만드는 2가지 방법
type, interface  키워드로 생성

*/
type Information = { name: string; description: string };
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function Counter() {
  /*
    useState를 사용 할 때 Generics 를 사용하지 않아도 
    알아서 타입을 유추하기 때문에 생략해도 상관없다.

    상태가 null일 수도 있고 아닐수도 있을때는 Generics 를 사용하자
    

    상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때는 Generics 를 명시하는 것이 좋다
    */
  const [count, setCount] = useState<number>(0);
  const [info, setInformation] = useState<Information | null>(null);

  // 빈 배열만 넣었을 때
  // 해당 배열이 어떤 타입으로 이루어진 배열인지 추론 할 수 없기 때문에
  // Generics 를 명시해야 한다
  const [todos, setTodos] = useState<Todo[]>([]);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
