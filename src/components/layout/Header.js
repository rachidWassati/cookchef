import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef_logo.png"
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill">
                <img src={cookchef} alt="logo" />
            </div>
            <ul className={styles.headerList} >
                <button className="btn btn-reverse-primary mr-15">
                    <i className="fa-solid fa-heart mr-5"></i>
                    <span>Wishlist</span>
                </button>
                <button className="btn btn-primary">Connexion</button>
            </ul>
            <i 
                onClick={ () => setShowMenu(!showMenu) } 
                className={`fa-solid fa-bars ${styles.headerXs}`}
            ></i>
            { showMenu && (
                <>
                    <div onClick={ () => setShowMenu(false) } className="calc"></div>
                    <HeaderMenu />
                </>
            ) }
        </header>
    )
}