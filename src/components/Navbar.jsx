const Navbar = () => {
  return (
    <nav className="countires__nav">
        <ul>
            <li>
                <span className="nav__logo">Where in the world?</span>
            </li>
            <li>
                <span className="nav__dark">
                    <ion-icon name="moon-outline"></ion-icon>
                    Dark Mode
                </span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar