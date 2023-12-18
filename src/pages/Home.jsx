import { IonButton, IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

//import * as Diff from 'diff';
import Diff from '../components/Diff';
const Home = () => {
  const [orig, setOrig] = useState('beep boop');
  const [modified, setModified ] = useState('beep boob blah');
  const [modelId, setModelId] = useState('AcMod_01');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const models = [
    {
      id: 'AcMod_01',
      name: 'AI Text Normalization'
    },
    {
      id: 'AcMod_02',
      name: 'AI CoReference Resolution'
    },
    {
      id: 'AcMod_03',
      name: 'AI Temporal Identification'
    },
    {
      id: 'AcMod_04',
      name: 'AI Relevance Determination'
    },
    {
      id: 'AcMod_05',
      name: 'AI AGI Extractor'
    },
    {
      id: 'AcNLP_01',
      name: 'NLP Query Firewall'
    },
    {
      id: 'AcNLP_02',
      name: 'NLP Temporal Time Correction'
    },
    {
      id: 'AcNLP_03',
      name: 'NLP Quote Correction'
    },
    {
      id: 'AcNLP_04',
      name: 'NLP Noun Phrase Reconciliation'
    },
    {
      id: 'AcNLP_05',
      name: 'NLP Image and Citation Linkification'
    }
  ]

  console.log('modelId', modelId);

  const selectedModel = models.find(model => model.id === modelId)

  const textNormalization = () => {
    const request = {
      url: `https://api.fusaion.ai:5000/textNormalization`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        text: input
      }
    }

    axios(request)
    .then(response => {
      setOutput(response.data);
      console.log('output', response.data)
    })
    .catch(err => {
      alert('Could not perform Text Normalization')
      console.error(err);
    })
  }

  const coreferenceResolution = () => {
    const request = {
      url: `https://api.fusaion.ai:5000/coreferenceResolution`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        text: input
      }
    }

    axios(request)
    .then(response => {
      setOutput(response.data);
      console.log('output', response.data)
    })
    .catch(err => {
      alert('Could not perform Coreference Resolution')
      console.error(err);
    })
  }
  
const temporalTimeCorrection = () => {
    const request = {
      url: `http://contextsplitter.com:6201/time-adjustment`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        text: input,
        date: '2023-12-12'
      }
    }

    axios(request)
    .then(response => {
      setOutput(response.data);
      console.log('output', response.data)
    })
    .catch(err => {
      alert('Could not perform Coreference Resolution')
      console.error(err);
    })
  }
  const handleSubmit = () => {
    console.log('input', input);
    setOutput('');

    switch (modelId) {
      case 'AcMod_01':
        textNormalization();
        break;
      case 'AcMod_02':
        coreferenceResolution();
        break;
      case 'AcNLP_02':
        temporalTimeCorrection();
        break;
      default:
        alert(`Unhandled Model: ${modelId}`);
    }
  }

  return (
    <IonPage>
     
      <IonContent fullscreen>
       <div className="Home__select-container">
        <IonSelect className='Home__select' value={selectedModel.id} onIonChange={(e) => setModelId(e.detail.value)}>
            {models.map(model => {
              return (
                <IonSelectOption className='Home__option' key={model.id} value={model.id}>
                  {model.name}
                </IonSelectOption>
              )
            })}
          </IonSelect>
       </div>
       <h2 className='Home__input-title'>Input</h2>
       <IonTextarea className='Home__input' rows='12' value={input} onIonChange={(e) => setInput(e.detail.value)} />
       <IonButton className='Home__submit-button' onClick={handleSubmit}>Sumbit</IonButton>
        <div className='Home__diff'>
          {output !== '' && <Diff  orig={input} modified={output} /> }
        </div>
       <div id='display'></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
