import * as React from 'react';
import glamorous from 'glamorous';

const Text = glamorous.div({
  color: 'white',
});

class Gallery extends React.Component {
  render() {
    return (
      <Text>
        <h1>Gallery</h1>
      </Text>
    );
  }
}

export default Gallery;
