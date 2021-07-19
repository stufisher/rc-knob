import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { H3, Cell, CodeBlock } from './styled'
import { Knob } from "./lib";

import theme from './prismTheme'

const renderKnob = (child, options = {}) => (
    <Knob
        onChange={value => console.log(value)}
        size={100}
        value={0}
        angleOffset={220}
        angleRange={280}
        min={0}
        max={100}
        {...options}
        snap
    >
        {child}
    </Knob>
)

export default ({ example, knob, title, options, widget }) => (
    <Cell>
        <H3>{title}</H3>
        { knob !== undefined ? renderKnob(knob, options) : widget }
        <CodeBlock>
            <SyntaxHighlighter language="jsx" style={theme}>
                {example}
            </SyntaxHighlighter>
        </CodeBlock>
    </Cell>
)

export function Example({ example, title, children }) {
    return (
        <Cell>
            <H3>{title}</H3>
            {children}
            <CodeBlock>
                <SyntaxHighlighter language="jsx" style={theme}>
                    {example}
                </SyntaxHighlighter>
            </CodeBlock>
        </Cell>
    )
}
