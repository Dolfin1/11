import { cn } from '../../lib/react-bem'
import './nav.scss'

const style = cn('nav')

export const Nav = () => {

	return (
		<nav className={style()}>
			<div className="b-container">
				<ul className={style('list')}>
					<li className={style('item')}><button className={style('button')} href="#">Новинки</button></li>
					<li className={style('item')}><button className={style('button')} href="#">Сладкие</button></li>
					<li className={style('item')}><button className={style('button')} href="#">Хит</button></li>
					<li className={style('item', { position: "last" })}><button className={style('button')} href="#">Крепкие</button></li>
				</ul>
			</div>
		</nav>
	);
}

