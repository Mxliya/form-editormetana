import React, { useState } from 'react';

const WelcomeScreen = ({ welcomeScreenData, setWelcomeScreenData, goToMainMenu }) => {
    const [title, setTitle] = useState(welcomeScreenData.title);
    const [description, setDescription] = useState(welcomeScreenData.description);
    const [buttonText, setButtonText] = useState(welcomeScreenData.buttonText);
    const [image, setImage] = useState(welcomeScreenData.image);

    const handleSave = () => {
        setWelcomeScreenData({ title, description, buttonText, image });
        goToMainMenu();  // Navigate back to main menu
    };

    return (
        <div>
            <h2>Welcome Screen Settings</h2>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Button Text</label>
                <input type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)} />
            </div>
            <div>
                <label>Image</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>

            <button onClick={handleSave}>Save</button>
            <button onClick={goToMainMenu}>Discard</button>
        </div>
    );
};

export default WelcomeScreen;
