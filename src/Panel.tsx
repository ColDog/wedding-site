import * as React from 'react';
import glamorous from 'glamorous';

const Body = glamorous.div({
  padding: '5px',
  color: 'white',
  textAlign: 'center',
});

interface PanelProps {
  title: string;
}

const Panel: React.SFC<PanelProps> = ({ title, children }) => (
  <Body>
    <h1>{title}</h1>
    {children}
  </Body>
);

export default Panel;
