
export function DiffData({ diff, start }) {
	if (start === true) {
		return (
			<div>
				<span className="diff-data diff-data-positive">--</span>
			</div>
		);
	} else if (diff > 0) {
		return (
			<div>
				<span className="diff-data diff-data-positive">{diff}</span>
				<span>
					<img src="greenSm.png" className="arrow" alt="arrUp" />
				</span>
			</div>
		);
	}
	return (
		<div>
			<span className="diff-data diff-data-negative">{diff}</span>
			<span>
				<img src="yelSm.png" className="arrow" alt="arrDown" />
			</span>
		</div>
	);
}