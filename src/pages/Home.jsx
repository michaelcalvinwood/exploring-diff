import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';
import { useEffect, useState } from 'react';
//import * as Diff from 'diff';
import Diff from '../components/Diff';
const Home = () => {
  const [orig, setOrig] = useState('beep boop');
  const [modified, setModified ] = useState('beep boob blah');



  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='Home__diff'>
          <Diff  orig={orig} modified={modified} />
        </div>
       <div id='display'></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
