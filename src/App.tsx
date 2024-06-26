import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import LaunchScreen from './pages/LaunchScreen';
import AboutAppIntro from './pages/AboutAppIntro';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Theme variables */
import './theme/variables.css';
import './theme/tailwind.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/LaunchScreen" component={LaunchScreen} />
        <Route exact path="/" component={LaunchScreen} />
        <Route exact path="/AboutAppIntro" component={AboutAppIntro} />
        <Route exact path="/Home" component={Home} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
