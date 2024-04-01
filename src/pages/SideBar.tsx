// Sidepage menu component when the user clicks the hamburger menu
import {
  IonLabel,
  IonFooter,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonItem,
  IonRouterLink,
} from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Font Awesome imports for sidpage menu icons
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons/faPersonChalkboard";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faCertificate } from "@fortawesome/free-solid-svg-icons/faCertificate";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { fa1 } from "@fortawesome/free-solid-svg-icons/fa1";
import { fa2 } from "@fortawesome/free-solid-svg-icons/fa2";

const SideBar: React.FC = () => {
  return (
    <IonMenu side="start" contentId="main-side-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>TASK Menu</IonTitle>
        </IonToolbar>
        <IonItem routerLink="/Home">
          <FontAwesomeIcon icon={faHouse} className="mr-2" />
          <IonLabel>TASK Home</IonLabel>
        </IonItem>
        <IonItem routerLink="/LessonModulesPageFull">
          <FontAwesomeIcon icon={faPersonChalkboard} className="mr-2" />
          <IonLabel>Lesson Modules</IonLabel>
        </IonItem>
        <IonItem routerLink="/ProgressSummary">
          <FontAwesomeIcon icon={faCertificate} className="mr-2.5" />
          <IonLabel>Certificate/Progress</IonLabel>
        </IonItem>
        <IonItem>
          <FontAwesomeIcon icon={fa1} className="mr-4" />
          <IonLabel>Option 1</IonLabel>
        </IonItem>
        <IonItem>
          <FontAwesomeIcon icon={fa2} className="mr-3.5" />
          <IonLabel>Option 2</IonLabel>
        </IonItem>
        <IonItem routerLink="/Settings">
          <FontAwesomeIcon icon={faGear} className="mr-2" />
          <IonLabel>Settings</IonLabel>
        </IonItem>
      </IonHeader>

      <IonFooter>
        <IonToolbar>
          <IonItem routerLink="/AboutTask">
            <IonTitle>
              <FontAwesomeIcon icon={faCircleInfo} className="pr-2" />
              About
            </IonTitle>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default SideBar;
