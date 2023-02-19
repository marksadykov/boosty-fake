import { SplitLayout } from "@vkontakte/vkui";
import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import CommunitySubscription from "./pages/CommunitySubscription";
import DeniedAccessModal from "./pages/CommunitySubscription/components/DeniedAccessModal";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <SplitLayout modal={<DeniedAccessModal />}>
          <CommunitySubscription />
        </SplitLayout>
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
