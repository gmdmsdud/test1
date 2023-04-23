import { useRouter } from "next/router"

export default function StaticRoutingPage(){
    const router = useRouter()
    const onClickMove1 = () => {
        router.push("/05-08-dynamic-routed-board-query/274856")
    }
    const onClickMove2 = () => {
        router.push("/05-08-dynamic-routed-board-query/2")
    }
    const onClickMove3 = () => {
        router.push("/05-08-dynamic-routed-board-query/3")
    }
    const onClickMove100 = () => {
        router.push("/05-08-dynamic-routed-board-query/100")
    }
    return(
        <>
            <button onClick={onClickMove1}>274856페이지이동하기</button><br/>
            <button onClick={onClickMove2}>2페이지이동하기</button><br/>
            <button onClick={onClickMove3}>3페이지이동하기</button><br/>
            <button onClick={onClickMove100}>100페이지이동하기</button><br/>
        </>
    )
}