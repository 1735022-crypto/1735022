* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #0a0e27;
    --bg-secondary: #1a1f3a;
    --bg-tertiary: #252d47;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --accent: #00d4ff;
    --accent-hover: #00a8cc;
    --danger: #ff4757;
    --danger-hover: #ff3838;
    --success: #2ed573;
    --border: #363f54;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Header */
header {
    text-align: center;
    padding: 40px 20px;
    border-bottom: 2px solid var(--border);
    margin-bottom: 40px;
}

header h1 {
    font-size: 3em;
    color: var(--accent);
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
    margin-bottom: 10px;
}

header p {
    color: var(--text-secondary);
    font-size: 1.1em;
}

/* Main Content */
main {
    width: 100%;
}

.content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

/* Paste Section */
.paste-section {
    background-color: var(--bg-secondary);
    padding: 30px;
    border-radius: 8px;
    border: 1px solid var(--border);
}

.paste-section h2 {
    color: var(--accent);
    margin-bottom: 20px;
    font-size: 1.5em;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--text-primary);
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
    border: 1px solid var(--border);
    border-radius: 4px;
    font-family: inherit;
    font-size: 0.95em;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 8px rgba(0, 212, 255, 0.2);
}

.form-group textarea {
    resize: vertical;
    min-height: 300px;
    font-family: 'Courier New', monospace;
}

/* Games Section */
.games-section {
    background-color: var(--bg-secondary);
    padding: 30px;
    border-radius: 8px;
    border: 1px solid var(--border);
    height: fit-content;
}

.games-section h2 {
    color: var(--accent);
    margin-bottom: 20px;
    font-size: 1.5em;
}

.games-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-height: 600px;
    overflow-y: auto;
}

.games-grid::-webkit-scrollbar {
    width: 8px;
}

.games-grid::-webkit-scrollbar-track {
    background: var(--bg-tertiary);
    border-radius: 4px;
}

.games-grid::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
}

.games-grid::-webkit-scrollbar-thumb:hover {
    background: var(--accent-hover);
}

.empty-message {
    text-align: center;
    color: var(--text-secondary);
    padding: 20px;
}

/* Game Card */
.game-card {
    background-color: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 15px;
    transition: all 0.3s ease;
}

.game-card:hover {
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.15);
}

.game-card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.game-title {
    font-size: 1.1em;
    color: var(--accent);
    flex: 1;
    word-break: break-word;
}

.game-actions {
    display: flex;
    gap: 8px;
}

/* Buttons */
.btn {
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9em;
}

.btn-primary {
    background-color: var(--accent);
    color: var(--bg-primary);
    width: 100%;
}

.btn-primary:hover {
    background-color: var(--accent-hover);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
}

.btn-play {
    background-color: var(--success);
    color: var(--bg-primary);
    flex: 1;
}

.btn-play:hover {
    background-color: #26a65b;
    box-shadow: 0 0 10px rgba(46, 213, 115, 0.3);
}

.btn-delete {
    background-color: var(--danger);
    color: white;
    padding: 10px 12px;
    min-width: 50px;
}

.btn-delete:hover {
    background-color: var(--danger-hover);
    box-shadow: 0 0 10px rgba(255, 71, 87, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
    .content-wrapper {
        grid-template-columns: 1fr;
    }

    header h1 {
        font-size: 2em;
    }

    .games-section {
        height: auto;
    }

    .games-grid {
        max-height: none;
    }

    .game-card-content {
        flex-direction: column;
        align-items: flex-start;
    }

    .game-actions {
        width: 100%;
    }

    .btn-play,
    .btn-delete {
        flex: 1;
    }
}
