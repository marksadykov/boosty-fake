import UserProfile from "./components/UserProfile";
import VKUIWrapper from './wrappers/VKUIWrapper'

const App = () => {
  return (
      <VKUIWrapper>
          <UserProfile />
      </VKUIWrapper>
  );
};

export default App;
