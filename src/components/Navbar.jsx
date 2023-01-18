import { useState } from "react";

const Navbar = ({onChangeTheme}) => {
    const [themeStyle, setThemeStyle] = useState(true);
    const handleThemeStyle = () => {
        onChangeTheme(!themeStyle);
        setThemeStyle(!themeStyle);
    }
  return (
    <nav className={themeStyle ? 'countires__nav' : 'countires__nav dark'}>
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