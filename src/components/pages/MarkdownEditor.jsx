import React from 'react';
import CodeEditor from '../MarkdownEditor/CodeEditor.jsx';
import MarkdownRenderer from '../MarkdownEditor/MarkdownRenderer.jsx';

const MarkdownEditor = ({ isDarkMode, textEditor, setTextEditor }) => {

	const handleChange = (newValue) => {
		setTextEditor(newValue);
	};

	return (
		<>
			<div style={{
				height: '92vh',
				display: 'flex',
				flexDirection: 'row',
				marginTop: '50px',
				backgroundColor: isDarkMode ? '#2d2d2d' : '#faf8f5',
			}}>
				<div style={{ flex: 1, padding: '10px', display: 'flex', width: '100%' }}>
					<CodeEditor
						value={textEditor}
						onChange={handleChange}
						isDarkMode={isDarkMode}
					/>
				</div>
				<MarkdownRenderer
					text={textEditor}
					isDarkMode={isDarkMode}
				/>
			</div>
		</>
	);
};

export default MarkdownEditor;

