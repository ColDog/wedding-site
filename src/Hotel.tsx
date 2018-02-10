import * as React from 'react';
import glamorous from 'glamorous';

const Text = glamorous.div({
  color: 'white',
});

class Hotel extends React.Component {
  render() {
    return (
      <Text>
        <h1>Hotel</h1>
      </Text>
    );
  }
}

export default Hotel;
