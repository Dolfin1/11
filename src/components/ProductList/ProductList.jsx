import { cn } from '../../lib/react-bem'
import './product-list.scss'
import { Card } from '../Card/Card';


const style = cn('products-list')
const styleProduct = cn('product')

export const ProductList = ({ coctailList }) => {


	return (
		<section className={style()}>
			{coctailList.map((coctail) => (
				<div className={style("item")} key={coctail.id}>
					<Card
						name={coctail.name}
						degree={coctail.degree}
						style={coctail.style}
					/>
				</div>
			))}
		</section>

	);
}

