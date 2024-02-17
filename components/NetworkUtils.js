export function downloadUserPosts(setErr, setResult) {
    fetch("/api/userpost/get")
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


export function uploadUserPost(username, bodytext) {
    fetch("/api/userpost/post",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            text: bodytext,
            timeMillis: Date.now().toString()
        })
    })
}
