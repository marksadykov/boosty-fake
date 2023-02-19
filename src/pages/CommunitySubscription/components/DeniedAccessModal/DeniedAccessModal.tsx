import {
  Button,
  Group,
  Link,
  ModalPage,
  ModalRoot,
  Title
} from "@vkontakte/vkui";
import { BigNumber } from "ethers";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ChainConnectionContext } from "../../../../contexts/ChainConnectionContext";
import { useLateInitContext } from "../../../../hooks/useLateInitContext";
import useLocalStore from "../../../../hooks/useLocalStore";
import ERCInteractionStore from "../../../../stores/ERCInteractionStore";
import styles from "./DeniedAccessModal.module.scss";
import { ReactComponent as CloseIcon } from "./icons/close.svg";

interface Props {
  setHideModal: () => void;
}

const DeniedAccessModal = observer(({ setHideModal }: Props) => {
  const chainConnection = useLateInitContext(ChainConnectionContext);

  const ercInteractionStore = useLocalStore(
    ERCInteractionStore,
    chainConnection
  );

  useEffect(() => {
    if (!chainConnection.isInit || !chainConnection.currentAccount) return;
    const provider = chainConnection.ethersProvider;
    ercInteractionStore.createNFT("test", "TST", BigNumber.from(10));
  }, [chainConnection.isInit, chainConnection.currentAccount]);
  return (
    <ModalRoot activeModal={"DENIED_ACCESS"} onClose={setHideModal}>
      <ModalPage id={"DENIED_ACCESS"} settlingHeight={100}>
        <Group mode="plain">
          <div className={styles.access_group}>
            <Title level="2" weight="2" className={styles.access_title}>
              Доступ к сообществу <Link>Art cleric club</Link> не получен
            </Title>
            <CloseIcon className={styles.collection_image} />
            <Button size="l" appearance="accent" onClick={setHideModal}>
              Вернуться назад
            </Button>
          </div>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
});

export default DeniedAccessModal;
