import Heading from './Heading';
import AppProvider from '../context/appContext';

const Layout = ({ children, user }) => {
  return (
    <AppProvider>
      <Heading user={user} />
      {children}
    </AppProvider>
  );
};

export default Layout;
