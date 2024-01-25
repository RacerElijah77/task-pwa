// React Component that entire Module sction in the Home.jsx Page
// Want to use this component in the Home.jsx Page
// Goal - attempt to figure out how to store an ARRAY of these lesson module instance buttons

import { IonLabel } from "@ionic/react";
import LessonModuleInstanceButton from "./LessonModuleInstanceButton";

const LessonModuleSection: React.FC = () => {
  return (
    
      <div className="border-4 border-rose-500">
        <IonLabel className="text-2xl">Lesson Modules</IonLabel>
        <LessonModuleInstanceButton />
        <LessonModuleInstanceButton />
        <LessonModuleInstanceButton />
      </div>
  );
};

export default LessonModuleSection;
