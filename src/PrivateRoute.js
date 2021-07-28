import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { isLoggedIn } from './service/auth';

const PrivateRoute = ({component: Component, ...rest}) => {
    const parameter = useParams();
    const history = useHistory();
    if(!isLoggedIn() && parameter !== '/') {
        history.push("/");
        return null;
    } else {
        return <Component {...rest}/>
    }
}
    
export default PrivateRoute
