import { ChangeEvent } from "react";

interface EditorProps {
  isMaximize: boolean;
  setIsMaximize: (isMaximize: boolean) => void;
  isHidden: boolean;
  markDownText: string;
  setMarkDownText: (markDownText: string) => void;
}

function Editor({isMaximize, setIsMaximize, isHidden, markDownText , setMarkDownText}: EditorProps) {


  const toggleMaximize = () => {
    setIsMaximize(!isMaximize);
  }

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkDownText(e.target.value);
  }

  return (
    <div className={`${isHidden ? "hidden" : "block"} max-w-screen-sm md:max-w-screen-sm shadow-lg mx-auto border-black border-2`}>
        <div className="w-full flex justify-between items-center bg-headerColor text-black px-3 py-1 border-b-black border-b-2 shadow-md">
            <h2 className="capitalize font-bold text-lg">Editor</h2>
            <button onClick={toggleMaximize} className="hover:text-green-300">
              {
                !isMaximize ? 
                <i className="fa-solid fa-maximize"></i> :
                <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
              }
            </button>
        </div>
        <textarea id="editor" value={markDownText} onChange={handleTextArea} className={`w-full bg-textColor p-1 border-none outline-none resize-y ${!isMaximize ? "min-h-40" : "min-h-screen"}`} style={{marginBottom: "-1px"}}></textarea>

    </div>
  )
}

export default Editor