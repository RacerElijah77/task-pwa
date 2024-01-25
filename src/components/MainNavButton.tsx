// Resuable button component for navigation
import {
  IonButton,
} from "@ionic/react";

interface MainNavButtonProps {
    color: string;
    routerLink: string;
    text: string;
}

const MainNavButton: React.FC<MainNavButtonProps> = ({color, routerLink, text}) => {
  return <IonButton shape="round" color={color} routerLink={routerLink}>{text}</IonButton>;
};

export default MainNavButton;
