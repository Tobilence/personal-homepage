import Image from "next/image";
import { strings } from "../../../../data/Data";
import styles from "./Interests.module.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Interests = () => {

	const animationControl = useAnimation();
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			animationControl.start('visible')
		}
		if (!inView) {
			animationControl.start('hidden')
		}
	}, [animationControl, inView])

	const item = {
		hidden: {
			opacity: 0,
			y: 25,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
			}
		}
	};

	return (
		<section id="interests" className={styles.wrapper}>
			{
				strings.interests.map(interest => (
					<div
						key={interest.title}
						className={styles.interestsBoxWrapper}
						ref={ref}
					// initial="hidden"
					// animate={animationControl}
					// variants={item}
					>
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
		</section>

	);
}

export default Interests;