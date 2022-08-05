export const coctailRequests = {
	getCoctailList: async () => {
		const response = await fetch("https://62decd49976ae7460be2965c.mockapi.io/coctails");
		const content = response.json();
		return content;
	}
}


