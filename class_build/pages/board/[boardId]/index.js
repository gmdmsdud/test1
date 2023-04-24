import { useRouter } from "next/router";

export default function BoardsPage() {
  const router = useRouter();
  return (
    <div>
      안녕하세요 게시판입니다. 동적페이지입니다. 게시글아이디:{" "}
      {router.query.boardId}
    </div>
  );
}

export const getServerSideProps = () => {
  //만약 서버사이드렌더링을한다면?? 아웃폴더로 생성불가=> next.config.js 에서 exportPathMap으로 현제 페이지 제외시키기
};
