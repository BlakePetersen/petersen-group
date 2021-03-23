import React from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import reactRenderer from 'remark-react'
import RemarkLowlight from 'remark-react-lowlight';

import bash from 'highlight.js/lib/languages/bash';
import js from 'highlight.js/lib/languages/javascript';

import styled from 'styled-components'
import { darken } from 'polished'
import Colors from '../../styles/colors'

const _Body = styled.div`
  overflow-x: scroll;
  display: grid;
  grid-gap: 1.5rem;
  line-height: 1.75;
  padding: 0 0 2rem 0;

  h1, h2, h3, h4, h5, h6 {
    color: ${ Colors.slate };

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  a {
    color: ${ Colors.slate };
    transition: color 180ms ease-in;
    word-break: break-all;

    &:hover {
      color: ${ darken(.2, Colors.slate) };
    }
  }

  code.hljs {
    font-family: 'Ubuntu Mono', monospace;
    font-size: 1rem;
    direction: ltr;
    text-align: left;
    tab-size: 4;
    hyphens: none;
    white-space: pre;
    background: ${ Colors.snow };
    border-radius: 4px;
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
    {
        unified()
            .use(parse)
            .use(reactRenderer, {
                remarkReactComponents: {
                    code: RemarkLowlight({
                        js,
                        bash
                    })
                }
            })
            .processSync(body).result
    }
</_Body>;

export default Body
