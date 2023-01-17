import { HeaderName } from "../HeaderName";
import { columns } from "../../constants";

export function HeaderRow() {
	const headerRow = columns.map((column) => (
		<HeaderName columnName={column} key={column.toString()} />
	));
	return <div className="ticker-row header-row-container">{headerRow}</div>;
}