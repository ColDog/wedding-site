import * as React from 'react';
import glamorous from 'glamorous';
import { text, password, images } from './config';
import Submit from './components/Submit';
import Input from './components/Input';
import FormControl from './components/FormControl';

const CardAction = glamorous.div({
  height: '350px',
  minWidth: '400px',
  maxWidth: '500px',
  borderRadius: '3px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '20px',
});

const CardWrapper = glamorous.div({
  backgroundColor: '#8e6226',
  width: '100%',
  height: '100%',
});

const CardContainer = glamorous.div({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${require('./images/landing.jpg')})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7,
  margin: 0,
  padding: 0,
  paddingTop: '150px',
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

const Label = glamorous.p({
  color: 'white',
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
      <CardWrapper id="Landing">
        <CardContainer>
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
                <Submit>Enter</Submit>
              </FormControl>
            </Form>
          </CardAction>

          {/* Preload images. */}
          {images.map((url, key) =>
            <img key={key} style={{display: 'none'}} src={url} />
          )}
        </CardContainer>
      </CardWrapper>
    );
  }
}

export default Landing;
