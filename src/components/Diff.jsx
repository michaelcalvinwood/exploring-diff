import './Diff.scss';
import React, { useEffect, useRef, useState } from 'react'
import * as DiffDisplay from 'diff';
import { IonToggle } from '@ionic/react';


function Diff({orig, modified}) {
    const [showRaw, setShowRaw] = useState(false);
    const [html, setHtml] = useState('');

    console.log('showRaw', showRaw)

    const ref = useRef();

    const showDiff = () => {
      console.log('showDiff()')
        const diff = DiffDisplay.diffChars(orig, modified);
        // display = ref.current,
        // fragment = document.createDocumentFragment();

        // display.innerHTML = '';
        let span = null;
        const parts = [];
    
        diff.forEach((part) => {
          // green for additions, red for deletions
          // grey for common parts
          const color = part.added ? 'green' :
            part.removed ? 'red' : 'grey';
          parts.push(`<span style="color: ${color}">${part.value}</span>`);
          // span = document.createElement('span');
          // span.style.color = color;
          // span.appendChild(document
          //   .createTextNode(part.value));
          // fragment.appendChild(span);
        });
    
        // display.appendChild(fragment);
        //display.innerHTML = parts.join("");
        setHtml(parts.join(''))
      }

      useEffect(showDiff, [orig, modified]);

  return (
    <div >
      <IonToggle checked={!showRaw} onIonChange={(e) => {
        console.log('toggle');
        setShowRaw(!e.target.checked)
      }}>Display Diff</IonToggle>
      {!showRaw && <div className="Diff" dangerouslySetInnerHTML={{__html: html}}/>}
      {showRaw && <div className="Diff" dangerouslySetInnerHTML={{__html: modified}}/>}
      
    </div>

    
  )
}

export default Diff