import './Diff.scss';
import React, { useEffect, useRef } from 'react'
import * as DiffDisplay from 'diff';


function Diff({orig, modified}) {
    const ref = useRef();

    const showDiff = () => {
        const diff = DiffDisplay.diffChars(orig, modified),
        display = ref.current,
        fragment = document.createDocumentFragment();
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
    <div className='Diff' ref={ref}>Diff</div>
  )
}

export default Diff