import { createContext } from "react";
import { initialQuestionsContext } from "./initialQuestionsContext";

export const QuestionsContext = createContext(initialQuestionsContext);