import * as React from 'react';
import glamorous from 'glamorous';
import { airtableUrl, airtableKey } from './config';

const Form = glamorous.form({
  padding: '5px',
  color: 'white',
  textAlign: 'center',
});

const Input = glamorous.input({
  width: '80%',
  backgroundColor: '#b8c7d6',
  outline: 'none',
  border: 'none',
  marginBottom: '5px',
  color: '#444',
  padding: '10px',
});

const TextArea = glamorous.textarea({
  width: '80%',
  backgroundColor: '#b8c7d6',
  outline: 'none',
  border: 'none',
  marginBottom: '5px',
  color: '#444',
  padding: '10px',
  marginTop: '30px',
});

const Submit = glamorous.button({
  backgroundColor: '#b8c7d6',
  outline: 'none',
  border: 'none',
  marginBottom: '5px',
  color: '#444',
  borderRadius: '10px',
  padding: '10px',
  cursor: 'pointer',
});

const Add = glamorous.button({
  backgroundColor: '#b8c7d6',
  outline: 'none',
  border: 'none',
  marginBottom: '5px',
  color: '#444',
  borderRadius: '10px',
  padding: '10px',
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
        <h1>RSVP</h1>
        <Input
          required={true}
          placeholder="My Name"
          value={name}
          onChange={this.handleUpdateName.bind(this)}
        />

        {guests.map((guest, idx) =>
          <Input
            key={idx}
            placeholder={`Guest ${idx + 1}`}
            value={guest}
            onChange={this.handleUpdateGuest.bind(this, idx)}
          />
        )}
        <Add onClick={this.handleAddGuest.bind(this)}>Add a Guest</Add>

        <TextArea
          placeholder="What will get you dancing?"
          rows={3}
          value={request}
          onChange={this.handleRequest.bind(this)}
        />

        <div>
          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
          {!submitted &&
            <Submit disabled={submitted}>Submit</Submit>
          }
        </div>
      </Form>
    );
  }
}

export default RSVP;
