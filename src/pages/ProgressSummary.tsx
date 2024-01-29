// Progress Summary page for the module completion
// Shows current progress, logic for displaying current score should be here

import { IonButtons, IonContent, IonPage, IonTitle } from "@ionic/react";
import SideBar from "./SideBar";
import ToolBarMain from "../components/ToolBarMain";

const ProgressSummary: React.FC = () => {
  return (
    <>
      <SideBar />
      <IonPage id="main-side-content">
        <ToolBarMain toolBarTitle="Progress & Summary"/>
        <IonContent fullscreen className="ion-padding">
          <IonTitle className="text-xl">This is the Summary Page</IonTitle>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ProgressSummary;
