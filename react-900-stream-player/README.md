# dependcy

yarn add moment  
yarn add moment-timezone  
yarn add react  
yarn add react-moment  
yarn add react-live-clock

# 멍청한 컴포넌트 똑똑한 컴포넌트

멍청하고 똑똑하다니 그게 뭔뜻이죠?

물론 실제로 멍청하거나 똑똑한건 아니고.. 추상적인 의미입니다. 이는 리액트 프로젝트에서 사용하면 유용한 패턴인데요, 조금 더 제대로 된 표현으로 쓰자면, 이 패턴에선 컴포넌트들이 presentational (멍청한) 컴포넌트와 container (똑똑한) 컴포넌트로 분류됩니다.

멍청한 컴포넌트들은 오직, props 로 전달받은 값을 렌더링하는것을 목표로 합니다. 이 컴포넌트들은 자신들만의 CSS 스타일을 가지고 있을 수 있구요, state 를 갖고있지 않습니다. 뭔가 처리를 해야 할 때는, 똑똑한 컴포넌트에서 선언된 함수를 props 로 전달받아서 실행합니다.

반대로 똑똑한 컴포넌트는 멍청한 컴포넌트들을 관리하는 녀석입니다. state 를 지닐 수 있고, 작업을 프로세싱 할 수 있죠. 그리고 기본적인 틀을 갖추기 위한 CSS 스타일만을 가지고있고, 복잡한 스타일을 갖고있지 않습니다.

이렇게 컴포넌트를 분류하면, 데이터의 흐름이 간편해진답니다. 추가적으로 컴포넌트의 재사용률도 높여주죠.

자세한 내용: [Smart and dumbcomponents](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.3b0dbutob)
