import UserProfile from "./components/UserProfile";
import VKUIWrapper from './wrappers/VKUIWrapper'

const App = () => {
  return (
      <VKUIWrapper >
    <div>
      <UserProfile />
    </div>
      </VKUIWrapper>
  );
};

export default App;
