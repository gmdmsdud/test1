import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 25%;
`;
export default function StaticRoutedPage() {
  const [myIndex, setMyINdex] = useState(5);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyINdex(Number(event.currentTarget.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
            <Row>
              <Column>{el.writer}</Column>
              <Column>{el.title}</Column>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </Row>
          )}
          {index === myIndex && (
            <div>
              수정할내용: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
