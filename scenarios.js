const scenarios = [
  {
        text: "Your company is facing increasing phishing attacks. What action do you take?",
        choices: [
          {
            text: "Invest in phishing simulation training",
            getEffects: () => {
              if (security < 60) {
                return { budget: -10, reputation: +10, security: +20 };
              } else {
                return { budget: -5, reputation: +2, security: +5 };
              }
            },
            getOutcome: () => {
              if (security < 60) {
                return "Training greatly improved employee awareness and reduced attack success rates.";
              } else {
                return "While already quite secure, training maintained vigilance and had a small benefit.";
              }
            }
          },
          {
            text: "Ignore for now and monitor",
            getEffects: () => {
              if (security < 50) {
                return { budget: 0, reputation: -20, security: -30 };
              } else {
                return { budget: 0, reputation: -5, security: -10 };
              }
            },
            getOutcome: () => {
              if (security < 50) {
                return "Ignoring the issue led to a serious breach, damaging your company's credibility.";
              } else {
                return "Nothing major happened yet, but stakeholders are beginning to question your inaction.";
              }
            }
          },
          {
            text: "Hire an external consultant",
            getEffects: () => {
              if (budget < 30) {
                return { budget: -25, reputation: +5, security: +5 };
              } else {
                return { budget: -25, reputation: +10, security: +15 };
              }
            },
            getOutcome: () => {
              if (budget < 30) {
                return "The consultant was helpful, but the expense strained other departments.";
              } else {
                return "The consultant improved defences and reassured your board of directors.";
              }
            }
          }
        ]
      },
      {
        text: "You must decide on a policy for personal devices at work (BYOD). What do you choose?",
        choices: [
          {
            text: "Ban BYOD entirely",
            getEffects: () => ({ budget: 0, reputation: -5, security: +20 }),
            getOutcome: () => "Security improved with strict control, but staff morale dipped due to inflexible policy."
          },
          {
            text: "Allow with minimal monitoring",
            getEffects: () => ({ budget: -5, reputation: +5, security: -10 }),
            getOutcome: () => "People liked the freedom, but vulnerabilities increased due to lax oversight."
          },
          {
            text: "Implement a managed BYOD policy with MDM software",
            getEffects: () => {
              if (budget > 70) {
                return { budget: -15, reputation: +10, security: +15 };
              } else {
                return { budget: -15, reputation: +5, security: +10 };
              }
            },
            getOutcome: () => {
              if (budget > 70) {
                return "Managed BYOD was fully funded and led to a very successful implementation.";
              } else {
                return "Balanced approach improved oversight and kept users happy, though it came with setup costs.";
              }
            }
          }
        ]
      },
      {
        text: "Your company has been hit with a ransomware attack. What is your immediate response?",
        choices: [
          {
            text: "Pay the ransom to recover data quickly",
            getEffects: () => {
              if (budget < 50) {
                return { budget: -100, reputation: -10, security: -5 };
              } else {
                return { budget: -100, reputation: -15, security: -10 };
              }
            },
            getOutcome: () => {
              if (budget < 50) {
                return "Paying the ransom helped restore operations, but emboldened future attacks and damaged your reputation.";
              } else {
                return "The ransom was paid swiftly, but stakeholders questioned the long-term implications of negotiating with criminals.";
              }
            }
          },
          {
            text: "Restore from backups and report the incident",
            getEffects: () => {
              if (security > 80) {
                return { budget: -10, reputation: +5, security: +10 };
              } else {
                return { budget: -20, reputation: 0, security: +5 };
              }
            },
            getOutcome: () => {
              if (security > 80) {
                return "Well-prepared with secure backups, recovery was smooth and transparency improved public trust.";
              } else {
                return "Restoring took time, but avoiding ransom payment upheld policy and demonstrated some resilience.";
              }
            }
          },
          {
            text: "Take systems offline and investigate",
            getEffects: () => {
              if (reputation > 80) {
                return { budget: -15, reputation: -5, security: +10 };
              } else {
                return { budget: -15, reputation: -10, security: +15 };
              }
            },
            getOutcome: () => {
              if (reputation > 80) {
                return "Taking action showed responsibility, though delays in service caused some customer complaints.";
              } else {
                return "The breach was contained and the root cause identified, helping prevent similar future incidents.";
              }
            }
          }
        ]
      }
    ];
