import Router from "next/router";
import { useEffect } from "react";




const Redirect = ({ to })=> {
    const router = useRouter();

    useEffect(() => {
        Router.push(to)
        console.log(to)
    }, [to])
    
    return (
        <h1>loader</h1>
    )
}

export default Redirect