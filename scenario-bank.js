    // All game scenarios are stored here
    const scenarios = [
      {
      text: "During a routine review of mail gateway logs, you notice a sudden spike in phishing emails sent to academic and professional services staff. The messages appear to come from 'IT Support' and direct users to a fake Microsoft 365 login page. Several staff have already clicked the link, and one department reports unusual login prompts. Your manager is in a meeting, so you must recommend an immediate response before more accounts are compromised.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2001.jpg",
      choices: [
          {
            title: "Immediate University-Wide Warning",
            details: "Send an immediate warning to all staff, reset exposed accounts, and provide simple guidance on recognising the scam.",
            estimatedCost: "Low",
            getEffects: () => ({ budget: -18000, reputation: +8, security: +10, morale: +4 }),
            getResults: () => ({
                security: "increases because staff are alerted and less likely to fall victim to the phishing campaign.",
                reputation: "increases because the university demonstrates transparency and proactive incident response.",
                budget: "£7,000 on incident response staff time, £6,000 on account resets and user support, £5,000 on emergency communications and monitoring.",
                morale: "increases because staff feel supported and informed about security threats."
            }), 
          },
          {
            title: "Investigate Before Communicating",
            details: "Quietly investigate affected users first, gather evidence, and then send a targeted message later.",
            estimatedCost: "Very Low",
            getEffects: () => ({ budget: -8000, reputation: +1, security: +3, morale: -2 }),
            getResults: () => ({
                security: "increases slightly because the investigation helps identify affected accounts but delays wider protection.",
                reputation: "increases slightly because the university is taking action, even though the response is less visible than a full warning.",
                budget: "£5,000 on forensic review of affected accounts and £3,000 on log analysis and staff time.",
                morale: "decreases slightly because staff are not immediately warned and may feel unsupported if the issue spreads."
            })
          },
          {
            title: "Block and Monitor Without Warning",
            details: "Block the sender domain and monitor for further activity without immediately informing staff.",
            estimatedCost: "Very Low",       
            getEffects: ({ security }) => security >= 110
            ? { budget: -5000, reputation: -4, security: -2, morale: -4 }
            : { budget: -42000, reputation: -16, security: -10, morale: -8 },

            getResults: ({ security }) => security >= 110
            ? {
                security: "decreases because staff remain unaware and may still interact with phishing messages.",
                reputation: "decreases because failure to warn users could appear negligent if accounts are compromised.",
                budget: "£3,000 on blocking and monitoring activity and £2,000 on targeted account checks.",
                morale: "decreases because staff may feel unsupported if compromises occur."
              }
            : {
                security: "decreases because staff remain unaware and may still interact with phishing messages.",
                reputation: "decreases because failure to warn users could appear negligent if accounts are compromised.",
                budget: "£18,000 on delayed incident response, £14,000 on compromised account recovery, and £10,000 on disruption and follow-up support.",
                morale: "decreases because staff may feel unsupported if compromises occur."
              }
          }
        ]
      },

      {
      text: "At the start of the academic year, a scheduled vulnerability scan identifies a critical flaw in a legacy student records application used by Registry and Student Services. The system stores student names, IDs, contact details, and course information.\n\nNo confirmed breach has been detected yet, but the software is externally reachable and the system’s vendor patch for the flaw has not yet been tested internally. Taking it offline would disrupt enrolment and records work during this busy period.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2002.jpg",
      choices: [
          {
            title: "Take the System Offline Immediately",
            details: "Take the student records system offline until the vulnerability is patched and tested.",
            estimatedCost: "High",
            getEffects: () => ({ budget: -70000, reputation: +2, security: +14, morale: -6 }),
            getResults: () => ({
              security: "increases significantly because the vulnerable system is removed from operation.",
              reputation: "increases because the university prioritises protection of student data.",
              budget: "£30,000 on emergency remediation, £20,000 on service disruption handling, and £20,000 on staff overtime and testing.",
              morale: "decreases because administrative staff experience workflow disruption."
          })
          },
          {
            title: "Monitor and Delay Action",
            details: "Leave the system running and monitor it while planning a future upgrade.",
            estimatedCost: "Low",
            getEffects: ({ security }) => security >= 115
            ? { budget: -10000, reputation: -6, security: -4, morale: -3 }
            : { budget: -85000, reputation: -20, security: -16, morale: -9 },

            getResults: ({ security }) => security >= 115
             ? {
                  security: "decreases slightly because the vulnerability remains exposed, even though stronger existing security reduces the impact.",
                  reputation: "decreases because a delayed response still weakens confidence in institutional risk management.",
                  budget: "£4,000 on monitoring, £3,000 on interim controls, and £3,000 on staff review time.",
                  morale: "decreases slightly because staff are not fully protected by a delayed response."
                }
              : {
                  security: "decreases because the vulnerability remains exposed.",
                  reputation: "decreases because a later breach would damage institutional credibility.",
                  budget: "£35,000 on later emergency remediation, £25,000 on disruption to Registry services, and £25,000 on incident investigation and recovery.",
                  morale: "decreases because later disruption and risk exposure would undermine confidence in leadership."
                }
          },
          {
            title: "Apply Temporary Mitigations",
            details: "Restrict network access, increase monitoring, and test the patch while keeping the system running.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -30000, reputation: +3, security: +8, morale: +1 }),
            getResults: () => ({
                security: "increases moderately because network restrictions reduce the attack surface while the patch is being tested.",
                reputation: "increases slightly because the university is managing the risk responsibly without causing major disruption.",
                budget: "£12,000 on network restrictions, £10,000 on increased monitoring, and £8,000 on patch testing.",
                morale: "increases slightly because staff can continue working with minimal disruption."
            })
          }
        ]
      },

      {
      text: "While reviewing access logs for the assessment submission points on Moodle, you discover that several staff in one school have been sharing a single administrative password.\n\nThe department argues this is the only practical way to manage urgent deadlines and student extensions. However, shared credentials mean actions cannot be traced to individuals and create a serious accountability problem.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2003.jpg",
      choices: [
          {
            title: "Individual Accounts with MFA",
            details: "Introduce named accounts with multi-factor authentication and short training.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -35000, reputation: +8, security: +16, morale: +3 }),
            getResults: () => ({
                security: "increases significantly because multi-factor authentication strengthens access protection.",
                reputation: "increases because the university adopts modern security practices.",
                budget: "£15,000 on MFA rollout, £12,000 on licensing and setup, and £8,000 on training and support.",
              morale: "increases slightly because staff gain clearer, more secure access arrangements with proper support."
            })
          },
          {
            title: "Temporary Sharing with a Deadline",
            details: "Allow temporary password sharing while IT prepares a better access model.",
            estimatedCost: "Very Low",
            getEffects: () => ({ budget: -8000, reputation: -2, security: -4, morale: -1 }),
            getResults: () => ({
                security: "decreases because shared credentials weaken accountability and auditability.",
                reputation: "decreases because poor access control practices undermine security standards.",
                budget: "£4,000 on temporary access management, £2,000 on support calls, and £2,000 on documenting the interim arrangement.",
                morale: "decreases slightly because the insecure temporary arrangement creates uncertainty without properly solving the problem."
            })
          },
          {
            title: "Enforce Individual Accounts",
            details: "Require staff to stop sharing passwords immediately and use individual accounts only.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -20000, reputation: +4, security: +12, morale: -5 }),
            getResults: () => ({
                security: "increases because individual accounts improve traceability and accountability.",
                reputation: "increases because stronger access control demonstrates responsible governance.",
                budget: "£8,000 on creating and configuring individual accounts, £7,000 on IT support, and £5,000 on user onboarding.",
                morale: "decreases slightly because staff must adapt to stricter procedures."
            })
          }
        ]
      },

      {
      text: "The IT helpdesk reports that multiple machines in a campus computer lab are showing suspicious pop-ups and attempting to connect to known malicious domains. The lab is heavily used for teaching and assignment submission. Some students have files open on the lab PCs, and teaching staff are worried about disruption to scheduled sessions later that day.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2004.jpg",
      choices: [
          {
            title: "Shut Down the Lab Immediately",
            details: "Take the entire lab offline, isolate all machines, and cancel sessions while systems are rebuilt.",
            estimatedCost: "High",
            getEffects: () => ({ budget: -50000, reputation: +1, security: +14, morale: -8 }),
            getResults: () => ({
                security: "increases significantly because infected systems are fully isolated.",
                reputation: "increases because the university prioritises system safety.",
                budget: "£22,000 on rebuilding affected machines, £15,000 on emergency IT labour, and £13,000 on teaching disruption and lab recovery.",
                morale: "decreases because teaching sessions are disrupted."
            })
          },
          {
            title: "Isolate Affected Machines",
            details: "Remove infected machines from the network and clean them while keeping the rest of the lab running.",
            estimatedCost: "Negligible",
            getEffects: () => ({ budget: +12000, reputation: +4, security: +10, morale: +2 }),
            getResults: () => ({
                security: "increases moderately because the infection is contained while systems remain operational.",
                reputation: "increases because the issue is handled effectively without major disruption.",
                budget: "£20,000 saved by avoiding a full lab shutdown and rebuild, minus £8,000 spent on targeted cleaning and containment.",
                morale: "increases because teaching sessions can continue."
          })
          },
          { 
            title: "Keep the Lab Open and Monitor",
            details: "Keep the lab open to avoid disruption and monitor for further malicious activity.",
            estimatedCost: "Very Low",
            getEffects: ({ security }) => security >= 115
            ? { budget: -7000, reputation: -5, security: -6, morale: -3 }
            : { budget: -65000, reputation: -18, security: -18, morale: -10 },

            getResults: ({ security }) => security >= 115
            ? {
                security: "decreases because malware may still spread, although stronger existing security limits the damage.",
                reputation: "decreases because keeping the lab open still creates avoidable risk.",
                budget: "£4,000 on monitoring and containment effort and £3,000 on follow-up technical checks.",
                morale: "decreases slightly because staff and students remain exposed to uncertainty."
             }
           : {
                security: "decreases because malware may continue spreading across machines.",
                reputation: "decreases because uncontrolled infections may damage trust in IT services.",
                budget: "£28,000 on widespread malware cleanup, £20,000 on disrupted teaching and support, and £17,000 on additional incident response.",
                morale: "decreases because ongoing disruption and unmanaged risk undermine confidence in the response."
              }
            }
        ]
      },

      {
      text: "A monitoring alert shows that a member of staff has exported an unusually large volume of student data from Moodle outside normal working hours. The account has legitimate access, but the pattern is unusual. The line manager says the staff member has been under pressure recently and may simply be working from home. You need to advise on the next step.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2005.jpg",
      choices: [
          {
            title: "Immediate Formal Investigation",
            details: "Suspend access temporarily and launch a formal investigation with HR and line management.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -25000, reputation: -3, security: +6, morale: -7 }),
            getResults: () => ({
                security: "increases because suspicious behaviour is addressed immediately.",
                reputation: "decreases because a formal investigation signals a serious internal security issue.",
                budget: "£12,000 on HR investigation, £7,000 on IT forensic analysis, and £6,000 on management and compliance support.",
                morale: "decreases because staff may feel under scrutiny."
           })
          },
          {
            title: "Covert Monitoring",
            details: "Monitor the staff member closely, preserve evidence, and delay overt action.",
            estimatedCost: "Low",
            getEffects: () => ({ budget: -18000, reputation: 0, security: +8, morale: -3 }),
            getResults: () => ({
                security: "increases slightly because activity is monitored while evidence is gathered.",
                reputation: "remains neutral because the situation is handled internally.",
                budget: "£9,000 on covert monitoring effort, £5,000 on evidence preservation, and £4,000 on analyst time.",
                morale:   "decreases slightly because covert monitoring can undermine trust if discovered."
          })
          },
          {
            title: "Supportive Manager-Led Check-In",
            details: "Ask the line manager to hold a welfare and policy discussion while access is reviewed.",
            estimatedCost: "Low",
            getEffects: ({ security }) => security >= 108
            ? { budget: -12000, reputation: +2, security: +2, morale: +6 }
            : { budget: -35000, reputation: -8, security: -6, morale: +2 },

            getResults: ({ security }) => security >= 108
            ? {
                security: "increases slightly because the behaviour is addressed early and supported by stronger existing controls.",
                reputation: "increases slightly because the issue is handled responsibly and proportionately.",
                budget: "£5,000 on management intervention, £4,000 on access review, and £3,000 on policy follow-up.",
                morale: "increases because the response prioritises trust and support."
              }
            : {
                security: "decreases because the issue is not contained strongly enough when existing security is weaker.",
                reputation: "decreases because the university may appear too soft on a potentially serious insider risk.",
                budget: "£15,000 on later incident handling, £10,000 on management escalation, and £10,000 on follow-up containment and review.",
                morale: "increases slightly because the response still prioritises trust and support over punishment."
              }
            }
        ]
      },

      {
      text: "Several shared drives used by academic departments become inaccessible, and users see ransom notes demanding payment in cryptocurrency. Some restored files appear corrupted. Teaching materials and administrative documents are affected, and senior leadership wants services back quickly. There is pressure to minimise disruption before students begin submitting coursework.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2006.jpg",
      choices: [
          {
            title: "Pay the Ransom Quickly",
            details: "Pay to try to restore services as fast as possible and minimise visible disruption.",
            estimatedCost: "Very High",
            getEffects: () => ({ budget: -140000, reputation: -14, security: -4, morale: -8 }),
            getResults: () => ({
                security: "decreases because paying attackers does not guarantee system safety.",
                reputation: "decreases because paying ransom may appear irresponsible.",
                budget: "£90,000 on ransom-related financial loss, £30,000 on recovery activity, and £20,000 on investigation and validation.",
                morale: "decreases because staff may lose trust in leadership decisions."
            })
          },
          {
            title: "Negotiate While Recovering",
            details: "Open communication with the attacker while beginning technical recovery and containment.",
            estimatedCost: "High",
            getEffects: ({ reputation }) => reputation >= 110
            ? { budget: -70000, reputation: -4, security: +4, morale: -4 }
            : { budget: -120000, reputation: -18, security: 0, morale: -10 },

            getResults: ({ reputation }) => reputation >= 110
            ? {
                security: "increases slightly because containment and recovery begin immediately alongside negotiation.",
                reputation: "decreases slightly because negotiation still carries reputational risk, even when prior trust is high.",
                budget: "£30,000 on recovery, £20,000 on negotiation handling, and £20,000 on containment and monitoring.",
                morale: "decreases slightly because staff may feel uneasy about negotiating with attackers."
              }
            : {
                security: "remains stable because containment and recovery begin immediately, but negotiation does not strengthen protection.",
                reputation: "decreases because negotiating with attackers may be viewed as a weak or risky response.",
                budget: "£45,000 on delayed recovery, £40,000 on service disruption, and £35,000 on negotiation and response effort.",
                morale: "decreases because prolonged uncertainty and negotiation with attackers can undermine confidence in leadership."
              }
            },
            {
              title: "Refuse Payment and Restore from Backups",
              details: "Refuse the ransom, isolate systems, and prioritise recovery from backups and incident response.",
              estimatedCost: "Very High",
              getEffects: () => ({ budget: -95000, reputation: +6, security: +14, morale: +3 }),
              getResults: () => ({
                security: "increases because systems are recovered through controlled remediation.",
                reputation: "increases because the university demonstrates responsible incident response.",
                budget: "£40,000 on restoring systems and files, £30,000 on downtime and disruption, and £25,000 on incident response.",
                morale: "increases slightly because leadership takes a principled approach and restores services through proper recovery processes."
              })
            }
        ]
      },

      {
      text: "The university has expanded remote learning and hybrid working, but the current setup relies on basic remote access controls. Some staff are using personal devices, and there have been reports of weak home network security. Leadership wants a practical solution that improves security without causing major complaints from staff and students.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2007.jpg",
      choices: [
          {
            title: "Secure Remote Work Upgrade",
            details: "Deploy stronger VPN controls, endpoint protection, and guidance for personal device use.",
            estimatedCost: "High",
            getEffects: () => ({budget: -60000, reputation: +8, security: +14, morale: +3 }),
            getResults: () => ({
              security: "increases because stronger access controls reduce attack risk.",
              reputation: "increases because the university demonstrates commitment to protecting digital learning environments.",
              budget: "£25,000 on stronger VPN controls, £20,000 on endpoint protection, and £15,000 on implementation support and user guidance.",
              morale: "increases because staff feel supported with better tools."
            })
          },
          {
            title: "Keep Current Setup with Advice",
            details: "Keep the current setup but issue reminders on safe remote working.",
            estimatedCost: "Low",
            getEffects: () => ({ budget: -12000, reputation: -2, security: -4, morale: 0 }),
            getResults: () => ({
                security: "decreases slightly because reminders alone do not meaningfully strengthen remote access protections.",
                reputation: "decreases slightly because minimal action may be seen as insufficient for protecting remote learning environments.",
                budget: "£6,000 on awareness guidance, £3,000 on support overhead, and £3,000 on minor control adjustments.",
                morale: "remains stable because staff experience no disruption."
            })
          },
          {
            title: "Prioritise Convenience Over Security",
            details: "Allow open access for ease of use and avoid new controls.",
            estimatedCost: "Negligible",
            getEffects: () => ({ budget: 0, reputation: -12, security: -16, morale: -3 }),
            getResults: () => ({
                security: "decreases because weak remote access controls increase exposure to cyber risk.",
                reputation: "decreases because poor protection of remote learning environments could damage trust.",
                budget: "no immediate cost or saving because no new controls are implemented.",
                morale: "decreases slightly because staff may feel under-supported if security issues arise later."
            })
          }
        ]
      },
      
      {
      text: "A school wants to adopt a new cloud-based learning tool before the next teaching block. The supplier promises better student engagement, but the platform has a limited security track record and stores data outside the UK. Academic staff are pushing for a quick approval, while Legal and IT Services want due diligence before rollout.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2008.jpg",    
      choices: [
          {
            title: "Reject the Tool Entirely",
            details: "Reject the supplier and ask staff to continue using existing platforms.",
            estimatedCost: "Negligible",
            getEffects: () => ({ budget: -3000, reputation: -4, security: +2, morale: -5 }),
            getResults: () => ({
                security: "increases because potential third-party risks are avoided.",
                reputation: "decreases because the university may appear resistant to innovation or unresponsive to teaching needs.",
                budget: "£3,000 on staff time to maintain current platforms and communicate the decision.",
                morale: "decreases because staff may feel innovation is being restricted."
              })
          },
          {
            title: "Full Security Assessment Before Approval",
            details: "Delay rollout until the supplier completes a security review and contractual safeguards are agreed.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -28000, reputation: +4, security: +8, morale: +1 }),
            getResults: () => ({
              security: "increases because supplier risks are thoroughly evaluated.",
              reputation: "increases because responsible procurement protects institutional data.",
              budget: "£14,000 on security assessment, £8,000 on legal and contractual review, and £6,000 on approval delay and admin time.",
              morale: "increases slightly because staff can feel more confident that any approved tool is secure and properly vetted."
            })
          },
          {
            title: "Approve with Minimal Review",
            details: "Approve quickly with only a light review to meet teaching timelines.",
            estimatedCost: "Negligible",
            getEffects: ({ security }) => security >= 110
            ? { budget: +20000, reputation: -3, security: -4, morale: -2 }
            : { budget: -45000, reputation: -14, security: -12, morale: -7 },

            getResults: ({ security }) => security >= 110
            ? {
                security: "decreases because the platform may introduce unassessed vulnerabilities, even though stronger existing security reduces the impact.",
                reputation: "decreases slightly because approving a tool with minimal review weakens confidence in governance.",
                budget: "£25,000 saved by avoiding a full due-diligence process, minus £5,000 on minimal review and deployment.",
                morale: "decreases slightly because staff gain quick access to the tool, but risk remains insufficiently managed."
              }
            : {
                security: "decreases because the platform may introduce unassessed vulnerabilities.",
                reputation: "decreases because weak oversight may harm institutional trust.",
                budget: "£20,000 on later risk remediation, £15,000 on support and integration issues, and £10,000 on incident follow-up.",
                morale: "decreases because later issues and poor oversight create frustration for staff using the tool."
              }
            }
        ]
      },

      {
      text: "An old on-premises server used by the Development and Alumni team stores contact data, donor histories, and communication preferences. The server is increasingly unstable and no longer supported by the vendor (it no longer receives updates and security patches). A replacement project is planned, but not yet funded. You are asked how to reduce risk now.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2009.jpg",
      choices: [
          {
            title: "Replace the Server Now",
            details: "Fund an immediate replacement project and migrate the data to a supported platform.",
            estimatedCost: "High",
            getEffects: () => ({ budget: -110000, reputation: +8, security: +16, morale: +4 }),
            getResults: () => ({
                security: "increases because outdated infrastructure is replaced with supported systems.",
                reputation: "increases because sensitive donor data is better protected.",
                budget: "£60,000 on replacement infrastructure, £25,000 on migration, and £25,000 on implementation and testing.",
                morale: "increases slightly because systems become more reliable."
              })
          },
          {
            title: "Leave It in Place",
            details: "Keep the server unchanged until the future replacement project begins.",
            estimatedCost: "Low",
            getEffects: ({ security }) => security >= 112
            ? { budget: -5000, reputation: -5, security: -4, morale: -2 }
            : { budget: -60000, reputation: -18, security: -14, morale: -8 },

            getResults: ({ security }) => security >= 112
            ? {
                security: "decreases because the unsupported system remains vulnerable, even though stronger existing security reduces the impact.",
                reputation: "decreases because delaying action still signals weak risk management.",
                budget: "£3,000 on basic monitoring and £2,000 on periodic maintenance checks.",
                morale: "decreases slightly because staff continue working with an unreliable system."
              }
            : {
                security: "decreases because the unsupported system remains vulnerable.",
                reputation: "decreases because a potential breach could damage trust.",
                budget: "£25,000 on reactive repairs, £20,000 on instability-related disruption, and £15,000 on emergency support.",
                morale: "decreases because unreliable systems and delayed action undermine confidence."
              }
            },
            {
              title: "Segment and Harden the Server",
              details: "Restrict access, segment the network, and add monitoring as an interim control.",
              estimatedCost: "Low",
              getEffects: () => ({ budget: +15000, reputation: +3, security: +8, morale: +1 }),
              getResults: () => ({
                security: "increases moderately because access restrictions reduce attack exposure.",
                reputation: "increases slightly because the university is taking practical action to protect sensitive donor data.",
                budget: "£30,000 saved by delaying full replacement, minus £15,000 on segmentation, hardening, and monitoring.",
                morale: "increases slightly because operations continue with improved protection and no major disruption."
              })
            },
        ]
      },

      {
      text: "A research centre is storing sensitive project data in shared folders that are accessible to a wider group of staff and postgraduate researchers than intended. The principal investigator wants collaboration to remain easy, but the current permissions mean confidential data could be viewed or altered by people who do not need access.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2010.jpg",
      choices: [
          {
            title: "Restrict Access Strictly",
            details: "Apply least-privilege permissions immediately and log access to sensitive folders.",
            estimatedCost: "Low",
            getEffects: () => ({ budget: -15000, reputation: +4, security: +12, morale: -3 }),
            getResults: () => ({
                security: "increases because least-privilege access protects sensitive research data.",
                reputation: "increases because the university safeguards research integrity.",
                budget: "£6,000 on permission restructuring, £5,000 on logging and audit setup, and £4,000 on admin support.",
                morale: "decreases slightly because collaboration becomes more restricted."
              })
          },
          {
            title: "Leave Permissions as They Are",
            details: "Keep current permissions to preserve collaboration and avoid complaints.",
            estimatedCost: "Negligible",
            getEffects: () => ({ budget: 0, reputation: -8, security: -10, morale: -1 }),
            getResults: () => ({
                security: "decreases because excessive access increases risk of misuse.",
                reputation: "decreases because weak data governance may harm research credibility.",
                budget: "no direct cost because no access changes are made.",
                morale: "decreases slightly because unclear boundaries around access can create unease and reduce trust in data governance."
              })
          },
          {
            title: "Phased Access Review",
            details: "Run a phased access review with the research centre and tighten permissions in stages.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -22000, reputation: +6, security: +8, morale: +4 }),
            getResults: () => ({
                security: "increases moderately because access is gradually tightened.",
                reputation: "increases because governance improves without abrupt disruption.",
                budget: "£10,000 on phased review work, £7,000 on stakeholder coordination, and £5,000 on permissions updates.",
                morale: "increases because collaboration continues during the transition while security is improved."
              })
          }
        ]
      },

      {
      text: "A recent cyber incident affecting an internal university service has been contained, but remediation costs were significant and there is a risk of reputational fallout if details emerge later. Ahead of the next meeting with governors and major funders, senior leadership must decide how much to communicate. Some argue for full transparency, while others want to avoid alarming stakeholders.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2011.jpg",
      choices: [
          {
            title: "Full Transparent Disclosure",
            details: "Fully brief governors and major funders on the incident, costs, and remediation actions.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -25000, reputation: +10, security: 0, morale: +6 }),
            getResults: () => ({
                security: "remains stable because disclosure does not directly change technical controls, but it may encourage stronger oversight.",
                reputation: "increases because transparency builds trust with stakeholders.",
                budget: "£10,000 on reporting preparation, £8,000 on senior stakeholder communications, and £7,000 on supporting evidence and admin work.",
                morale: "increases because leadership demonstrates accountability."
              })
          },
          {
            title: "Non-Disclosure",
            details: "Do not raise the incident unless directly asked, prioritising short-term stability.",
            estimatedCost: "Negligible",
            getEffects: ({ reputation }) => reputation >= 115
            ? { budget: -4000, reputation: -8, security: 0, morale: -8 }
            : { budget: -50000, reputation: -24, security: -4, morale: -15 },

            getResults: ({ reputation }) => reputation >= 115
            ? {
                security: "remains stable because non-disclosure does not directly change technical protections.",
                reputation: "decreases because undisclosed incidents still risk future trust loss, even when prior reputation is strong.",
                budget: "£2,000 on minimal briefing prep and £2,000 on internal coordination.",
                morale: "decreases because staff may perceive leadership as avoiding accountability."
              }
            : {
                security: "decreases because lack of transparency discourages learning from incidents.",
                reputation: "decreases because undisclosed incidents risk future trust loss.",
                budget: "£20,000 on later reputational response, £15,000 on emergency stakeholder management, and £15,000 on follow-up remediation.",
                morale: "decreases because staff may perceive leadership as avoiding accountability."
              }
          },
          {
            title: "Limited Strategic Disclosure",
            details: "Provide a high-level summary that emphasises containment and improvement activity.",
            estimatedCost: "Low",
            getEffects: () => ({ budget: -12000, reputation: +3, security: 0, morale: +1 }),
            getResults: () => ({
                security: "remains stable because remediation actions are still underway.",
                reputation: "increases slightly because stakeholders receive controlled but constructive information.",
                budget: "£5,000 on briefing preparation, £4,000 on internal coordination, and £3,000 on communications support.",
                morale: "increases slightly because internal teams see that the issue is being acknowledged without causing unnecessary alarm."
              })
          }
        ]
      },

      {
      text: "Recent phishing simulations show weak staff awareness in several departments. IT Services has proposed a refreshed training programme with short interactive modules and role-specific content. Finance is pushing for lower spend, and some managers think optional guidance is enough. You are asked to recommend an approach for the next academic year.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2012.jpg",
      choices: [
          {
            title: "No New Investment",
            details: "Keep current basic guidance and make no new training investment.",
            estimatedCost: "Negligible",
            getEffects: () => ({ budget: 0, reputation: -10, security: -10, morale: -6 }),
            getResults: () => ({
                security: "decreases because staff awareness remains weak.",
                reputation: "decreases because poor training may lead to incidents.",
                budget: "no new spend because the university keeps its current basic approach.",
                morale: "decreases because staff may feel under-supported in dealing with cyber risks."
              })
          },
          {
            title: "Optional Training Modules",
            details: "Provide optional e-learning and awareness posters without enforcing completion.",
            estimatedCost: "Negligible",
            getEffects: () => ({ budget: +10000, reputation: +1, security: +2, morale: +1 }),
            getResults: () => ({
                security: "increases slightly because some staff will still learn security practices.",
                reputation: "increases slightly because the university is seen to be taking some action on awareness.",
                budget: "£18,000 saved by not running the full mandatory programme, minus £8,000 on optional materials and awareness resources.",
                morale: "increases because staff have flexibility."
              })
          },
          {
            title: "Mandatory Role-Based Training",
            details: "Launch mandatory interactive training with role-specific modules and follow-up exercises.",
            estimatedCost: "High",
            getEffects: () => ({ budget: -45000, reputation: +6, security: +10, morale: +8 }),
            getResults: () => ({
                security: "increases because staff knowledge of phishing and cyber risks improves.",
                reputation: "increases because the university demonstrates commitment to cyber awareness.",
                budget: "£20,000 on training platform licensing, £15,000 on content development, and £10,000 on delivery and administration.",
                morale: "increases because staff feel better supported and more confident in dealing with security issues."
              })
          }
        
        ]
      },

      {
      text: "Following concerns about productivity in hybrid working, a senior manager proposes deploying employee monitoring software to track login time, device activity, and application use. HR is concerned about trust and privacy, while some leaders believe the software would improve accountability. You are asked for a security and governance recommendation.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2013.jpg",
      choices: [
          {
            title: "Monitoring with Consent and Safeguards",
            details: "Use limited monitoring with consent, transparency, and clear governance controls.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -28000, reputation: +2, security: +4, morale: -2 }),
            getResults: () => ({
                security: "increases moderately because monitoring exists but with controlled oversight.",
                reputation: "increases because governance balances security with ethics.",
                budget: "£12,000 on limited monitoring tools, £9,000 on governance and consent processes, and £7,000 on implementation support.",
                morale: "decreases slightly because monitoring still creates some discomfort even with safeguards."
             })
          },
          {
            title: "Full Monitoring Deployment",
            details: "Deploy university-wide employee monitoring software to track usage and productivity.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: -20000, reputation: -12, security: +2, morale: -18 }),
            getResults: () => ({
                security: "increases because suspicious activity can be detected earlier.",
                reputation: "decreases because heavy monitoring may be seen as intrusive and ethically problematic.",
                budget: "£10,000 on monitoring software, £5,000 on deployment, and £5,000 on oversight and support.",
                morale: "decreases because employees may feel surveilled."
            })         
          },
          {
            title: "Reject Monitoring",
            details: "Reject the proposal and instead improve trust-based management and guidance.",
            estimatedCost: "Negligible",
            getEffects: () => ({ budget: +18000, reputation: +4, security: 0, morale: +6 }),
            getResults: () => ({
                security: "remains stable because no new monitoring capability is introduced.",
                reputation: "increases because the university is seen to respect employee privacy and trust.",
                budget: "£18,000 saved by not procuring or deploying monitoring software.",
                morale: "increases because staff trust and autonomy are preserved."
              })
          }
        ]
      },

      {
      text: "An internal review finds that one area of campus still relies on weaker Wi-Fi authentication settings for compatibility with older devices. The current setup is convenient, but it increases the risk of unauthorised access and credential misuse. Updating the system would require device re-enrolment and additional support time.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2014.jpg",
      choices: [
          {
            title: "Full Authentication Upgrade",
            details: "Upgrade the remaining Wi-Fi area to stronger authentication and re-enrol affected devices.",
            estimatedCost: "High",
            getEffects: () => ({ budget: -40000, reputation: +5, security: +12, morale: -2 }),
            getResults: () => ({
                security: "increases because stronger authentication reduces unauthorised access.",
                reputation: "increases because the university strengthens network protection.",
                budget: "£18,000 on authentication upgrades, £12,000 on deployment and device re-enrolment, and £10,000 on user support.",
                morale: "decreases slightly because users must reconfigure devices."
              })
          },
          {
            title: "Password-Only Improvement",
            details: "Improve passwords and configuration but do not implement the full upgrade yet.",
            estimatedCost: "Low",
            getEffects: () => ({ budget: -14000, reputation: +1, security: +4, morale: 0 }),
            getResults: () => ({
                security: "increases slightly because password improvements reduce some risk.",
                reputation: "increases slightly because the university is taking some visible action to strengthen security.",
                budget: "£6,000 on configuration updates, £4,000 on support time, and £4,000 on testing and rollout.",
                morale: "remains stable because disruption is minimal."
          })
          },
          {
            title: "Leave Current Setup",
            details: "Keep the existing weaker authentication settings for compatibility and convenience.",
            estimatedCost: "Negligible",
            getEffects: ({ security }) => security >= 112
            ? { budget: 0, reputation: -4, security: -4, morale: -1 }
            : { budget: -35000, reputation: -14, security: -12, morale: -6 },

            getResults: ({ security }) => security >= 112
            ? {
                security: "decreases because weak authentication remains exploitable, although stronger existing security limits the impact.",
                reputation: "decreases because leaving the weakness in place still reflects poor risk management.",
                budget: "no immediate spend because existing controls remain in place and no corrective work is triggered.",
                morale: "decreases slightly because staff and students continue using a weaker security setup."
              }
            : {
                security: "decreases because weak authentication remains exploitable.",
                reputation: "decreases because insecure networks could damage institutional credibility.",
                budget: "£15,000 on later incident response, £10,000 on support disruption, and £10,000 on remedial fixes.",
                morale: "decreases because users remain exposed to avoidable risk even if there is no immediate disruption."
              }
          }
        ]
      },

      {
      text: "The university is considering whether to:\n\na. move more data storage to a third-party cloud provider,\nb. retain a strengthened on-premises environment,\nc. or adopt a hybrid approach.\n\nCloud migration could improve resilience and scalability, but there are concerns around control, cost, and the handling of sensitive data.",
      image: "https://raw.githubusercontent.com/jrallison93/ISMSimulationGame/586eadf0a3402a7b07d33eda539f002069a762ae/scenario-images/Scenario%20-%2015.jpg",
      choices: [        
          {
            title: "Hybrid Storage Model",
            details: "Keep highly sensitive data on-premises and move less sensitive data to the cloud.",
            estimatedCost: "High",
            getEffects: () => ({ budget: -65000, reputation: +6, security: +8, morale: +4 }),

            getResults: () => ({
                security: "increases moderately because sensitive data remains protected while flexibility improves.",
                reputation: "increases because the university balances innovation with caution.",
                budget: "£30,000 on hybrid environment setup, £20,000 on integration work, and £15,000 on ongoing support and management.",
                morale: "increases slightly because teams gain flexibility in system use."
              })
          },
          {
            title: "Move to Third-Party Cloud",
            details: "Migrate most storage to a reputable third-party cloud provider and rely on its resilience features.",
            estimatedCost: "Medium",
            getEffects: () => ({ budget: +25000, reputation: +2, security: +4, morale: +1 }),
            getResults: () => ({
                security: "increases because cloud providers often offer strong resilience and monitoring.",
                reputation: "increases because the university adopts modern infrastructure.",
                budget: "£40,000 saved on hardware maintenance and on-premises running costs, minus £15,000 on cloud migration and setup.",
                morale: "increases slightly because systems become more reliable."
              })
          },
          {
            title: "Strengthen On-Premises Storage",
            details: "Retain on-premises storage but invest in resilience, patching, and backup improvements.",
            estimatedCost: "Very High",
            getEffects: () => ({ budget: -80000, reputation: +3, security: +10, morale: +2 }),
            getResults: () => ({
                security: "increases because local infrastructure receives improved protection.",
                reputation: "increases slightly because the university is investing in resilient, well-protected internal systems.",
                budget: "£35,000 on infrastructure upgrades, £25,000 on resilience improvements, and £20,000 on backup and support enhancements.",
                morale: "increases slightly because existing systems remain familiar while becoming more reliable."
              })
          }
        ]
      },
];
const scenariosPerRun = scenarios.length;