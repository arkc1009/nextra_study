import React, { useMemo } from "react";
import { PropsWithChildren } from "react";
import { createFileMap } from "../utils/createFileMap";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

function TestBlock({ children, tab }: PropsWithChildren<{ tab?: boolean }>) {
  const code = useMemo(
    () =>
      createFileMap(React.Children.toArray(children)[0] as React.ReactElement),
    [children]
  );

  return (
    <SandpackProvider
      template="react-ts"
      files={{ "App.tsx": code }}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
      }}
      //   customSetup={{ dependencies: { "framer-motion": "latest" } }}
    >
      <SandpackLayout className={tab ? "mb-4" : "mb-2"}>
        <SandpackCodeEditor />
      </SandpackLayout>

      <SandpackLayout>
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default TestBlock;
