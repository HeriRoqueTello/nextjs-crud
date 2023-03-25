'use client';

import { useTasks } from '@/context/TaskContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Page() {
	const [task, setTask] = useState();
	const { createTask } = useTasks();
	const router = useRouter();

	const handleChange = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(task.title, task.description);
		router.push('/');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="Write a title" name="title" type="text" onChange={handleChange} />
			<textarea placeholder="Write a description" name="description" onChange={handleChange}></textarea>
			<button>Save</button>
		</form>
	);
}

export default Page;
