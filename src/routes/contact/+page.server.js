import { SECRET_GOOGLE_EMAIL, SECRET_RECIPIENT_EMAIL } from '$env/static/private';
import transporter from '$lib/email/emailSetup.server.js';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			console.log(...formData);
			const subject = formData.get('subject');
			const body = formData.get('body');
			let html = `<h2>Hi!</h2><pre>${body}</pre>`;

			const message = {
				from: SECRET_GOOGLE_EMAIL,
				to: SECRET_RECIPIENT_EMAIL,
				subject: subject,
				text: body,
				html: html
			};

			const sendMail = async (message) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (error, info) => {
						if (error) {
							console.log(error);
							reject(error);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendMail(message);

			return {
				success: 'Email sent!'
			};
		} catch (error) {
			return {
				error: 'An error occurred, email not sent'
			};
		}
	}
};
