async function mockSetup() {
	return worker.start({
		onUnhandledRequest: 'bypass',
		serviceWorker: {
			// url: `${API_BASE_URL}/mockServiceWorker.js`
			 url: '/mockServiceWorker.js',  // caminho relativo, sem host/porta
		}
	});
}