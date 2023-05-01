import React, {useState, useEffect} from "react";


export default function PostComponent(){

    const [formData, setFormData] = useState({
        username: "Franklin",
        password: "12345678",
      });


    return(
     <div>
        <h1>Hello now</h1>
        {formData.username}
     </div>
    )
}