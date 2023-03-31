import { useTasks } from '@/context/TaskContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function TaskCard({ task }) {
	const router = useRouter();
	const { deleteTask } = useTasks();

	return (
		<div
			className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
			onClick={() => router.push(`/edit/${task.id}`)}
		>
			<div className="flex justify-between">
				<div>
					<h1>{task.title}</h1>
					<p className="text-gray-300">{task.description}</p>
					<span className="text-gray-400 text-xs">{task.id}</span>
				</div>
			</div>
			<button
				className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
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
		</div>
	);
}
