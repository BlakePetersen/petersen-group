import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import RemarkLowlight from 'remark-react-lowlight';

import bash from 'highlight.js/lib/languages/bash';
import js from 'highlight.js/lib/languages/javascript';

import styled from 'styled-components'
import Colors from '../../styles/colors'

const _Body = styled.div`
	overflow-x: scroll;
	display: grid;
	grid-gap: 1rem;

	h2:not(:first-of-type) {
		padding-top: 4rem;
	}
	
	code.hljs {
		font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
		font-size: 1rem;
		direction: ltr;
		text-align: left;
		tab-size: 4;
		hyphens: none;
		white-space: pre;
  	}
  
  	pre {
		overflow: auto;
		line-height: 1.5;
		padding: 1.5rem;
		background: ${ Colors.snow };
		border-radius: 4px;
		
		> code.hljs {
		 	padding: 0;
		}
  	}
	
	.hljs,
	.hljs-subst {
		color: #000;
	}
	
	.hljs-string,
	.hljs-meta,
	.hljs-symbol,
	.hljs-template-tag,
	.hljs-template-variable,
	.hljs-addition {
		color: #756bb1;
	}
	
	.hljs-comment,
	.hljs-quote {
		color: #636363;
	}
	
	.hljs-number,
	.hljs-regexp,
	.hljs-literal,
	.hljs-bullet,
	.hljs-link {
		color: #31a354;
	}
	
	.hljs-deletion,
	.hljs-variable {
		color: #88f;
	}
	
	.hljs-keyword,
	.hljs-selector-tag,
	.hljs-title,
	.hljs-section,
	.hljs-built_in,
	.hljs-doctag,
	.hljs-type,
	.hljs-tag,
	.hljs-name,
	.hljs-selector-id,
	.hljs-selector-class,
	.hljs-strong {
		color: #3182bd;
	}
	
	.hljs-emphasis {
		font-style: italic;
	}
	
	.hljs-attribute {
		color: #e6550d;
	}
`;

const Body = ({ body }) => <_Body>
	{ remark().use(reactRenderer, {
		remarkReactComponents: {
			code: RemarkLowlight({
				js,
				bash
			})
		}
	})
		.processSync(body)
		.contents }
</_Body>;

export default Body
