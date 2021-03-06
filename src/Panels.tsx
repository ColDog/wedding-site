import * as React from 'react';
import Panel from './Panel';
import glamorous from 'glamorous';

const Text = glamorous.p({
  fontSize: '2em',
});

const Heading = glamorous.h4({
  fontSize: '3em',
  margin: '0.67em',
});

const Map = glamorous.img({
  width: '300px',
  height: '300px',
});

const Table = glamorous.table({
  width: '100%',
});

const Tr = glamorous.tr({});

const Td = glamorous.td({
  fontSize: '2em',
  minWidth: '150px',
  verticalAlign: 'top',
  paddingBottom: '1em',
  textAlign: 'left',
});

export const BigDay: React.SFC = () => (
  <Panel title={'The Big Day'}>
    <Text>Please arrive by 3:30 pm to Maan Farm.</Text>
    <Text>
      The wedding will be located in a building right off Vye road. You will
      enter through a large wooden gate.
    </Text>
    <Table>
      <tbody>
      <Tr>
        <Td>3:30 pm</Td>
        <Td>The ceremony will begin in the garden outside of the white barn</Td>
      </Tr>
      <Tr>
        <Td>4:45 pm</Td>
        <Td>Time to enjoy the farm activities</Td>
      </Tr>
      <Tr>
        <Td>6:00 pm</Td>
        <Td>The reception</Td>
      </Tr>
      </tbody>
    </Table>
    <Text>
      Please make sure to bring your dancing shoes, we can’t wait to celebrate
      with you!
    </Text>
  </Panel>
);

export const GettingHere: React.SFC = () => (
  <Panel title={'Getting Here'}>
    <Text>
      Maan Farms<br />
      790 McKenzie Rd, Abbotsford, BC V2S 7N4
    </Text>
    <Text>
      <a
        href={'https://www.google.ca/maps/place/Maan+Farms/@49.0163367,-122.2994426,14z/'
              + 'data=!4m5!3m4!1s0x5484357951518049:0x779f019928a680be!8m2!3d49.0163332!4d-122.2819278'}
      >
        <Map src={require('./images/map.png')} />
      </a>
    </Text>
    <Heading>Parking</Heading>
    <Text>
      Please park in the lot on the corner of McKenzie and Vye Rd (accessed off
      McKenzie) The gate to exit is on Vye Road and you can walk to the wedding
      entrance
    </Text>
  </Panel>
);

export const WhereToStay: React.SFC = () => (
  <Panel title={'Where to Stay'}>
    <Text>
        If you would like to book an accomodation nearby we have secured an
        exclusive rate at the Best Western Plus Regency Inn & Conference Centre.
    </Text>
    <Text>
      You must book by May 15th to receive the prefferred rate of $129 CDN plus
      tax.
    </Text>
    <Text>
      To book call 1 (800) 780-7234 and use group number 1391.
    </Text>
    <Text>
      Please make sure you have planned a safe way to get to your next
      destination.
    </Text>
  </Panel>
);

export const Gallery: React.SFC = () => (
  <Panel title={'Gallery'}>
    <Text>Check back here after the wedding to see some of our favorite moments.</Text>
  </Panel>
);

export const Registry: React.SFC = () => (
  <Panel title={'Registry'}>
    <Text>
      Rebecca Adams and Hari Tamil Selven
    </Text>

    <h1>
      <a href="http://giftregistry.hbc.com/grworks/prj/generic_online/jsp/common/marcole_grw.jsp?rid=4">
        The Bay
      </a>
    </h1>
    <Text>Registry Number: 400138002301</Text>

    <br />

    <h1>
      <a
        href="https://www.bedbathandbeyond.ca/store/gift-registry-search?_requestid=1349354#searchKeywordById=545801790"
      >
        Bed Bath and Beyond
      </a>
    </h1>
    <Text>Registry Number: 545801790</Text>
  </Panel>
);
