import { useState } from "react";
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"

const defaultMarkDown: string = `
# Welcome to my React Markdown Previewer!
# hello world
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

function App() {

  const [editorIsMaximize, setEditorIsMaximize] = useState<boolean>(false);
  const [previewIsMaximize, setPreviewIsMaximize] = useState<boolean>(false);

  const [markDownText, setMarkDownText] = useState<string>(defaultMarkDown);

  const editorIsHidden = previewIsMaximize;
  const previewIsHidden = editorIsMaximize;

  return (
    <div className="min-h-screen bg-backgroundColor py-4">
      <Editor isMaximize={editorIsMaximize} setIsMaximize={setEditorIsMaximize} isHidden={editorIsHidden} markDownText={markDownText} setMarkDownText={setMarkDownText}/>
      <Previewer isMaximize={previewIsMaximize} setIsMaximize={setPreviewIsMaximize} isHidden={previewIsHidden} markDownText={markDownText}/>
    </div>
  )
}

export default App
