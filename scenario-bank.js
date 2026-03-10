    // All game scenarios are stored here
    const scenarios = [
      {
        text: "Your company is considering moving its data to a public cloud provider. What do you do?",
        choices: [
          {
            text: "Migrate fully to the cloud with top-tier security options",
            getEffects: () => ({ budget: -40000, reputation: +10, security: +15, morale: +5 }),
            getOutcome: () => "The migration went smoothly and improved agility. Staff welcomed the move."
          },
          {
            text: "Implement a hybrid cloud model",
            getEffects: () => ({ budget: -20000, reputation: +5, security: +10, morale: +3 }),
            getOutcome: () => "You maintained control over sensitive data while enjoying cloud flexibility."
          },
          {
            text: "Stay on-premises due to compliance concerns",
            getEffects: () => ({ budget: 0, reputation: -5, security: +5, morale: -2 }),
            getOutcome: () => "While secure, the organisation fell behind competitors in innovation."
          }
        ]
      },

      {
        text: "A zero-day vulnerability has been disclosed in software widely used across your organisation. Patches are not yet available. How do you respond?",
        choices: [
          {
            text: "Isolate vulnerable systems and restrict access",
            getEffects: () => ({ budget: -15000, reputation: +5, security: +15, morale: -5 }),
            getOutcome: () => "Operations slow slightly but risk exposure is reduced. Leadership appreciates the precautionary approach."
          },
          {
            text: "Continue operations and monitor vendor guidance",
            getEffects: () => ({ budget: 0, reputation: -5, security: -10, morale: +2 }),
            getOutcome: () => "Short-term productivity remains high, but the security team is uneasy about the exposure window."
          },
          {
            text: "Deploy temporary compensating controls and communicate to staff",
            getEffects: () => ({ budget: -8000, reputation: +8, security: +10, morale: +3 }),
            getOutcome: () => "The organisation responds in a balanced and transparent manner, improving trust internally and externally."
          }
        ] 
      },
 
      {
        text: "Your company is facing a surge in phishing attacks targeting staff across departments. Some phishing emails are highly convincing, and a few employees have clicked malicious links. No breach has occurred yet, but the risk is escalating. How do you respond?",
        choices: [
          {
            text: "Invest in phishing simulation training",
            getEffects: () => ({ budget: -10000, reputation: +10, security: +10, morale: +5 }),
            getOutcome: () => "The training was well-received and addressed major gaps in awareness. Staff became more confident in handling phishing threats, and internal risk assessments improved."
         },
         {
           text: "Ignore for now and monitor",
           getEffects: () => ({ budget: 0, reputation: -10, security: -10, morale: -5 }),
           getOutcome: () => "The absence of action led to growing frustration, especially after a phishing email nearly compromised a shared inbox. Morale declined, and questions were raised in leadership meetings."
         },
         {
           text: "Hire an external consultant",
           getEffects: () => ({ budget: -25000, reputation: +8, security: +15, morale: +2 }),
           getOutcome: () => "The consultant identified key weaknesses and quickly introduced targeted controls. The organisation saw meaningful improvements, and staff appreciated the expert support."
         }

        ]
      },

      {
        text: "With remote work now embedded in your organisational culture, the question of how to handle personal devices in the workplace (BYOD – Bring Your Own Device) has become increasingly urgent. While some staff appreciate the convenience and autonomy of using their own smartphones and laptops, your security team warns that uncontrolled devices increase the attack surface significantly. Legal and HR departments are also concerned about data protection, employee surveillance, and potential liability. You must decide on a BYOD policy that balances risk, cost, and morale across the organisation.",
        choices: [
          {
            text: "Ban BYOD entirely",
            getEffects: () => ({ budget: 0, reputation: -5, security: +20, morale: -10 }),
            getOutcome: () => 
            "By implementing a complete ban on personal devices, you significantly reduce your organisation’s exposure to unmonitored endpoints and potential malware infections. The IT team welcomes the decision, citing reduced complexity. However, many staff members view the policy as overly draconian and inflexible, especially those who regularly travel or work from home. Internal surveys indicate growing frustration over the lack of flexibility, and HR logs a noticeable uptick in complaints."
         },
         {
            text: "Allow with minimal monitoring",
            getEffects: () => ({ budget: -5000, reputation: +5, security: -10, morale: +5 }),
            getOutcome: () => 
            "You decide to adopt a permissive BYOD stance, allowing employees to use their own devices with only light monitoring and basic network segmentation. This fosters a sense of trust and autonomy among staff, particularly younger digital-native employees. While your reputation as a flexible, modern employer improves, your security team logs a sharp increase in unmanaged device connections. This looser control leaves the door open to phishing apps, data leakage, and non-compliant software—raising concerns during the next audit."
         },
         {
            text: "Implement a managed BYOD policy with MDM software",
            getEffects: ({ budget }) => budget > 495000
            ? { budget: -25000, reputation: +10, security: +15, morale: +5 }
            : { budget: -25000, reputation: +5, security: +10, morale: +2 },
            getOutcome: () =>
            "You invest in a comprehensive Mobile Device Management (MDM) system that allows you to monitor, encrypt, and control access on personal devices without violating staff privacy. While some employees are initially wary of management's control over their devices, your transparent communication and opt-out clauses reassure most of the workforce. The policy strikes a pragmatic balance: security risk is meaningfully reduced, staff productivity remains high, and your organisation is commended in a sector briefing for proactive digital governance."
          }
        ]
      },

      {
        text: "Your company has been hit with a ransomware attack. What is your immediate response?",
        choices: [
          {
            text: "Pay the ransom to recover data quickly",
            getEffects: () => ({ budget: -100000, reputation: -10, security: -5, morale: -10 }),
            getOutcome: () => "Staff felt vulnerable and questioned leadership."
          },
          {
            text: "Restore from backups and report the incident",
            getEffects: () => ({ budget: -20000, reputation: 0, security: +5, morale: +5 }),
            getOutcome: () => "Transparent recovery reassured employees and customers."
          },
          {
            text: "Take systems offline and investigate",
            getEffects: () => ({ budget: -15000, reputation: -5, security: +10, morale: -5 }),
            getOutcome: () => "Operations slowed down, creating temporary stress."
          }
        ]
      }
    ];