import { render } from 'react-dom';
import { App } from './App';

// Note: the id root was declared in the "public/index.html" file
// This code will render the "<h1>Test</h1>" inside the HTML
render(<App />, document.getElementById('root'))