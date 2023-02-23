import styles from "./Contact.module.css"
import emailjs from "@emailjs/browser";
import { ChangeEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const serviceId = "gmail_service";
const templateId = "template_xyxud9g";
const publicKey = "GZaCktjkYLR4-WG8r";
const privateKey = "j4_B84GlxPvIMaEUWNEm4";

interface ContactFormFields {
	subject: string,
	inquiry: string,
	contact: string
}

const Contact = () => {

	const [contactData, setContactData] = useState({ subject: "", inquiry: "", contact: "" });
	const [errors, setErrors] = useState({ subject: false, inquiry: false, contact: false });

	const templateParams = {
		subject: 'Test',
		inquiry: 'Check this out!',
		contact_info: "Soem email from customer"
	};

	const computeErrors = () => {
		return {
			subject: contactData.subject === "",
			inquiry: contactData.inquiry === "",
			contact: contactData.contact === "",
		};
	}

	const sendEmail = () => {
		const err = computeErrors();
		setErrors(err);
		if (!err.contact && !err.inquiry && !err.subject) {
			const emailPromise = emailjs
				.send(serviceId, templateId, templateParams, publicKey)

			toast.promise(emailPromise, {
				pending: "trying to get in touch... ",
				success: "Success! I will get back to you as soon as I can.",
				error: "Sorry, something went wrong. Please try again later!"
			})
		}
	}

	const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, fieldName: keyof ContactFormFields) => {
		setErrors({ ...errors, [fieldName]: false });
		setContactData({ ...contactData, [fieldName]: event.target.value });
	}

	return (
		<div className={styles.wrapper}>
			<h1 style={{ textAlign: "center", fontSize: "3rem", marginBottom: "1rem", fontWeight: 400 }}>Contact Me</h1>
			<input
				type="text"
				placeholder="Subject"
				onChange={e => handleInputChange(e, "subject")}
				value={contactData.subject}
				style={errors.subject ? { border: "1px solid red" } : {}}
			/>
			{errors.subject && <small className={styles.small}>Please enter a subject!</small>}
			<textarea
				placeholder="Inquiry / Question"
				onChange={e => handleInputChange(e, "inquiry")}
				value={contactData.inquiry}
				style={errors.inquiry ? { border: "1px solid red" } : {}}
			/>
			{errors.inquiry && <small className={styles.small}>Please enter an inquiry!</small>}
			<input
				type="text"
				placeholder="How should I respond? (Please enter your Email / Phone)"
				onChange={e => handleInputChange(e, "contact")}
				value={contactData.contact}
				style={errors.contact ? { border: "1px solid red" } : {}}
			/>
			{errors.contact && <small className={styles.small}>Please enter your contact information!</small>}
			<button
				style={{ width: "100%", marginTop: "10px", borderRadius: "5px" }}
				onClick={sendEmail}
			>
				Submit
			</button>
			<div style={{ height: "10vh" }}></div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
}

export default Contact;