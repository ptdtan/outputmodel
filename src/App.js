import "./styles.css";
import "./mime-icons.css";
import { GetApp, Visibility } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

function FileCards(props) {
  const { files, onDownload, onPreview, ...rest } = props;
  const randid = "_" + Math.random().toString(36).substr(2, 9);
  const idMap = {};
  for (let i = 0; i < files.length; ++i) {
    idMap[`${randid}${i}`] = files[i].name;
  }
  const _onDownload = function (e) {
    console.log(e);
  };
  const cards = files.map((f, i) => (
    <div className="file-card bp3-elevation-2 bp3-card bp3-interactive">
      <div className="card-head">
        <div className={`mime-icon ico-${f.ext}`}>
          <div className="ico" />
        </div>
        <p>{f.name}</p>
      </div>
      <div>
        <IconButton
          onClick={_onDownload}
          variant="outlined"
          color="primary"
          aria-label="Download"
        >
          <GetApp id={`${randid}${i}`} />
        </IconButton>
        <IconButton
          onClick={onPreview}
          variant="outlined"
          color="primary"
          aria-label="Preview"
        >
          <Visibility />
        </IconButton>
      </div>
    </div>
  ));
  return <div>{cards}</div>;
}

export default function App() {
  const files = [
    {
      name: "Text file",
      ext: "txt"
    },
    {
      name: "Image file",
      ext: "jpeg"
    },
    {
      name: "Unknown file",
      ext: "nan"
    }
  ];
  return <FileCards files={files} />;
}
