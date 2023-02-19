import { SplitLayout } from "@vkontakte/vkui";
import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import CommunitySubscription from "./pages/CommunitySubscription";
import GrantedAccessModal from "./pages/CommunitySubscription/components/GrantedAccessModal";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <SplitLayout modal={<GrantedAccessModal />}>
          <CommunitySubscription />
        </SplitLayout>
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
