# 개인정보 취급방침

### 이 확장 앱은 어떤 정보에 접근하나요?

사용자의 학번과 비밀번호를 브라우저 측에 저장합니다.

로그인 유지 기능을 사용하지 않으면 접근하지 않습니다.

<table>
  <thead>
    <th>키</th>
    <th>서브 키</th>
    <th>타입</th>
  </thead>
  <tr>
    <td rowspan="2"><code>account</code></th>
    <td><code>student_no</code></td>
    <td rowspan="2"><code>string</code></td>
  </tr>
    <td><code>student_pw</code></td>
  <tr>
    <td><code>keepLogin</code></td>
    <td></td>
    <td><code>boolean</code></td>
  </tr>
</table>

### 접근한 정보를 어떻게 사용하나요?

아래의 방법으로 로그인 요청을 보내는데 사용됩니다.

| 메서드 | URL                                                  | 파라미터                   |
| ------ | ---------------------------------------------------- | -------------------------- |
| POST   | `https://dreamy.jejunu.ac.kr/frame/sysUser.do?next=` | `student_no`, `student_pw` |

> [`src/app/features/login.ts#L13-L27`](https://github.com/reflation/extension/blob/18ef5a/src/app/features/login.ts#L13-L27)

브라우저의 쿠키 데이터를 메인 라우트로 보내 세션 만료를 확인합니다.

| 메서드 | URL                                         | 요청 헤더                   |
| ------ | ------------------------------------------- | --------------------------- |
| GET    | `https://dreamy.jejunu.ac.kr/frame/main.do` | `Cookie: document.cookie }` |

> [`src/utils/reconstruct.ts#L4-L13`](https://github.com/reflation/extension/blob/07a254/src/utils/reconstruct.ts#L4-L13)
