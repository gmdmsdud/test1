import { Modal } from "antd";

const success = () => {
  Modal.success({ content: "some messages...some t성공했습니다..." });
};

const error = () => {
  Modal.error({ content: "비밀번호가틀렸습니다." });
};

export default function Appp() {
  return (
    <>
      <button onClick={success}>Success</button>
      <button onClick={error}>Error</button>
    </>
  );
}
