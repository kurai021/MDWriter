import React, { useEffect, useRef, Suspense } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import mermaid from 'mermaid';

const MarkdownRenderer = ({ text, isDarkMode }) => {
	const mermaidRef = useRef(null);

	hljs.initHighlightingOnLoad();

	const GithubTheme = React.lazy(() => import('../hljs_themes/githubTheme'));
	const GithubDarkTheme = React.lazy(() => import('../hljs_themes/githubDarkTheme'));

	useEffect(() => {
		mermaid.initialize({
			startOnLoad: true,
			flowchart: { useMaxWidth: false, htmlLabels: true },
		});
		renderMermaidCharts();
	}, [text]);

	const renderMermaidCharts = () => {
		if (mermaidRef.current) {
			const mermaidBlocks = mermaidRef.current.querySelectorAll('pre code.language-mermaid');
			mermaidBlocks.forEach(async (block, index) => {
				const graphDefinition = block.textContent.trim();
				const graphContainer = document.createElement('div');
				graphContainer.id = `mermaid-${index}`;
				try {
					const { svg } = await mermaid.render(`mermaid-${index}`, graphDefinition);
					graphContainer.innerHTML = svg;
					block.parentNode.replaceChild(graphContainer, block);
				} catch (error) {
					console.error('Error rendering Mermaid diagram:', error);
				}
			});
		}
	};

	const renderMarkdown = () => {
		// Convierte el markdown a HTML escapando caracteres especiales
		const htmlContent = marked(text, {
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
						res = hljs.highlightElement(code).value;
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
			<Suspense fallback={<></>}>
				{isDarkMode ? <GithubDarkTheme /> : <GithubTheme />}
			</Suspense>
			<div
				ref={mermaidRef}
				style={{
					flex: 1,
					padding: '10px',
					backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
					color: isDarkMode ? '#ddd' : '#333',
					overflowY: 'auto',
				}}
				dangerouslySetInnerHTML={renderMarkdown()}
			/>
		</>
	);
};

export default MarkdownRenderer;
