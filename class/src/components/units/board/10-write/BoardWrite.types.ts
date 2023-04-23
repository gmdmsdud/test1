import { ChangeEvent } from "react"
import { Query } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps{
    isEdit : boolean
    data? : Pick<Query, "fetchBoard">
}
export interface IBoardWriteUIProps {
    onClickSubmit: () => void
    onClickUpdate: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    myColor: boolean
    isEdit: boolean
    data: Pick<Query, "fetchBoard">
}
export interface IBlueButtonProps {
    zzz: boolean
}
export interface IMyVariables {
    number: number
    writer?:string
    title?:string
    contents?:string
}