# React Tetris 

HTML canvas๋ฅผ ์ด์ฉํ ๐นํํธ๋ฆฌ์ค ๊ฒ์    
<a href="https://kyunghajeong-tetris.herokuapp.com/" target="_blank">ํํธ๋ฆฌ์ค ๊ฒ์ ๋ฐ๋ก๊ฐ๊ธฐ[kyunghajeong-tetris.herokuapp.com]</a>

![ReactTetris](https://user-images.githubusercontent.com/44011462/112267654-23a84200-8cb9-11eb-84bf-0fd6a9fa326c.gif)


```bash
> git clone https://github.com/justinjeong5/react-tetris # ๋๋ ๋ค์ด๋ก๋
> npm i
> npm start
# App starts at localhost:3000
```

### ๐น๏ธ Tetris

```javascript
new Tetris({ context, player, board, dispatch })
```

### ๐ ๊ธฐ์ ์คํ
- React
  - Create-React-App
- Styled Components
- ๋ฐ์ดํฐ ์ํ ๊ด๋ฆฌ
  - Redux
  - Immer
- ํ์ ๊ด๋ฆฌ
  - Prop Types

### โจ ๋์ ๊ฐ์
- ์ผ๋ฐ์ ์ธ ํํธ๋ฆฌ์ค์ ๊ฒ์ ๊ฐ์๋ฅผ ๋ฐ๋ฆ
- ๊ฒ์๋ณด๋๋ ๊ธฐ๋ณธ์ผ๋ก `๊ฐ๋ก 10์นธ`, `์ธ๋ก 20์นธ`
- ๋ธ๋ญ์ ๊ฒ์๋ณด๋์ ์ต์๋จ์์ ์์ฑ๋๊ณ  `1์ด์ ๊ฐ๊ฒฉ`์ ๋๊ณ  ์๋ ๋ฐฉํฅ์ผ๋ก 1์นธ์ฉ ์ด๋
  - `ํค๋ณด๋์ ๋ฐฉํฅ๋ฒํผ`์ ์ด์ฉํ์ฌ ์ผ์ชฝ, ์ค๋ฅธ์ชฝ, ์๋์ชฝ์ผ๋ก ๋์
  - `์คํ์ด์ค๋ฐ`๋ฅผ ์ด์ฉํ์ฌ ๊ฐ์ฅ ์๋๋ก ๋ธ๋ญ์ ์ด๋
  - `๋ง์ฐ์ค์ ์ปค์`๋ฅผ ์ด์ฉํ์ฌ ์ผ์ชฝ, ์ค๋ฅธ์ชฝ ๋ฐฉํฅ์ ์กฐ์
- ๊ฒ์๋ธ๋ญ ์ค๋ฅธ์ชฝ์ `๋ค์ ๋ธ๋ญ`์ด ์์๋๋ก 5๊ฐ ๋ธ์ถ
- ๋ค๋ฅธ ๋ธ๋ญ์ด๋, ๊ฒ์๋ธ๋ญ์ ๋ฐ๋ฐ๋ฅ์ ์ ์ดํ ๊ฒฝ์ฐ ๋ธ๋ก์ด ๋ฉ์ถ๊ณ  ์๋ก์ด ๋ธ๋ญ์ด ์ต์๋จ์์ ์์
- ๊ฒ์๋ณด๋์ ๊ฐ๋ก์ค์ด ๊ฐ๋์ฐจ๋ฉด ํด๋น ๊ฐ๋ก์ค์ด ์ฌ๋ผ์ง๋ฉฐ `์ ์`๋ฅผ ํ๋
  - ์ ์๋ 1์ค๋น 1๋งํผ์ ๊ฐ์ค์น๊ฐ ๋ถ์ฌ
  - 1์ค = 10์ , 2์ค = 30์ , 3์ค = 60์ , 4์ค = 100์ 
  - localStorage๋ฅผ ์ด์ฉํ์ฌ, ์ต๊ทผ์ ์ต๊ณ  ์ ์๋ฅผ ์ ์ฅํ์ฌ ํ์ฉ
- ๋ ์ด์ ๊ฒ์์ ์งํํ  ์ ์๋ค๋ฉด ๊ฒ์ ์ข๋ฃ ๋ฉ์ธ์ง์ ํจ๊ป ์คํ ์ค์ง
  - `์ฌ์์` ๋ฒํผ์ ์ด์ฉํ์ฌ ๊ฒ์์ ํ์ฑํ

### ๐งฐ ๊ธฐ๋ฅ๋ชฉ๋ก
![react-tetris-features](https://user-images.githubusercontent.com/44011462/112276552-3a07cb00-8cc4-11eb-9b49-e9d4f2379721.png)

- `render`: ์ฌ์ฉ์์ ๋ธ๋ญ, ์์น์ ๋ณด์ ์ ์ฒด ๋ธ๋ญ์ ๊ทธ๋ฆผ
  - 16ms ๊ฐ๊ฒฉ์ผ๋ก `render`๊ฐ ์ฌ๊ท์ ์ผ๋ก ์ฌํธ์ถ
  - `render`๊ฐ ํธ์ถ๋  ๋๋ง๋ค `draw`๊ฐ ํธ์ถ๋์ด ํ๋ฉด์ ๊ทธ๋ ค์ง
  - 1000ms์ด์ ๊ฒฝ๊ณผ์ `movePlayer` ํธ์ถ

- `movePlayer`: ๋ธ๋ญ์ ์ด๋
  - ์ด๋ํ `collision` ํธ์ถ
  - ์ถฉ๋ํ์๋ค๋ฉด `playMoveDone` ํธ์ถ
    - `playMoveDone`: ๋ธ๋ญ์ ์งํ์ด ๋ฉ์ถ์์๋ ํธ์ถ๋์ด ์๋์ ๊ฐ์ ์ผ์ ์คํ
      - `merge`: ๋ธ๋ก์ ๋ณด์ ์ฌ์ฉ์์ ๋ธ๋ญ์ ์ถ๊ฐํ์ฌ ์ ์ฅ
      - `popNextBlock`: ๋ค์์ ์ฌ์ฉํ  ๋ธ๋ญ์ ์์ฑ
      - ์ฌ์ฉ์์ ๋ธ๋ญ์ ๋ณด์ ์์น์ ๋ณด๋ฅผ ์ด๊ธฐํ
        - ๋ฐ๋ก ๋ค์ ๋ธ๋ญ์ด ์์ฑ๊ณผ ๋์์ ์ถฉ๋ํ์๋ค๋ฉด `๊ฒ์ ์ข๋ฃ`  

- `resume`: ๊ฒ์์ด ์ข๋ฃ๋ ํ ๋ค์ ์์
  - `init` ํธ์ถ
  - `pushNextBlock`์ ์ด์ฉํ์ฌ ์ฌ์ฉ์๋ฅผ ์ด๊ธฐํ
  - `initBlock`์ผ๋ก ๊ฒ์ ์ด๊ธฐํ

- `draw`: ์ฌ์ฉ์์ ๋ธ๋ญ, ๊ฒ์์ ๋์ฌ์ง ๋ธ๋ก์ ๊ทธ๋ฆผ
  - ์ด์  ๋จ๊ณ์ ๊ทธ๋ฆผ์ ์ง์ฐ๊ธฐ ์ํด `init` ํธ์ถ
  - `drawBlock`์ ํธ์ถํ์ฌ ์ด๋ฏธ ๋์ฌ์ง ๋ธ๋ก์ ๋ณด, ์ฌ์ฉ์์ ๋ธ๋ก์ ๋ณด๋ฅผ ๊ทธ๋ฆผ

### ๐ฉ Components

![react-tetris-components](https://user-images.githubusercontent.com/44011462/112433131-296b5980-8d85-11eb-833f-4e70d547a3ba.png)

- LandingPage Component
  - Board Component
  - Score Component
  - SidePanel Component
    - Table Component
    - Tr Component
    - Td Component


### ๐ ์ด๋ ค์ ๋ ์ ๊ณผ ๊ทน๋ณต ๋ฐฉ๋ฒ
ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ์ด๋ ค์ ๋ ์ ๊ณผ ํด๊ฒฐ๊ณผ์ ์ ์ ์์ต๋๋ค.

##### ๐ฆ ํ๋ฉด ๋ ๋๋ง 
๊ฒ์์ ๋์์ ํ์ํ ๋ธ๋ญ๊ณผ ๊ฒ์๋ณด๋๋ฅผ ํํํ๋ ๋ฐฉ๋ฒ์ ๊ฒฐ์ ํ๋ ๊ฒ์ด ์ด๋ ค์ ์ต๋๋ค. ๋จ์ํ๊ฒ HTML์ Table, Tr, Td๋ฅผ ์ด์ฉํ๋ ๋ฐฉ๋ฒ๊ณผ HTML Canvas๋ฅผ ์ด์ฉํ๋ ๋ฐฉ๋ฒ ์ค์ ๊ณ ๋ฏผํ์์ต๋๋ค. ํ(HTML table)์ ์ด์ฉํ์ฌ ๋ง๋ ๋ค๋ฉด ์ด๋ฏธ์ง ํจ๊ณผ๋ฅผ ํํํ๊ธฐ ์ด๋ ต๋ค๊ณ  ์๊ฐํ์ต๋๋ค. ์ด์ ๋นํด Canvas๋ javascript๊ฐ ๊ทธ๋ํฝ์ ๋ค๋ฃจ๋๋ฐ ์ ์ ํ ๋๊ตฌ๋ผ๊ณ  ์๊ฐํ์ต๋๋ค. 

##### ๐ฑ๏ธ ๋ง์ฐ์ค๋ก ์กฐ์ํ๊ธฐ
๋ง์ฐ์ค๋ฅผ ์ด์ฉํ์ฌ ๋ธ๋ญ์ ์ผ์ชฝ, ์ค๋ฅธ์ชฝ์ผ๋ก ์์ง์ด๊ธฐ ์ํด์ Canvas์ 'mousemove'๋ฅผ ๋ค๋ฃจ๋ EventListener๋ฅผ ์ ์ฉํ์ฌ ์ฌ์ฉํ์ต๋๋ค. ์ฌ์ฉ์์ ์์ฃผ ์์ ๋ง์ฐ์ค ์กฐ์์ผ๋ก๋ ๋ง์ mousemove ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ  ์ ์์ต๋๋ค. ๋ฐ๋ผ์ mousemove ์ด๋ฒคํธ๊ฐ ๋ถํ์ํ๊ฒ ๋ง์ด ๋ฐ์ํ๊ณ  ์ฑ๋ฅ์์ ๋ฌธ์ ๊ฐ ๋ฐ์ํ์ต๋๋ค. throttling์ ์ฌ์ฉํ์ฌ mousemove ์ด๋ฒคํธ์ ๋ฐ์ ๋น๋๋ฅผ ์กฐ์ ํ์ต๋๋ค. ๋ธ๋ญ์ ์ด๋์ Canvas๋ด์ ์ฌ์ฉ์์ ๋ง์ฐ์ค ์์น์ Canvas์ ํฌ๊ธฐ๋ฅผ ์ด์ฉํ์์ต๋๋ค. 

##### ๐ ํ์ฅ์ฑ
๊ฒ์ํ๋ ์ด์ ํ์ํ ์์(๊ฒ์๋ณด๋, ๋ธ๋ญ)์ ๊ฐ๋ฅํ ์ ๋์ ์ผ๋ก ๋ง๋ค์์ต๋๋ค. ๊ฒ์์ด ์์ฑ๋  ๋ ๊ฒ์๋ณด๋์ ๊ฐ๋ก, ์ธ๋ก์ ํฌ๊ธฐ์ ๋ฐ๋ผ ํ๋ฉด์ ์ ์ ํ๊ฒ ๊ทธ๋ฆฌ๋๋ก ๊ตฌ์ฑํ์ต๋๋ค. ์ฌ์ฉ์๊ฐ ๊ฒ์๋ณด๋์ ํฌ๊ธฐ๋ ๋ธ๋ญ์ ์ข๋ฅ๋ฅผ ์ ํ๋๋ก ๊ตฌ์ฑํ  ์ ์์ต๋๋ค.

