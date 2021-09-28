# Context를 사용한 Props Drilling 방지

-   컴포넌트들간의 포함관계가 깊어질 수록, state과 각종 함수들의 전달이 복잡한 구조를 갖게 된다.
-   중간에 사용하지 않아도 되는 state와 함수를 계속해서 props로 전달하고, 전달된 props를 Toss 하는 형식으로 구조가 만들어지면 컴포넌트의 재사용등이 매우 어려워 질 수 있다
-   이때 대안으로 redux라는 3rd party 라이브러리를 사용했지만, 이제는 state와 함수를 관리하는 정도의 수준이면 굳이 redux를 사용하지 않고 해결 할 수 있다.

## Context 컴포넌트 생성

-   Context 컴포넌트를 생성하고 createContext() 함수를 를 return한다
-   이 컴포넌트를 사용하여 맨 바깥쪽의 App.js에 Context.Providor 로 감싸는 컴포넌트 tag를 생성해 둔다
-   이렇게 하면 Context.Providor 로 감싸진 모든 컴포넌트는 필요할 경우 useContext() 함수를 사용하여 언제는지 필요할때 state와 함수를 자유롭게 사용할 수 있다.
