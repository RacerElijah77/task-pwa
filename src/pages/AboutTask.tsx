// About TASK page for the application
// Data should include the latest version build
// How data is being collected, etc.
// Current/Past contributors of the project, etc.

import { IonButtons, IonContent, IonPage, IonTitle } from "@ionic/react";
import SideBar from "./SideBar";
import ToolBarMain from "../components/ToolBarMain";

const AboutTask: React.FC = () => {
  return (
    <>
      <SideBar />
      <IonPage id="main-side-content">
        <ToolBarMain toolBarTitle="About TASK"/>
        <IonContent fullscreen className="ion-padding">
          <IonTitle className="text-xl">This is the About Page</IonTitle>
        </IonContent>
      </IonPage>
    </>
  );
};

export default AboutTask;
