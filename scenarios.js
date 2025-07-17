class PracticeScenarios {
    constructor() {
        this.scenarioContainer = document.getElementById('scenario-container');
        if (!this.scenarioContainer) {
            console.error('Scenario container not found!');
            return;
        }
        this.currentScenarioIndex = 0;
        this.initializeScenarios();
    }

    initializeScenarios() {
        this.scenarios = [
            {
                title: "1. The Urgent 'IT Department' Email",
                description: "You receive an email from 'it-support@yourcompany.com' stating your account is at risk. You must click a link to reset your password in the next hour.",
                options: ["Click the link and reset your password immediately.", "Forward the email to your actual IT department.", "Reply to ask for more information.", "Ignore the email."],
                correctOptions: [1],
                explanation: "Always verify urgent requests through a trusted, separate channel. Phishing attacks often create a sense of urgency to rush you into a mistake. Forwarding it to the real IT department is the safest action."
            },
            {
                title: "2. Free Wi-Fi at the Coffee Shop",
                description: "You're at a coffee shop and want to connect to Wi-Fi. Two options pop up: “CoffeeShop_Free” and “Coffee_Secure.”",
                options: ["Connect to “CoffeeShop_Free” and start browsing.", "Ask the staff which network is official.", "Use your mobile hotspot instead.", "Connect to 'Coffee_Secure' because it sounds safer."],
                correctOptions: [1, 2],
                explanation: "Fake or 'evil twin' Wi-Fi networks are common. The safest options are to use your own mobile hotspot or to ask an employee to confirm the official network name before connecting."
            },
            {
                title: "3. Download Offer from Pop-Up Ad",
                description: "A pop-up ad says you’ve won a gift card. It asks you to download a 'reward app' to claim it.",
                options: ["Download the app to claim your prize.", "Close the popup immediately.", "Click to learn more.", "Report it to the browser."],
                correctOptions: [1],
                explanation: "Unsolicited pop-ups offering prizes are classic scam ads designed to trick you into downloading malware. Don't click, download, or engage with them."
            },
            {
                title: "4. Password Reuse Warning",
                description: "Your bank website tells you the password you just created is similar to one you’ve used elsewhere.",
                options: ["Use it anyway, since it’s easy to remember.", "Change it to something unique.", "Add one new symbol to make it different.", "Use your birthday instead."],
                correctOptions: [1],
                explanation: "Reusing passwords, even with small changes, is risky. If one account is breached, attackers can use that password to access your other accounts. Always create a unique password for each important service."
            },
            {
                title: "5. The Phone Call from “Tech Support”",
                description: "You get a call from someone claiming to be Microsoft tech support, saying your computer is infected and you need to install a tool.",
                options: ["Follow their instructions.", "Ask them to call back later.", "Hang up and report the call.", "Ask for their badge number."],
                correctOptions: [2],
                explanation: "Legitimate tech support companies like Microsoft do not make unsolicited calls to tell you about a problem. This is a common scam to gain remote access to your computer."
            },
            {
                title: "6. Suspicious Package Delivery Text",
                description: "You receive a text message about a failed package delivery, with a link to reschedule. You aren't expecting a package.",
                options: ["Click the link to see which package it is.", "Ignore and delete the message.", "Reply 'STOP' to the message.", "Call the delivery company using a number from their official website."],
                correctOptions: [1, 3],
                explanation: "This is a common smishing (SMS phishing) tactic. Since you're not expecting a package, the safest options are to ignore it or to independently verify by calling the company using a number from their official site, not the text."
            },
            {
                title: "7. Found USB Drive",
                description: "You find a USB drive in your office parking lot. It's unlabeled.",
                options: ["Plug it into your computer to see who it belongs to.", "Give it to your IT/security department.", "Leave it where it is.", "Plug it into an isolated, old computer not on the network."],
                correctOptions: [1, 2],
                explanation: "Never plug in a found USB drive, as attackers use them to spread malware. The best actions are to either leave it alone or hand it over to your company's security team."
            },
            {
                title: "8. Social Media Quiz",
                description: "A fun-looking quiz on social media asks for your mother's maiden name and the street you grew up on to find your 'superhero name'.",
                options: ["Take the quiz and share your results.", "Realize these are common security questions and ignore the quiz.", "Make up fake answers for the quiz.", "Report the quiz as a scam."],
                correctOptions: [1, 2, 3],
                explanation: "These quizzes are a form of social engineering to harvest answers to security questions. Ignoring them, reporting them, or providing fake information are all smart ways to protect yourself."
            },
            {
                title: "9. A Friend's Strange Message",
                description: "You get a message from a friend on social media: 'OMG I can't believe this picture of you! [malicious-link].com'",
                options: ["Click the link immediately to see the picture.", "Message your friend on a different platform (like text message) to ask if they sent it.", "Reply to the message and ask if it's a virus.", "Block your friend's account."],
                correctOptions: [1],
                explanation: "Your friend's account may have been compromised. Verify the message with your friend through a different, trusted communication channel before clicking any links."
            },
            {
                title: "10. Public Charging Station",
                description: "Your phone battery is low and you see a public USB charging port at the airport.",
                options: ["Plug your phone in directly with your standard USB cable.", "Use a 'charge-only' USB adapter (a 'USB condom') between your cable and the port.", "Turn your phone off before plugging it in.", "Ask an airport employee if the port is safe."],
                correctOptions: [1],
                explanation: "Public USB ports can be used for 'juice jacking' to install malware or steal data. Using a power-blocking USB adapter is the safest way to charge."
            },
            {
                title: "11. Creating a New Password",
                description: "You're creating a new account. Which of the following is the strongest password?",
                options: ["P@ssword2024!", "MyDogFluffy123", "Blue-Ocean-Correct-Horse-99", "1122334455!!$$!"],
                correctOptions: [2],
                explanation: "Long passphrases of random words (like 'Blue-Ocean-Correct-Horse-99') are much harder for computers to guess than shorter, more predictable passwords, even those with symbol substitutions."
            },
            {
                title: "12. Browser Security Warning",
                description: "You navigate to a website and your browser shows a full-page warning that the 'Connection is not private'.",
                options: ["Click 'Proceed anyway' because you've visited the site before.", "Close the tab and do not visit the site.", "Try visiting the site again in a different browser.", "Clear your browser cache and try again."],
                correctOptions: [1],
                explanation: "This warning means the website's security certificate is invalid or there's a potential man-in-the-middle attack. You should not proceed, as any data you send could be intercepted."
            },
            {
                title: "13. Unexpected Software Update",
                description: "A popup appears on your screen from 'Adobe Flash Player' asking for an immediate, urgent update. You haven't seen a popup like this before.",
                options: ["Click 'Update Now' to stay secure.", "Close the popup and go to the official Adobe website to check for updates.", "Ignore the popup and continue your work.", "Uninstall Adobe Flash Player since it's outdated."],
                correctOptions: [1, 3],
                explanation: "Fake update popups are a common way to distribute malware. The best actions are to go directly to the official website to verify the update or, in the case of obsolete software like Flash, uninstall it entirely."
            },
            {
                title: "14. Setting up 2FA",
                description: "When setting up Two-Factor Authentication (2FA), which method is generally considered the most secure?",
                options: ["SMS (text message) codes.", "Email-based codes.", "An authenticator app (like Google Authenticator or Authy).", "A physical security key (like a YubiKey)."],
                correctOptions: [3],
                explanation: "Physical security keys are the gold standard for 2FA as they are immune to phishing and interception. Authenticator apps are the next best choice."
            },
            {
                title: "15. The 'Confirm Your Identity' Email",
                description: "You receive an email from a social media site asking you to log in to confirm your identity, but you haven't used the site in months.",
                options: ["Click the link to log in and secure your account.", "Delete the email and ignore it.", "Forward it to your friends to see if they got it too.", "Log in to the site directly by typing its address in your browser."],
                correctOptions: [3],
                explanation: "This could be a phishing attempt. The safest way to check on your account is to navigate to the website yourself, never through an unsolicited link."
            },
            {
                title: "16. A Deal That's Too Good to Be True",
                description: "You see an online ad for a brand new smartphone at 90% off the retail price from a store you've never heard of.",
                options: ["Buy it immediately before the deal is gone.", "Research the store and look for reviews before buying.", "Share the deal with friends so they can get one too.", "Assume it's a scam and close the page."],
                correctOptions: [1, 3],
                explanation: "Extremely low prices from unknown retailers are a huge red flag. Researching the seller or simply assuming it's a scam and moving on are the best ways to protect yourself."
            },
            {
                title: "17. Updating Your Privacy Settings",
                description: "A social media app notifies you that its privacy policy has changed. What should you do?",
                options: ["Accept the new policy without reading it.", "Review the changes to see what data the app will collect.", "Delete your account immediately.", "Post a status saying you do not agree to the new terms."],
                correctOptions: [1],
                explanation: "It's important to review privacy policy updates to understand how your data is being used. You can then make an informed decision about your settings or continued use of the service."
            },
            {
                title: "18. The 'You've Been Hacked' Popup",
                description: "A large, flashing popup appears, claiming your computer is infected and you must call a toll-free number for immediate help.",
                options: ["Call the number to get help.", "Close the browser tab or restart your computer.", "Unplug your computer from the internet.", "Pay the fee they demand to fix it."],
                correctOptions: [1],
                explanation: "This is a scareware tactic. The popup is fake and designed to panic you into calling scammers. Close the page (you may need to use Task Manager or restart) and run a scan with your own trusted antivirus software."
            },
            {
                title: "19. An Email from Your 'CEO'",
                description: "You receive an urgent email from your CEO asking you to buy several gift cards for a client and send them the codes immediately.",
                options: ["Rush out and buy the gift cards as requested.", "Reply to the email to confirm the amount.", "Verify the request with your CEO through a different channel (like a phone call or in person).", "Forward the request to the finance department."],
                correctOptions: [2],
                explanation: "This is a classic Business Email Compromise (BEC) scam. Attackers impersonate executives to trick employees. Always verify unusual, urgent financial requests through a separate, trusted communication method."
            },
            {
                title: "20. Choosing Security Questions",
                description: "When setting up security questions for an account, what's the best strategy?",
                options: ["Use common, truthful answers (your real mother's maiden name, etc.).", "Use the same answers for all your accounts.", "Invent memorable, untrue answers that only you would know.", "Write down the answers in a notebook next to your computer."],
                correctOptions: [2],
                explanation: "Treat your security questions like secondary passwords. Using fake, memorable answers prevents attackers from finding the real answers through social media or public records."
            }
        ];
        this.loadScenario(this.currentScenarioIndex);
    }

    loadScenario(index) {
        const scenario = this.scenarios[index];
        this.scenarioContainer.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${scenario.title}</h3>
            <p class="mb-4">${scenario.description}</p>
            <div class="options-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                ${scenario.options.map((option, i) => `
                    <button data-index="${i}" class="option p-4 border rounded-lg hover:bg-gray-100 text-left">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div id="feedback" class="mt-4"></div>
            <button id="next-scenario" class="hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Next Scenario</button>
        `;

        document.querySelectorAll('.option').forEach(button => {
            button.addEventListener('click', (e) => this.handleOptionClick(e));
        });
    }

    handleOptionClick(e) {
        const selectedIndex = parseInt(e.target.dataset.index);
        const scenario = this.scenarios[this.currentScenarioIndex];
        const feedbackDiv = document.getElementById('feedback');
        const nextButton = document.getElementById('next-scenario');

        const isCorrect = scenario.correctOptions.includes(selectedIndex);

        if (isCorrect) {
            feedbackDiv.innerHTML = `<p class="text-green-600 font-bold">Correct!</p><p>${scenario.explanation}</p>`;
            e.target.classList.add('bg-green-200');
        } else {
            feedbackDiv.innerHTML = `<p class="text-red-600 font-bold">Incorrect.</p><p>${scenario.explanation}</p>`;
            e.target.classList.add('bg-red-200');
        }

        // Disable all option buttons after selection
        document.querySelectorAll('.option').forEach(button => {
            button.disabled = true;
        });

        nextButton.classList.remove('hidden');
        nextButton.onclick = () => {
            this.currentScenarioIndex++;
            if (this.currentScenarioIndex < this.scenarios.length) {
                this.loadScenario(this.currentScenarioIndex);
            } else {
                this.scenarioContainer.innerHTML = `<h3 class="text-xl font-bold">You've completed all scenarios!</h3><p>Great job practicing your cybersecurity skills.</p><button onclick="new PracticeScenarios()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Try Again</button>`;
            }
        };
    }
}

// Initialize scenarios when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PracticeScenarios();
});
