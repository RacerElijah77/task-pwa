// Settings Page for the TASK PWA
// For now, should have an option for toggling theming (system settings, or light/dark mode independence)

import { IonButtons, IonContent, IonPage, IonTitle } from "@ionic/react";
import SideBar from "./SideBar";
import ToolBarMain from "../components/ToolBarMain";

const Settings: React.FC = () => {
  return (
    <>
      <SideBar />
      <IonPage id="main-side-content">
        <ToolBarMain toolBarTitle="Settings"/>
        <IonContent fullscreen className="ion-padding">
          <IonTitle className="text-xl">This is the Settings Page</IonTitle>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Settings;
