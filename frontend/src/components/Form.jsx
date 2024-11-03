export default function Form({ children, onSubmit, idModal, btnName }) {
	function close(e) {
		e.preventDefault();
		document.getElementById(idModal).close();
	}
	return (
		<form method="dialog" onSubmit={onSubmit}>
			{children}
			<div className="mt-5 w-full flex gap-2">
				<button className="btn bg-primary flex-grow">{btnName}</button>
				<button className="btn bg-error flex-grow" onClick={close}>
					Close
				</button>
			</div>
		</form>
	);
}
