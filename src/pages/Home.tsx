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
import "./Home.css";
import LessonModuleSection from "../components/LessonModuleSection";

// Might delete the Home TSX files later
const Home: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-home-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>TASK Menu Content</IonTitle>
          </IonToolbar>
          {/* Implement later */}
          <IonContent>Item1 (not finished)</IonContent>
          <IonContent>Item2 (not finished)</IonContent>
          <IonContent>Item3 (not finished)</IonContent>
        </IonHeader>
      </IonMenu>
      <IonPage id="main-home-content">
        <IonHeader>
          {/*Toolbar with hamburger menu */}
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton
                autoHide={false}
                color="primary-task"
              ></IonMenuButton>
            </IonButtons>
            <IonTitle>TASK Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <div className="pt-5">
            {/* will change this into different JSX modules for events, misc stuff*/}
            <LessonModuleSection moduleName="Lesson Modules" />
            <LessonModuleSection moduleName="Upcoming TASK Events" />
            <LessonModuleSection moduleName="Misc. Section" />
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
