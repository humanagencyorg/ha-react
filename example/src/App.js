import React from 'react';

import { ExampleComponent, Input } from 'ha-react';
import 'ha-react/dist/index.css';

const App = () => {
  return (
    <>
      <Input name="name" value="VALUE" />
      <ExampleComponent text="Create React Library Example 😄" />
    </>
  );
};

export default App;
