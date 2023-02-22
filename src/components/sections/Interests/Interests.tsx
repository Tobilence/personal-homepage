import styles from "./Interests.module.css"
import InterestsBox from "./InterestsBox";

const Interests = () => {

	return (
		<div className={styles.wrapper}>
			<InterestsBox
				title="Software Development"
				src="/images/laptop.png"
				text="Lorem ipsum lalala asdo iöghsü sdjgnaüsk djgn sdajgn"
			/>

			<InterestsBox
				title="Data Science"
				src="/images/data.png"
				text="Lorem ipsum lalala asdo iöghsü sdjgnaüsk djgn sdajgn"
			/>

			<InterestsBox
				title="Psychology"
				src="/images/brain.png"
				text="Lorem ipsum lalala asdo iöghsü sdjgnaüsk djgn sdajgn"
			/>
		</div>

	);
}

export default Interests;