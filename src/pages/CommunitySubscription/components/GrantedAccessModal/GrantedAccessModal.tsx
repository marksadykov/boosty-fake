import {
  Button,
  Group,
  Link,
  ModalPage,
  ModalRoot,
  Title,
} from "@vkontakte/vkui";
import styles from "./GrantedAccessModal.module.scss";
import { ReactComponent as AcceptIcon } from "./icons/accept.svg";

const GrantedAccessModal = () => {
  return (
    <ModalRoot activeModal={"GRANTED_ACCESS"}>
      <ModalPage id={"GRANTED_ACCESS"} settlingHeight={100}>
        <Group mode="plain">
          <div className={styles.access_group}>
            <Title level="2" weight="2" className={styles.access_title}>
              Вы получили доступ к сообществу <Link>Art cleric club</Link>
            </Title>
            <AcceptIcon className={styles.collection_image} />
            <Button size="l" appearance="positive">
              Получить доступ
            </Button>
          </div>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
};

export default GrantedAccessModal;
