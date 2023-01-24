import "./index.css"
export function Logo({ name }) {
   
	return (
		<img
			className="logo-md"
			src={`${name.toLowerCase()}.png`}
			alt="logo"
			
		/>
	);
}
