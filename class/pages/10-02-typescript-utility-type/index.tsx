export default function TypescriptUtilityPage(){
interface IProfile {
    name:string
    age:number
    school:string 
    hobby?: string

}
//q. Pick 타입
type  aaa =Pick<IProfile, "name" | "age"> 

//2. Omit타입
type bbb =Omit<IProfile,"school"> // school 빼고

//3. Partial 타입
type ccc= Partial<IProfile> // 전부 ?

//4. Required 타입
type ddd= Required<IProfile> // 전부 필수

//5. Record 타입
type eee ="철수" | "영희" | "훈이" // Union타입 철수,영희,훈이 만들어감 맹구 못들어감
let child:eee 
child = "철수"

type fff =Record<eee, IProfile> // Record타입

// ==== (type vs interface 차이 : 선언병합===
 
}