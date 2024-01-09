<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="flex flex-col min-h-screen items-center justify-center">
	<form method="post" class="flex flex-col gap-2" use:enhance>
		<label for="username">Username</label>
		<input class="rounded-lg outline outline-black" name="username" id="username" /><br />
		<label for="password">Password</label>
		<input
			class="rounded-lg outline outline-black"
			type="password"
			name="password"
			id="password"
		/><br />
		<input type="submit" />
	</form>
	<a href="/signup">Create an account</a>
</div>
