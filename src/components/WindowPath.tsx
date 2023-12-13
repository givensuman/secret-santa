import { useEffect, useState } from "react"

const WindowPath = () => {
    const [ param, setParam ] = useState<string | null>(null)
    
    useEffect(() => {
        setParam(window.location.pathname)
    }, [window])
    
    return (
        <>{param}</>
    )
}

export default WindowPath