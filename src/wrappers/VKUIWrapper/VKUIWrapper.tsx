import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

/**
 * Обертка для настройки VKUI
 * @param children
 * @constructor
 */
const VKUIWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot mode="partial">{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default VKUIWrapper;
