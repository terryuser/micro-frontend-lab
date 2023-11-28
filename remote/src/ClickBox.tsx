import { FC, useState } from "react";

const ClickBox = () => {
  const [count, setCount] = useState<number>(0);

  const onClickEvent = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Clicks : {count}</div>
      <button onClick={onClickEvent}>Click</button>
    </>
  );
};

export { ClickBox };
