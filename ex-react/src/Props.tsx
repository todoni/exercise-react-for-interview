import React, { useState } from "react";

const Parent = () => {
  const [text, setText] = useState("hello");
  return (
    <>
      <h1>Props 전달하기</h1>
      <button
        onClick={() => {
          if (text === "hello") {
            setText("asdf");
          } else {
            setText("hello");
          }
        }}
      >
        {text}
      </button>
      <Child text={text} />
    </>
  );
};

const Child = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

const Child2 = (text: { text: string }) => {
  text.text = "no"; // 이렇게는 쓸 수 없다. Props는 읽기전용.
  return <div>{text.text}</div>;
};

export default Parent;
