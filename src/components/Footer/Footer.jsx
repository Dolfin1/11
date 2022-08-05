import { cn } from '../../lib/react-bem'
import './footer.scss'

const style = cn('footer')

export const Footer = () => {

	return (
		<footer className={style()}>
			<button className={style("button")}>Поиск</button>
		</footer>
	);
}

