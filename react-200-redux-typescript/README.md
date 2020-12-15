# React, typeScript, Redux Project

- create-reate-app react-typescript-redux --typescript
- yarn add redux react-redux @types/react-redux
- redux의 경우엔 자체적으로 TypeScript 지원이 된다.
- 하지만 react-redux의 경우 그렇지 않기 때문에 패키지명 앞에 @types를 붙인 패키지를 설치해 준다

- @types는 TypeScript 미지원 라이브러리에
- TypeScript 지원을 받을 수 있게 해주는 써드파티 라이브러리이다
- 이에 관련된 소스코드는 DefinitelyTyped 라는 GitHub 레포에서 관리 되고 있다

- 라이브러리에서 공식 TypeScript지원이 되는지 안되는지 확인을 하려면 직접 설치 후 불러와서 확인을 해도 되고,
- GitHub레포를 열어서 index.d.ts 라는 파일이 존재하는지 확인해야 한다.
