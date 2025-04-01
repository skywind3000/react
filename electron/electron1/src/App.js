import React, {useState, useEffect} from 'react';
import { ipcRenderer } from 'electron';
import os from 'os';

export default function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState('');
	useEffect(() => {
		const handleAppPath = async () => {
			const appPath = await ipcRenderer.invoke('get-app-path');
			setText(appPath);
		};
		handleAppPath().then(() => {
			console.log('App path:', text);
		});
	}, []);

	async function onClick() {
		setCount(count + 1);
		const appPath = await ipcRenderer.invoke('get-path', 'exe');
		setText(JSON.stringify(os.cpus()));
		setText(appPath);
	}
	
	return (<>
		<h1>Hello, World!!</h1>
		<p>Welcome to my first React app.</p>
		<p>Count: {count}</p>
		<p>Text: {text}</p>
		<button onClick={onClick}>Increment</button>
	</>);
}
