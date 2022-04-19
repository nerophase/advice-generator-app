export default class Model {
	async getAdvice() {
		try {
			const resp = await fetch(
				'https://api.adviceslip.com/advice?t=' + Math.random()
			);

			if (!resp.ok) {
				throw new Error(`HTTP Error: ${resp.status}`);
			}

			const json = await resp.json();
			console.log(json);
			const advice_id = json['slip']['id'];
			const advice_text = json['slip']['advice'];

			return { advice_id, advice_text };
		} catch (error) {
			console.error(`Could not get the advice. Error: ${error}`);
		}
	}
}
