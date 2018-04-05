import * as React from 'react';
import glamorous from 'glamorous';
import { images } from './config';
import RSVP from './RSVP';
import { BigDay, GettingHere, WhereToStay, Gallery } from './Panels';

const Container = glamorous.main({
  width: '100%',
  height: '100%',
});

const Panels = images.map(url =>
  glamorous.div({
    width: '100%',
    height: '100%',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    transition: 'opacity 1s linear',
  })
);

const CardComponents = {
  'RSVP': RSVP,
  'The Big Day': BigDay,
  'Getting Here': GettingHere,
  'Where to Stay': WhereToStay,
  'Gallery': Gallery,
};

const CardContainer = glamorous.div({
  width: '100%',
  minHeight: '900px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  zIndex: 15,
});

const Card = glamorous.div({
  backgroundColor: 'rgba(139, 167, 194, 0.8)',
  minHeight: '800px',
  minWidth: '700px',
  maxWidth: '700px',
  flex: 2,
  borderRadius: '15px',
  marginRight: '200px',
  marginTop: '50px',
  padding: '20px',
});

const Tab = glamorous.a({
  textAlign: 'center',
  textDecoration: 'none',
  padding: '28px',
  marginRight: '5px',
  color: 'white',
  fontSize: '1.2em',
});

const CardBody = glamorous.div({
  margin: 0,
  padding: '10px',
  minHeight: '700px',
});

const CardTabs = glamorous.div({
  paddingBottom: '10px',
});

class Info extends React.Component {
  state = { selected: 0, tab: 'RSVP' };
  cancel = 0;

  handleTabClick(tab: string, selected: number) {
    this.setState({ tab, selected });
  }

  styles(idx: number): any {
    const { selected } = this.state;
    if (idx === selected) {
      return { opacity: 1 };
    }
    return { opacity: 0 };
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
              {Object.keys(CardComponents).map((key, idx) =>
                <Tab
                  key={key}
                  href={`#${key.replace(' ', '-')}`}
                  onClick={this.handleTabClick.bind(this, key, idx)}
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
