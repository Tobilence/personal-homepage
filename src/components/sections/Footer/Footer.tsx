import styles from "./Footer.module.css"
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import Image from "next/image";

const Footer = () => {

	return (
		<div className={styles.wrapper}>

			<a href="https://www.linkedin.com/in/tobias-furtlehner-193591180/" target="_blank" rel="noreferrer"><SlSocialLinkedin className={styles.icon} /></a>
			<a href="https://www.instagram.com/tobias_furtlehner/" target="_blank" rel="noreferrer"><SlSocialInstagram className={styles.icon} /></a>
			<a href="https://github.com/Tobilence" target="_blank" rel="noreferrer"><SlSocialGithub className={styles.icon} /></a>
			<a href="/files/Furtlehner_CV.pdf" target="_blank">
				<Image src="/icons/cv.png" className={styles.icon} alt="Download my CV" width={40} height={40} />
			</a>
		</div>
	);
}

export default Footer;