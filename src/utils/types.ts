import detectEthereumProvider from "@metamask/detect-provider";

export interface ClassConstructor<
  Class extends abstract new (...args: any) => any,
  InstanceInterface = never
> {
  new (...args: ConstructorParameters<Class>): InstanceType<Class> &
    InstanceInterface;
}

export interface Disposable {
  destroy: () => void;
}

async function _() {
  return await detectEthereumProvider();
}
export type MetaMaskEthereumProvider = NonNullable<
  Awaited<ReturnType<typeof _>>
>;

export type ChildrenProps = {
  children?: React.ReactNode;
};
