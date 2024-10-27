import Button from '@mui/material/Button';

const Home = ({ user }) => {
  console.log('test user', user);

  return (
    <>
      <h1>Test App</h1>
      <Button variant="contained" onClick={() => alert('Test button')}>
        Test MUI Button
      </Button>
    </>
  );
};

export default Home;
