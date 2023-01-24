import { useSelector } from "react-redux";
import { Logo } from "../Logo";

import "./index.css";
import { useMemo } from "react";
export function LogoButton({ name, index }) {
	const Amazon = useSelector((state) => state.tickers.Amazon.isVisible);
	const Apple = useSelector((state) => state.tickers.Apple.isVisible);
	const Facebook = useSelector((state) => state.tickers.Facebook.isVisible);
	const Tesla = useSelector((state) => state.tickers.Tesla.isVisible);
	const Microsoft = useSelector((state) => state.tickers.Microsoft.isVisible);
	const Google = useSelector((state) => state.tickers.Google.isVisible);

	const isVisible = useMemo(() => {
		return [Amazon, Apple, Facebook, Google, Microsoft, Tesla];
	}, [Amazon, Apple, Facebook, Google, Microsoft, Tesla]);

	if (isVisible[index] === true) {
		return (
			<div className="logo-container border-green shining">
				<Logo name={name} />
			</div>
		);
	}
	return (
		<div className="logo-container border-red shining">
			<Logo name={name} />
		</div>
	);
}
