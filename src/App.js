import React, { useState } from 'react';
import MainMenu from './MainMenu';
import WelcomeScreen from './WelcomeScreen';

function App() {
    // State to hold welcome screen data
    const [welcomeScreenData, setWelcomeScreenData] = useState({
        title: 'Welcome to our form',
        description: 'This is a description of the form',
        buttonText: 'Start',
        image: null
    });

    // State to track which screen we are on (main or welcome screen)
    const [currentScreen, setCurrentScreen] = useState('main');

    // Function to navigate to Welcome Screen and Main Menu
    const goToWelcomeScreen = () => setCurrentScreen('welcome');
    const goToMainMenu = () => setCurrentScreen('main');

    return (
        <div>
            {currentScreen === 'main' ? (
                <MainMenu
                    welcomeScreenData={welcomeScreenData}
                    goToWelcomeScreen={goToWelcomeScreen}
                />
            ) : (
                <WelcomeScreen
                    welcomeScreenData={welcomeScreenData}
                    setWelcomeScreenData={setWelcomeScreenData}
                    goToMainMenu={goToMainMenu}
                />
            )}
        </div>
    );
}

export default App;
