// React Component that represents a single large button for module instance
// Will be used as a child in the LessonModuleSection.jsx parent component.

import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface Props {
  moduleNumber: number;
  moduleTitle: string;
}

const LessonModuleInstanceButton: React.FC<Props> = ({
  moduleNumber,
  moduleTitle,
}) => {
  // Research on ion-card Ionic element or Tailwind cards for buttons
  return (
    <IonCard color="primary-task" className="m-0 min-w-40 h-52">
      <IonCardHeader className="absolute bottom-0 left-0">
        <div className="space-y-2">
          <IonCardTitle className="text-lg accordion-animated">{moduleTitle}</IonCardTitle>
          <IonCardSubtitle>Lesson {moduleNumber.toString()}</IonCardSubtitle>
        </div>
      </IonCardHeader>
    </IonCard>
  );
};

export default LessonModuleInstanceButton;
