export function downloadUserPosts(setIsErr, setUserPosts) {
    fetch("/api/userpost/get")
    .then((res) => {
        if (!res.ok) {
            setIsErr(true)
        }
        return res.json()
    })
    .then((data) => {
        setUserPosts(data)
    })
}


export function uploadUserPost(name, text) {
    fetch("/api/userpost/post",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            text: text,
            timeMillis: Date.now().toString()
        })
    })
}
