export function downloadPosts(setErr, setResult) {
    fetch("/api/content/get")
    .then((res) => {
        if (!res.ok) {
            setErr(true)
        }
        return res.json()
    })
    .then((data) => {
        console.log(data)
        setResult(data)
    })
}


export function uploadPost(username, bodytext) {
    fetch("/api/content/post",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            text: bodytext,
            timeMillis: Date.now()
        })
    })
}
