# React Tetris 

HTML canvas를 이용한 테트리스게임 🕹️

![ReactTetris](https://user-images.githubusercontent.com/44011462/112267654-23a84200-8cb9-11eb-84bf-0fd6a9fa326c.gif)

```bash
> git clone https://github.com/justinjeong5/react-tetris # 또는 다운로드
> npm i
> npm start
# App starts at localhost:3000
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

### 🕹️ Tetris

```javascript
new Tetris({ context, player: player, board, dispatch })
```

### ✨ 동작 개요
- 일반적인 테트리스의 게임 개요를 따름
- 게임보드는 기본으로 가로10칸, 세로 20칸
- 블럭은 게임보드의 최상단에서 생성되고 1초의 간격을 두고 아래 방향으로 1칸씩 이동
  - 키보드의 방향버튼을 이용하여 왼쪽, 오른쪽, 아래쪽으로 동작
  - 마우스의 커서를 이용하여 왼쪽, 오른쪽 방향을 조작
- 게임블럭 오른쪽에 다음에 나올 블럭이 순서대로 5개 노출
- 다른 블럭이나, 게임블럭의 밑바닥을 접촉한 경우 블록이 멈추고 새로운 블럭이 최상단에서 시작
- 게임보드의 가로줄이 가득차면 해당 가로줄이 사라지며 점수를 획득
  - 점수는 1줄당 가중치가 부여
  - 1줄 = 10점, 2줄 = 30점, 3줄 = 60점, 4줄 = 100점
  - localStorage를 이용하여, 최근의 최고 점수를 저장하여 활용
- 더 이상 게임을 진행할 수 없다면 게임 종료 메세지와 함께 실행 중지
  - 재시작 버튼을 이용하여 게임을 활성화

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
