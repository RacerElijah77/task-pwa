import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./AboutAppIntro.css";

const AboutAppIntro: React.FC = () => {

  // The ionic button might be its own component for now
  return (
    <IonPage>
      <div className="h-screen flex gap-y-10 flex-col items-center justify-center bg-cover bg-gradient-to-r from-orange-500 to-yellow-300">
        <IonLabel className="text-3xl text-center">
          What is this app for?
        </IonLabel>
        <IonImg src="images/task_logo_intro.png" alt="TASK Logo"></IonImg>
        <IonLabel className="text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur. Massa amet adipiscing
          vestibulum integer porta nulla orci. At viverra iaculis lacinia odio
          placerat.
        </IonLabel>
        <IonButton shape="round" color="secondary" routerLink="/Home">
          OK
        </IonButton>
      </div>
    </IonPage>
  );
};

export default AboutAppIntro;
