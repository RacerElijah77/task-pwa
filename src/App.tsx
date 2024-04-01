import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Theme variables */
import "./theme/variables.css";
import "./theme/tailwind.css";


// Page imports
import Home from "./pages/Home";
import LaunchScreen from "./pages/LaunchScreen";
import AboutAppIntro from "./pages/AboutAppIntro";
import AboutTask from "./pages/AboutTask";
import LessonModulesPageFull from "./pages/LessonModulesPageFull";
import Settings from "./pages/Settings";
import ProgressSummary from "./pages/ProgressSummary";
import SideBar from "./pages/SideBar";


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <SideBar/>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/LaunchScreen" component={LaunchScreen} />
        <Route exact path="/AboutAppIntro" component={AboutAppIntro} />
        <Route exact path="/" component={LaunchScreen} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/AboutTask" component={AboutTask} />
        <Route exact path="/LessonModulesPageFull" component={LessonModulesPageFull} />
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/ProgressSummary" component={ProgressSummary} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
