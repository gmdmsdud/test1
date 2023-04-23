import { useState } from "react"

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    function onChangeEmail(event) {
        console.log(event.target)
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup() {
        console.log(email)
        console.log(password)

        if(email.includes("@") === false) {
            // alert("이메일이 올바르지 않습니다! @가 없음!")
            setEmailError("이메일이 올바르지 않습니다! @가 없음!")
        } else if(password.includes("@") === false) {

            setPasswordError('1이빠졌습니다.')
        
        }  else{

            alert("회원가입을 축하합니다!")
        }
            
            
        }
    
    return (
        <>
            이메일:<input type="text" onChange={onChangeEmail} />
            <div>{emailError}</div>
            비밀번호:<input type="password" onChange={onChangePassword}/>
            <div>{passwordError}</div>
            <button onClick={onClickSignup}>회원가입</button>
        </>

    )
}