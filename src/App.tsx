import { SplitLayout } from "@vkontakte/vkui";
import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import CommunitySubscription from "./pages/CommunitySubscription";
import GetAccessModal from "./pages/CommunitySubscription/components/GetAccessModal";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <SplitLayout modal={<GetAccessModal />}>
          <CommunitySubscription />
        </SplitLayout>
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
