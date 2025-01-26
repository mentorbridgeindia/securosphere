import React from "react";
import { Card } from "react-bootstrap";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { json } from "@codemirror/lang-json";
import { ReactComponent as IconCopy } from "@assets/icons/copy.svg";
import "./Redirection.scss";

interface RedirectionProps {
  url: string;
}

const Redirection = ({ url }: RedirectionProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Card className="mb-3 border-0">
      <Card.Body>
        <Card.Text className="mb-3">
          Redirect your users to the following URL to complete their
          registration and authenticate themselves on the SecuroSphere platform.
          This URL will be the central endpoint for managing user sign-ups and
          logins securely.
        </Card.Text>
        <div className="redirection-wrapper d-flex align-items-center gap-2 flex-wrap">
          <div className="code-container">
            <CodeMirror
              value={url}
              theme={vscodeDark}
              editable={false}
              readOnly
              basicSetup={{
                lineNumbers: false,
                bracketMatching: true,
                foldGutter: true,
                syntaxHighlighting: true,
              }}
              extensions={[json()]}
              height="50px"
              onClick={handleCopy}
            />
          </div>
          <div className="copy-icon" onClick={handleCopy}>
            <IconCopy />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Redirection;
