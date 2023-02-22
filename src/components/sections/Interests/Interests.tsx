import Image from "next/image";
import { strings } from "../../../../data/Data";
import styles from "./Interests.module.css"

const Interests = () => {

	return (
		<div className={styles.wrapper}>
			{
				strings.interests.map(interest => (
					<div key={interest.title} className={styles.interestsBoxWrapper}>
						<h4 className={styles.interestBoxText}>{interest.title}</h4>
						<Image
							src={interest.img}
							alt="Icon"
							width={128}
							height={128}
							style={{ marginTop: "2vh" }}
						/>
						<p className={styles.interestBoxText} style={{ marginBottom: "3vh" }}>{interest.text}</p>
					</div>
				))
			}
		</div>

	);
}

export default Interests;