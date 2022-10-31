## 학습 메모

**babel 은 그 자체로는 아무것도 하지 않는다.**
실제로 동작하는 것은 babel plugin 이다. (예 - `@babel/plugin-transform-react-jsx`)

하지만 사용할 plugin 을 매번 추가하는 일은 번거롭다.
=> babel 의 preset<sup id="rfn_1">[1](#fn_1)</sup> 옵션으로 이를 해결할 수 있다.

## 주석

<a id="fn_1" href="#rfn_1">[1]</a> preset(pre + set) 은 plugin 들의 모음이다. (예로, `@babel/preset-react` preset 에는 `@babel/plugin-transform-react-jsx` 플러그인이 포함되어 있다.)

\+ `@babel/preset-env` : es6 이상의 문법을 es5 로 변환시켜주기 위한 플러그인 번들

## References

* [babel-preset-env는 무엇이고 왜 필요한가?](https://velog.io/@pop8682/%EB%B2%88%EC%97%AD-%EC%99%9C-babel-preset%EC%9D%B4-%ED%95%84%EC%9A%94%ED%95%98%EA%B3%A0-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80-yhk03drm7q)