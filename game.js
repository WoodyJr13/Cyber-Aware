class CyberGame {
    constructor() {
        this.score = 0;
        this.level = 1;
        this.gameContainer = document.getElementById('game-container');
        this.scenarios = [
            {
                title: "Suspicious Email",
                description: "You receive an email from 'bank-support@yourbank.com' asking you to verify your account details immediately.",
                options: [
                    { text: "Click the link in the email", correct: false },
                    { text: "Call your bank directly", correct: true },
                    { text: "Ignore the email", correct: false }
                ]
            },
            {
                title: "Unknown Call",
                description: "Your phone rings with an unknown number. The caller claims to be from Microsoft Tech Support.",
                options: [
                    { text: "Give them remote access", correct: false },
                    { text: "Hang up and report the number", correct: true },
                    { text: "Ask for their employee ID", correct: false }
                ]
            },
            {
                title: "Social Media Request",
                description: "Someone you don't know sends you a friend request with a message asking for your personal information.",
                options: [
                    { text: "Accept and share info", correct: false },
                    { text: "Report and block", correct: true },
                    { text: "Ask them questions", correct: false }
                ]
            }
        ];
        this.currentScenarioIndex = 0;
        this.initializeGame();
    }

    initializeGame() {
        this.gameContainer.innerHTML = `
            <h3>Cyber Hygiene Quiz</h3>
            <div id="score">Score: ${this.score}</div>
            <div id="scenario-content"></div>
            <div id="options-container"></div>
            <button id="next-btn" style="display: none;">Next Scenario</button>
        `;
        this.loadScenario();
    }

    loadScenario() {
        const scenario = this.scenarios[this.currentScenarioIndex];
        const scenarioContent = document.getElementById('scenario-content');
        const optionsContainer = document.getElementById('options-container');

        scenarioContent.innerHTML = `
            <h4>${scenario.title}</h4>
            <p>${scenario.description}</p>
        `;

        optionsContainer.innerHTML = scenario.options.map(option => `
            <button class="option-btn">${option.text}</button>
        `).join('');

        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach((btn, index) => {
            btn.onclick = () => this.checkAnswer(index);
        });
    }

    checkAnswer(selectedIndex) {
        const scenario = this.scenarios[this.currentScenarioIndex];
        const isCorrect = scenario.options[selectedIndex].correct;
        
        if (isCorrect) {
            this.score += 10;
            alert('Correct! Good job!');
        } else {
            alert('Incorrect! Remember to always be cautious.');
        }

        document.getElementById('score').textContent = `Score: ${this.score}`;
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('next-btn').onclick = () => this.nextScenario();
    }

    nextScenario() {
        this.currentScenarioIndex++;
        if (this.currentScenarioIndex < this.scenarios.length) {
            this.loadScenario();
            document.getElementById('next-btn').style.display = 'none';
        } else {
            this.showFinalScore();
        }
    }

    showFinalScore() {
        this.gameContainer.innerHTML = `
            <h3>Game Complete!</h3>
            <p>Your final score: ${this.score}</p>
            <p>Great job! You've learned important cyber hygiene practices.</p>
            <button onclick="location.reload()">Play Again</button>
        `;
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CyberGame();
});
