import './Diff.scss';
import React, { useEffect, useRef, useState } from 'react'
import * as DiffDisplay from 'diff';
import { IonToggle } from '@ionic/react';


function Diff({orig, modified}) {
    const [showRaw, setShowRaw] = useState(false);

    const ref = useRef();

    const showDiff = () => {
        const diff = DiffDisplay.diffChars(orig, modified),
        display = ref.current,
        fragment = document.createDocumentFragment();

        if (showRaw) {
          display.innerText = modified;
          return;
        }

        display.innerHTML = '';
        let span = null;
    
        diff.forEach((part) => {
          // green for additions, red for deletions
          // grey for common parts
          const color = part.added ? 'green' :
            part.removed ? 'red' : 'grey';
          span = document.createElement('span');
          span.style.color = color;
          span.appendChild(document
            .createTextNode(part.value));
          fragment.appendChild(span);
        });
    
        display.appendChild(fragment);
      }

      useEffect(() => showDiff());

  return (
    <div >
      <IonToggle checked={!showRaw} onIonChange={(e) => {
        console.log('toggle');
        setShowRaw(!e.target.checked)
      }}>Display Diff</IonToggle>
      <div className="Diff" ref={ref}>

      </div>
    </div>

    
  )
}

export default Diff