import React, {useState} from 'react';
import ColorBlock from './ColorBlock';

function App() {
    let [colors, setColors] = useState([
        { color: 'violet' }, 
        { color: 'blue' }, 
        { color: 'lightblue' }, 
        { color: 'green' }, 
        { color: 'greenyellow' }, 
        { color: 'yellow' }, 
        { color: 'orange' }, 
        { color: 'red' }
    ]);
const addColor = (newColor) => {
    setColors ([...colors, newColor])
}
    return (
        <div className="App">
            {colors.map((color, i) => (
                <ColorBlock key={i} color={color.color} />
            ))}
        </div>
    );
}

export default App;






