# Node.js

리액트는 노드.js를 기반으로 작동 / 런타임=실행

### npm

노드.js와 같이 설치되는 패키지.. 노드js를 실행할 때 필요한 파일들을 모아둔 모음

---

## 실행

- 초기 설치

```bash
node init
```

- 자바스크립트 파일 실행

```bash
node 파일이름
```

- 빠른 실행 설정법
  - "scripts”에 `"start": "node src/index.js”` 를 작성하면 터미널이 어떤 경로에 있든 설정한 파일`index.js`이 실행됨
  - 터미널 명령어 : npm run start

## 라이브러리

프로그램을 개발할 떄 필요한 기능을 미리 만들어 모듈화 해놓은 것

- 예시
  ''' bash
  npm i randomcolor
  '''

- package.json

  - 프로젝트에 사용된 라이브러리 정보가 기록되어 있음

  - `npm i` 나 `npm init` 명령어로 package.json 파일에 기록된 라이브러리를 설치할 수 있음 -> 공유할 때 용이

- node_modules 폴더

라이브러리를 설치하면 node_modules 폴더에 라이브러리가 설치됨

- package-lock.json

  - 라이브러리의 버전 정보가 기록되어 있음

  - package.json 파일에는 버전이 ^로 시작하는데, package-lock.json 파일에는 실제 버전이 기록됨
