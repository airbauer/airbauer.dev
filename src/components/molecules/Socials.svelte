<script>
	import Social from '../atoms/Social.svelte';
	import { user } from '../../util/discord';
</script>

<div class="socials-container">
	<Social icon="github" tip="@real-airbauer" link="https://github.com/real-airbauer" />
	<Social icon="discord" tip={user.fullName()} link={`https://discord.com/users/${user.id}`} />
	<Social icon="email" tip="airbauer@tuta.io" link="mailto:airbauer@tuta.io" />
	<Social icon="kofi" tip="@airbauer" link="https://ko-fi.com/airbauer" />
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>
