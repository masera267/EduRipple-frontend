import React, { useState } from 'react';
import ChatInput from '../components/ChatInput';
import '../styles/AIChat.css';

const AIChat = () => {
    const [responses, setResponses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (input) => {
        // Add user message to responses
        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: input,
            timestamp: new Date().toLocaleTimeString()
        };

        setResponses(prev => [...prev, userMessage]);
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                type: 'ai',
                content: `Generated content for: "${input}"`,
                timestamp: new Date().toLocaleTimeString()
            };
            setResponses(prev => [...prev, aiResponse]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="ai-chat-container">
            <div className="ai-chat-header">
                <h1>🤖 AI Learning Assistant</h1>
                <p>Ask me anything about lesson planning, content creation, and teaching resources</p>
            </div>

            {/* Chat History */}
            <div className="chat-history">
                {responses.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">📚</div>
                        <h2>Start Your Conversation</h2>
                        <p>Enter a command below to generate educational content</p>
                    </div>
                ) : (
                    <div className="messages-container">
                        {responses.map(message => (
                            <div key={message.id} className={`message ${message.type}`}>
                                <div className="message-avatar">
                                    {message.type === 'user' ? '👨‍🏫' : '🤖'}
                                </div>
                                <div className="message-content">
                                    <p className="message-text">{message.content}</p>
                                    <span className="message-time">{message.timestamp}</span>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message ai loading">
                                <div className="message-avatar">🤖</div>
                                <div className="message-content">
                                    <div className="loading-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Chat Input Component */}
            <ChatInput onSubmit={handleSubmit} />
        </div>
    );
};

export default AIChat;
