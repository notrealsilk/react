import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일 -> type="date"를 설정하면 데이트피커가 나옴
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={onChangeName}
          placeholder={"이름"} {/* placeholder -> 아무 값도 입력안했을 때 회색으로 나오는 문구*/}
        />
      </div>

      <div>
        <input
          value={birth}
          onChange={onChangeBirth}
          type="date"
        />
      </div>

      {/* 셀랙트 박스 */}
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option> {/* 빈 옵션 설정하기 */}
          <option value="kr">한국</option> {/* 선택창에서는 한국, 내부적인 value로는 kr이라고 저장 */}
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
