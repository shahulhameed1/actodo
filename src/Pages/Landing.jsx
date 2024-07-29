
import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
function Landing()
{
    const data = useLocation()
  
   return(  <div className="bg-black p-16">
    <div className="bg-white p-10 rounded-md">
{/*Header*/}
 <Header ></Header>
 {/*Card*/}
 <div className="flex justify-between gap-7 my-4 flex-wrap">
     <Card bgcolor={"#8778D3"}  title={"23"} subtitle={"Chennai"}></Card>
  <Card bgcolor={"#FD6663"} title={"23 July"} subtitle={"14:23:01"}></Card>
  <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}></Card>
 </div>
 
{/*TodoContainer*/}
<TodoContainer></TodoContainer>

    </div>

   
  </div>
  
)
}
export default Landing