// Sidepage menu component when the user clicks the hamburger menu
import {
  IonLabel,
  IonFooter,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonItem,
} from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Font Awesome imports for sidpage menu icons
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons/faPersonChalkboard";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faCertificate } from "@fortawesome/free-solid-svg-icons/faCertificate";
import { fa1 } from "@fortawesome/free-solid-svg-icons/fa1";
import { fa2 } from "@fortawesome/free-solid-svg-icons/fa2";

import "./SideBar.css";

const SideBar: React.FC = () => {
  return (
    <IonMenu contentId="main-home-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>TASK Menu</IonTitle>
        </IonToolbar>
        <IonItem>
          <FontAwesomeIcon icon={faPersonChalkboard} className="mr-2" />
          <IonLabel>Lesson Modules</IonLabel>
        </IonItem>
        <IonItem>
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
        <IonItem>
          <FontAwesomeIcon icon={faGear} className="mr-2" />
          <IonLabel>Settings</IonLabel>
        </IonItem>
      </IonHeader>

      <IonFooter>
        <IonToolbar>
          <IonTitle>
            <FontAwesomeIcon icon={faCircleInfo} className="pr-2" />
            About TASK
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default SideBar;
