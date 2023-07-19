import useWindowSize from "../../../hooks/useWindowSize";
import UnderlineText from "../../shared/UnderlineText/UnderlineText";
import styles from "./LandingPage.module.css"
const LandingPageDesktop = () => {

	return (
		<div className={styles.desktopWrapper}>
			<div className={styles.heroTextWrapperDesktop}>
				<h3 className={styles.heroText}>Hi, I&#39;m Tobi</h3>
				<UnderlineText>
					<h1 style={{ fontSize: "3rem" }} className={styles.heroText}>Fullstack Software Developer</h1>
				</UnderlineText>
				<p style={{ fontSize: "1.5rem" }} className={styles.heroText}>Data Science & Psychology Student</p>
				<a href="#skills">
					<button className={styles.ctaButton}>Check out my work</button>
				</a>
			</div>
			<img
				src="/images/landing_page.png"
				alt="Image of me"
				width="40%"
				height="140%"
				className={styles.heroImage}
			/>
		</div>
	);
}

export default LandingPageDesktop;