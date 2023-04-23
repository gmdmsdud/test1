import { gql, useMutation } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "dmsdud", title: "gggg", contents: "ssss" ){
        _id
        number
        message
        }
    }
`

export default function GraphqlMutationPage() {

    const [나의함수] = useMutation(CREATE_BOARD)

    const onClickSubmit = async() => {
       const result = await 나의함수()
       console.log(result)
       alert(result.data.createBoard.message)
    }
    return (
        <button onClick={onClickSubmit}>GRAPPHQL-API요청하기(동기)</button>
    )
}