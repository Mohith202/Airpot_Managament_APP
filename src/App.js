// import React from 'react';
// import { Provider, defaultTheme, Flex, View } from '@adobe/react-spectrum';
// import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
// import MainContent from './Components/MainContent';

// function App() {
//     return (
//         <Provider theme={defaultTheme}>
//             <Flex direction="column" height="100vh">
//                 <Navbar />
//                 <Flex direction="row" flex="1">
//                     <Sidebar />
//                     <MainContent />
//                 </Flex>
//             </Flex>
//         </Provider>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Provider, defaultTheme, Flex, View } from '@adobe/react-spectrum';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import AirportDetail from './Components/AirportDetails';

function App() {
    return (
        <Provider theme={defaultTheme}>
            <Router>
                <Flex direction="column" height="100vh">
                    <Navbar />
                    <Flex direction="row" flex="1">
                        <Sidebar />
                        <Routes>
                            <Route path="/airport/:id" element={<AirportDetail/>} />
                            <Route path="/" element={<MainContent/>} />
                        </Routes>
                    </Flex>
                </Flex>
            </Router>
        </Provider>
    );
}

export default App;