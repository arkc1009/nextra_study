import React, { PropsWithChildren } from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import TestBlock from "./components/TestBlock";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/arkc1009/nextra_study",
  },
  chat: {
    link: "https://discord.com",
    icon: <div>Chat!@!!@!@!@!@</div>,
  },
  docsRepositoryBase: "https://github.com/arkc1009/nextra_study",
  footer: {
    text: "Nextra Docs Template",
  },
  useNextSeoProps: () => ({ titleTemplate: "%s - STUDY" }),
  components: {
    TestA: () => <div>What? The? Component?</div>,
    MyCodePack: ({
      children,
      tab = false,
    }: PropsWithChildren<{ tab?: boolean }>) =>
      children ? <TestBlock tab={tab}>{children}</TestBlock> : null,
  },
};

export default config;
