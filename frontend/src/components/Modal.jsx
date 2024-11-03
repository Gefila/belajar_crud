export default function Modal({
	children,
	id,
	onClick,
	btnText = "open modal",
	title = "Hello!",
}) {
	return (
		<>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<button
				className="btn"
				onClick={() => {
					document.getElementById(id).showModal();
					onClick && onClick();
				}}
			>
				{btnText}
			</button>
			<dialog id={id} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">{title}</h3>
					<div className="py-4">{children}</div>
				</div>
			</dialog>
		</>
	);
}
