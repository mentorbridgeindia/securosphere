import React from "react";
import { Card } from "react-bootstrap";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { json } from "@codemirror/lang-json";
import { ReactComponent as IconCopy } from "@assets/icons/copy.svg";

interface DecodeJWTProps {
  publicKey: string;
}

const DecodeJWT = ({ publicKey }: DecodeJWTProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(publicKey);
  };

  return (
    <Card className=" mb-3 border-0">
      <Card.Body >
        <Card.Text className="mb-3">
          Decode the JWT token payload using the public key provided below:
        </Card.Text>
        <div
          className="d-flex align-items-center gap-2 flex-wrap"
          style={{
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flexBasis: "80%",
              flexGrow: 1,
              overflow: "hidden",
              minWidth: "0",
            }}
          >
            <CodeMirror
              value={publicKey}
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

          <div
            style={{
              flexBasis: "10%",
              flexGrow: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleCopy}
          >
            <IconCopy />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DecodeJWT;
