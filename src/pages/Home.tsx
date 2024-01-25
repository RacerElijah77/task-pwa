// Main homepage for TASK application
import {
  IonButtons,
  IonContent,
  IonHeader,
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
    <IonPage>
      <IonHeader>
        {/*Toolbar with hamburger menu */}
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton
              autoHide={false}
              color="primary-task"
            ></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div>
          Remove Later - Section for Modules will go here (another JSX
          component)
          <LessonModuleSection/>
        </div>
        <div>
          Remove Later - Section for Event Dates will go here (another JSX
          component)
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
