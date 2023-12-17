import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';
import { useEffect, useState } from 'react';
//import * as Diff from 'diff';
import Diff from '../components/Diff';
const Home = () => {
  const [orig, setOrig] = useState('beep boop');
  const [modified, setModified ] = useState('beep boob blah');
  const [modelId, setModelId] = useState('AcMod_01');

  const models = [
    {
      id: 'AcMod_01',
      name: 'Text Normalization'
    },
    {
      id: 'AcMod_02',
      name: 'CoReference Resolution'
    },
    {
      id: 'AcMod_03',
      name: 'Temporal Identification'
    },
    {
      id: 'AcMod_04',
      name: 'Relevance Determination'
    },
    {
      id: 'AcMod_05',
      name: 'AGI Extractor'
    },
    {
      id: 'AcNLP_01',
      name: 'Query Firewall'
    },
    {
      id: 'AcNLP_02',
      name: 'Temporal Time Correction'
    },
    {
      id: 'AcNLP_03',
      name: 'Quote Correction'
    },
    {
      id: 'AcNLP_04',
      name: 'Noun Phrase Reconciliation'
    },
    {
      id: 'AcNLP_05',
      name: 'Image and Citation Linkification'
    }
  ]

  const selectedModel = models.find(model => model.id === modelId)

  
  return (
    <IonPage>
     
      <IonContent fullscreen>
       <div className="Home__select-container">
        <IonSelect className='Home__select' value={selectedModel.id}>
            {models.map(model => {
              return (
                <IonSelectOption className='Home__option' key={model.id} value={model.id}>
                  {model.name}
                </IonSelectOption>
              )
            })}
          </IonSelect>
       </div>
        <div className='Home__diff'>
          <Diff  orig={orig} modified={modified} />
        </div>
       <div id='display'></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
