    // All game scenarios are stored here
    const scenarios = [
      {
      text: "During a routine review of mail gateway logs, you notice a sudden spike in phishing emails sent to academic and professional services staff. The messages appear to come from 'IT Support' and direct users to a fake Microsoft 365 login page. Several staff have already clicked the link, and one department reports unusual login prompts. Your manager is in a meeting, so you must recommend an immediate response before more accounts are compromised.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2001.jpg",
      choices: [
          {
            text: "Immediate University-Wide Warning",
            getEffects: () => ({ budget: -18000, reputation: +8, security: +10, morale: +4 }),
            getOutcome: () => "You send an immediate warning to all staff, reset exposed accounts and provide simple guidance on recognising the scam. Staff are alerted quickly, making them less likely to fall victim to the phishing campaign, while the university’s transparent and proactive response strengthens its reputation. Although the response requires spending on incident handling, account support, and emergency communications, morale improves because staff feel informed and supported about the threat."
          },
          {
            text: "Investigate Before Communicating",
            getEffects: () => ({ budget: -8000, reputation: +1, security: +3, morale: -2 }),
            getOutcome: () => "You quietly investigate affected users first, gather evidence, and then send a targeted message later. The investigation helps identify compromised accounts and improves security slightly, but the delay means the wider university is protected more slowly. Reputation improves a little because action is being taken, although the response is less visible than an immediate full warning. While this approach requires spending on forensic review, log analysis, and staff time, morale drops slightly because staff are not warned straight away and may feel unsupported if the issue spreads."
          },
          {
            text: "Block and Monitor Without Warning",
            getEffects: ({ security }) => security >= 110
            ? { budget: -5000, reputation: -4, security: -2, morale: -4 }
            : { budget: -42000, reputation: -16, security: -10, morale: -8 },

            getOutcome: ({ security }) => security >= 110
            ? "You block the sender domain and monitor activity without immediately informing staff. Although the threat is contained more cheaply through blocking, monitoring, and targeted account checks, staff remain unaware and may still interact with phishing messages, so security still declines. If compromises occur, the university’s failure to warn users could appear negligent and harm its reputation, while morale also drops because staff may feel unsupported."
            : "You block the sender domain and monitor activity without immediately informing staff. Because users are not warned, some may continue interacting with phishing messages, which weakens security further. If accounts are compromised, the university’s failure to alert staff could appear negligent and damage its reputation. The delayed response also increases costs through incident response, compromised account recovery, disruption, and follow-up support, while morale drops because staff may feel unsupported."
          }
        ]
      },

      
      {
      text: "At the start of the academic year, a scheduled vulnerability scan identifies a critical flaw in a legacy student records application used by Registry and Student Services. The system stores student names, IDs, contact details, and course information.\n\n No confirmed breach has been detected yet, but the software is externally reachable and the system’s vendor patch for the flaw has not yet been tested internally. Taking it offline would disrupt enrolment and records work during this busy period.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2002.jpg",
      choices: [
          {
            text: "Take the System Offline Immediately",
            getEffects: () => ({ budget: -70000, reputation: +2, security: +14, morale: -6 }),
            getOutcome: () => "You take the student records system offline until the vulnerability is patched and tested. Security improves significantly because the vulnerable system is removed from operation, and the university is seen to prioritise protection of student data. However, this response requires spending on emergency remediation, service disruption handling, and staff overtime and testing, while morale drops because administrative teams experience workflow disruption."
          },
          {
            text: "Apply Temporary Mitigations",
            getEffects: () => ({ budget: -30000, reputation: +3, security: +8, morale: +1 }),
            getOutcome: () => "You restrict network access, increase monitoring, and test the patch while keeping the system running. Security improves because the attack surface is reduced while the patch is being prepared, and reputation rises slightly because the university is managing the risk responsibly without causing major disruption. Although this response still requires spending on restrictions, monitoring, and testing, morale improves slightly because staff can continue working with minimal disruption."
          },
          {
            text: "Monitor and Delay Action",
            getEffects: ({ security }) => security >= 115
            ? { budget: -10000, reputation: -6, security: -4, morale: -3 }
            : { budget: -85000, reputation: -20, security: -16, morale: -9 },

            getOutcome: ({ security }) => security >= 115
            ? "You leave the system running and continue monitoring while planning a future upgrade. Stronger existing security reduces the immediate impact, but the vulnerability still remains exposed. Reputation falls because the delayed response weakens confidence in risk management, and morale also drops because staff are not fully protected."
            : "You leave the system running and monitor it while delaying action. Because the vulnerability remains exposed, security drops and a later breach would seriously damage the university’s credibility. The delayed response also creates major costs through emergency remediation, disruption to Registry services, and investigation and recovery work, while morale falls because confidence in leadership is undermined."
          }
       ]
      },

      {
      text: "While reviewing access logs for the assessment submission points on Moodle, you discover that several staff in one school have been sharing a single administrative password.\n\nThe department argues this is the only practical way to manage urgent deadlines and student extensions. However, shared credentials mean actions cannot be traced to individuals and create a serious accountability problem.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2003.jpg",
      choices: [
          {
            text: "Enforce Individual Accounts",
            getEffects: () => ({ budget: -20000, reputation: +4, security: +12, morale: -5 }),
            getOutcome: () => "You require staff to stop sharing passwords immediately and use individual accounts only. Security improves because named accounts strengthen traceability and accountability, while the university is seen to be applying stronger access control. However, this change requires spending on account setup, IT support, and onboarding, and morale drops slightly because staff must adapt to stricter procedures."
          },
          {
            text: "Temporary Sharing with a Deadline",
            getEffects: () => ({ budget: -8000, reputation: -2, security: -4, morale: -1 }),
            getOutcome: () => "You allow temporary password sharing while IT prepares a better access model. Although this keeps work moving in the short term, shared credentials still weaken accountability and auditability, which harms security and slightly damages the university’s reputation. While the interim arrangement requires some spending on access management, support, and documentation, morale drops slightly because the issue is not properly resolved and staff are left with an uncertain temporary solution."
          },
          {
            text: "Individual Accounts with MFA",
            getEffects: () => ({ budget: -35000, reputation: +8, security: +16, morale: +3 }),
            getOutcome: () => "You introduce named accounts with multi-factor authentication and short training. Security improves significantly because multi-factor authentication strengthens access protection, while the university’s reputation also improves because it adopts more modern security practices. Although the rollout requires spending on licensing, setup, training, and support, morale improves slightly because staff gain clearer and more secure access arrangements with proper guidance."
          }
        ]
      },

      {
      text: "The IT helpdesk reports that multiple machines in a campus computer lab are showing suspicious pop-ups and attempting to connect to known malicious domains. The lab is heavily used for teaching and assignment submission. Some students have files open on the lab PCs, and teaching staff are worried about disruption to scheduled sessions later that day.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2004.jpg",
      choices: [
          {
            text: "Shut Down the Lab Immediately",
            getEffects: () => ({ budget: -50000, reputation: +1, security: +14, morale: -8 }),
            getOutcome: () => "You take the entire lab offline, isolate all machines, and cancel sessions while systems are rebuilt. Security improves significantly because the infected systems are fully isolated, and the university is seen to prioritise system safety. However, this response requires spending on rebuilding affected machines, emergency IT labour, and teaching disruption and recovery, while morale drops because scheduled sessions are interrupted."
          },
          {
            text: "Isolate Affected Machines",
            getEffects: () => ({ budget: +12000, reputation: +4, security: +10, morale: +2 }),
            getOutcome: () => "You remove the infected machines from the network and clean them while keeping the rest of the lab running. Security improves because the infection is contained without a full shutdown, and the university’s reputation also improves because the issue is handled effectively with less disruption. This approach also reduces the overall cost by avoiding a complete lab rebuild, while morale improves because teaching sessions can continue."
          },
          { 
            text: "Keep the Lab Open and Monitor",
            getEffects: ({ security }) => security >= 115
            ? { budget: -7000, reputation: -5, security: -6, morale: -3 }
            : { budget: -65000, reputation: -18, security: -18, morale: -10 },

            getOutcome: ({ security }) => security >= 115
            ? "You keep the lab open to avoid disruption and monitor for further malicious activity. Stronger existing security helps limit the immediate impact, but the malware may still spread, so security still declines. Reputation also falls because keeping the lab open creates an avoidable risk, while morale drops slightly because staff and students remain exposed to uncertainty."
            : "You keep the lab open to avoid disruption and monitor for further malicious activity. Because the malware is not contained quickly enough, it continues spreading across machines, causing major cleanup costs, disruption to teaching, and additional incident response work. Reputation falls because uncontrolled infections may damage trust in IT services, while morale also drops because ongoing disruption and unmanaged risk undermine confidence in the response."
          }
        ]
      },

      {
      text: "A monitoring alert shows that a member of staff has exported an unusually large volume of student data from Moodle outside normal working hours. The account has legitimate access, but the pattern is unusual. The line manager says the staff member has been under pressure recently and may simply be working from home. You need to advise on the next step.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2005.jpg",
      choices: [
          {
            text: "Immediate Formal Investigation",
            getEffects: () => ({ budget: -25000, reputation: -3, security: +6, morale: -7 }),
            getOutcome: () => "You suspend access temporarily and launch a formal investigation with HR and line management. Security improves because the suspicious behaviour is addressed immediately, but reputation falls slightly because a formal investigation signals a serious internal security issue. The response also requires spending on HR investigation, IT forensic analysis, and management and compliance support, while morale drops because staff may feel under scrutiny."
          },
          {
            text: "Covert Monitoring",
            getEffects: () => ({ budget: -18000, reputation: 0, security: +8, morale: -3 }),
            getOutcome: () => "You monitor the staff member closely, preserve evidence, and delay overt action. Security improves slightly because the activity is watched while evidence is gathered, and reputation remains neutral because the situation is handled internally rather than escalated immediately. Although this approach still requires spending on monitoring, evidence preservation, and analyst time, morale drops slightly because covert monitoring could undermine trust if it is later discovered."
          },
          {
            text: "Supportive Manager-Led Check-In",
            getEffects: ({ security }) => security >= 108
            ? { budget: -12000, reputation: +2, security: +2, morale: +6 }
            : { budget: -35000, reputation: -8, security: -6, morale: +2 },

            getOutcome: ({ security }) => security >= 108
            ? "You ask the line manager to hold a welfare and policy discussion while access is reviewed. Because existing security controls are already stronger, the behaviour is addressed early and proportionately. Security and reputation improve slightly, while morale rises because the response prioritises trust and support."
            : "You ask the line manager to hold a welfare and policy discussion while access is reviewed. Because the issue is not contained strongly enough when existing security is weaker, security falls and the university’s reputation also declines because the response may appear too soft on a potentially serious insider risk. The delayed handling increases later incident, escalation, and containment costs, although morale still rises slightly because the response feels more supportive than punitive."
          }
        ]
      },
      
      {
      text: "Several shared drives used by academic departments become inaccessible, and users see ransom notes demanding payment in cryptocurrency. Some restored files appear corrupted. Teaching materials and administrative documents are affected, and senior leadership wants services back quickly. There is pressure to minimise disruption before students begin submitting coursework.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2006.jpg",
      choices: [
          {
            text: "Refuse Payment and Restore from Backups",
            getEffects: () => ({ budget: -95000, reputation: +6, security: +14, morale: +3 }),
            getOutcome: () => "You refuse the ransom, isolate affected systems, and prioritise restoration from backups alongside incident response. Security improves because systems are recovered through controlled remediation, and the university’s responsible response strengthens its reputation. Although this approach requires significant spending on restoration work, disruption, and incident response, morale improves slightly because leadership takes a principled approach and restores services through proper recovery processes."
          },
          {
            text: "Pay the Ransom Quickly",
            getEffects: () => ({ budget: -140000, reputation: -14, security: -4, morale: -8 }),
            getOutcome: () => "You pay the ransom in an attempt to restore services quickly and reduce visible disruption. Security still falls because paying attackers does not guarantee system safety, and reputation declines because the decision may be seen as irresponsible. The university also absorbs heavy costs from the ransom, recovery activity, and investigation, while morale drops because staff may lose trust in leadership’s judgement."
          },
          {
            text: "Negotiate While Recovering",
            getEffects: ({ reputation }) => reputation >= 110
            ? { budget: -70000, reputation: -4, security: +4, morale: -4 }
            : { budget: -120000, reputation: -18, security: 0, morale: -10 },

            getOutcome: ({ reputation }) => reputation >= 110
            ? "You open communication with the attacker while beginning technical recovery and containment. Because the university already has stronger trust and credibility, the reputational damage is smaller, and security improves slightly as containment starts immediately. Even so, negotiation still feels risky, requires significant recovery and monitoring effort, and morale falls slightly because staff may feel uneasy about the approach."
            : "You open communication with the attacker while beginning technical recovery and containment. Although recovery starts straight away, negotiating with attackers does not improve the university’s protection and may be seen as a weak or risky response, so reputation declines. The approach also creates major disruption and response costs, while morale falls because prolonged uncertainty and negotiation can undermine confidence in leadership."
          }
        ]
      },

      {
      text: "The university has expanded remote learning and hybrid working, but the current setup relies on basic remote access controls. Some staff are using personal devices, and there have been reports of weak home network security. Leadership wants a practical solution that improves security without causing major complaints from staff and students.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2007.jpg",
      choices: [
          {
            text: "Secure Remote Work Upgrade",
            getEffects: () => ({budget: -60000, reputation: +8, security: +14, morale: +3 }),
            getOutcome: () => "You deploy stronger VPN controls, endpoint protection, and clearer guidance for personal device use. Security improves because stronger access controls reduce attack risk, while the university’s reputation also improves because it demonstrates a clear commitment to protecting digital learning environments. Although this approach requires significant spending on secure remote access, endpoint protection, and implementation support, morale improves because staff feel better supported with stronger tools and guidance."
          },
          {
            text: "Keep Current Setup with Advice",
            getEffects: () => ({ budget: -12000, reputation: -2, security: -4, morale: 0 }),
            getOutcome: () => "You keep the current setup but issue reminders on safe remote working. Because reminders alone do not meaningfully strengthen remote access protections, security falls slightly, and the university’s reputation also declines because the response may be seen as insufficient. Although this approach still requires some spending on guidance, support, and minor adjustments, staff morale remains stable because there is no direct disruption."
          },
          {
            text: "Prioritise Convenience Over Security",
            getEffects: () => ({ budget: 0, reputation: -12, security: -16, morale: -3 }),
            getOutcome: () => "You allow open access for ease of use and avoid introducing new controls. Security declines because weak remote access protections increase the university’s exposure to cyber risk, and reputation also falls because poor protection of remote learning environments could damage trust. Although this approach avoids any immediate spending, morale still drops slightly because staff may feel under-supported if security problems emerge later."
          }
        ]
      },
      
      {
      text: "A school wants to adopt a new cloud-based learning tool before the next teaching block. The supplier promises better student engagement, but the platform has a limited security track record and stores data outside the UK. Academic staff are pushing for a quick approval, while Legal and IT Services want due diligence before rollout.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2008.jpg",    
      choices: [
          {
            text: "Full Security Assessment Before Approval",
            getEffects: () => ({ budget: -28000, reputation: +4, security: +8, morale: +1 }),
            getOutcome: () => "You delay rollout until the supplier completes a security review and the necessary contractual safeguards are agreed. Security improves because supplier risks are properly evaluated, and the university’s reputation also improves because responsible procurement helps protect institutional data. Although this process requires spending on security assessment, legal review, and approval delay, morale improves slightly because staff can feel more confident that any approved tool is secure and properly vetted."
          },
          {
            text: "Approve with Minimal Review",
            getEffects: ({ security }) => security >= 110
            ? { budget: +20000, reputation: -3, security: -4, morale: -2 }
            : { budget: -45000, reputation: -14, security: -12, morale: -7 },

            getOutcome: ({ security }) => security >= 110
            ? "You approve the tool quickly with only a light review to meet teaching timelines. Because existing security is stronger, the immediate impact is reduced, but the platform may still introduce unassessed vulnerabilities, so security declines. The university’s reputation also falls slightly because approving a tool with minimal review weakens confidence in governance. Although this approach lowers the overall cost by avoiding a full due-diligence process, morale still drops slightly because the risks are not being fully managed."
            : "You approve the tool quickly with only a light review to meet teaching timelines. Because the platform has not been properly assessed, it may introduce vulnerabilities that weaken security, while the university’s reputation also declines because weak oversight can damage institutional trust. The decision leads to later remediation, support, integration, and incident follow-up costs, and morale falls because staff are left dealing with the consequences of poor oversight."
          },
          {
            text: "Reject the Tool Entirely",
            getEffects: () => ({ budget: -3000, reputation: -4, security: +2, morale: -5 }),
            getOutcome: () => "You reject the supplier and ask staff to continue using existing platforms. Security improves because potential third-party risks are avoided, but the university’s reputation declines because the decision may appear resistant to innovation or unresponsive to teaching needs. Although this choice only requires limited spending on maintaining current platforms and communicating the decision, morale falls because staff may feel that useful innovation is being restricted."
          }
        ]
      },

      {
      text: "An old on-premises server used by the Development and Alumni team stores contact data, donor histories, and communication preferences. The server is increasingly unstable and no longer supported by the vendor (it no longer receives updates and security patches). A replacement project is planned, but not yet funded. You are asked how to reduce risk now.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2009.jpg",
      choices: [
          {
            text: "Replace the Server Now",
            getEffects: () => ({ budget: -110000, reputation: +8, security: +16, morale: +4 }),
            getOutcome: () => "You fund an immediate replacement project and migrate the data to a supported platform. Security improves because the outdated infrastructure is replaced with a supported and more secure system, while the university’s reputation also improves because sensitive donor data is better protected. Although this decision requires major spending on replacement, migration, implementation, and testing, morale improves slightly because staff benefit from a more reliable system."
          },
          {
            text: "Segment and Harden the Server",
            getEffects: () => ({ budget: +15000, reputation: +3, security: +8, morale: +1 }),
            getOutcome: () => "You restrict access, segment the network, and add monitoring as an interim control. Security improves because the tighter access controls reduce the server’s exposure to attack, while the university’s reputation also improves slightly because it is taking practical action to protect sensitive donor data. This approach also lowers the overall cost by delaying full replacement and relying on more targeted improvements, while morale improves slightly because staff can continue working with better protection and no major disruption."
          },
          {
            text: "Leave It in Place",
            getEffects: ({ security }) => security >= 112
            ? { budget: -5000, reputation: -5, security: -4, morale: -2 }
            : { budget: -60000, reputation: -18, security: -14, morale: -8 },

            getOutcome: ({ security }) => security >= 112
            ? "You keep the server unchanged until the future replacement project begins. Although stronger existing security reduces the immediate impact, the unsupported system still remains vulnerable, so security declines. The university’s reputation also falls because delaying action signals weak risk management, while morale drops slightly because staff continue working with an unreliable system."
            : "You keep the server unchanged until the future replacement project begins. Because the unsupported system remains vulnerable, security declines and the university’s reputation also falls because a potential breach could seriously damage trust. The delayed response creates growing costs through reactive repairs, disruption, and emergency support, while morale drops because unreliable systems and delayed action undermine confidence."
          }
        ]
      },

      {
      text: "A research centre is storing sensitive project data in shared folders that are accessible to a wider group of staff and postgraduate researchers than intended. The principal investigator wants collaboration to remain easy, but the current permissions mean confidential data could be viewed or altered by people who do not need access.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2010.jpg",
      choices: [
          {
            text: "Restrict Access Strictly",
            getEffects: () => ({ budget: -15000, reputation: +4, security: +12, morale: -3 }),
            getOutcome: () => "You apply least-privilege permissions immediately and log access to sensitive folders. Security improves because tighter access controls protect sensitive research data, and the university’s reputation also improves because it is seen to safeguard research integrity. Although this approach requires spending on permission changes, logging, and administrative support, morale drops slightly because collaboration becomes more restricted."
          },
          {
            text: "Leave Permissions as They Are",
            getEffects: () => ({ budget: 0, reputation: -8, security: -10, morale: -1 }),
            getOutcome: () => "You keep the current permissions to preserve collaboration and avoid complaints. Security declines because excessive access increases the risk of misuse, while the university’s reputation also falls because weak data governance may harm research credibility. Although this choice avoids any direct cost, morale still drops slightly because unclear access boundaries can create unease and reduce trust in how sensitive data is managed."
          },
          {
            text: "Phased Access Review",
            getEffects: () => ({ budget: -22000, reputation: +6, security: +8, morale: +4 }),
            getOutcome: () => "You run a phased access review with the research centre and tighten permissions in stages. Security improves because access is gradually restricted in a more controlled way, while the university’s reputation also improves because governance is strengthened without causing abrupt disruption. Although this approach requires spending on review work, coordination, and permissions updates, morale improves because collaboration can continue during the transition while security is strengthened."
          }
        ]
      },

      {
      text: "A recent cyber incident affecting an internal university service has been contained, but remediation costs were significant and there is a risk of reputational fallout if details emerge later. Ahead of the next meeting with governors and major funders, senior leadership must decide how much to communicate. Some argue for full transparency, while others want to avoid alarming stakeholders.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2011.jpg",
      choices: [
          {
            text: "Full Transparent Disclosure",
            getEffects: () => ({ budget: -25000, reputation: +10, security: 0, morale: +6 }),
            getOutcome: () => "You fully brief governors and major funders on the incident, the costs involved, and the remediation actions taken. Security remains stable because disclosure does not directly change technical controls, although it may encourage stronger oversight. The university’s reputation improves because transparency helps build trust with stakeholders, and morale rises because leadership is seen to act openly and accountably, even though the process requires time and resources for reporting, communication, and supporting evidence."
          },
          {
            text: "Limited Strategic Disclosure",
            getEffects: () => ({ budget: -12000, reputation: +3, security: 0, morale: +1 }),
            getOutcome: () => "You provide a high-level summary that emphasises containment and improvement activity. Security remains stable because remediation work is still ongoing, while the university’s reputation improves slightly because stakeholders receive controlled but constructive information. Although this approach still requires time and effort for briefing, coordination, and communications support, morale improves slightly because the issue is acknowledged without causing unnecessary alarm."
          },
          {
            text: "Non-Disclosure",
            getEffects: ({ reputation }) => reputation >= 115
            ? { budget: -4000, reputation: -8, security: 0, morale: -8 }
            : { budget: -50000, reputation: -24, security: -4, morale: -15 },

            getOutcome: ({ reputation }) => reputation >= 115
            ? "You decide not to raise the incident unless directly asked, prioritising short-term stability. Security remains stable because non-disclosure does not directly change technical protections, but the university’s reputation still declines because undisclosed incidents risk damaging future trust, even when prior reputation is strong. Although this approach avoids major immediate costs, morale falls because staff may feel leadership is avoiding accountability."
            : "You decide not to raise the incident unless directly asked, prioritising short-term stability. Because the lack of transparency discourages learning from the incident, security declines, and the university’s reputation also falls because undisclosed issues risk damaging future trust. The delayed approach creates growing costs through reputational response, emergency stakeholder management, and follow-up remediation, while morale drops because staff may feel leadership is avoiding accountability."
          }
        ]
      },

      {
      text: "Recent phishing simulations show weak staff awareness in several departments. IT Services has proposed a refreshed training programme with short interactive modules and role-specific content. Finance is pushing for lower spend, and some managers think optional guidance is enough. You are asked to recommend an approach for the next academic year.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2012.jpg",
      choices: [
          {
            text: "Mandatory Role-Based Training",
            getEffects: () => ({ budget: -45000, reputation: +6, security: +10, morale: +8 }),
            getOutcome: () => "You launch mandatory interactive training with role-specific modules and follow-up exercises. Security improves because staff gain stronger awareness of phishing and cyber risks, while the university’s reputation also improves because it demonstrates a clear commitment to cyber awareness. Although this programme requires spending on licensing, content development, delivery, and administration, morale improves because staff feel better supported and more confident in dealing with security issues."
          },
          {
            text: "Optional Training Modules",
            getEffects: () => ({ budget: +10000, reputation: +1, security: +2, morale: +1 }),
            getOutcome: () => "You provide optional e-learning and awareness posters without making completion mandatory. Security improves slightly because some staff still learn useful security practices, while the university’s reputation also improves slightly because it is seen to be taking some action on awareness. This approach also lowers the overall cost by avoiding a full mandatory programme, while morale improves because staff have greater flexibility."
          },
          {
            text: "No New Investment",
            getEffects: () => ({ budget: 0, reputation: -10, security: -10, morale: -6 }),
            getOutcome: () => "You keep the current basic guidance and make no new investment in training. Security declines because staff awareness remains weak, while the university’s reputation also falls because poor training may increase the risk of future incidents. Although this approach avoids any new spending, morale drops because staff may feel under-supported in dealing with cyber risks."
          }
        ]
      },

      {
      text: "Following concerns about productivity in hybrid working, a senior manager proposes deploying employee monitoring software to track login time, device activity, and application use. HR is concerned about trust and privacy, while some leaders believe the software would improve accountability. You are asked for a security and governance recommendation.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2013.jpg",
      choices: [
          {
            text: "Full Monitoring Deployment",
            getEffects: () => ({ budget: -20000, reputation: -12, security: +2, morale: -18 }),
            getOutcome: () => "You deploy employee monitoring software across the university to track usage and productivity. Security improves because suspicious activity can be detected earlier, but the university’s reputation declines because this level of monitoring may be seen as intrusive and ethically problematic. Although the rollout requires spending on software, deployment, oversight, and support, morale drops because staff may feel heavily surveilled."
          },
          {
            text: "Monitoring with Consent and Safeguards",
            getEffects: () => ({ budget: -28000, reputation: +2, security: +4, morale: -2 }),
            getOutcome: () => "You introduce limited monitoring with consent, transparency, and clear governance controls. Security improves because monitoring is in place with controlled oversight, while the university’s reputation also improves because the approach balances security with ethical practice. Although this still requires spending on monitoring tools, governance processes, and implementation support, morale drops slightly because some discomfort remains even with safeguards."
          },
          {
            text: "Reject Monitoring",
            getEffects: () => ({ budget: +18000, reputation: +4, security: 0, morale: +6 }),
            getOutcome: () => "You reject the proposal and instead strengthen trust-based management and guidance. Security remains stable because no new monitoring capability is introduced, while the university’s reputation improves because it is seen to respect employee privacy and trust. This approach also reduces costs by avoiding the purchase and deployment of monitoring software, and morale improves because staff trust and autonomy are preserved."
          }
        ]
      },

      {
      text: "An internal review finds that one area of campus still relies on weaker Wi-Fi authentication settings for compatibility with older devices. The current setup is convenient, but it increases the risk of unauthorised access and credential misuse. Updating the system would require device re-enrolment and additional support time.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2014.jpg",
      choices: [
          {
            text: "Full Authentication Upgrade",
            getEffects: () => ({ budget: -40000, reputation: +5, security: +12, morale: -2 }),
            getOutcome: () => "You upgrade the remaining Wi-Fi area to stronger authentication and re-enrol affected devices. Security improves because stronger authentication reduces unauthorised access, and the university’s reputation also improves because it is seen to strengthen network protection. Although this response requires spending on upgrades, deployment, and user support, morale drops slightly because staff and students must reconfigure their devices."
          },
          {
            text: "Password-Only Improvement",
            getEffects: () => ({ budget: -14000, reputation: +1, security: +4, morale: 0 }),
            getOutcome: () => "You improve passwords and configuration without carrying out the full upgrade. Security improves slightly because these changes reduce some of the risk, and the university’s reputation also improves slightly because it is taking visible action to strengthen security. Although this approach still requires spending on updates, support, testing, and rollout, morale remains stable because the disruption is minimal."
          },
          {
            text: "Leave Current Setup",
            getEffects: ({ security }) => security >= 112
            ? { budget: 0, reputation: -4, security: -4, morale: -1 }
            : { budget: -35000, reputation: -14, security: -12, morale: -6 },

            getOutcome: ({ security }) => security >= 112
            ? "You keep the existing weaker authentication settings for compatibility and convenience. Although stronger existing security reduces the immediate impact, the weaker setup still remains exploitable, so security declines. The university’s reputation also falls because leaving the weakness in place reflects poor risk management, while morale drops slightly because staff and students continue using a less secure network."
            : "You keep the existing weaker authentication settings for compatibility and convenience. Because the weaker setup remains exploitable, security declines and the university’s reputation also falls because insecure networks could damage institutional credibility. The delayed approach leads to later incident response, support disruption, and remedial fix costs, while morale drops because users remain exposed to avoidable risk even without immediate disruption."
          }
        ]
      },

      {
      text: "The university is considering whether to: \n a. move more data storage to a third-party cloud provider,\n b. retain a strengthened on-premises environment,\n c. or adopt a hybrid approach. \n\n Cloud migration could improve resilience and scalability, but there are concerns around control, cost, and the handling of sensitive data.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2015.jpg",
      choices: [
          {
            text: "Move to Third-Party Cloud",
            getEffects: () => ({ budget: +25000, reputation: +2, security: +4, morale: +1 }),
            getOutcome: () => "You migrate most storage to a reputable third-party cloud provider and rely on its resilience features. Security improves because cloud providers often offer stronger resilience and monitoring, while the university’s reputation also improves because it is seen to adopt more modern infrastructure. This approach also lowers the overall cost by reducing hardware maintenance and on-premises running expenses, and morale improves slightly because systems become more reliable."
          },
          {
            text: "Strengthen On-Premises Storage",
            getEffects: () => ({ budget: -80000, reputation: +3, security: +10, morale: +2 }),
            getOutcome: () => "You retain on-premises storage but invest in resilience, patching, and backup improvements. Security improves because the university’s local infrastructure receives stronger protection, while its reputation also improves slightly because it is investing in resilient and well-protected internal systems. Although this approach requires major spending on infrastructure upgrades, resilience measures, and backup support, morale improves slightly because existing systems remain familiar while becoming more reliable."
          },
          {
            text: "Hybrid Storage Model",
            getEffects: () => ({ budget: -65000, reputation: +6, security: +8, morale: +4 }),
            getOutcome: () => "You keep highly sensitive data on-premises and move less sensitive data to the cloud. Security improves because sensitive information remains better protected while the university still gains more flexibility, and its reputation also improves because the approach balances innovation with caution. Although this model requires spending on setup, integration, and ongoing support, morale improves slightly because teams benefit from more flexible and reliable systems."
          }
        ]
      },
];
const scenariosPerRun = scenarios.length;