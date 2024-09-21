import React from 'react';

const MainMenu = ({ welcomeScreenData, goToWelcomeScreen }) => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left Side - 80% (Preview Section) */}
            <div style={{ flex: '80%', padding: '20px', backgroundColor: '#f0f0f0' }}>
                <h1>{welcomeScreenData.title}</h1>
                <p>{welcomeScreenData.description}</p>
                <button>{welcomeScreenData.buttonText}</button>
                {/* If image exists, display it */}
                {welcomeScreenData.image && (
                    <div>
                        <img src={URL.createObjectURL(welcomeScreenData.image)} alt="Preview" style={{ width: '50%' }} />
                    </div>
                )}
            </div>

            {/* Right Side - 20% */}
            <div style={{ flex: '20%', padding: '20px', backgroundColor: '#ffffff', borderLeft: '1px solid #ccc' }}>
                {/* Navbar */}
                <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <button style={navButton(true)}>Content</button>
                    <button style={navButton(false)}>Design</button>
                    <button style={navButton(false)}>Share</button>
                    <button style={navButton(false)}>Replies</button>
                </nav>

                {/* Steps Section */}
                <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Steps</h3>
                    <p style={{ marginBottom: '20px' }}>The steps users will take to complete the form</p>

                    {/* Buttons for Welcome Screen and Email */}
                    <button style={actionButton} onClick={goToWelcomeScreen}>Welcome Screen</button>
                    <button style={actionButton}>Email</button>
                </div>
            </div>
        </div>
    );
};

// Style for navigation buttons
const navButton = (isActive) => ({
    padding: '10px 20px',
    marginRight: '10px',
    backgroundColor: isActive ? '#007bff' : '#f0f0f0',  // Highlight active button
    color: isActive ? '#fff' : '#000',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: isActive ? 'bold' : 'normal'
});

// Style for action buttons (Welcome Screen, Email)
const actionButton = {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px'
};

export default MainMenu;
