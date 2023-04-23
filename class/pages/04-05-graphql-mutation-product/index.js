import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT  = gql`
    mutation createProduct($seller:String,$createProductInput: CreateProductInput! ){
        createProduct(seller: $seller,createProductInput:$createProductInput){
        _id
        number
        message
        }
    }
`

export default function GraphqlMutationPage() { 
    

    const [나의함수] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async() => {
       const result = await 나의함수({
        variables: {
            seller:"훈이",
            createProductInput: {
                name: "mouse",
                detail: "good",
                price: 3000
            }
        }
       })
       console.log(result)
       alert(result.data.createProduct.message)
    }
    
    return (
            <button onClick={onClickSubmit}>GRAPPHQL-API요청하기(동기)</button>
    
    )
}