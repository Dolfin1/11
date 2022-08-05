import './baseLayout.scss'

export const BaseLayout = ({ children }) => {

	return (
		<div className="b-page-wrapper">
			<div className="b-content-wrapper">
				{children}
			</div>
		</div>
	);
}