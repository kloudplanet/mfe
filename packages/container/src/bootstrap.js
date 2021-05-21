import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
// const Mount = (el) => {

//     ReactDOM.render(
//         <App />,
//         el
//     )
// }

// if(process.env.NODE_ENV === "development" ){
//     const devRoot = document.querySelector('#_marketing-dev-root');
//     if(devRoot){
//         Mount(devRoot)
//     }
// }

// export { Mount}; 