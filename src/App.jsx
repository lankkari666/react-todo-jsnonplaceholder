import { useEffect, useState } from 'react';
import styles from './App.module.css';

const App = () => {
	const URL = 'https://jsonplaceholder.typicode.com/todos';
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(URL)
			.then((loadedData) => loadedData.json())
			.then((response) => {
				if (response) {
					setTodos(response);
				} else {
					setError('Invalid API response');
				}
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setError('Error fetching data');
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div className={styles.Loading}>Loading...</div>;
	}

	if (error) {
		return <div className={styles.Loading}>{error}</div>;
	}

	return (
		<>
			<div className={styles.App}>
				<h1 className={styles.header}>To-DO List</h1>
				<div className={styles.todos}>
					{todos.map(({ id, title, todo }) => (
						<div className={styles.todo} key={id}>
							{ todo }
							<span className={styles.Title}>{title}</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default App;