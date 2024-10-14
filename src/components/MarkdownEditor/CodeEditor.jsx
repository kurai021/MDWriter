import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from "@codemirror/view";
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';

const CodeEditor = ({ value, onChange, isDarkMode }) => {
	return (
		<CodeMirror
			value={value}
			height="100%"
			extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), EditorView.lineWrapping]}
			theme={isDarkMode ? duotoneDark : duotoneLight}
			onChange={onChange}
			style={{ flex: 1 }}
		/>
	);
};

export default CodeEditor;
