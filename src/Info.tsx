import * as React from 'react';
import glamorous from 'glamorous';
import { images } from './config';
import RSVP from './RSVP';
import Venue from './Venue';
import Gallery from './Gallery';
import Hotel from './Hotel';

const Container = glamorous.main({
  width: '100%',
  height: '100%',
});

const Panels = images.map(url =>
  glamorous.div({
    width: '2500px',
    height: '100%',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    transition: 'left 3s linear',
  })
);

const CardComponents = {
  'RSVP': RSVP,
  'The Big Day': Venue,
  'Where to Stay': Hotel,
  'Gallery': Gallery,
};

const CardContainer = glamorous.div({
  width: '100%',
  minHeight: '800px',
  position: 'relative',
  marginTop: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  zIndex: 15,
});

const Card = glamorous.div({
  minHeight: '800px',
  minWidth: '600px',
  maxWidth: '600px',
  flex: 2,
  borderRadius: '15px',
  marginRight: '200px',
  marginTop: '50px',
  padding: '20px',
});

const Tab = glamorous.a({
  backgroundColor: '#8BA7C2',
  borderRadius: '5px',
  textAlign: 'center',
  textDecoration: 'none',
  padding: '10px',
  marginRight: '5px',
  marginBottom: 0,
  color: 'white',
});

const CardBody = glamorous.div({
  backgroundColor: '#8BA7C2',
  margin: 0,
  padding: '10px',
  minHeight: '700px',
});

const CardTabs = glamorous.div({
  margin: 0,
});

class Info extends React.Component {
  state = { selected: 0, tab: 'RSVP' };
  cancel = 0;

  componentDidMount() {
    this.cancel = setInterval(this.poller.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.cancel);
  }

  handleTabClick(tab: string) { this.setState({ tab: tab }); }

  poller() {
    let { selected } = this.state;
    if (selected + 1 >= Panels.length) {
      selected = 0;
    } else {
      selected += 1;
    }
    this.setState({ selected: selected });
  }

  styles(idx: number) {
    const { selected } = this.state;
    const current = idx === selected;
    const next = idx === selected + 1 || (idx === 0 && selected + 1 >= Panels.length);
    const width = window.screen.width;

    if (current) {
      return { left: 0, zIndex: 10 };
    } else if (next) {
      return { left: width, height: 0, zIndex: 5 };
    } else {
      return { left: -width, zIndex: 5 };
    }
  }

  render() {
    const { tab } = this.state;
    return (
      <Container id="Info">
        {Panels.map((panel, idx) =>
          React.createElement(panel, {
            key: idx,
            style: this.styles(idx),
          }))
        }
        <CardContainer>
          <Card>
            <CardTabs>
              {Object.keys(CardComponents).map(key =>
                <Tab
                  key={key}
                  href={`#`}
                  onClick={this.handleTabClick.bind(this, key)}
                >
                  {key}
                </Tab>
              )}
            </CardTabs>
            <CardBody>
              {React.createElement(CardComponents[tab])}
            </CardBody>
          </Card>
        </CardContainer>
      </Container>
    );
  }
}

export default Info;
