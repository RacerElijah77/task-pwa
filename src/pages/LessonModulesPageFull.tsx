// Lesson Modules Page
// This page is similar to what the user would see under the "Lesson Modules" section in the "Home Component"
// But this page will extend the entire viewport (vertical cards instead of horizontal)

import { IonButtons, IonContent, IonPage, IonTitle } from "@ionic/react";
import SideBar from "./SideBar";
import ToolBarMain from "../components/ToolBarMain";

const LessonModulesPageFull: React.FC = () => {
  return (
    <>
      <SideBar />
      <IonPage id="main-side-content">
        <ToolBarMain toolBarTitle="Lesson Modules"/>
        <IonContent fullscreen className="ion-padding">
          <IonTitle className="text-xl">Full Modules Section</IonTitle>
        </IonContent>
      </IonPage>
    </>
  );
};

export default LessonModulesPageFull;
