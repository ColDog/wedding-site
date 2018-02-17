import * as React from 'react';
import glamorous from 'glamorous';
import Landing from './Landing';
import Info from './Info';

const Main = glamorous.main({
  width: '100%',
  height: '100%',
});

class App extends React.Component {
  state = { authenticated: true, warning: null, password: '', id: null };

  handleAuthenticated = () => {
    this.setState({ authenticated: true });
    // localStorage.setItem('key', );
  }

  render() {
    const { authenticated } = this.state;

    return (
      <Main>
        {!authenticated &&
          <Landing onAuthenticated={this.handleAuthenticated} />
        }
        {authenticated &&
          <Info />
        }
      </Main>
    );
  }
}

export default App;
