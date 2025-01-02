# Context

컴포넌트간 데이터를 전달하는 방법

- props

  - 부모 -> 자식으로만 데이터 전달 가능
  - 중간 컴포넌트에 전달하는 경우 불편 (props drilling)

- Context

  - 데이터 보관소(객체 형태로 보관)
  - 데이터가 필요한 컴포넌트에 바로 전달 -> prop drilling을 해결
  - 하나의 리액트 프로젝트에 Context N개 가능 (컴포넌트 별로 Context 분리 가능)

    ![img](image/1.png)

## Context 사용하기

## Context 분리하기
