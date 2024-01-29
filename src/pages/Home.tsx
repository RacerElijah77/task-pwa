// Main homepage for TASK application
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LessonModuleSection from "../components/LessonModuleSection";
import SideBar from "./SideBar";
import ToolBarMain from "../components/ToolBarMain";

// Might delete the Home TSX files later
const Home: React.FC = () => {
  return (
    <>
      <SideBar/>
      <IonPage id="main-side-content">
        <ToolBarMain toolBarTitle="TASK Home"/>
        <IonContent fullscreen className="ion-padding">
          <div className="pt-2">
            {/* will change this into different JSX modules for events, misc stuff*/}
            <LessonModuleSection moduleName="Lesson Modules" />
            <LessonModuleSection moduleName="Misc. Section 1"/>
            <LessonModuleSection moduleName="Misc. Section 2"/>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
