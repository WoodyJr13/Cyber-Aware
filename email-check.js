document.addEventListener('DOMContentLoaded', function() {
  const emailForm = document.getElementById('emailForm');
  const phoneForm = document.getElementById('phoneForm');
  const resultsDiv = document.getElementById('results');
  const resultsContent = document.getElementById('resultsContent');

  // Enhanced scam indicators
  const scamIndicators = {
    // Urgency indicators
    urgencyPhrases: [
      'urgent', 'immediate action', 'account suspended', 'verify now', 
      'limited time', 'act now', 'account compromised', 'immediately',
      'right away', 'asap', 'within 24 hours', 'your account', 'verify now',
      'suspended', 'restricted', 'locked', 'verify your account', 'security alert',
      'unauthorized login attempt', 'verify your identity', 'confirm your information',
      'update your account', 'billing issue', 'payment failed', 'suspicious activity',
      'verify your email', 'verify your phone', 'verify your identity', 'verify your account',
      'verify your information', 'verify your details', 'verify your credentials',
      'verify your login', 'verify your access', 'verify your subscription',
      'verify your payment', 'verify your billing', 'verify your account now',
      'verify your account today', 'verify your account immediately'
    ],
    
    // Suspicious domains
    suspiciousDomains: [
      '.xyz', '.top', '.gq', '.ml', '.cf', '.tk', '.ga', '.gdn', '.icu', '.buzz',
      '.club', '.online', '.site', '.space', '.tech', '.store', '.shop', '.fun', '.click',
      '.link', '.work', '.party', '.guru', '.rocks', '.lol', '.email', '.services',
      '.support', '.help', '.info', '.host', '.website', '.press', '.solutions',
      '.expert', '.services', '.systems', '.technology', '.digital', '.network',
      '.online', '.center', '.company', '.group', '.international', '.world',
      '.solutions', '.global', '.company', '.business', '.enterprises', '.holdings',
      '.industries', '.partners', '.ventures', '.associates', '.consulting', '.capital',
      '.equipment', '.estate', '.finance', '.financial', '.fund', '.investments',
      '.limited', '.llc', '.llp', '.ltd', '.management', '.marketing', '.media',
      '.properties', '.solutions', '.technology', '.ventures'
    ],
    
    // Common scam patterns
    commonScamPatterns: [
      'free trial', 'billing issue', 'payment failed', 'suspicious login',
      'verify account', 'security alert', 'account locked', 'confirm details',
      'update information', 'password expired', 'unusual activity',
      'verify your identity', 'suspicious activity', 'unusual login attempt',
      'account verification required', 'action required', 'immediate action required',
      'your account has been limited', 'your account has been suspended',
      'your account has been locked', 'your account has been restricted',
      'your account has been flagged', 'your account has been compromised',
      'your account has been hacked', 'your account has been accessed',
      'your account has been used', 'your account has been logged in',
      'your account has been accessed from a new device', 'your account has been accessed from a new location',
      'your account has been accessed from a new IP address', 'your account has been accessed from a new browser',
      'your account has been accessed from a new computer', 'your account has been accessed from a new phone',
      'your account has been accessed from a new tablet', 'your account has been accessed from a new device',
      'your account has been accessed from a new IP', 'your account has been accessed from a new location',
      'your account has been accessed from a new country', 'your account has been accessed from a new city',
      'your account has been accessed from a new state', 'your account has been accessed from a new region'
    ],
    
    // Common phishing domains (partial matches)
    phishingDomains: [
      'amaz0n', 'amaz0n-payments', 'amazonsecure', 'amazon-verify', 'amazon-security',
      'paypal-secure', 'paypal-verify', 'paypal-login', 'paypal-support', 'paypal-security',
      'appleid', 'apple-verify', 'apple-security', 'apple-support', 'apple-login',
      'microsoft-verify', 'microsoft-security', 'microsoft-support', 'microsoft-login',
      'netflix-verify', 'netflix-security', 'netflix-support', 'netflix-login',
      'bankofamerica-verify', 'bankofamerica-security', 'bankofamerica-support',
      'chase-verify', 'chase-security', 'chase-support', 'chase-login',
      'wellsfargo-verify', 'wellsfargo-security', 'wellsfargo-support', 'wellsfargo-login',
      'citi-verify', 'citi-security', 'citi-support', 'citi-login',
      'bankof-america', 'wells-fargo', 'bank-of-america', 'wells-fargo-bank',
      'chase-bank', 'bankofamerica', 'wellsfargo', 'chasebank', 'citibank', 'bankofamerica',
      'wellsfargo', 'chase', 'citi', 'bank', 'login', 'signin', 'account', 'verify', 'security',
      'support', 'help', 'customer-service', 'customer-support', 'customer-care', 'customer-help',
      'customer-service-center', 'customer-support-center', 'customer-care-center', 'customer-help-center'
    ],
    
    // Suspicious URL patterns
    suspiciousUrlPatterns: [
      'http://', 'https://', 'www.', '.com-', '.net-', '.org-', '.biz-', '.info-',
      '.com/', '.net/', '.org/', '.biz/', '.info/', '.com?', '.net?', '.org?', '.biz?', '.info?',
      '.com&', '.net&', '.org&', '.biz&', '.info&', '.com#', '.net#', '.org#', '.biz#', '.info#',
      'login.', 'signin.', 'account.', 'verify.', 'security.', 'support.', 'help.', 'customer-service.',
      'customer-support.', 'customer-care.', 'customer-help.', 'customer-service-center.',
      'customer-support-center.', 'customer-care-center.', 'customer-help-center.', 'amazon.', 'paypal.',
      'apple.', 'microsoft.', 'netflix.', 'bankofamerica.', 'wellsfargo.', 'chase.', 'citi.', 'bank.'
    ],
    
    // Common phishing email subjects
    phishingSubjects: [
      'verify your account', 'update your account', 'confirm your account',
      'your account has been suspended', 'your account has been locked',
      'unusual login attempt', 'suspicious activity', 'security alert',
      'important: your account', 'action required', 'immediate action required',
      'your account has been compromised', 'your account has been accessed',
      'your account has been used', 'your account has been logged in',
      'your account has been accessed from a new device', 'your account has been accessed from a new location',
      'your account has been accessed from a new IP address', 'your account has been accessed from a new browser',
      'your account has been accessed from a new computer', 'your account has been accessed from a new phone',
      'your account has been accessed from a new tablet', 'your account has been accessed from a new device',
      'your account has been accessed from a new IP', 'your account has been accessed from a new location',
      'your account has been accessed from a new country', 'your account has been accessed from a new city',
      'your account has been accessed from a new state', 'your account has been accessed from a new region'
    ]
  };

  // Check for scam indicators in text
  function checkForScamIndicators(text) {
    if (!text) return [];
    
    const indicators = [];
    const textLower = text.toLowerCase();
    
    // Check for urgency phrases
    scamIndicators.urgencyPhrases.forEach(phrase => {
      if (textLower.includes(phrase.toLowerCase())) {
        indicators.push(`Urgency phrase: "${phrase}"`);
      }
    });
    
    // Check for common scam patterns
    scamIndicators.commonScamPatterns.forEach(pattern => {
      if (textLower.includes(pattern.toLowerCase())) {
        indicators.push(`Suspicious pattern: "${pattern}"`);
      }
    });
    
    // Check for suspicious URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = text.match(urlRegex) || [];
    
    urls.forEach(url => {
      // Check for suspicious URL patterns
      scamIndicators.suspiciousUrlPatterns.forEach(pattern => {
        if (url.toLowerCase().includes(pattern)) {
          indicators.push(`Suspicious URL pattern: "${pattern}" in URL`);
        }
      });
      
      // Check for phishing domains
      scamIndicators.phishingDomains.forEach(domain => {
        if (url.toLowerCase().includes(domain.toLowerCase())) {
          indicators.push(`Potential phishing domain: "${domain}" in URL`);
        }
      });
    });
    
    // Check for email addresses
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailRegex) || [];
    
    emails.forEach(email => {
      const domain = email.split('@')[1];
      if (domain) {
        // Check if domain is in suspicious domains list
        if (scamIndicators.suspiciousDomains.some(d => domain.endsWith(d))) {
          indicators.push(`Suspicious email domain: "${domain}"`);
        }
      }
    });
    
    // Check for phone numbers (simple pattern)
    const phoneRegex = /(\+\d{1,3}[\s-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
    const phones = text.match(phoneRegex) || [];
    
    if (phones.length > 2) { // Multiple phone numbers might be a red flag
      indicators.push('Multiple phone numbers detected (could be a scam)');
    }
    
    // Check for poor grammar or excessive punctuation
    const poorGrammarIndicators = [
      { pattern: /\!{3,}/g, message: 'Excessive exclamation marks' },
      { pattern: /\?{2,}/g, message: 'Multiple question marks' },
      { pattern: /\.{3,}/g, message: 'Excessive periods' },
      { pattern: /\s{3,}/g, message: 'Excessive spacing' },
      { pattern: /[A-Z]{3,}/g, message: 'Excessive capitalization' },
      { pattern: /[^\x00-\x7F]/g, message: 'Non-ASCII characters' },
      { pattern: /\b(?:dear (?:sir|madam|customer|user|valued customer|account holder))\b/gi, message: 'Generic greeting' },
      { pattern: /\b(?:click here|click the link|click below|follow this link|click to verify|verify now|verify your account|verify your email|verify your identity|verify your information|verify your details|verify your credentials|verify your login|verify your access|verify your subscription|verify your payment|verify your billing|verify your account now|verify your account today|verify your account immediately)\b/gi, message: 'Urgent call to action' },
      { pattern: /\b(?:your account|your information|your details|your credentials|your login|your access|your subscription|your payment|your billing|your account now|your account today|your account immediately)\b/gi, message: 'Vague reference to your account' },
      { pattern: /\b(?:suspended|locked|restricted|compromised|hacked|accessed|used|logged in|accessed from a new device|accessed from a new location|accessed from a new IP address|accessed from a new browser|accessed from a new computer|accessed from a new phone|accessed from a new tablet|accessed from a new IP|accessed from a new country|accessed from a new city|accessed from a new state|accessed from a new region)\b/gi, message: 'Account status warning' }
    ];
    
    poorGrammarIndicators.forEach(indicator => {
      if (indicator.pattern.test(text)) {
        indicators.push(`Suspicious formatting: ${indicator.message}`);
      }
    });
    
    return Array.from(new Set(indicators)); // Remove duplicates
  }

  // Check domain reputation
  function checkDomain(domain) {
    if (!domain) return { isSuspicious: false, message: 'No domain provided' };
    
    const domainLower = domain.toLowerCase();
    let isSuspicious = false;
    const reasons = [];
    
    // Check if domain is in suspicious domains list
    if (scamIndicators.suspiciousDomains.some(d => domainLower.endsWith(d))) {
      isSuspicious = true;
      reasons.push('Domain uses a suspicious TLD');
    }
    
    // Check if domain is in phishing domains list (partial match)
    if (scamIndicators.phishingDomains.some(d => domainLower.includes(d.toLowerCase()))) {
      isSuspicious = true;
      reasons.push('Domain matches known phishing patterns');
    }
    
    // Check if domain is an IP address (suspicious)
    const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    if (ipRegex.test(domainLower)) {
      isSuspicious = true;
      reasons.push('Domain is an IP address (suspicious)');
    }
    
    // Check for subdomains (too many can be suspicious)
    const subdomains = domainLower.split('.').length - 2; // Subtract 2 for TLD and main domain
    if (subdomains > 2) {
      isSuspicious = true;
      reasons.push('Multiple subdomains detected');
    }
    
    // Check for domain age (simulated)
    const isNewDomain = Math.random() > 0.7; // 30% chance of being a new domain
    if (isNewDomain) {
      isSuspicious = true;
      reasons.push('Domain appears to be newly registered');
    }
    
    return {
      isSuspicious,
      message: isSuspicious 
        ? `Potential issues: ${reasons.join('; ')}` 
        : 'Domain appears legitimate',
      reasons
    };
  }

  // Format results with severity levels
  function formatResults(results, type) {
    if (!results || results.length === 0) {
      return {
        html: `<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                 <p class="text-green-700">No obvious scam indicators found.</p>
               </div>`,
        severity: 'safe'
      };
    }
    
    const severity = results.some(r => r.includes('phishing') || r.includes('suspended') || r.includes('compromised')) 
      ? 'high' 
      : results.length > 3 ? 'medium' : 'low';
    
    const severityClass = {
      high: 'bg-red-50 border-red-500',
      medium: 'bg-yellow-50 border-yellow-500',
      low: 'bg-blue-50 border-blue-500'
    }[severity];
    
    const severityText = {
      high: 'High Risk',
      medium: 'Medium Risk',
      low: 'Low Risk'
    }[severity];
    
    const html = `
      <div class="p-4 rounded-lg ${severityClass} border-l-4">
        <div class="flex items-center mb-2">
          <span class="font-bold mr-2">${severityText}:</span>
          <span>${results.length} potential issue${results.length > 1 ? 's' : ''} found</span>
        </div>
        <ul class="list-disc list-inside mt-2 space-y-1">
          ${results.map(r => `<li class="text-sm">${r}</li>`).join('')}
        </ul>
      </div>`;
    
    return { html, severity };
  }

  // Email verification handler
  emailForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim() || '';
    
    if (!email) {
      showError('Please enter a valid email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Please enter a valid email address');
      return;
    }

    const domain = email.split('@')[1];
    const domainCheck = checkDomain(domain);
    const subjectIndicators = checkForScamIndicators(subject);
    const emailIndicators = checkForScamIndicators(email);
    
    // Combine all indicators
    const allIndicators = [
      ...domainCheck.reasons.map(r => `Domain: ${r}`),
      ...subjectIndicators.map(i => `Subject: ${i}`),
      ...emailIndicators.map(i => `Email: ${i}`)
    ];
    
    const results = formatResults(allIndicators, 'email');
    
    // Build the results HTML
    let resultHTML = `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-blue-900 mb-4">Email Analysis Results</h3>
        
        <div class="space-y-4">
          <div class="p-4 bg-gray-50 rounded-lg">
            <p class="font-medium">Email Address:</p>
            <p class="text-gray-800 font-mono break-all">${email}</p>
          </div>
          
          ${domainCheck.isSuspicious 
            ? `<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                 <p class="font-medium text-red-800">⚠️ Suspicious Domain Detected</p>
                 <p class="text-sm text-gray-700 mt-1">${domainCheck.message}</p>
               </div>`
            : `<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                 <p class="text-green-800">Domain appears legitimate</p>
               </div>`
          }
          
          ${subject ? `
            <div class="p-4 bg-gray-50 rounded-lg">
              <p class="font-medium">Subject:</p>
              <p class="text-gray-800">${subject}</p>
            </div>
          ` : ''}
          
          ${results.html}
          
          <div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <h5 class="font-bold mb-2 text-blue-800">Safety Tips:</h5>
            <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Never share personal information via email</li>
              <li>Verify unexpected requests through official channels</li>
              <li>Look for poor grammar or spelling errors</li>
              <li>Hover over links to see the actual URL before clicking</li>
              <li>Be cautious of urgent or threatening language</li>
              <li>Check the sender's email address carefully</li>
              ${domainCheck.isSuspicious ? '<li class="font-bold text-red-700">This domain appears suspicious. Be extremely cautious.</li>' : ''}
            </ul>
          </div>
        </div>
      </div>
    `;

    resultsContent.innerHTML = resultHTML;
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
  });

  // Phone verification handler
  phoneForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('phone')?.value.trim();
    const message = document.getElementById('message')?.value.trim() || '';
    
    if (!phone) {
      showError('Please enter a phone number');
      return;
    }

    // Basic phone validation
    const phoneRegex = /^[\+\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      showError('Please enter a valid phone number');
      return;
    }

    const messageIndicators = checkForScamIndicators(message);
    const phoneIndicators = checkForScamIndicators(phone);
    
    // Combine all indicators
    const allIndicators = [
      ...messageIndicators.map(i => `Message: ${i}`),
      ...phoneIndicators.map(i => `Phone: ${i}`)
    ];
    
    const results = formatResults(allIndicators, 'phone');
    
    // Build the results HTML
    let resultHTML = `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-blue-900 mb-4">Text Message Analysis</h3>
        
        <div class="space-y-4">
          <div class="p-4 bg-gray-50 rounded-lg">
            <p class="font-medium">From:</p>
            <p class="text-gray-800 font-mono">${phone}</p>
          </div>
          
          ${message ? `
            <div class="p-4 bg-gray-50 rounded-lg">
              <p class="font-medium">Message:</p>
              <p class="text-gray-800 whitespace-pre-line">${message}</p>
            </div>
          ` : ''}
          
          ${results.html}
          
          <div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <h5 class="font-bold mb-2 text-blue-800">Safety Tips:</h5>
            <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Don't click on links in unsolicited messages</li>
              <li>Verify unexpected requests by contacting the company directly</li>
              <li>Be cautious of messages asking for personal information</li>
              <li>Look for poor grammar or spelling errors</li>
              <li>Be wary of messages creating a sense of urgency</li>
              <li>Never share verification codes or passwords via text</li>
              ${results.severity === 'high' ? '<li class="font-bold text-red-700">This message appears highly suspicious. Do not respond or click any links.</li>' : ''}
            </ul>
          </div>
        </div>
      </div>
    `;

    resultsContent.innerHTML = resultHTML;
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
  });

  function showError(message) {
    resultsContent.innerHTML = `
      <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
        <p class="text-red-700 font-medium">Error: ${message}</p>
      </div>
    `;
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
  }
});
