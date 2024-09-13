import SplitScreen from "./split-screen";
const LeftSideComp=()=>{
    return <h2 style={{background:'lime'}}> I am left</h2>
}
 const RightSideComp=()=>{
    return <h2 style={{background:'red'}}> I am right</h2>
}
export default function Layout(){
    return  <SplitScreen Left={LeftSideComp} Right={RightSideComp}/>
}