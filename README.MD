## 로그인 연습하기

### 1. 클론 받자마자 해야할 일

1. 혹시 다른 사람이 사용할 수 있으니 브랜치를 새로 만들어서 작업합니다.
2. 디펜던시들을 다운로드 해줍니다!  <br/>
2-1. npm 도 좋지만 이 프로젝트는 yarn을 사용하기 때문에 server폴더에서 yarn install해주고, client폴더에서도 yarn install 해줍니다.
3. 그리고 난 후 client폴더에서 yarn start를 해주고 개발을 시작합니다.


### 2. 개발 목표

1. 회원가입 기능을 구현한다. (id, password, nickname, email을 입력해줘야함)
2. 로그인 기능을 구현한다. (jwt토근 기반) (id, password를 입력해야함)
3. 내 정보를 불러오고 (jwt토큰 기반으로 요청하면 id, nickname, email을 받아올 수 있다.)
4. 내 정보를 수정한다. (jwt토큰 기반으로 요청하면 nickname, email을 수정할 수 있다.)


### 3. 주의 사항

1. 호출할 서버 api 주소는 http://localhost:5001 이고
2. 내가 일단 브라우저에서 테스트 해보지도 않았고, 충분한 테스트를 진행하지 않아서 오류가 많을 수도 있는데
3. 의도 한것도... 안한것도... 아니지만 뭔가 안되는게 있으면 클라이언트 문제인지 서버문제인지 검색하고 고민해보고 서버 개발자(나)한테 물어봐!
4. api문서는 http://localhost:5001/api-docs에 있엉 ㅎ_ㅎ

그리고 로그인이 굉장히 어려운 부분 중 하나야! 개념 자체를 이해하는데 어려울 수 있어서 시행착오가 있을거야! 그러니까 안되도 너무 걱정하거나 그러지말고, 이번에 한번 해놓고 나서 다음에 하면 또 쉬워지고 그런게 있으니까 화이팅 해서 해보쟈 ㅎ_ㅎ

늘 말하지만 궁금한거나 모르는 거 있음 늘 언제든 편하게 연락해!


### 오류 해결
![image](https://user-images.githubusercontent.com/69836010/173842422-3c6d4e9e-69c4-4856-ba6c-b02920d7c717.png)


위와같은 에러가 발생하면 server에서  <br/>
yarn cache clean -all 을 먼저 실행해주고 <br/>
yarn install 해줍니다


![image](https://user-images.githubusercontent.com/69836010/173872048-1705ac83-a1e6-4336-832b-5fafb172f9cc.png)


위와같은 에러 발생하면 <br/>
server내부에 있는 .yarn 파일을 삭제하고 <br/> 
다시 yarn install 해준 이후 <br/> 
yarn start를 해줍니다
