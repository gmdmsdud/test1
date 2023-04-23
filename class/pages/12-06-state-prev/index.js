import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);
  function onClickCountUp() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); //1만커짐

    // setCount((prev) => prev+1);
    // setCount((prev) => prev+1);
    // setCount((prev) => prev+1);
    // setCount((prev) => prev+1);
    //4씩커짐
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
    </>
  );
}
