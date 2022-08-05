import { cn } from '../../lib/react-bem'
import './header.scss'
import Logo from "../../assets/images/Logo.png"

const style = cn('header')

export const Header = () => {

	return (
		<header className={style()}>
			<div className="b-container" >
				<div className={style('info')}>
					<h1 className={style("title")}>Главная</h1>
					<p className={style("date")}>22 июля 2022</p>
				</div>
				<div className={style("logo")}>
					<img className={style("image")} src= {Logo} alt="Logo" />
				</div>
			</div>
		</header>
	);
}

