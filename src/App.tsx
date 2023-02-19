import { Root, SplitCol, SplitLayout, View } from "@vkontakte/vkui";
import { useState } from "react";
import { ChainConnectionProvider } from "./contexts/ChainConnectionContext";
import CommunitySubscription from "./pages/CommunitySubscription";
import DeniedAccessModal from "./pages/CommunitySubscription/components/DeniedAccessModal";
import GetAccessModal from "./pages/CommunitySubscription/components/GetAccessModal";
import UserCommunities from "./pages/UserCommunities";
import VKUIWrapper from "./wrappers/VKUIWrapper";

const App = () => {
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [showDeniedModal, setShowDeniedModal] = useState(false);
  const [activePanel, setActivePanel] = useState("Communities");
  const modal = showAccessModal ? (
    <GetAccessModal showDeniedModal={() => setShowDeniedModal(true)} />
  ) : showDeniedModal ? (
    <DeniedAccessModal setHideModal={() => setShowDeniedModal(false)} />
  ) : null;
  return (
    <VKUIWrapper>
      <ChainConnectionProvider>
        <SplitLayout modal={modal}>
          <SplitCol>
            <Root activeView="rootView">
              <View activePanel={activePanel} id="rootView">
                <UserCommunities
                  nav="Communities"
                  openCommunity={() => setActivePanel("Community")}
                />
                <CommunitySubscription
                  nav="Community"
                  setShowModal={() => setShowAccessModal(true)}
                />
              </View>
            </Root>
          </SplitCol>
        </SplitLayout>
      </ChainConnectionProvider>
    </VKUIWrapper>
  );
};

export default App;
