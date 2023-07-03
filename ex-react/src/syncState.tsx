import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");
  return (
    <>
      <Input
        label="First input"
        onChange={(e) => setText(e.target.value)}
        text={text}
      />
      <Input
        label="Second input"
        onChange={(e) => setText(e.target.value)}
        text={text}
      />
    </>
  );
}

interface Props {
  label: string;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, text, onChange }: Props) {
  return (
    <label>
      {label} <input value={text} onChange={onChange} />
    </label>
  );
}
