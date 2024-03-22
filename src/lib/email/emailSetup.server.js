import nodemailer from 'nodemailer';
import { SECRET_GOOGLE_EMAIL, SECRET_GOOGLE_EMAIL_PASSWORD } from '$env/static/private';

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: SECRET_GOOGLE_EMAIL,
		pass: SECRET_GOOGLE_EMAIL_PASSWORD
	}
});

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});

export default transporter;
