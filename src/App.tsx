import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import CommunitySubscription from "./pages/CommunitySubscription";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <CommunitySubscription />
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
