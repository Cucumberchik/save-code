
import { LANGUAGE_VERSIONS } from "@/constants";
import axios from "axios";
import { create } from "zustand";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
  });


const useStateEditorQuery = create<UseStateEditorQuery>((set)=>({
    language: "javascript",
    sourceCode: "",
    output: "",
    setLanguage: (language) => set({language}),
    setSourceCode: (code) => set({sourceCode:code}),
    linkCode: async(id, date) => {

    },
    executeCode: async(language, sourceCode) => {
        const {data} = await API.post("/execute", {
            language: language,
            version: LANGUAGE_VERSIONS[language],
            files: [
              {
                content: sourceCode,
              },
            ],
          });
          set({output: data.run.output})
    }
}));

const useEditor =()=> useStateEditorQuery(state=>state);
export default useEditor;