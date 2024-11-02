export default function Input({ children }) {
	return (
		<>
			<div className="label">
				<span className="label-text">{children}</span>
			</div>
			<input
				type="text"
				placeholder="Type here"
				className="input input-bordered w-full max-w-xs"
			/>
		</>
	);
}
