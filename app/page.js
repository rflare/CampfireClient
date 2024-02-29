import '@/styles/homepage.css'

export default function Home() {
    return <div className="homePage">
        <h1>
            <img
                src="/logo.svg"
                width="100"
                height="99"

                style={{
                    margin: "0"
                }}
            />
            Campfire
        </h1>
        <h2>An open source place</h2>
        <a
            href="/app"
            className="clickMeButton"
            style={{
                width: "180px",
                height: "50px",
                fontSize: "20px"
            }}
        >
            Open the app
        </a>
        <div style={{
            backgroundColor: "#FF1041",
            padding: "90px max(100px, 15%)",
            margin: "0"
        }}>
            <p style={{
                color: "white",
                margin: "0"
            }}>
                I made an open source app with no rules, and I don't know what to do with it.
                Why am I writing this?
                Also code is on github
                You should contribute to the project. It needs work.
                Also somebody should manage the budgets for this project.
                Just kidding! It's a goofy side project I'm doing for fun.
                But still it would be cool.
                Did you actually read all this yapping bruh💀
            </p>
        </div>
    </div>
}
