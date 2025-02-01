import React from "react";
import {useParams} from 'react-router-dom'


function User(){
    const {userid} = useParams();
    return(
        <div className="bg-orange-500 rounded-l p-2 text-teal-50 text-xl">
            User:{userid}
        </div>
    )
}

export default User

