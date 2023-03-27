'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTasks } from '@/context/TaskContext';

function Page({ params }) {
	const [task, setTask] = useState({
		title: '',
		description: '',
	});
	const { tasks, createTask, updateTask } = useTasks();
	const router = useRouter();

	const handleChange = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (params.id) {
			updateTask(params.id, task);
		} else {
			createTask(task.title, task.description);
		}

		router.push('/');
	};

	useEffect(() => {
		if (params.id) {
			const taskFound = tasks.find((task) => task.id === params.id);
			if (taskFound) {
				setTask({ title: taskFound.title, description: taskFound.description });
			}
		}
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="Write a title" name="title" type="text" onChange={handleChange} value={task.title} />
			<textarea placeholder="Write a description" name="description" onChange={handleChange} value={task.description}></textarea>
			<button>Save</button>
		</form>
	);
}

export default Page;
