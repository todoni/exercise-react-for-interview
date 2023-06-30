import React, { Component, useState } from "react";

class ClassProfilePage extends React.Component<{ name: string }> {
  showMessage = () => {
    alert("Followed " + this.props.name);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };
  render() {
    return (
      <div>
        <label>Class Component</label>
        <button onClick={this.handleClick}>Follow</button>
      </div>
    );
  }
}

const FunctionProfilePage = ({ name }: { name: string }) => {
  const showMessage = () => {
    alert("Followed " + name);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };
  return (
    <div>
      <label>Funtion Component</label>
      <button onClick={handleClick}>Follow</button>
    </div>
  );
};

/******************************************************************************************************
메세지를 불러오는 함수를 살펴보자. 이 함수는 this.props.user로 부터 값을 불러온다.
props는 리액트에서 불변의 값이지만 this는 변경 가능하며, 조작도 가능하다.
따라서 요청이 진행되고 있는 상황에서 클래스 컴포넌트가 다시 렌더링 된다면 this.props 또한 바뀌게 된다.
showMessage 함수가 새로운 props의 user를 읽는 것이다.
물론 클래스형 컴포넌트에서도 이 오류를 막을 수 있지만,
그렇게 되면 불필요하게 코드가 길어지기 때문에 함수형 컴포넌트를 사용하게 되는 것이다.
******************************************************************************************************/

const FunctionVsClass = () => {
  const [name, setName] = useState("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h1>Function Component와 Class Component</h1>
      <h2>Choose profile to view : </h2>
      <select onChange={handleSelectChange}>
        <option key="dan" value="dan">
          Dan
        </option>
        <option key="jane" value="jane">
          Jane
        </option>
        <option key="sophie" value="sophie">
          Sophie
        </option>
      </select>
      <h1>Welcome to {name}'s Profile!</h1>
      <FunctionProfilePage name={name} />
      <ClassProfilePage name={name} />
    </div>
  );
};

export default FunctionVsClass;
