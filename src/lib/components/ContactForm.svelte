<!-- <script>

	export let data, form;

	$: ({ title } = data);
</script>

<h1>{title}</h1>
<div class="wrapper">
	<legend>Send Emails</legend>
	<form method="POST" class="container">
		<div class="input">
			<label for="">Subject:</label>
			<input name="subject" type="text" placeholder="test_subject" />
		</div>
		<div class="input">
			<label for="">Email:</label>
			<input name="email" type="text" placeholder="test_email" />
		</div>
		<div class="input">
			<label for="">Message:</label>
			<textarea name="body" rows="6" placeholder="test_body" />
		</div>
		<button type="submit">Send</button>
	</form>
	<p class="success">{form?.success || ''}</p>
</div> -->
