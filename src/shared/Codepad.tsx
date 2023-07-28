import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can choose a different theme if needed
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'; //another theme

interface comingProps {
  children: string;
}
const CodePad = ({ children }: comingProps) => {
  return (
    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodePad;
