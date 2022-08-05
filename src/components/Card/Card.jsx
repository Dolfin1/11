import { cn } from '../../lib/react-bem'
import './card.scss'
import Blackberry from "../../assets/images/Main-blackberry.jpg"

const style = cn('card')

export const Card = ({ name, degree, style: coctailStyle }) => {

	return (
		<div className={style()}>
			<img className={style("image")} src={Blackberry} alt="Coctail image" />
			<div className={style("description")}>
				<div className={style("info")}>{degree}%</div>
				<div className={style("type")}>Алкоголь</div>
			</div>
			<div className={style("name")}>
				<h1 class="card__title" className={style("title")}>{name}</h1>
				<p className={style("style")}>{coctailStyle}</p>
			</div>
		</div>
	);
}

