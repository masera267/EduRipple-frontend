import React, { useState } from 'react';
import '../styles/ChatInput.css';

const ChatInput = ({ onSubmit }) => {
    const [input, setInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSubmit(input);
            setInput('');
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="chat-input-container">
            <div className="chat-input-wrapper">
                <form onSubmit={handleSubmit} className="chat-form">
                    <div className={`input-field-group ${isFocused ? 'focused' : ''}`}>
                        {/* Label and Helper Text */}
                        <label htmlFor="command-input" className="input-label">
                            📝 Enter Your Command Here
                        </label>
                        <p className="helper-text">
                            Example: "Create a lesson plan for Algebra", "Generate quiz questions"
                        </p>

                        {/* Input Field */}
                        <div className="input-wrapper">
                            <textarea
                                id="command-input"
                                value={input}
                                onChange={handleChange}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder="Describe what you need (e.g., worksheet, test, animation)..."
                                rows="4"
                                className="chat-textarea"
                            />
                            <button 
                                type="submit" 
                                className="submit-button"
                                disabled={!input.trim()}
                                title="Send your command to AI"
                            >
                                <span className="button-text">Send</span>
                                <span className="button-icon">→</span>
                            </button>
                        </div>

                        {/* Character Count */}
                        <div className="char-count">
                            {input.length} / 500 characters
                        </div>
                    </div>

                    {/* Command Suggestions */}
                    <div className="suggestions-section">
                        <h4 className="suggestions-title">💡 Quick Commands:</h4>
                        <div className="suggestions-grid">
                            <button 
                                type="button" 
                                className="suggestion-chip"
                                onClick={() => setInput('Create a lesson plan for ')}
                            >
                                📚 Lesson Plan
                            </button>
                            <button 
                                type="button" 
                                className="suggestion-chip"
                                onClick={() => setInput('Generate quiz questions for ')}
                            >
                                ❓ Quiz
                            </button>
                            <button 
                                type="button" 
                                className="suggestion-chip"
                                onClick={() => setInput('Create a worksheet for ')}
                            >
                                📄 Worksheet
                            </button>
                            <button 
                                type="button" 
                                className="suggestion-chip"
                                onClick={() => setInput('Generate an animation explaining ')}
                            >
                                🎬 Animation
                            </button>
                            <button 
                                type="button" 
                                className="suggestion-chip"
                                onClick={() => setInput('Create test questions for ')}
                            >
                                ✏️ Test
                            </button>
                            <button 
                                type="button" 
                                className="suggestion-chip"
                                onClick={() => setInput('Generate visual diagram for ')}
                            >
                                🎨 Diagram
                            </button>
                        </div>
                    </div>
                </form>

                {/* Output Format Options */}
                <div className="format-options">
                    <h4 className="format-title">📦 Output Formats:</h4>
                    <div className="format-list">
                        <span className="format-item">🎥 Video</span>
                        <span className="format-item">🎬 Animation</span>
                        <span className="format-item">🖼️ Image</span>
                        <span className="format-item">🔊 Audio</span>
                        <span className="format-item">📖 Audiobook</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
