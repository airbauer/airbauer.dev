class DiscordUser {
	constructor(
		public name: string,
		public discriminator: string,
		public id: string
	) {}

	fullName() {
		return this.name + '#' + this.discriminator;
	}
}

export let user = new DiscordUser('AIRbauer', '4554', '549207539544227846');
