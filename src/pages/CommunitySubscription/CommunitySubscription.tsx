import {
  Avatar,
  Button,
  Div,
  Group,
  NavIdProps,
  Panel,
  SimpleCell,
  Text,
  Title,
} from "@vkontakte/vkui";
import styles from "./CommunitySubscription.module.scss";

import EtherCoin from "./imgs/EtherCoin.png";
import GroupAvatar from "./imgs/GroupAvatar.svg";
import GroupAvatar1 from "./imgs/GroupAvatar1.png";
import HeaderImg from "./imgs/Header_Space.svg";
interface Props extends NavIdProps{
  setShowModal: () => void;
}

const CommunitySubscription = ({ setShowModal,...props }: Props) => {
  return (
    <Panel {...props}>
      <img className={styles.header_img} src={HeaderImg} />
      <div className={styles.avatar}>
        <Avatar size={100} src={GroupAvatar} withBorder={false} />
      </div>
      <Group separator="hide" mode="plain">
        <div className={styles.avatar_group}>
          <Title level="1" className={styles.avatar_title}>
            Monkey Food
          </Title>
          <Text weight="1" className={styles.avatar_subtitle}>
            Сообщество крипто-коллекционирования
          </Text>
          <Button size="l" appearance="positive">
            Подписаться
          </Button>
        </div>
      </Group>

      <Group mode="plain">
        <Div className={styles.collections_table}>
          <Text className={styles.text_secondary}>Коллекция</Text>
          <Text className={styles.text_secondary}>Количество</Text>
          <Text className={styles.text_secondary}>Стандарт</Text>
          <Text className={styles.text_secondary}>Продолжительность</Text>
          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar1} />}
            indicator={<Text>Искусство</Text>}
            subtitle="John Dilinger"
            onClick={setShowModal}
          >
            Cantaro Miura in postapocalyptic world
          </SimpleCell>

          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text>35 файлов</Text>
          </Div>
          <SimpleCell before={<Avatar size={48} src={EtherCoin} />}>
            ERC 721
          </SimpleCell>
          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text className={styles.simpleCell_center}>50 дней</Text>
          </Div>

          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar1} />}
            indicator={<Text>Искусство</Text>}
            subtitle="John Dilinger"
          >
            Cantaro Miura in postapocalyptic world
          </SimpleCell>

          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text>35 файлов</Text>
          </Div>
          <SimpleCell before={<Avatar size={48} src={EtherCoin} />}>
            ERC 721
          </SimpleCell>
          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text className={styles.simpleCell_center}>50 дней</Text>
          </Div>

          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar1} />}
            indicator={<Text>Искусство</Text>}
            subtitle="John Dilinger"
          >
            Cantaro Miura in postapocalyptic world
          </SimpleCell>

          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text>35 файлов</Text>
          </Div>
          <SimpleCell before={<Avatar size={48} src={EtherCoin} />}>
            ERC 721
          </SimpleCell>
          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text className={styles.simpleCell_center}>50 дней</Text>
          </Div>

          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar1} />}
            indicator={<Text>Искусство</Text>}
            subtitle="John Dilinger"
          >
            Cantaro Miura in postapocalyptic world
          </SimpleCell>

          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text>35 файлов</Text>
          </Div>
          <SimpleCell before={<Avatar size={48} src={EtherCoin} />}>
            ERC 721
          </SimpleCell>
          <Div className={[styles.text_cell, styles.text_secondary].join(" ")}>
            <Text className={styles.simpleCell_center}>50 дней</Text>
          </Div>
        </Div>
      </Group>
    </Panel>
  );
};

export default CommunitySubscription;
