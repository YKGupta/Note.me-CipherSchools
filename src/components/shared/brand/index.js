import React from 'react';
import styles from './brand.module.scss';
import BrandLightImg from '../../../assets/brand logo light.svg';
import BrandDarkImg from '../../../assets/brand logo dark.svg';

const BrandLogo = (props) => {

    const { logoOnly, type = "light", className } = props;

    return (
        <article className={`${styles.brand}`}>
            <img src={type === "light" ? BrandLightImg : BrandDarkImg } className={`${className}`} alt="brand-logo" />
            {
                !logoOnly && (
                    <h1>
                        NOTE.<span>me</span>
                    </h1>
                )
            }
        </article>
    )
}

export default BrandLogo;
