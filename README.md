# React Tetris 

HTML canvas를 이용한 🕹테트리스 게임    
<a href="https://kyunghajeong-tetris.herokuapp.com/" target="_blank">테트리스 게임 바로가기[kyunghajeong-tetris.herokuapp.com]</a>

![ReactTetris](https://user-images.githubusercontent.com/44011462/112267654-23a84200-8cb9-11eb-84bf-0fd6a9fa326c.gif)


```bash
> git clone https://github.com/justinjeong5/react-tetris # 또는 다운로드
> npm i
> npm start
# App starts at localhost:3000
```

### 🕹️ Tetris

```javascript
new Tetris({ context, player, board, dispatch })
```

### 📚 기술스택
- React
  - Create-React-App
- Styled Components
- 데이터 상태 관리
  - Redux
  - Immer
- 타입 관리
  - Prop Types

### ✨ 동작 개요
- 일반적인 테트리스의 게임 개요를 따름
- 게임보드는 기본으로 `가로 10칸`, `세로 20칸`
- 블럭은 게임보드의 최상단에서 생성되고 `1초의 간격`을 두고 아래 방향으로 1칸씩 이동
  - `키보드의 방향버튼`을 이용하여 왼쪽, 오른쪽, 아래쪽으로 동작
  - `스페이스바`를 이용하여 가장 아래로 블럭을 이동
  - `마우스의 커서`를 이용하여 왼쪽, 오른쪽 방향을 조작
- 게임블럭 오른쪽에 `다음 블럭`이 순서대로 5개 노출
- 다른 블럭이나, 게임블럭의 밑바닥을 접촉한 경우 블록이 멈추고 새로운 블럭이 최상단에서 시작
- 게임보드의 가로줄이 가득차면 해당 가로줄이 사라지며 `점수`를 획득
  - 점수는 1줄당 1만큼의 가중치가 부여
  - 1줄 = 10점, 2줄 = 30점, 3줄 = 60점, 4줄 = 100점
  - localStorage를 이용하여, 최근의 최고 점수를 저장하여 활용
- 더 이상 게임을 진행할 수 없다면 게임 종료 메세지와 함께 실행 중지
  - `재시작` 버튼을 이용하여 게임을 활성화

### 🧰 기능목록
![react-tetris-features](https://user-images.githubusercontent.com/44011462/112276552-3a07cb00-8cc4-11eb-9b49-e9d4f2379721.png)

- `render`: 사용자의 블럭, 위치정보와 전체 블럭을 그림
  - 16ms 간격으로 `render`가 재귀적으로 재호출
  - `render`가 호출될 때마다 `draw`가 호출되어 화면에 그려짐
  - 1000ms이상 경과시 `movePlayer` 호출

- `movePlayer`: 블럭을 이동
  - 이동후 `collision` 호출
  - 충돌하였다면 `playMoveDone` 호출
    - `playMoveDone`: 블럭의 진행이 멈추었을때 호출되어 아래와 같은 일을 실행
      - `merge`: 블록정보에 사용자의 블럭을 추가하여 저장
      - `popNextBlock`: 다음에 사용할 블럭을 생성
      - 사용자의 블럭정보와 위치정보를 초기화
        - 바로 다음 블럭이 생성과 동시에 충돌하였다면 `게임 종료`  

- `resume`: 게임이 종료된 후 다시 시작
  - `init` 호출
  - `pushNextBlock`을 이용하여 사용자를 초기화
  - `initBlock`으로 게임 초기화

- `draw`: 사용자의 블럭, 게임에 놓여진 블록을 그림
  - 이전 단계의 그림을 지우기 위해 `init` 호출
  - `drawBlock`을 호출하여 이미 놓여진 블록정보, 사용자의 블록정보를 그림

### 🔩 Components

![react-tetris-components](https://user-images.githubusercontent.com/44011462/112433131-296b5980-8d85-11eb-833f-4e70d547a3ba.png)

- LandingPage Component
  - Board Component
  - Score Component
  - SidePanel Component
    - Table Component
    - Tr Component
    - Td Component


### 📚 어려웠던 점과 극복 방법
프로젝트를 진행하면서 어려웠던 점과 해결과정을 적었습니다.

##### 🎦 화면 렌더링 
게임의 동작에 필요한 블럭과 게임보드를 표현하는 방법을 결정하는 것이 어려웠습니다. 단순하게 HTML의 Table, Tr, Td를 이용하는 방법과 HTML Canvas를 이용하는 방법 중에 고민하였습니다. 표(HTML table)을 이용하여 만든다면 이미지 효과를 표현하기 어렵다고 생각했습니다. 이에 비해 Canvas는 javascript가 그래픽을 다루는데 적절한 도구라고 생각했습니다. 

##### 🖱️ 마우스로 조작하기
마우스를 이용하여 블럭을 왼쪽, 오른쪽으로 움직이기 위해서 Canvas에 'mousemove'를 다루는 EventListener를 적용하여 사용했습니다. 사용자의 아주 작은 마우스 조작으로도 많은 mousemove 이벤트가 발생할 수 있습니다. 따라서 mousemove 이벤트가 불필요하게 많이 발생하고 성능상에 문제가 발생했습니다. OS의 mutex의 개념을 차용하여 mousemove 이벤트의 발생 빈도를 조절했습니다. 블럭의 이동은 Canvas내의 사용자의 마우스 위치와 Canvas의 크기를 이용하였습니다. 

##### 🔓 확장성
게임플레이에 필요한 요소(게임보드, 블럭)을 가능한 유동적으로 만들었습니다. 게임이 생성될 때 게임보드의 가로, 세로의 크기에 따라 화면을 적절하게 그리도록 구성했습니다. 사용자가 게임보드의 크기나 블럭의 종류를 정하도록 구성할 수 있습니다.

