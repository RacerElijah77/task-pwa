import {
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./LaunchScreen.css";

const LaunchScreen: React.FC = () =>{
    return (
          <div className= "h-screen flex items-center justify-center">
            <IonImg></IonImg>
            <IonLabel className="text-3xl text-center">
                Welcome to the TASK Learning Module App!
            </IonLabel>
          </div>
    );
};

export default LaunchScreen;