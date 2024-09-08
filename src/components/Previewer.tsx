import { marked } from "marked";

interface PreviewProps {
  isMaximize: boolean;
  setIsMaximize: (isMaximize: boolean) => void;
  isHidden: boolean;
  markDownText: string;
}


function Previewer({isMaximize, setIsMaximize, isHidden, markDownText}: PreviewProps) {

  const toggleMaximize = () => {
    setIsMaximize(!isMaximize);
  }

  const createMarkup = () => ({__html: marked(markDownText)})


   return (
    <div className={`${isHidden ? "hidden" : "block"} max-w-screen-md lg:max-w-screen-lg shadow-lg mx-auto border-black border-2 mt-5`}>
        <div className="w-full flex justify-between items-center bg-headerColor text-black px-3 py-1 border-b-black border-b-2 shadow-md">
            <h2 className="capitalize font-bold text-lg">Previewer</h2>
            <button onClick={toggleMaximize} className="hover:text-green-300">
              {
                !isMaximize ? 
                <i className="fa-solid fa-maximize"></i> :
                <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
              }
            </button>
        </div>
        <div id="preview" className={`w-full bg-textColor p-1 border-none outline-none ${!isMaximize ? "min-h-40" : "min-h-screen"} markdown`} dangerouslySetInnerHTML={createMarkup()}>
        </div>
    </div>
  )
}

export default Previewer