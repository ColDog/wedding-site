import * as React from 'react';
import glamorous from 'glamorous';

const Text = glamorous.div({
  color: 'white',
});

class Venue extends React.Component {
  render() {
    return (
      <Text>
        <h1>Venue</h1>
      </Text>
    );
  }
}

export default Venue;
