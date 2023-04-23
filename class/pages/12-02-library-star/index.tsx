import styled from "@emotion/styled";
import { Rate } from "antd";

const MyStar = styled(Rate)`
  color: red;
  font-size: 50px;
`;
export default function LibraryIconPage() {
  return (
    <>
      <MyStar />
    </>
  );
}
