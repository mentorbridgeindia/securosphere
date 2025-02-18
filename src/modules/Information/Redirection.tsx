import { ReactComponent as IconCopy } from "@assets/icons/copy.svg";
import { json } from "@codemirror/lang-json";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { Button, Card } from "react-bootstrap";
import "./Redirection.scss";

interface RedirectionProps {
  subDomain: string;
}

const Redirection = ({ subDomain }: RedirectionProps) => {
  const url = "https://" + subDomain + ".securosphere.in/auth/callback";

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Card className="mb-3 border-0">
      <Card.Body>
        <Card.Text className="mb-3 lh-2">
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
            />
          </div>
          <Button
            type="button"
            variant="outline-dark"
            className="copy-icon"
            onClick={handleCopy}
            aria-label="Copy URL"
          >
            <IconCopy />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Redirection;
