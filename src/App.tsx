import UserProfile from "./components/UserProfile";
import VKUIWrapper from './wrappers/VKUIWrapper'
import bridge from '@vkontakte/vk-bridge';
import {initApp} from './utils/vk';



const App = () => {
    bridge.send('VKWebAppInit', {});
    initApp();

  return (
      <VKUIWrapper>
          <UserProfile />
      </VKUIWrapper>
  );
};

export default App;
