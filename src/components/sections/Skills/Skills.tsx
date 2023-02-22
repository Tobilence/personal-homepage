import { strings } from "../../../../data/Data";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./Skills.module.css"

const Skills = () => {

	const { isMobile } = useWindowSize();

	return (
		<div className={styles.wrapper}>
			{
				strings.skills.map((skill, idx) => (
					<div
						key={skill.title}
						className={styles.skillWrapper}
						style={{ flexDirection: idx % 2 ? "row" : "row-reverse" }}
					>
						<div
							className={styles.desktopSkillDescriptionAndLineWrapper}
							style={{ flexDirection: idx % 2 ? "row-reverse" : "row" }}
						>
							{!isMobile && <div className={styles.divider}></div>}
							<div className={styles.skillTextWrapper}>
								<h3 className={styles.text}>{skill.title}</h3>
								<p className={styles.text} style={{ marginBottom: 0 }}>{skill.text}</p>
							</div>
						</div>
						<img src={skill.imgSrc} alt="Sample" className={styles.image} />
						{(idx < strings.skills.length - 1 && isMobile) &&
							<div className={styles.divider}></div>
						}
					</div>
				))
			}
		</div>
	);
}

export default Skills;