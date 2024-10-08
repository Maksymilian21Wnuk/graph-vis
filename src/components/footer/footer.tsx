



export default function Footer() {
    return (
        <footer className="footer bg-slate-400 rounded p-4 text-base-content">
            <nav className="grid grid-flow-col gap-4">
                <a href="https://github.com/Maksymilian21Wnuk/graph-vis" className="link link-hover">Source code</a>
                <a className="link link-hover">Bibliography</a>
                <a className="link link-hover">About</a>
            </nav>
            <aside>
                <p>{new Date().getFullYear()}</p>
            </aside>
        </footer>
    )
}