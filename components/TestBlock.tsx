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

function TestBlock({ children }: PropsWithChildren) {
  const code = useMemo(
    () =>
      createFileMap(React.Children.toArray(children)[0] as React.ReactElement),
    [children]
  );

  return (
    <SandpackProvider
      template="react-ts"
      files={{ "App.tsx": code }}
      //   customSetup={{ dependencies: { "framer-motion": "latest" } }}
    >
      <SandpackLayout className="mb-2">
        <SandpackCodeEditor />
      </SandpackLayout>

      <SandpackLayout>
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default TestBlock;
