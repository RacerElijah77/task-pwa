// React Component that entire Module sction in the Home.jsx Page
// Want to use this component in the Home.jsx Page
// Goal - attempt to figure out how to store an ARRAY of these lesson module instance buttons

import { IonCol, IonGrid, IonLabel, IonRow } from "@ionic/react";
import LessonModuleInstanceButton from "./LessonModuleInstanceButton";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface moduleNameProp{
  moduleName: string
}

const LessonModuleSection: React.FC<moduleNameProp> = ({moduleName}) => {
  // Note that this information for module title/# is still hardcoded (non real data)
  // this should be dynamically rendered from the database soon
  // Replace "color" attribute with "img" attribute when this is done

  const [moduleInfo, setModuleInfo] = useState([
    {
      moduleID: 0,
      moduleTitle: "Tutorial",
      color: "",
    },
    {
      moduleID: 1,
      moduleTitle: "Food Insecurity",
      color: "",
    },
    {
      moduleID: 2,
      moduleTitle: "What is TASK?",
      color: "",
    },
    {
      moduleID: 3,
      moduleTitle: "Causes of Food Insecurity",
      color: "",
    },
    {
      moduleID: 4,
      moduleTitle: "Financial Assistance Program",
      color: "",
    },
    {
      moduleID: 5,
      moduleTitle: "Advocacy",
      color: "",
    },
  ]);

  return (
    // Temporary styling - remove div and border later
    <div className="pl-2 pr-2">
      <IonLabel className="text-2xl">{moduleName}</IonLabel>
      <div className="flex overflow-x-scroll">
        {/* Utilize map function to loop through data */}
        {moduleInfo.map(function (data) {
          console.log(uuidv4()); // remove later
          return (
            <IonCol>
              <LessonModuleInstanceButton
                key={uuidv4()}
                moduleNumber={data.moduleID}
                moduleTitle={data.moduleTitle}
              />
            </IonCol>
          );
        })}
      </div>
    </div>
  );
};

export default LessonModuleSection;
