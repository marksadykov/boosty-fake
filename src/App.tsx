import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import UserCommunities from "./pages/UserCommunities";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <UserCommunities />
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
