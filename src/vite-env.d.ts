/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />


import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}
