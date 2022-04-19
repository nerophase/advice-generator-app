import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
	const model = new Model();
	const view = new View();
	const button = document.querySelector('#generate-quote-button');

	button.onclick = generateAdvice;
	generateAdvice();

	async function generateAdvice() {
		const advice = await model.getAdvice();

		view.setAdviceId(advice['advice_id']);
		view.setQuote(advice['advice_text']);
	}
});
