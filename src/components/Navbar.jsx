import { useState } from "react";

const Navbar = () => {
    const [themeStyle, setThemeStyle] = useState(true);
    const handleThemeStyle = () => {
        console.log('SETEAMOS ::: ', themeStyle);
        setThemeStyle(!themeStyle);
    }
  return (
    <nav className="countires__nav">
        <ul>
            <li>
                <span className="nav__logo">Where in the world?</span>
            </li>
            <li>
                <span className="nav__dark" onClick={()=> handleThemeStyle()}>
                    <ion-icon name={themeStyle ? 'moon-outline' : 'sunny-outline'}></ion-icon>
                    {themeStyle ? 'Dark Mode' : 'Light Mode'}
                </span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar