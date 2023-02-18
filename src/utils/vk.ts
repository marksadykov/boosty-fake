import VKConnect, { VKConnectSubscribeHandler } from "@vkontakte/vk-connect";

const APP_ID = 51558383;

export const initApp = () => {
  const VKConnectCallback: VKConnectSubscribeHandler = (e) => {
    if (e.detail.type === "VKWebAppUpdateConfig") {
      VKConnect.unsubscribe(VKConnectCallback);
    }
  };

  VKConnect.subscribe(VKConnectCallback);
  return VKConnect.send("VKWebAppInit", {})
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
