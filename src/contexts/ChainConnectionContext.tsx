import { useEffect } from "react";
import { createLateInitContext } from "../hooks/useLateInitContext";
import useLocalStore from "../hooks/useLocalStore";
import { useMetaMaskProvider } from "../hooks/useMetaMaskProvider";
import ChainConnectionStore from "../stores/ChainConnectionStore";
import { ChildrenProps } from "../utils/types";

export const ChainConnectionContext =
  createLateInitContext<ChainConnectionStore>();

interface ChainConnectionContextProps extends ChildrenProps {}

export const ChainConnectionProvider = ({
  children,
}: ChainConnectionContextProps) => {
  const metaMaskProvider = useMetaMaskProvider();

  const chainContextStore: ChainConnectionStore =
    useLocalStore(ChainConnectionStore);

  useEffect(() => {
    if (!metaMaskProvider) return;
    chainContextStore.init(metaMaskProvider);
  });

  return (
    <ChainConnectionContext.Provider value={chainContextStore}>
      {children}
    </ChainConnectionContext.Provider>
  );
};
