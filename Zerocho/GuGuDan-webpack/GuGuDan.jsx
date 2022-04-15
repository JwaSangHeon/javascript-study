const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Number(value) === first * second) {
      setResult("정답!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("오답!");
      setValue("");
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h1>GuGuDan</h1>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="number" value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

module.exports = GuGuDan;
