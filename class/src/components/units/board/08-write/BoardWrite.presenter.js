import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props){

    return(
         <>
            작성자 : <S.RedInput type="text" onChange={props.onChangeWriter}/><br />
            제   목 : <input type="text" onChange={props.onChangeTitle}/><br />
            내   용 : <input type="text" onChange={props.onChangeContents}/><br />
            <S.BlueButton 
                zzz={props.mycolor}
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit ? "수정하기":"등록하기"}
            </S.BlueButton>
        </>

    )
}