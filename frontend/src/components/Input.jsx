export default function Input({ children, value, onChange }) {
	return (
		<>
			<div className="label">
				<span className="label-text text-lg">{children}</span>
			</div>
			<input
				type="text"
				placeholder="Type here"
				className="input input-bordered w-full "
                value={value}
                onChange={(e) => onChange(e.target.value)}
			/>
		</>
	);
}