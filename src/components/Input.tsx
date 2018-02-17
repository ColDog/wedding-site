import glamorous from 'glamorous';

const Input = glamorous.input({
  border: 'none',
  background: 'none',
  borderBottom: 'thick solid white',
  borderBottomStyle: 'dotted',
  color: 'white',
  width: '100%',
  fontSize: '2em',
  '::placeholder-color': {
    color: 'white',
  },
});

export default Input;
