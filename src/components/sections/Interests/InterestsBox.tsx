import Image from "next/image";
import styles from "./Interests.module.css"

interface Props {
	title: string,
	src: string,
	text: string
}

const InterestsBox = ({ title, src, text }: Props) => {

	return (
		<div className={styles.interestsBoxWrapper}>
			<h4 className={styles.interestBoxText}>{title}</h4>
			<Image
				src={src}
				alt="Icon"
				width={128}
				height={128}
				style={{ marginTop: "2vh" }}
			/>
			<p className={styles.interestBoxText} style={{ marginBottom: "3vh" }}>{text}</p>
		</div>

	);
}

export default InterestsBox;