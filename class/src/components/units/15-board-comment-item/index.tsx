import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

interface IProps {
  el: IBoard;
}
export default function BoardCommentItem(props: IProps) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <div>
      {isEdit === false && (
        <div>
          <span>{props.el.writer}</span>
          <span>{props.el.title}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      )}
      {isEdit === true && (
        <div>
          수정할내용: <input type="text" />
        </div>
      )}
    </div>
  );
}
