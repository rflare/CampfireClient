import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState("Hi react")

    useEffect(() => {
        fetch("/api/get")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setData(res[0].text)
            })
    })
    return (
        <h1>{data}</h1>
    )
}

export default App
