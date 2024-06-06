type Props = {
	LabelName: string;
	type: string;
	name: string;
	placeholder: string;
	value: string;
	handleChange: (e: any) => void;
	isSurpriseMe?: boolean;
	handleSurpriseMe?: () => void;
};

const FormField = ({
	LabelName,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
}: Props) => {
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<label
					htmlFor={name}
					className='text-gray-900 font-medium block text-sm'
				>
					{LabelName}
				</label>
				{isSurpriseMe && (
					<button
						type='button'
						className='bg-gray-200 text-sm font-medium px-2 rounded-sm text-black'
						onClick={handleSurpriseMe}
					>
						Surprise me!
					</button>
				)}
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className='bg-gray-100 w-full p-3 rounded-md border border-gray-300 outline-none focus:ring-indigo-500 focus:border-indigo-500'
			/>
		</div>
	);
};

export default FormField;
