export default class View {
	constructor() {
		this.advice = document.querySelector('#advice');
		this.quote = document.querySelector('#quote');
	}

	setAdviceId(id) {
		this.advice.innerText = `advice #${id}`;
	}

	setQuote(quote_text) {
		this.quote.innerText = quote_text;
	}
}
