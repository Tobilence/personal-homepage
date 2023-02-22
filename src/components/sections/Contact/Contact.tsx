import styles from "./Contact.module.css"

const Contact = () => {

	return (
		<div className={styles.wrapper}>
			<h1 style={{ textAlign: "center", fontSize: "3rem", marginBottom: "1rem", fontWeight: 400 }}>Contact Me</h1>
			<input type="text" placeholder="Subject"></input>
			<textarea placeholder="Inquiry / Question"></textarea>
			<input type="text" placeholder="How should I respond? (Please enter your Email / Phone)"></input>
			<button style={{ width: "100%", borderRadius: 5 }}>Submit</button>
		</div>
	);
}

export default Contact;