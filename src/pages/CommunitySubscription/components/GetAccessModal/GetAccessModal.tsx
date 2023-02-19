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
import styles from "./GetAccessModal.module.scss";
import Collection from "./imgs/Collection.png";


const GetAccessModal = () => {
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
                <Button size="l" appearance="positive">
                  Получить доступ
                </Button>
              </FormItem>
            </FormLayout>
          </div>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
};

export default GetAccessModal;
