import { useParams } from "react-router-dom";
export const User =(props) =>{
     const { userName } =useParams()
    const hr=props.date.getHours();
   if(hr<12){
    return <h1>Good Morning! {userName}</h1>
   }
   else if(hr<15 && hr>15){
    return <h1>Good afternoon! {userName}</h1>
   }
   else{
    return <h1>Good evening! {userName}</h1>
   }
   
    
}