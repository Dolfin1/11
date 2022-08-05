import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/Nav/Nav";
import { BaseLayout } from "./layouts/BaseLayout";
import { useEffect, useState } from 'react';
import { coctailRequests } from "./requests/coctails";


function App() {

	const [coctailList, setCoctailList] = useState([])

	useEffect(() => {
		coctailRequests.getCoctailList().then((result) => {
			setCoctailList(result)
		})
	}, [])

	return (
		<div className="App">
			<BaseLayout>
				<Header />
				<Nav />
				<Main coctailList={coctailList} />
				<Footer />
			</BaseLayout>
		</div>
	);
}

export default App;
