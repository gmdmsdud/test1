import { useState } from "react";
import { Modal } from "antd";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기!!</button>
      {/* 모달숨기는 방식 */}
      {/* <Modal
          title="모달 제목"
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          비밀번호 입력: <input type="password" />
        </Modal> */}

      {/* 모달삭제하는방식 */}
      {isOpen && (
        <Modal
          title="모달 제목"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          비밀번호 입력: <input type="password" />
        </Modal>
      )}
    </>
  );
}
