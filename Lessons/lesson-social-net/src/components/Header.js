import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex">
                    <Link className="btn" to="/"><i class="fa-solid fa-table-list"></i> Feed</Link>
                    <Link className="btn" to="/profile"><i class="fa-solid fa-user"></i> Profile</Link>
                </div>
                <Link className="btn" to="/signIn"><i class="fa-solid fa-key"></i> Sign in</Link>
            </div>
        </div>
    )
}