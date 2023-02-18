import bridge from "@vkontakte/vk-bridge";
import UserProfile from "./components/UserProfile";
import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <UserProfile />
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
