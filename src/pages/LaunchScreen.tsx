import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./LaunchScreen.css";
import MainNavButton from '../components/MainNavButton';

const LaunchScreen: React.FC = () => {

  // The ionic button might be its own component for now
  return (
    <IonPage>
      <div className="h-screen flex gap-y-10 flex-col items-center justify-center bg-cover bg-gradient-to-r from-orange-500 to-yellow-300">
        <IonImg src="images/task_logo_intro.png" alt="TASK Logo"></IonImg>
        <IonLabel className="text-3xl text-center">
          Welcome to the TASK Learning Module App!
        </IonLabel>
        <IonButton shape="round" color="secondary" routerLink="/AboutAppIntro">
          Next
        </IonButton>
        <MainNavButton color="primary" routerLink="/AboutAppIntro" text="Next"/>
      </div>
    </IonPage>
  );
};

export default LaunchScreen;
