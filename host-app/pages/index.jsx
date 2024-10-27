import Button from '@mui/material/Button';
import useModuleComponent from '../hooks/useModuleComponent';
import MODULES from '../utils/constants/modules';

const user = {
  name: 'John Doe',
  email: 'john@email.com',
};

const Home = () => {
  const RemoteApp = useModuleComponent(MODULES.remote.app);
  const TestApp = useModuleComponent(MODULES.test.app);

  return (
    <>
      <h1>Host app</h1>
      <Button variant="contained" onClick={() => alert('Host button')}>
        Host MUI Button
      </Button>
      {RemoteApp && <RemoteApp user={user} />}
      {TestApp && <TestApp user={user} />}
    </>
  );
};

export default Home;
