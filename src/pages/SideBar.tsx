// Sidepage menu when the user clicks the hamburger menu
import {
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./SideBar.css";

const SideBar: React.FC = () => {
  return (
    <IonMenu contentId="main-home-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>TASK Menu Content</IonTitle>
        </IonToolbar>
        {/* Implement later */}
        <IonContent>Lesson Modules</IonContent>
        <IonContent>Misc. Section 1</IonContent>
        <IonContent>Misc. Section 2</IonContent>
        <IonContent>Progress</IonContent>
        <IonContent>Settings</IonContent>
      </IonHeader>
      <IonFooter>About TASK</IonFooter>
    </IonMenu>
  );
};

export default SideBar;
