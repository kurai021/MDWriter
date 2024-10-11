import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import MarkdownEditor from './components/pages/MarkdownEditor.jsx';
import Settings from './components/pages/Settings.jsx'

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [textEditor, setTextEditor] = useState('');

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div>
			<Navbar isDarkMode={isDarkMode} />
			<Routes>
				<Route path="/" element={<MarkdownEditor isDarkMode={isDarkMode} textEditor={textEditor} setTextEditor={setTextEditor} />} />
				<Route path="/settings" element={<Settings isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
			</Routes>
		</div>
	);
}

export default App;