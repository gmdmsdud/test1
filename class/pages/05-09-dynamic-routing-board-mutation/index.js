import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String , $contents:String ){
        createBoard(writer: $writer, title: $title, contents: $contents ){
        _id
        number
        message
        }
    }
`

export default function GraphqlMutationPage() { 

    const router= useRouter()

    const [writer,setWriter] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")

    const [나의함수] = useMutation(CREATE_BOARD)

    const onClickSubmit = async() => {
        try {
            const result = await 나의함수({
                variables: {
                    writer:writer,
                    title:title,
                    contents:contents, 
                }
            })
            console.log(result)
            alert(result.data.createBoard.message)
            console.log(result.data.createBoard.number)
            router.push(`/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}` )
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter}/><br />
            제목:<input type="text" onChange={onChangeTitle}/><br />
            내용 :<input type="text" onChange={onChangeContents}/><br />
            <button onClick={onClickSubmit}>GRAPHQL-API요청하기(동기)</button>
        </>
    )
}