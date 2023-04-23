
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";


export default function BoardWriteUI(props:IBoardWriteUIProps){

    return(
         <>
            작성자 : <S.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/><br />
            제   목 : <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/><br />
            내   용 : <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/><br />
            <S.BlueButton 
                zzz={props.mycolor}
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit ? "수정하기":"등록하기"}
            </S.BlueButton>
        </>

    )
}