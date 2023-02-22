import { strings } from "../../../../data/Data";
import styles from "./About.module.css"

const About = () => {

	return (
		<div className={styles.wrapper}>
			<h1>{strings.about.title}</h1>
			<p>{strings.about.text} </p>
		</div>

	);
}

export default About;