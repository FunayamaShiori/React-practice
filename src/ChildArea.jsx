import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

/**
 * memoは、propsが更新されない限り再レンダリングしない
 */
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("レンダリングされた！！");

  const data = [...Array(2000)];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
