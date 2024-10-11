import React, { useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from "@codemirror/view";
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { marked } from 'marked';
import hljs from 'highlight.js';
import mermaid from 'mermaid';

const MarkdownEditor = ({ isDarkMode, textEditor, setTextEditor }) => {
	const mermaidRef = useRef(null);

	hljs.initHighlightingOnLoad();

	const GithubTheme = React.lazy(() => import('../hljs_themes/githubTheme'))
	const GithubDarkTheme = React.lazy(() => import('../hljs_themes/githubDarkTheme'))

	useEffect(() => {
		// Configuración de Mermaid
		mermaid.initialize({
			startOnLoad: true,
			flowchart: {
				useMaxWidth: false,
				htmlLabels: true,
			},
		});

		// Renderiza gráficos Mermaid después de que el contenido haya sido actualizado
		renderMermaidCharts()

	}, [textEditor]);

	const handleChange = (newValue) => {
		setTextEditor(newValue);
	};

	const renderMermaidCharts = () => {
		if (mermaidRef.current) {
			// Selecciona todos los bloques de Mermaid dentro del contenido
			const mermaidBlocks = mermaidRef.current.querySelectorAll('pre code.language-mermaid');

			mermaidBlocks.forEach(async (block, index) => {
				const graphDefinition = block.textContent.trim();
				const graphContainer = document.createElement('div');
				graphContainer.id = `mermaid-${index}`;

				console.log(graphDefinition)

				try {
					const { svg } = await mermaid.render(`mermaid-${index}`, graphDefinition);

					console.log(svg)

					graphContainer.innerHTML = svg;

					block.parentNode.replaceChild(graphContainer, block);
				} catch (error) {
					console.error('Error rendering Mermaid diagram:', error);
				}
			});
		}
	};

	const renderMarkdownWithMermaid = () => {
		// Convierte el markdown a HTML escapando caracteres especiales
		const htmlContent = marked(textEditor, {
			breaks: true,
			highlight: (code, lang) => {

				let res = '';

				if (!lang) {
					return code;
				}

				if (lang === 'mermaid') {
					return `<pre><code class="language-mermaid">${code}</code></pre>`;
				}
				else {
					try {
						res = hljs.highlightAuto(code).value;
					} catch (e) {
						console.log(e)
					} finally {
						return res || `<pre><code>${code}</code></pre>`;
					}
				}
			}
		});

		return { __html: htmlContent };
	};

	return (
		<>
			<React.Suspense fallback={<></>}>
				{isDarkMode && GithubDarkTheme}
				{!isDarkMode && GithubTheme}
			</React.Suspense>
			<div style={{
				height: '92vh',
				display: 'flex',
				flexDirection: 'row',
				marginTop: '50px',
				backgroundColor: isDarkMode ? '#2d2d2d' : '#faf8f5'
			}}>
				<div style={{ flex: 1, padding: '10px', display: 'flex', width: '100%' }}>
					<CodeMirror
						value={textEditor}
						height="100%"
						extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), EditorView.lineWrapping]}
						theme={isDarkMode ? duotoneDark : duotoneLight}
						onChange={handleChange}
						style={{ flex: 1 }}
					/>
				</div>
				<div
					ref={mermaidRef}
					style={{
						flex: 1,
						width: '100%',
						padding: '10px',
						backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
						color: isDarkMode ? '#ddd' : '#333',
						overflowY: 'auto',
						overflowX: 'auto',
						textWrap: 'wrap'
					}}
					dangerouslySetInnerHTML={renderMarkdownWithMermaid()}
				/>
			</div>
		</>
	);
};

export default MarkdownEditor;
