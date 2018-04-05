import * as React from 'react';
import glamorous from 'glamorous';
import { airtableUrl, airtableKey } from './config';
import Input from './components/Input';
import FormControl from './components/FormControl';
import Button from './components/Button';
import Submit from './components/Submit';

const Form = glamorous.form({
  padding: '5px',
  color: 'white',
  textAlign: 'left',
});

class RSVP extends React.Component {
  state = {
    guests: new Array<string>(), name: '', request: '',
    success: '', error: '', submitted: false,
  };

  handleUpdateGuest(idx: number, e: any) {
    let { guests } = this.state;
    guests = guests.slice();
    guests[idx] = e.target.value;
    this.setState({ guests: guests });
  }

  handleUpdateName(e: any) {
    this.setState({ name: e.target.value });
  }

  handleAddGuest(e: any) {
    e.preventDefault();
    let { guests } = this.state;
    guests = guests.slice();
    guests.push('');
    this.setState({ guests: guests });
  }

  handleRequest(e: any) {
    this.setState({ request: e.target.value });
  }

  handleSubmit(e: any) {
    e.preventDefault();

    const body = {
      fields: {
        'Name': this.state.name,
        'Guest 1': this.state.guests[0],
        'Guest 2': this.state.guests[1] || null,
        'Guest 3': this.state.guests[2] || null,
        'Guest 4': this.state.guests[3] || null,
        'Guest 5': this.state.guests[4] || null,
        'Music': this.state.request,
      },
    };
    const req = new Request(airtableUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${airtableKey}`,
      }),
      body: JSON.stringify(body),
    });
    fetch(req)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('RSVP Failed');
        }
        this.setState({ success: 'RSVP Successful', submitted: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: 'Failed to RSVP', submitted: true });
      });
  }

  render() {
    const { guests, name, request, error, success, submitted } = this.state;
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Please tell us who's coming...</h1>
        <FormControl>
          <Input
            required={true}
            placeholder="Please write your first and last name"
            value={name}
            onChange={this.handleUpdateName.bind(this)}
          />
        </FormControl>

        {guests.map((guest, idx) =>
          <FormControl key={idx}>
            <Input
              placeholder={`Guest ${idx + 2}`}
              value={guest}
              onChange={this.handleUpdateGuest.bind(this, idx)}
            />
          </FormControl>
        )}

        <FormControl style={{textAlign: 'center'}}>
          <Button onClick={this.handleAddGuest.bind(this)}>Add a Guest</Button>
        </FormControl>

        <FormControl style={{marginTop: '100px'}}>
          <h1>What will get you dancing?</h1>
          <Input
            placeholder="Please add your favourite song"
            value={request}
            onChange={this.handleRequest.bind(this)}
          />
        </FormControl>

        <FormControl style={{textAlign: 'center'}}>
          <Submit disabled={submitted}>
            {error ? error : success ? success : 'Submit'}
          </Submit>
        </FormControl>
      </Form>
    );
  }
}

export default RSVP;
