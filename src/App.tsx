import bridge from "@vkontakte/vk-bridge";
import UserProfile from "./components/UserProfile";
import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import { initApp } from "./utils/vk";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  bridge.send("VKWebAppInit", {});
  initApp();

  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <UserProfile />
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
