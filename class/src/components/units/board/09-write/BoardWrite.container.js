import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import {  useRouter } from "next/router"


export default function BoardWrite(props){
    const [mycolor,setMycolor] = useState(false)
    const [writer,setWriter] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")
    const router = useRouter()

    const [나의함수] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async() => { //등록하기
       const result = await 나의함수({
        variables: {
            writer,
            title,
            contents, 
        }
       })
       console.log(result)
       alert(result.data.createBoard.message)
       router.push(`/09-01-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async() => { //수정하기
        const result = await updateBoard({
         variables: {
             number:Number(router.query.number) ,
             writer,
             title,
             contents,
         }
        })
        console.log(result)
        alert(result.data.updateBoard.message)
        router.push(`/09-01-boards/${result.data.updateBoard.number}`)
     }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value &&title && contents){
            setMycolor(true)
        }
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(writer &&event.target.value && contents){
            setMycolor(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer &&title && event.target.value){
            setMycolor(true)
        }
    }

    return(
        <BoardWriteUI 
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        mycolor={mycolor}
        isEdit={props.isEdit}
        data={props.data}
        />
    )
}