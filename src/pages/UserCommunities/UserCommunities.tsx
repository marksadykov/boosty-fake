import {
  Avatar,
  Button,
  ButtonGroup,
  Group,
  List,
  NavIdProps,
  Panel,
  SimpleCell,
  Tabs,
  TabsItem,
  Text,
  Title,
} from "@vkontakte/vkui";
import styles from "./UserCommunities.module.scss";

import { ReactComponent as EthereumIcon } from "./icons/etherium-circle-line.svg";
import { ReactComponent as PolygonIcon } from "./icons/polygon.svg";
import AvatarImg from "./imgs/Avatar.svg";
import GroupAvatar1 from "./imgs/Group_Avatar1.png";
import GroupAvatar2 from "./imgs/Group_Avatar2.png";
import GroupAvatar3 from "./imgs/Group_Avatar3.png";
import GroupAvatar4 from "./imgs/Group_Avatar4.png";
import HeaderImg from "./imgs/Header_Space.svg";

interface Props extends NavIdProps {
  openCommunity: () => void;
}

const UserCommunities = ({ openCommunity, ...props}: Props) => {
  return (
    <Panel {...props}>
      <img className={styles.header_img} src={HeaderImg} />
      <div className={styles.avatar}>
        <Avatar size={100} src={AvatarImg} withBorder={false} />
      </div>
      <Group separator="hide" mode="plain">
        <Title level="1" className={styles.avatar_title}>
          Title 1
        </Title>
        <ButtonGroup
          mode="horizontal"
          gap="m"
          className={styles.avatar_buttons}
        >
          <Button size="l" appearance="positive" before={<EthereumIcon />}>
            Ethereum
          </Button>
          <Button size="l" appearance="neutral" before={<PolygonIcon />}>
            Polygon
          </Button>
        </ButtonGroup>
      </Group>

      <Group mode="plain">
        <Tabs>
          <TabsItem selected>Все Сообщества</TabsItem>
          <TabsItem>Мои NFT Сообщества</TabsItem>
        </Tabs>
        <List>
          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar1} />}
            indicator={<Text>Искусство</Text>}
            onClick={openCommunity}
          >
            Monkey food
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar2} />}
            indicator={<Text>Культура</Text>}
          >
            Breathing space
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar3} />}
            indicator={<Text>Модерн</Text>}
          >
            Ghost town collection
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} src={GroupAvatar4} />}
            indicator={<Text>Реализм</Text>}
          >
            Ghost town collection
          </SimpleCell>
        </List>
      </Group>
    </Panel>
  );
};

export default UserCommunities;
