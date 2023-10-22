import React from 'react';


import DishesDesk from './DishesDeck';
const App = () => {
  return (
    <div>
      {/* Render Dishes component for larger screens */}
      <div className="">
        <DishesDesk/>
      </div>

      {/* Render DishesMobile component for screens within max-md breakpoint */}
      {/* <div className="md:hidden">
        <DishesMobile/>
      </div> */}
    </div>
  );
}

export default App;