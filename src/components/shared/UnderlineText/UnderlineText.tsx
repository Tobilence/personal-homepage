import { ReactNode } from "react";
import styles from "./UnderlineText.module.css"

interface Props {
	children: ReactNode,

}

const UnderlineText = ({ children }: Props) => {

	return (
		<div className={styles.wrapper}>
			{children}
			<div className={styles.underline}></div>
		</div>
	);
}

export default UnderlineText;