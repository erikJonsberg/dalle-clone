import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: '',
		prompt: '',
		photo: '',
	});

	const [generatingImg, setGeneratingImg] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: randomPrompt });
	};

	const generateImage = async () => {
		if (form.prompt) {
			try {
				setGeneratingImg(true);
				const response = await fetch('http://localhost:8000/api/v1/dalle', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						prompt: form.prompt,
					}),
				});

				const data = await response.json();

				setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
			} catch (error) {
				alert(error);
			} finally {
				setGeneratingImg(false);
			}
		} else {
			alert('Please enter a prompt');
		}
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		isLoading === false;

		if (form.prompt && form.photo) {
			setIsLoading(true);

			try {
				const response = await fetch('http://localhost:8000/api/v1/posts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(form),
				});

				await response.json();
				navigate('/');
			} catch (error) {
				alert(error);
			} finally {
				setIsLoading(false);
			}
		} else {
			alert('Please generate an image before submitting');
		}
	};

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-gray-950 text-2xl'>Create</h1>
				<p className='mt-2 text-gray-500 max-w-lg'>
					Create imaginative and visually stunning images using DALL-E AI and
					share them with the community.
				</p>
			</div>

			<form
				className='mt-16 max-w-3xl'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col gap-5'>
					<FormField
						LabelName='Your name'
						type='text'
						name='name'
						placeholder='John Doe'
						value={form.name}
						handleChange={handleChange}
					/>
					<FormField
						LabelName='Prompt'
						type='text'
						name='prompt'
						placeholder='A plush toy robot sitting against a yellow wall'
						value={form.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
					<div className='relative bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 size-64 flex justify-center items-center p-3'>
						{form.photo ? (
							<img
								src={form.photo}
								alt={form.prompt}
								className='size-full object-contain'
							/>
						) : (
							<img
								src={preview}
								alt='preview'
								className='w-9/12 h-9/12 object-contain opacity-40'
							/>
						)}

						{generatingImg && (
							<div className='absolute inset-0 z-0 bg-opacity-50 flex justify-center items-center rounded-lg'>
								<Loader />
							</div>
						)}
					</div>
				</div>
				<div className='mt-5 flex gap-5'>
					<button
						type='button'
						className='text-white bg-green-700 font-medium rounded-md text-sm w-full lg:w-auto px-5 py-2.5 text-center'
						onClick={generateImage}
					>
						{generatingImg ? 'Generating Image...' : 'Generate'}
					</button>
				</div>
				<div className='mt-10'>
					<p className='mt-2 text-gray-500 text-sm'>
						Once you have created the image you want, you can share it with the
						community
					</p>
					<button
						type='submit'
						className='mt-3 text-white bg-indigo-500 font-medium rounded-md text-sm lg:w-auto w-full px-5 py-2.5 text-center'
					>
						Share with the community
					</button>
				</div>
			</form>
		</section>
	);
};

export default CreatePost;
