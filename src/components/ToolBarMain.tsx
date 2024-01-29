// Toolbar component that contains hamburger menu for quicker navigation of pages

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


interface toolBarProps{
    toolBarTitle: string
}

// might need to have a prop parameter for the toolbar title (will change)
const ToolBarMain: React.FC<toolBarProps> = ({toolBarTitle}) => {
  return (
    <IonHeader>
      {/*Toolbar with hamburger menu */}
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={true} color="primary-task"></IonMenuButton>
        </IonButtons>
        <IonTitle>{toolBarTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default ToolBarMain;
