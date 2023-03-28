import { useTasks } from '@/context/TaskContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function TaskCard({ task }) {
	const router = useRouter();
	const { deleteTask } = useTasks();

	return (
		<div style={{ background: '#202020', color: 'white' }} onClick={() => router.push(`/edit/${task.id}`)}>
			<h1>{task.title}</h1>
			<button
				onClick={(e) => {
					e.stopPropagation();
					const accept = window.confirm('Are you sure?');
					if (accept) {
						deleteTask(task.id);
						toast.error('Task deleted successfully');
					}
				}}
			>
				Delete
			</button>
			<p>{task.description}</p>
		</div>
	);
}
