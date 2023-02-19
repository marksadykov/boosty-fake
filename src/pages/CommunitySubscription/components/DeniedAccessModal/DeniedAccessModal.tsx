import {
  Button,
  Group,
  Link,
  ModalPage,
  ModalRoot,
  Title,
} from "@vkontakte/vkui";
import styles from "./DeniedAccessModal.module.scss";
import { ReactComponent as CloseIcon } from "./icons/close.svg";

interface Props {
  setHideModal: () => void;
}

const DeniedAccessModal = ({ setHideModal }: Props) => {
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
};

export default DeniedAccessModal;
