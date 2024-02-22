import '@/css/homepage.css'

export default function Home() {
    return <div className="homePage">
        <h1>Campfire</h1>
        <h2>An open source place</h2>
        <a
            href="/app"
            className="clickMeButton"
            style={{
                width: "200px",
                height: "70px",
                fontSize: "20px"
            }}
        >
            Get Started now!
        </a>
    </div>
}
