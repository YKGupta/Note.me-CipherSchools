import React, { useContext } from 'react';
import styles from './brand.module.scss';
import BrandLightImg from '../../../assets/brand logo light.svg';
import BrandDarkImg from '../../../assets/brand logo dark.svg';
import ThemeContext from '../../../context/theme/context';

const BrandLogo = (props) => {

    const { theme } = useContext(ThemeContext);
    const { logoOnly, onlyDark = false, className, onClick = () => {} } = props;

    return (
        <article className={`${styles.brand}`} onClick={onClick}>
            <img src={theme === "light" && !onlyDark ? BrandLightImg : BrandDarkImg } className={`${className}`} alt="brand-logo" />
            {
                !logoOnly && (
                    <h1 style={{color: theme === "light" ? "var(--black)" : "var(--white)" }}>
                        NOTE.<span>me</span>
                    </h1>
                )
            }
        </article>
    )
}

export default BrandLogo;
