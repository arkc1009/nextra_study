import { SandpackFile } from "@codesandbox/sandpack-react";
import React, { PropsWithChildren } from "react";

function getCode(codeSnippets: React.ReactElement<PropsWithChildren>) {
  const Pre = codeSnippets;
  console.log("Pre:", Pre);

  const Code = codeSnippets.props
    .children as React.ReactElement<PropsWithChildren>;
  console.log("Code:", Code);

  const Lines = Code.props.children;
  console.log("lines:", Lines);

  const lineStrings = React.Children.map(Lines, (child) => {
    console.log(React.isValidElement(child));
    if (React.isValidElement(child)) {
      const line = child as React.ReactElement<
        PropsWithChildren<{ className: "line" }>
      >;

      console.log("line:", line);

      const words = line.props.children;
      console.log("words:", words, typeof words !== "object");
      if (typeof words !== "object") return "\n";

      const wordStrings = React.Children.map(
        words,
        (word) =>
          (word as React.ReactElement<PropsWithChildren>).props
            .children as string
      );

      return wordStrings.join("");
    } else {
      return child as "\n";
    }
  });

  console.log("code:", lineStrings.join(""));
  return lineStrings.join("");
}

export const createFileMap = (
  codeSnippets: React.ReactElement
  //   codeSnippets: (
  //     | string
  //     | number
  //     | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  //     | Iterable<React.ReactNode>
  //     | React.ReactPortal
  //   )[]
) => {
  // {
  //     code: string;
  //     hidden?: boolean;
  //     active?: boolean;
  //     readOnly?: boolean;
  // }
  let result: SandpackFile = { code: "" };
  const code = getCode(codeSnippets as React.ReactElement);
  result.code = code;

  return result;
  //   codeSnippets.map((code) => {
  //     getCode(code as React.ReactElement);
  //   });
};
