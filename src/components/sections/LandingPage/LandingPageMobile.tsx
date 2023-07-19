import Image from "next/image";
import styles from "./LandingPage.module.css"

const LandingPageMobile = () => {

	return (
		<div className={styles.mobileWrapper}>
			<Image
				src="/images/landing_page.png"
				alt="Image of me"
				fill
				className={styles.heroImage}
			/>
			<div className={styles.imageOverlay}></div>
			<div className={styles.heroTextWrapper}>
				<h3 className={styles.heroText}>Hi, I&#39;m Tobi</h3>
				<h1 className={styles.heroText}>Fullstack Software Developer</h1>
				<p className={styles.heroText}>Data Science & Psychology Student</p>
			</div>
		</div>
	);
}

export default LandingPageMobile;