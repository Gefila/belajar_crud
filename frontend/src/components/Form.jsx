import Input from "./Input";

export default function Form() {
	return (
		<label className="form-control w-full max-w-xs">
            <Input>Name</Input>
            <Input>Email</Input>
            <Input>Address</Input>
		</label>
	);
}
