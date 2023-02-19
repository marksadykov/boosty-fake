import {
  Button,
  FormItem,
  FormLayout,
  Group,
  Image,
  Input,
  ModalPage,
  ModalRoot,
  Title,
} from "@vkontakte/vkui";
import { BigNumber } from "ethers";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ChainConnectionContext } from "../../../../contexts/ChainConnectionContext";
import { useLateInitContext } from "../../../../hooks/useLateInitContext";
import useLocalStore from "../../../../hooks/useLocalStore";
import ERCInteractionStore from "../../../../stores/ERCInteractionStore";
import styles from "./GetAccessModal.module.scss";
import Collection from "./imgs/Collection.png";

interface Props {
  showDeniedModal: () => void;
}
const GetAccessModal = observer(({ showDeniedModal }: Props) => {
  const chainConnection = useLateInitContext(ChainConnectionContext);

  const ercInteractionStore = useLocalStore(
    ERCInteractionStore,
    chainConnection
  );

  const onClickCreate = () => {
    if (!chainConnection.isInit || !chainConnection.currentAccount) return;
    ercInteractionStore.createNFT("test", "TST", BigNumber.from(10));
  };

  useEffect(() => {
    if (ercInteractionStore.isError) {
      showDeniedModal();
    }
  }, [ercInteractionStore.isError]);
  return (
    <ModalRoot activeModal={"GET_ACCESS"}>
      <ModalPage id={"GET_ACCESS"} settlingHeight={100}>
        <Group mode="plain">
          <div className={styles.access_group}>
            <Title level="1" weight="1">
              Art Cleric club
            </Title>
            <Image
              size={144}
              src={Collection}
              className={styles.collection_image}
            />
            <FormLayout className={styles.access_group}>
              <FormItem>
                <Input value="https://adress.com/cleric" />
              </FormItem>
              <FormItem>
                <Input value="id7785346" />
              </FormItem>
              <FormItem className={styles.form_item_center}>
                <Button size="l" appearance="positive" onClick={onClickCreate}>
                  Получить доступ
                </Button>
              </FormItem>
            </FormLayout>
          </div>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
});

export default GetAccessModal;
