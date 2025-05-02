import axios from "axios";
import { BASEURL, login } from "./apiconstant";

// logibn 
export const Loginhandler = async (email:any, password:any)=>{
    let headersList = {
        "Accept": "*/*",
        
        "Content-Type": "application/json" 
       }
       
       let bodyContent = JSON.stringify({
         "email":email,
         "password":password
       });
       
       let reqOptions = {
         url: `${BASEURL}/${login}`,
         method: "POST",
         headers: headersList,
         data: bodyContent,
       }
       
       let response = await axios.request(reqOptions);
      return response

}

