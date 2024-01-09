<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form
	class="flex min-h-screen flex-col items-center justify-center text-xl"
	action="?/signup"
	method="POST"
	use:enhance
>
	<div class="my-10 min-w-[350px] flex justify-between">
		<label for="email">Email</label>
		<input class="rounded-md outline outline-black" id="email" name="email" type="text" required />
	</div>

	<div class="min-w-[350px] flex justify-between">
		<label for="password">Password</label>
		<input
			class="rounded-md outline outline-black"
			id="password"
			name="password"
			type="password"
			required
		/>
	</div>

	{#if form?.user}
		<p class="error">Username is taken.</p>
	{/if}

	<button class="mt-10" type="submit">Register</button>
</form>
