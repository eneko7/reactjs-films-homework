import React from 'react';
import './App.scss';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';


class App extends React.Component {
    render() {
        return(
            <div className="main_container">
                <Header />
                <Footer />
            </div>
        );
    }
};

export default App; 