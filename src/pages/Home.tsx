import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

// Might delete the Home TSX files later
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        {/*Toolbar with hamburger menu */}
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton> 
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div>Section for Modules will go here (another JSX component)</div>
        <div>Section for Event Dates will go here (another JSX component)</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
