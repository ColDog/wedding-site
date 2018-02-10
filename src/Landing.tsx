import * as React from 'react';
import glamorous from 'glamorous';
import { text, password } from './config';

const CardAction = glamorous.div({
  backgroundColor: '#b56600',
  height: '350px',
  minWidth: '500px',
  flex: 1,
  borderRadius: '3px',
});

const CardContainer = glamorous.div({
  width: '100%',
  minHeight: '350px',
  position: 'relative',
  marginTop: '150px',
  display: 'flex',
  alignItems: 'center',
});

const CardBanner = glamorous.div({
  backgroundColor: '#af7223',
  height: '200px',
  flex: 1,
});

const Title = glamorous.h1({
  textAlign: 'center',
  color: 'white',
});

const Date = glamorous.h2({
  textAlign: 'center',
  color: 'white',
});

const Form = glamorous.form({
  textAlign: 'center',
  width: '100%',
  paddingTop: '80px',
});

const FormControl = glamorous.div({});

const Label = glamorous.p({
  color: 'white',
});

const Button = glamorous.button({
  marginTop: '20px',
  backgroundColor: '#eee',
});

const Input = glamorous.input({
  border: 'none',
  background: 'none',
  borderBottom: 'thick solid white',
  borderBottomStyle: 'dotted',
});

class Landing extends React.Component<any, any> {
  state = { warning: null, password: '' };

  handleAuthenticate = (e: any) => {
    e.preventDefault();
    if (this.state.password === password) {
      this.setState({ warning: null, password: null });
      this.props.onAuthenticated();
    } else {
      this.setState({ warning: 'Invalid Password', password: null });
    }
  }

  handlePasswordChange = (e: any) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <CardContainer id="Landing">
        <CardBanner />
        <CardAction>
          <Title>{text.title}</Title>
          <Date>{text.date}</Date>
          <Form onSubmit={this.handleAuthenticate}>
            <FormControl>
              {this.state.warning ?
                <Label>{this.state.warning}</Label> :
                <Label>Enter Password</Label>
              }
              <Input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </FormControl>
            <FormControl>
              <Button>
                RSVP
            </Button>
            </FormControl>
          </Form>
        </CardAction>
        <CardBanner />
      </CardContainer>
    );
  }
}

export default Landing;
