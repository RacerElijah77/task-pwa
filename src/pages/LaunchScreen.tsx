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
import "./LaunchScreen.css";

const LaunchScreen: React.FC = () => {

  function handleClick(){
    alert("You Clicked Me!");
  }

  return (
    <IonPage>
        <div className="h-screen flex gap-y-10 flex-col items-center justify-center bg-cover bg-gradient-to-r from-orange-500 to-yellow-300">
        <IonImg src="images/task_logo_intro.png" alt="TASK Logo"></IonImg>
        <IonLabel className="text-3xl text-center">
            Welcome to the TASK Learning Module App!
        </IonLabel>
        <IonButton shape="round" color="secondary" onClick={handleClick}>Next</IonButton>
        </div>
    </IonPage>
  );
};

export default LaunchScreen;
