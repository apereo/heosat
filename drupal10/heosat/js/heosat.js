window.HEOSAT_DATA = {
  "title": "Higher Education Open Source Assessment Tool (HEOSAT)",
  "subtitle": "A guided maturity assessment for open source software projects in higher education and edtech.",
  "version": "2026.07 enhanced guidance edition",
  "scale": [
    "Not present",
    "Ad hoc / emerging",
    "Documented",
    "Practiced consistently",
    "Measured and improving",
    "Leading / exemplary"
  ],
  "attributions": {
    "license": "HEOSAT is adapted from and inspired by OSS Watch's Open Source Openness Rating. Except where otherwise noted, HEOSAT guidance content is made available under a Creative Commons Attribution-ShareAlike 4.0 International License.",
    "items": [
      {"title":"OSS Watch Open Source Openness Rating", "url":"https://oss-watch.ac.uk/apps/openness/", "note":"Original openness rating framework and Creative Commons Attribution-ShareAlike 4.0 licensing reference."},
      {"title":"Creative Commons Attribution-ShareAlike 4.0 International License", "url":"https://creativecommons.org/licenses/by-sa/4.0/", "note":"License used for adapted HEOSAT guidance content unless otherwise noted."},
      {"title":"Open Source Initiative — The Open Source Definition", "url":"https://opensource.org/osd", "note":"Reference definition for open source licensing and open source freedoms."},
      {"title":"Open Source Initiative — OSI Approved Licenses", "url":"https://opensource.org/licenses", "note":"Reference list for OSI Approved Open Source Licenses."},
      {"title":"Karl Fogel, Producing Open Source Software", "url":"https://producingoss.com/", "note":"Influence on governance, contribution practices, project operations, and community sustainability guidance."},
      {"title":"Ithaka S+R and Apereo — Sustaining Open Source Software in the Research Enterprise", "url":"https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/", "note":"Influence on higher education, research software, institutional adoption, and sustainability guidance."},
      {"title":"Ithaka S+R and Apereo — Practical Guide for Sustaining Open Source Software", "url":"https://sr.ithaka.org/publications/practical-guide-for-sustaining-open-source-software/", "note":"Influence on sustainability planning, stakeholder alignment, and project improvement practices."},
      {"title":"LYRASIS — It Takes a Village", "url":"https://www.lyrasis.org/programs/Pages/It-Takes-a-Village.aspx", "note":"Influence on community-supported sustainability models for open source and open infrastructure."},
      {"title":"CHAOSS Community", "url":"https://chaoss.community/", "note":"Influence on community health, contributor experience, and open source metrics guidance."},
      {"title":"OpenSSF Best Practices Badge Program", "url":"https://www.bestpractices.dev/", "note":"Influence on security, release, and project quality best practices."},
      {"title":"SPDX", "url":"https://spdx.dev/", "note":"Influence on licensing metadata, dependency documentation, and SBOM practices."}
    ]
  },
  "sections": [
    {
      "title": "Legal & Licensing",
      "description": "Licensing clarity, copyright provenance, and reuse obligations.",
      "questions": [
        {
          "id": "LL1",
          "text": "The project is distributed with a clearly identified Open Source Initiative (OSI) Approved Open Source License ®.",
          "guidance": {
            "why": "<p>An OSI-approved license is the legal foundation that tells users, contributors, institutions, and vendors what they may do with the software. The <a href=\"https://opensource.org/osd\" target=\"_blank\" rel=\"noopener\">Open Source Definition</a> and <a href=\"https://opensource.org/licenses\" target=\"_blank\" rel=\"noopener\">OSI Approved Licenses</a> provide trusted, reviewed standards for permissions to use, study, modify, and redistribute software.</p><p><strong>Higher education perspective.</strong> Colleges and universities need licensing clarity for procurement, counsel review, technology transfer, research compliance, and downstream sharing with partners. Clear licensing lowers adoption friction for edtech and research software.</p><p><strong>What good looks like.</strong> A mature project names the license on the website, in the repository, in package metadata, and in release artifacts, and avoids custom ambiguous terms.</p>",
            "evidence": [
              "LICENSE or COPYING file",
              "License named in README and website",
              "Package metadata includes license",
              "Release archives include the license"
            ],
            "learn": [
              {
                "title": "Open Source Definition",
                "url": "https://opensource.org/osd"
              },
              {
                "title": "OSI Approved Licenses",
                "url": "https://opensource.org/licenses"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "OSS Watch Openness Rating",
                "url": "https://oss-watch.ac.uk/apps/openness/"
              }
            ]
          }
        },
        {
          "id": "LL2",
          "text": "Every repository and distributed artifact includes license and copyright notices.",
          "guidance": {
            "why": "<p>Selecting a license is not enough; the license must travel with the code. Copyright and license notices preserve legal provenance when software is forked, mirrored, packaged, embedded, or redistributed.</p><p><strong>Higher education perspective.</strong> Higher education projects often move between labs, grant teams, campuses, vendors, and foundations. Notices help future maintainers, counsel, and adopters understand rights and obligations after original staff or funding changes.</p><p><strong>What good looks like.</strong> A mature project includes LICENSE/COPYING files, copyright statements, SPDX identifiers where appropriate, and license notices in release packages and documentation.</p>",
            "evidence": [
              "LICENSE/COPYING files in each repo",
              "Copyright headers or REUSE metadata",
              "SPDX identifiers",
              "Release artifacts contain notices"
            ],
            "learn": [
              {
                "title": "SPDX License List",
                "url": "https://spdx.org/licenses/"
              },
              {
                "title": "REUSE Specification",
                "url": "https://reuse.software/spec/"
              },
              {
                "title": "OSI Approved Licenses",
                "url": "https://opensource.org/licenses"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              }
            ]
          }
        },
        {
          "id": "LL3",
          "text": "The project documents third-party dependencies and their licenses.",
          "guidance": {
            "why": "<p>Open source projects inherit obligations from the libraries, frameworks, fonts, images, and build tools they use. Dependency license documentation prevents accidental incompatibility and makes reuse safer.</p><p><strong>Higher education perspective.</strong> Campus IT and edtech procurement teams increasingly require software bills of materials, dependency inventories, and compliance evidence before adoption. This is especially important for projects distributed to multiple institutions.</p><p><strong>What good looks like.</strong> A mature project maintains dependency manifests, reviews license compatibility, documents exceptions, and uses automated tools to detect changes.</p>",
            "evidence": [
              "Dependency manifest or SBOM",
              "Automated license scan results",
              "Policy for acceptable dependency licenses",
              "Review notes for major dependency changes"
            ],
            "learn": [
              {
                "title": "SPDX License List",
                "url": "https://spdx.org/licenses/"
              },
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              },
              {
                "title": "OpenSSF Scorecard",
                "url": "https://securityscorecards.dev/"
              },
              {
                "title": "REUSE Specification",
                "url": "https://reuse.software/spec/"
              }
            ]
          }
        },
        {
          "id": "LL4",
          "text": "The project has a documented contributor licensing or contribution agreement policy.",
          "guidance": {
            "why": "<p>Projects need to know that contributions can legally be included and redistributed. Contributor licensing policies clarify whether inbound contributions are accepted under the project license, a Developer Certificate of Origin, or a contributor agreement.</p><p><strong>Higher education perspective.</strong> Universities may have employment, student work, grant, and technology transfer rules that affect contribution rights. A documented policy helps contributors and their institutions participate confidently.</p><p><strong>What good looks like.</strong> A mature project states contribution licensing expectations in CONTRIBUTING.md, uses DCO or CLA processes only when needed, and avoids surprising contributors.</p>",
            "evidence": [
              "CONTRIBUTING.md licensing section",
              "DCO/CLA records if used",
              "Pull request attestation process",
              "Institutional contribution guidance"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              },
              {
                "title": "Open Source Definition",
                "url": "https://opensource.org/osd"
              }
            ]
          }
        },
        {
          "id": "LL5",
          "text": "The project explains trademark, name, logo, and brand usage expectations.",
          "guidance": {
            "why": "<p>Licenses govern code, but project names, logos, and marks often have separate rules. Clear brand guidance prevents confusion about official releases, services, endorsements, and compatible distributions.</p><p><strong>Higher education perspective.</strong> Edtech projects are frequently adopted by campuses and implemented by vendors. Trademark clarity helps institutions identify trusted sources while allowing a healthy service ecosystem.</p><p><strong>What good looks like.</strong> A mature project documents acceptable use of names and logos, distinguishes community and vendor offerings, and explains how official releases are identified.</p>",
            "evidence": [
              "Trademark or brand policy",
              "Logo usage guidance",
              "Release authenticity guidance",
              "Vendor or partner listing criteria"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Governance & Decision-Making",
      "description": "Transparent authority, participation, and project stewardship.",
      "questions": [
        {
          "id": "GV1",
          "text": "The project has a public governance model describing roles, authority, and decision-making processes.",
          "guidance": {
            "why": "<p>Governance turns a code repository into a durable community. Clear roles and decision rules reduce uncertainty, prevent bottlenecks, and make it possible for new contributors to earn trust.</p><p><strong>Higher education perspective.</strong> Higher education projects often span multiple institutions. Public governance helps campuses, funders, vendors, and contributors understand how priorities are set and how participation leads to influence.</p><p><strong>What good looks like.</strong> A mature project publishes maintainership roles, voting or consensus rules, escalation paths, and processes for adding or retiring leaders.</p>",
            "evidence": [
              "Governance document",
              "Maintainer roster",
              "Decision records",
              "Documented role definitions"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "OSS Watch Openness Rating",
                "url": "https://oss-watch.ac.uk/apps/openness/"
              }
            ]
          }
        },
        {
          "id": "GV2",
          "text": "The project records significant technical and community decisions in public venues.",
          "guidance": {
            "why": "<p>Public decision records create institutional memory and make project direction understandable to people who were not in the room. This supports transparency and continuity.</p><p><strong>Higher education perspective.</strong> Academic and campus projects experience frequent staff, student, and funding turnover. Decision records reduce knowledge loss and help new institutional adopters evaluate project direction.</p><p><strong>What good looks like.</strong> A mature project uses issue discussions, meeting notes, RFCs, architectural decision records, or mailing list archives for major decisions.</p>",
            "evidence": [
              "Meeting minutes",
              "Architecture decision records",
              "RFC or proposal process",
              "Public issue discussions"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        },
        {
          "id": "GV3",
          "text": "The project has a defined process for adding, reviewing, and removing maintainers or committers.",
          "guidance": {
            "why": "<p>Maintainer processes protect project quality while making leadership renewal possible. Without them, projects become dependent on informal personal networks.</p><p><strong>Higher education perspective.</strong> Many higher education projects (even commercially supported) begin in or are adopted by one lab, an individual department, or a single campus. A transparent maintainer pathway helps them become multi-institutional assets rather than single-site projects.</p><p><strong>What good looks like.</strong> A mature project explains eligibility, nomination, review, responsibilities, and offboarding for maintainers.</p>",
            "evidence": [
              "Maintainer policy",
              "Committer list",
              "Nomination or review records",
              "Offboarding process"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        },
        {
          "id": "GV4",
          "text": "The project has policies for conflicts of interest, vendor participation, and institutional influence.",
          "guidance": {
            "why": "<p>Open projects benefit from institutional and commercial participation, but unmanaged influence can erode trust. Conflict policies clarify how decisions remain community-serving.</p><p><strong>Higher education perspective.</strong> Edtech ecosystems often include campuses, foundations, vendors, and funders. Clear participation rules help ensure that no single stakeholder can quietly capture project direction.</p><p><strong>What good looks like.</strong> A mature project discloses affiliations, documents voting limits or recusal expectations, and treats vendor participation as welcome but transparent.</p>",
            "evidence": [
              "Conflict of interest policy",
              "Affiliation disclosures",
              "Vendor participation guidelines",
              "Meeting minutes showing recusals when needed"
            ],
            "learn": [
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              }
            ]
          }
        },
        {
          "id": "GV5",
          "text": "The project periodically reviews governance effectiveness and updates policies.",
          "guidance": {
            "why": "<p>Governance that worked for a small founding team may not work for a multi-institutional community. Periodic review keeps authority, participation, and accountability aligned with project reality.</p><p><strong>Higher education perspective.</strong> Universities and funders increasingly look for evidence that software communities can sustain themselves beyond a single grant or champion. Governance review demonstrates stewardship.</p><p><strong>What good looks like.</strong> A mature project schedules governance reviews, invites community input, and publishes changes with rationale.</p>",
            "evidence": [
              "Governance review notes",
              "Community survey results",
              "Updated governance versions",
              "Board or steering committee minutes"
            ],
            "learn": [
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Community Engagement",
      "description": "Welcoming participation, communication, and community health.",
      "questions": [
        {
          "id": "CE1",
          "text": "The project identifies its target users, contributors, adopters, and stakeholder communities.",
          "guidance": {
            "why": "<p>Community work is more effective when a project knows who it serves. Clear audience definitions guide documentation, roadmap choices, outreach, and support expectations.</p><p><strong>Higher education perspective.</strong> Higher education edtech may serve faculty, students, instructional designers, registrars, researchers, accessibility staff, and IT teams. Naming these groups prevents the project from optimizing only for developers.</p><p><strong>What good looks like.</strong> A mature project documents stakeholder groups and uses them to shape roadmap, support, and engagement practices.</p>",
            "evidence": [
              "Persona or stakeholder documentation",
              "Community strategy",
              "Adoption materials by audience",
              "Roadmap linked to user needs"
            ],
            "learn": [
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              }
            ]
          }
        },
        {
          "id": "CE2",
          "text": "The project provides welcoming contribution pathways for non-code and code contributors.",
          "guidance": {
            "why": "<p>Successful open source projects need more than code. Documentation, design, testing, accessibility review, translation, training, governance, and user support are all valuable contributions.</p><p><strong>Higher education perspective.</strong> Higher education communities include many domain experts who may not be software developers. Recognizing non-code contribution invites faculty, librarians, students, instructional designers, and administrators into the project.</p><p><strong>What good looks like.</strong> A mature project lists contribution types, labels beginner-friendly issues, and explains how contributors can help regardless of technical role.</p>",
            "evidence": [
              "CONTRIBUTING.md",
              "Good first issue labels",
              "Non-code contribution guide",
              "Contributor recognition records"
            ],
            "learn": [
              {
                "title": "All Contributors Specification",
                "url": "https://allcontributors.org/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              }
            ]
          }
        },
        {
          "id": "CE3",
          "text": "The project has public communication channels with clear participation norms.",
          "guidance": {
            "why": "<p>Public communication channels make support, collaboration, and community knowledge visible. Participation norms help keep discussions productive and welcoming.</p><p><strong>Higher education perspective.</strong> Campus adopters need to know where to ask questions, report problems, and connect with peers. Public channels reduce dependency on private emails and vendor-only support paths.</p><p><strong>What good looks like.</strong> A mature project maintains listed channels, moderates them consistently, and archives important knowledge in searchable places.</p>",
            "evidence": [
              "Website channel list",
              "Forum, mailing list, chat, or issue tracker links",
              "Moderation guidelines",
              "Archived discussions"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Contributor Covenant",
                "url": "https://www.contributor-covenant.org/"
              }
            ]
          }
        },
        {
          "id": "CE4",
          "text": "The project has a code of conduct and an incident response process.",
          "guidance": {
            "why": "<p>A code of conduct sets expectations for respectful collaboration, but it is only meaningful when paired with reporting and response procedures. This supports psychological safety and community trust.</p><p><strong>Higher education perspective.</strong> Higher education projects often include students, staff, faculty, vendors, and international participants with different power relationships. Clear conduct processes help institutions participate responsibly.</p><p><strong>What good looks like.</strong> A mature project publishes conduct standards, reporting contacts, response procedures, and periodic maintainer training or review.</p>",
            "evidence": [
              "CODE_OF_CONDUCT.md",
              "Reporting contacts",
              "Incident response process",
              "Moderator or maintainer training notes"
            ],
            "learn": [
              {
                "title": "Contributor Covenant",
                "url": "https://www.contributor-covenant.org/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              }
            ]
          }
        },
        {
          "id": "CE5",
          "text": "The project measures and responds to community health indicators.",
          "guidance": {
            "why": "<p>Community health is observable through contributor activity, responsiveness, diversity of participation, retention, and governance load. Measurement helps maintainers identify risks before they become crises.</p><p><strong>Higher education perspective.</strong> Funders and campuses increasingly ask whether projects have broad enough participation to sustain adoption. Community metrics provide evidence while also guiding improvement.</p><p><strong>What good looks like.</strong> A mature project tracks selected metrics, discusses them publicly, and uses them to improve onboarding, support, and governance.</p>",
            "evidence": [
              "Community dashboard",
              "Contributor activity reports",
              "Response time metrics",
              "Survey results and actions"
            ],
            "learn": [
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Documentation & Onboarding",
      "description": "Usable knowledge for adopters, users, administrators, and contributors.",
      "questions": [
        {
          "id": "DO1",
          "text": "The project has clear installation, configuration, and upgrade documentation.",
          "guidance": {
            "why": "<p>Installation and upgrade documentation determine whether interested adopters can become successful users. Poor operational documentation creates hidden support burden and adoption risk.</p><p><strong>Higher education perspective.</strong> Campus IT teams need to estimate effort, infrastructure, staffing, integration, and lifecycle costs before adopting edtech. Clear documentation supports responsible institutional decision-making.</p><p><strong>What good looks like.</strong> A mature project provides tested install guides, configuration references, upgrade paths, and known limitations for supported environments.</p>",
            "evidence": [
              "Install guide",
              "Configuration reference",
              "Upgrade guide",
              "Supported platform matrix"
            ],
            "learn": [
              {
                "title": "Di\u00e1taxis Documentation Framework",
                "url": "https://diataxis.fr/"
              },
              {
                "title": "Write the Docs Guide",
                "url": "https://www.writethedocs.org/guide/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "OSS Watch Openness Rating",
                "url": "https://oss-watch.ac.uk/apps/openness/"
              }
            ]
          }
        },
        {
          "id": "DO2",
          "text": "The project provides end-user documentation appropriate to its primary audiences.",
          "guidance": {
            "why": "<p>User documentation converts software capability into actual impact. It reduces support load, improves adoption, and helps users understand how the software fits their workflows.</p><p><strong>Higher education perspective.</strong> In higher education, users may include faculty, students, advisors, researchers, and administrative staff. Documentation must match their context, not just developer assumptions.</p><p><strong>What good looks like.</strong> A mature project provides task-based guides, tutorials, screenshots or examples, and version-aware documentation.</p>",
            "evidence": [
              "User guides",
              "Tutorials",
              "FAQs",
              "Versioned documentation site"
            ],
            "learn": [
              {
                "title": "Di\u00e1taxis Documentation Framework",
                "url": "https://diataxis.fr/"
              },
              {
                "title": "Write the Docs Guide",
                "url": "https://www.writethedocs.org/guide/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              }
            ]
          }
        },
        {
          "id": "DO3",
          "text": "The project documents contributor onboarding, development environment setup, and review workflows.",
          "guidance": {
            "why": "<p>Contributor onboarding reduces the time between interest and useful participation. It also makes development practices consistent and easier to review.</p><p><strong>Higher education perspective.</strong> Student workers, graduate assistants, campus developers, and vendor partners often contribute for limited periods. Strong onboarding preserves continuity despite turnover.</p><p><strong>What good looks like.</strong> A mature project includes development setup, coding standards, tests, review expectations, and communication norms in a contributor guide.</p>",
            "evidence": [
              "CONTRIBUTING.md",
              "Developer setup guide",
              "Coding standards",
              "Pull request template"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Write the Docs Guide",
                "url": "https://www.writethedocs.org/guide/"
              }
            ]
          }
        },
        {
          "id": "DO4",
          "text": "The project maintains architecture and integration documentation.",
          "guidance": {
            "why": "<p>Architecture documentation helps contributors reason about the system and helps adopters assess fit, extensibility, and operational risk.</p><p><strong>Higher education perspective.</strong> Edtech rarely stands alone. Campuses need to understand identity, LMS, SIS, data, analytics, accessibility, and privacy integrations before adoption.</p><p><strong>What good looks like.</strong> A mature project documents major components, data flows, APIs, extension points, deployment models, and integration assumptions.</p>",
            "evidence": [
              "Architecture overview",
              "API documentation",
              "Integration guides",
              "Data flow diagrams"
            ],
            "learn": [
              {
                "title": "OpenAPI Specification",
                "url": "https://www.openapis.org/"
              },
              {
                "title": "1EdTech Standards",
                "url": "https://www.1edtech.org/standards"
              },
              {
                "title": "Di\u00e1taxis Documentation Framework",
                "url": "https://diataxis.fr/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              }
            ]
          }
        },
        {
          "id": "DO5",
          "text": "Documentation is maintained as part of the release and contribution process.",
          "guidance": {
            "why": "<p>Documentation becomes unreliable when it is treated as separate from development. Keeping docs in the workflow ensures users and adopters receive accurate guidance.</p><p><strong>Higher education perspective.</strong> Campus adoption decisions often depend on documentation accuracy. Out-of-date docs increase support costs and can create failed implementations.</p><p><strong>What good looks like.</strong> A mature project reviews documentation changes with code changes, versions docs with releases, and assigns ownership for critical docs.</p>",
            "evidence": [
              "Documentation review checklist",
              "Docs included in PR process",
              "Versioned docs",
              "Release notes with documentation updates"
            ],
            "learn": [
              {
                "title": "Write the Docs Guide",
                "url": "https://www.writethedocs.org/guide/"
              },
              {
                "title": "Di\u00e1taxis Documentation Framework",
                "url": "https://diataxis.fr/"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Project Operations & Roadmap",
      "description": "Planning, release management, and operational transparency.",
      "questions": [
        {
          "id": "PO1",
          "text": "The project publishes a roadmap or planning process that communicates priorities and timelines.",
          "guidance": {
            "why": "<p>A roadmap helps contributors and adopters understand where the project is going and how to align their own work. Even when dates change, transparent priorities build trust.</p><p><strong>Higher education perspective.</strong> Campuses need to plan budgets, integrations, upgrades, and training. Roadmap visibility helps institutions decide whether a project aligns with academic and operational needs.</p><p><strong>What good looks like.</strong> A mature project publishes priorities, decision criteria, expected releases, and opportunities for community input.</p>",
            "evidence": [
              "Public roadmap",
              "Planning meeting notes",
              "Milestone board",
              "Prioritization criteria"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        },
        {
          "id": "PO2",
          "text": "The project uses a public issue tracker with triage, labels, and response expectations.",
          "guidance": {
            "why": "<p>Issue trackers are where user needs, bugs, feature requests, and maintenance work become visible. Triage practices prevent reports from disappearing into a backlog.</p><p><strong>Higher education perspective.</strong> Institutional adopters need confidence that problems can be reported, tracked, prioritized, and resolved transparently across organizations.</p><p><strong>What good looks like.</strong> A mature project labels issues, distinguishes support from bugs, documents response expectations, and closes or updates stale work.</p>",
            "evidence": [
              "Public issue tracker",
              "Labels and templates",
              "Triage notes",
              "Response time goals"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "OSS Watch Openness Rating",
                "url": "https://oss-watch.ac.uk/apps/openness/"
              }
            ]
          }
        },
        {
          "id": "PO3",
          "text": "The project follows a predictable release process with changelogs and versioning.",
          "guidance": {
            "why": "<p>Releases are the interface between development and adoption. Predictable versioning and changelogs help users understand risk, compatibility, and upgrade urgency.</p><p><strong>Higher education perspective.</strong> Campus environments require change control, training, maintenance windows, and vendor coordination. Clear release practices make edtech safer to operate.</p><p><strong>What good looks like.</strong> A mature project uses semantic or documented versioning, publishes changelogs, signs or verifies releases where possible, and documents upgrade impact.</p>",
            "evidence": [
              "Release checklist",
              "Changelog",
              "Versioning policy",
              "Release artifacts"
            ],
            "learn": [
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              },
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              },
              {
                "title": "Supply-chain Levels for Software Artifacts",
                "url": "https://slsa.dev/"
              },
              {
                "title": "OSS Watch Openness Rating",
                "url": "https://oss-watch.ac.uk/apps/openness/"
              }
            ]
          }
        },
        {
          "id": "PO4",
          "text": "The project has defined support channels and support boundaries.",
          "guidance": {
            "why": "<p>Support expectations protect both users and maintainers. Clear boundaries explain what the community can provide and where paid, institutional, or vendor support may be needed.</p><p><strong>Higher education perspective.</strong> Higher education adopters often require operational support beyond community help. Transparent boundaries allow campuses to plan staffing and service contracts responsibly.</p><p><strong>What good looks like.</strong> A mature project distinguishes community support, professional services, security reporting, and institutional escalation paths.</p>",
            "evidence": [
              "Support policy",
              "Forum or help desk links",
              "Service provider list",
              "Security contact"
            ],
            "learn": [
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              }
            ]
          }
        },
        {
          "id": "PO5",
          "text": "The project tracks maintainership capacity and bus factor risks.",
          "guidance": {
            "why": "<p>A project can appear active while depending on too few people. Tracking maintainership capacity reveals risks to review, release, security, and governance work.</p><p><strong>Higher education perspective.</strong> Grant-funded and campus-born software often depends on a small number of champions. Institutions need evidence that critical knowledge and responsibility are distributed.</p><p><strong>What good looks like.</strong> A mature project monitors maintainer workload, documents responsibilities, cross-trains contributors, and recruits successors.</p>",
            "evidence": [
              "Maintainer roster",
              "CODEOWNERS or ownership map",
              "Review load metrics",
              "Succession plans"
            ],
            "learn": [
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Security & Risk Management",
      "description": "Vulnerability handling, supply chain risk, and operational trust.",
      "questions": [
        {
          "id": "SR1",
          "text": "The project has a documented security policy and private vulnerability reporting process.",
          "guidance": {
            "why": "<p>Security issues require a safe way to report, coordinate, fix, and disclose vulnerabilities. A public-only bug process can expose users before fixes are available.</p><p><strong>Higher education perspective.</strong> Edtech systems often handle student, employee, research, or identity data. Campuses need confidence that vulnerabilities can be reported and managed responsibly.</p><p><strong>What good looks like.</strong> A mature project publishes SECURITY.md, reporting contacts, disclosure timelines, supported versions, and acknowledgement practices.</p>",
            "evidence": [
              "SECURITY.md",
              "Security contact",
              "Disclosure process",
              "Supported versions list"
            ],
            "learn": [
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              },
              {
                "title": "OpenSSF Scorecard",
                "url": "https://securityscorecards.dev/"
              },
              {
                "title": "OWASP Software Assurance Maturity Model",
                "url": "https://owaspsamm.org/"
              }
            ]
          }
        },
        {
          "id": "SR2",
          "text": "The project uses automated testing, dependency scanning, and continuous integration.",
          "guidance": {
            "why": "<p>Automation catches regressions, insecure dependencies, and build failures early. It raises baseline quality and reduces reliance on individual memory.</p><p><strong>Higher education perspective.</strong> Campus deployments need reliable upgrades and evidence of operational discipline. Automated checks support institutional risk review and service continuity.</p><p><strong>What good looks like.</strong> A mature project runs tests and scans on pull requests, blocks unsafe changes where appropriate, and publishes build status.</p>",
            "evidence": [
              "CI configuration",
              "Test results",
              "Dependency scan reports",
              "Build badges"
            ],
            "learn": [
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              },
              {
                "title": "OpenSSF Scorecard",
                "url": "https://securityscorecards.dev/"
              },
              {
                "title": "OWASP Software Assurance Maturity Model",
                "url": "https://owaspsamm.org/"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              }
            ]
          }
        },
        {
          "id": "SR3",
          "text": "The project manages software supply chain integrity for releases.",
          "guidance": {
            "why": "<p>Users need confidence that release artifacts correspond to reviewed source code and have not been tampered with. Supply chain practices reduce risk from compromised builds, dependencies, or accounts.</p><p><strong>Higher education perspective.</strong> Higher education institutions increasingly require provenance, SBOMs, and artifact verification for software used in critical academic and administrative systems.</p><p><strong>What good looks like.</strong> A mature project signs or verifies releases, protects build credentials, documents provenance, and considers SBOM publication.</p>",
            "evidence": [
              "Signed releases or checksums",
              "SBOM",
              "Protected CI secrets",
              "Provenance records"
            ],
            "learn": [
              {
                "title": "Supply-chain Levels for Software Artifacts",
                "url": "https://slsa.dev/"
              },
              {
                "title": "SPDX License List",
                "url": "https://spdx.org/licenses/"
              },
              {
                "title": "OpenSSF Scorecard",
                "url": "https://securityscorecards.dev/"
              },
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              }
            ]
          }
        },
        {
          "id": "SR4",
          "text": "The project documents privacy, data handling, and compliance-relevant practices.",
          "guidance": {
            "why": "<p>Software that processes personal, student, or research data must explain what data it collects, stores, transmits, and logs. Privacy documentation turns hidden risk into reviewable information.</p><p><strong>Higher education perspective.</strong> Higher education systems may implicate FERPA, GDPR, accessibility, research ethics, data retention, and local institutional policies. Clear data handling documentation is central to edtech adoption.</p><p><strong>What good looks like.</strong> A mature project documents data flows, retention settings, logging practices, administrative controls, and privacy-relevant configuration.</p>",
            "evidence": [
              "Privacy documentation",
              "Data flow diagrams",
              "Configuration for retention/logging",
              "Compliance notes"
            ],
            "learn": [
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              },
              {
                "title": "OWASP Software Assurance Maturity Model",
                "url": "https://owaspsamm.org/"
              },
              {
                "title": "1EdTech Standards",
                "url": "https://www.1edtech.org/standards"
              }
            ]
          }
        },
        {
          "id": "SR5",
          "text": "The project has an incident response and post-incident learning process.",
          "guidance": {
            "why": "<p>Incidents are inevitable in mature software operations. A response process reduces confusion, coordinates communication, and captures lessons that improve the project.</p><p><strong>Higher education perspective.</strong> Campuses need to know who will communicate about outages, vulnerabilities, data exposure, and upgrade urgency. Post-incident learning supports institutional trust.</p><p><strong>What good looks like.</strong> A mature project defines severity, roles, communication channels, timelines, and retrospective practices.</p>",
            "evidence": [
              "Incident response plan",
              "Severity definitions",
              "Communication templates",
              "Post-incident reviews"
            ],
            "learn": [
              {
                "title": "OWASP Software Assurance Maturity Model",
                "url": "https://owaspsamm.org/"
              },
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Accessibility, Standards & Interoperability",
      "description": "Inclusive design and higher education ecosystem fit.",
      "questions": [
        {
          "id": "AS1",
          "text": "The project follows accessibility standards and includes accessibility in testing and release review.",
          "guidance": {
            "why": "<p>Accessibility is a core quality attribute, not an optional feature. Designing and testing for accessibility ensures software can be used by people with diverse needs.</p><p><strong>Higher education perspective.</strong> Higher education has strong legal, ethical, and mission-based obligations to provide accessible learning and administrative technology. Accessibility affects adoption, procurement, and student success.</p><p><strong>What good looks like.</strong> A mature project references WCAG, tests key workflows, documents known issues, and includes accessibility review in release processes.</p>",
            "evidence": [
              "Accessibility statement",
              "WCAG test results",
              "Keyboard/screen reader checks",
              "Known accessibility issues"
            ],
            "learn": [
              {
                "title": "Web Content Accessibility Guidelines",
                "url": "https://www.w3.org/WAI/standards-guidelines/wcag/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              },
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              }
            ]
          }
        },
        {
          "id": "AS2",
          "text": "The project supports relevant education technology standards and documents interoperability.",
          "guidance": {
            "why": "<p>Interoperability prevents lock-in and allows software to participate in a broader ecosystem. Standards reduce custom integration costs and make adoption more feasible.</p><p><strong>Higher education perspective.</strong> Campuses depend on LMSs, SISs, identity platforms, repositories, analytics systems, and learning tools working together. Edtech standards are often central to procurement decisions.</p><p><strong>What good looks like.</strong> A mature project documents supported standards, certification status if applicable, APIs, data formats, and integration examples.</p>",
            "evidence": [
              "Standards support matrix",
              "API docs",
              "Integration examples",
              "Certification evidence where relevant"
            ],
            "learn": [
              {
                "title": "1EdTech Standards",
                "url": "https://www.1edtech.org/standards"
              },
              {
                "title": "OpenAPI Specification",
                "url": "https://www.openapis.org/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              }
            ]
          }
        },
        {
          "id": "AS3",
          "text": "The project provides APIs, export options, or data portability mechanisms.",
          "guidance": {
            "why": "<p>Data portability preserves user and institutional control. APIs and export options make migration, analysis, archiving, and integration possible.</p><p><strong>Higher education perspective.</strong> Higher education institutions seek to avoid vendor lock-in and preserve stewardship of academic, research, and student data. Portability supports digital sovereignty and long-term control.</p><p><strong>What good looks like.</strong> A mature project provides documented APIs, bulk export/import, stable schemas, and migration guidance.</p>",
            "evidence": [
              "API reference",
              "Export/import tools",
              "Data schema documentation",
              "Migration guide"
            ],
            "learn": [
              {
                "title": "OpenAPI Specification",
                "url": "https://www.openapis.org/"
              },
              {
                "title": "1EdTech Standards",
                "url": "https://www.1edtech.org/standards"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              }
            ]
          }
        },
        {
          "id": "AS4",
          "text": "The project supports localization, internationalization, or adaptation for diverse institutional contexts when relevant.",
          "guidance": {
            "why": "<p>Open source projects can serve global communities only when language, locale, policy, and institutional variation are considered. Adaptability expands participation and adoption.</p><p><strong>Higher education perspective.</strong> Higher education is international. Projects used across regions may need multilingual interfaces, local policy configuration, and culturally appropriate documentation.</p><p><strong>What good looks like.</strong> A mature project externalizes strings, documents localization workflows, welcomes translation contributions, and avoids hard-coded institutional assumptions.</p>",
            "evidence": [
              "Localization files",
              "Translation workflow",
              "Locale configuration",
              "International contributor guidance"
            ],
            "learn": [
              {
                "title": "Open Source Guides",
                "url": "https://opensource.guide/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              }
            ]
          }
        },
        {
          "id": "AS5",
          "text": "The project documents supported platforms, browsers, devices, and deployment environments.",
          "guidance": {
            "why": "<p>Compatibility documentation helps adopters understand whether software will work in their environment and what tradeoffs may exist.</p><p><strong>Higher education perspective.</strong> Campuses operate diverse infrastructure and user devices. Clear support matrices reduce failed pilots and support surprises.</p><p><strong>What good looks like.</strong> A mature project publishes tested environments, minimum versions, deprecation timelines, and compatibility notes.</p>",
            "evidence": [
              "Support matrix",
              "Browser/device testing notes",
              "Deprecation policy",
              "Deployment examples"
            ],
            "learn": [
              {
                "title": "Write the Docs Guide",
                "url": "https://www.writethedocs.org/guide/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Adoption, Impact & Institutional Fit",
      "description": "Evidence that the project solves real higher education needs.",
      "questions": [
        {
          "id": "AI1",
          "text": "The project describes its value proposition and use cases for higher education stakeholders.",
          "guidance": {
            "why": "<p>A project needs to explain the problems it solves and for whom. A clear value proposition helps potential adopters assess fit and helps contributors prioritize meaningful work.</p><p><strong>Higher education perspective.</strong> Higher education decision-makers include academic, administrative, technical, financial, and compliance stakeholders. Use cases help each group understand relevance.</p><p><strong>What good looks like.</strong> A mature project publishes use cases, benefits, limitations, and stakeholder-specific adoption materials.</p>",
            "evidence": [
              "Use case pages",
              "Adoption guide",
              "Stakeholder briefs",
              "Demo materials"
            ],
            "learn": [
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              }
            ]
          }
        },
        {
          "id": "AI2",
          "text": "The project provides evidence of adoption, deployments, or community use.",
          "guidance": {
            "why": "<p>Adoption evidence demonstrates that software is useful beyond its founding team. It also helps potential users find peers and implementation examples.</p><p><strong>Higher education perspective.</strong> Campuses often prefer to learn from other institutions before adopting edtech. Public adoption evidence supports peer validation and reduces perceived risk.</p><p><strong>What good looks like.</strong> A mature project maintains adopter lists, case studies, testimonials, usage statistics, or implementation stories with permission.</p>",
            "evidence": [
              "Adopter list",
              "Case studies",
              "Usage metrics",
              "Conference presentations"
            ],
            "learn": [
              {
                "title": "OSS Watch Openness Rating",
                "url": "https://oss-watch.ac.uk/apps/openness/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        },
        {
          "id": "AI3",
          "text": "The project supports evaluation, pilots, and procurement due diligence.",
          "guidance": {
            "why": "<p>Even open source software must be evaluated. Materials for pilots and due diligence help organizations understand requirements, costs, risks, and responsibilities.</p><p><strong>Higher education perspective.</strong> Campus procurement and governance often require accessibility, security, privacy, support, hosting, and integration reviews. Projects that prepare these materials are easier to adopt.</p><p><strong>What good looks like.</strong> A mature project provides pilot guidance, technical requirements, risk documentation, and implementation planning materials.</p>",
            "evidence": [
              "A current and completed HEOSAT report",
              "Pilot checklist",
              "Technical requirements",
              "Risk and compliance notes",
              "Implementation plan template"
            ],
            "learn": [
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              }
            ]
          }
        },
        {
          "id": "AI4",
          "text": "The project documents implementation services, hosting options, or support partners when available.",
          "guidance": {
            "why": "<p>Service ecosystem information helps adopters understand how to operationalize the software. It also creates sustainable opportunities for vendors and institutions to contribute back.</p><p><strong>Higher education perspective.</strong> Many institutions lack internal capacity to deploy and maintain every edtech system. Clear service options make open source adoption more feasible without undermining community governance.</p><p><strong>What good looks like.</strong> A mature project lists community, institutional, foundation, and commercial support options transparently.</p>",
            "evidence": [
              "Service provider list",
              "Hosting documentation",
              "Support boundaries",
              "Partner participation policy"
            ],
            "learn": [
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        },
        {
          "id": "AI5",
          "text": "The project collects user feedback and uses it to improve product direction.",
          "guidance": {
            "why": "<p>Feedback loops ensure the project remains aligned with real user needs rather than only maintainer assumptions. They also reveal adoption barriers.</p><p><strong>Higher education perspective.</strong> In education, workflows differ across institutions, disciplines, and user roles. Structured feedback helps projects serve diverse contexts.</p><p><strong>What good looks like.</strong> A mature project uses surveys, user groups, advisory boards, usability testing, and issue analysis to shape priorities.</p>",
            "evidence": [
              "User survey results",
              "Advisory group notes",
              "Usability testing records",
              "Roadmap changes linked to feedback"
            ],
            "learn": [
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "EDUCAUSE Open Source resources",
                "url": "https://library.educause.edu/topics/information-technology-management-and-leadership/open-source-software"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Financial & Organizational Sustainability",
      "description": "Resources, continuity, and stewardship beyond initial development.",
      "questions": [
        {
          "id": "FS1",
          "text": "The project identifies current and needed resources for maintenance, governance, support, and growth.",
          "guidance": {
            "why": "<p>Software sustainability depends on more than feature development. Projects need resources for maintenance, security, documentation, community management, infrastructure, and governance.</p><p><strong>Higher education perspective.</strong> Academic projects often receive funding to build software but not to sustain it. Making resource needs explicit helps institutions and funders plan realistic support.</p><p><strong>What good looks like.</strong> A mature project documents roles, effort, infrastructure costs, and resource gaps for ongoing operations.</p>",
            "evidence": [
              "Sustainability plan",
              "Budget or resource model",
              "Role inventory",
              "Maintenance backlog"
            ],
            "learn": [
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        },
        {
          "id": "FS2",
          "text": "The project has a funding, membership, sponsorship, or institutional support model.",
          "guidance": {
            "why": "<p>A funding model connects project value to the resources needed to maintain it. Without one, projects may become dependent on unpaid labor or short-term grants.</p><p><strong>Higher education perspective.</strong> Higher education open source often relies on a mix of institutional membership, grants, foundation support, commercial services, and community contributions. A transparent model helps adopters understand how to support shared infrastructure.</p><p><strong>What good looks like.</strong> A mature project explains how funding is received, governed, spent, and connected to community priorities.</p>",
            "evidence": [
              "Funding model",
              "Membership or sponsorship materials",
              "Budget transparency",
              "Grant or institutional commitments"
            ],
            "learn": [
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "Apereo Incubation",
                "url": "https://www.apereo.org/programs/software-incubation"
              }
            ]
          }
        },
        {
          "id": "FS3",
          "text": "The project has a plan for post-grant or post-founder continuity.",
          "guidance": {
            "why": "<p>Many projects fail when founding funding or leadership ends. Continuity planning protects users, contributors, and institutional investments.</p><p><strong>Higher education perspective.</strong> Research and edtech projects often begin with grants, faculty champions, or campus initiatives. A transition plan helps move from project launch to ongoing service stewardship.</p><p><strong>What good looks like.</strong> A mature project identifies successor maintainers, institutional homes, archival plans, funding paths, and minimum maintenance commitments.</p>",
            "evidence": [
              "Continuity plan",
              "Succession plan",
              "Institutional home agreement",
              "Archival or deprecation plan"
            ],
            "learn": [
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Producing Open Source Software",
                "url": "https://producingoss.com/"
              }
            ]
          }
        },
        {
          "id": "FS4",
          "text": "The project maintains transparent infrastructure ownership and operational dependencies.",
          "guidance": {
            "why": "<p>Projects depend on domains, repositories, package registries, CI systems, cloud accounts, credentials, and communication platforms. Hidden ownership creates continuity and security risks.</p><p><strong>Higher education perspective.</strong> Campus-born projects often use individual accounts or grant-funded infrastructure. Institutional adoption requires confidence that operational assets are controlled responsibly.</p><p><strong>What good looks like.</strong> A mature project documents who owns key assets, how access is managed, and what happens when maintainers change roles.</p>",
            "evidence": [
              "Infrastructure inventory",
              "Access control records",
              "Domain and account ownership documentation",
              "Backup and recovery notes"
            ],
            "learn": [
              {
                "title": "OpenSSF Best Practices Badge Program",
                "url": "https://www.bestpractices.dev/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              }
            ]
          }
        },
        {
          "id": "FS5",
          "text": "The project periodically assesses sustainability risks and publishes improvement priorities.",
          "guidance": {
            "why": "<p>Sustainability is a continuing practice. Regular assessment helps projects identify weak points in governance, funding, community, security, and operations.</p><p><strong>Higher education perspective.</strong> Institutions and funders benefit from transparent signals that projects know their risks and are actively improving them. This makes investment and adoption easier to justify.</p><p><strong>What good looks like.</strong> A mature project conducts periodic assessments, shares findings at an appropriate level, and tracks improvement actions.</p>",
            "evidence": [
              "Assessment results",
              "Risk register",
              "Improvement roadmap",
              "Board or steering review notes"
            ],
            "learn": [
              {
                "title": "OSS Watch Openness Rating",
                "url": "https://oss-watch.ac.uk/apps/openness/"
              },
              {
                "title": "It Takes a Village Guidebook",
                "url": "https://itav.lyrasis.org/guidebook/"
              },
              {
                "title": "Sustaining Open Source Software in the Research Enterprise",
                "url": "https://sr.ithaka.org/publications/sustaining-open-source-software-in-the-research-enterprise/"
              },
              {
                "title": "CHAOSS Metrics Models",
                "url": "https://chaoss.community/kb/metrics-models/"
              }
            ]
          }
        }
      ]
    }
  ]
};
(function(){
const data=window.HEOSAT_DATA;
const STORAGE_KEY='heosat-2026-enhanced-state';
const STORAGE_DB='heosat-browser-storage';
const STORAGE_STORE='assessments';
const STORAGE_DB_VERSION=1;
let scores={};
let notes={};
let lastSavedAt=null;
const app=document.getElementById('app');
function esc(s){return String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function totalQuestions(){return data.sections.reduce((a,s)=>a+s.questions.length,0);}
function allQuestions(){return data.sections.flatMap(sec=>sec.questions.map(q=>({section:sec.title, q})));}
function validState(saved){return saved && typeof saved==='object' && (saved.scores===undefined || (saved.scores && typeof saved.scores==='object')) && (saved.notes===undefined || (saved.notes && typeof saved.notes==='object'));}
function readLocalState(){
 try{const raw=window.localStorage.getItem(STORAGE_KEY); return raw?JSON.parse(raw):null;}catch(e){return null;}
}
function writeLocalState(state){
 try{window.localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); return window.localStorage.getItem(STORAGE_KEY)!==null;}catch(e){return false;}
}
function removeLocalState(){try{window.localStorage.removeItem(STORAGE_KEY);}catch(e){}}
function openStateDb(){
 return new Promise(resolve=>{
   if(!('indexedDB' in window)){resolve(null);return;}
   try{
     const req=window.indexedDB.open(STORAGE_DB,STORAGE_DB_VERSION);
     req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORAGE_STORE))db.createObjectStore(STORAGE_STORE);};
     req.onsuccess=()=>resolve(req.result);
     req.onerror=()=>resolve(null);
     req.onblocked=()=>resolve(null);
   }catch(e){resolve(null);}
 });
}
async function readIndexedState(){
 const db=await openStateDb(); if(!db)return null;
 return new Promise(resolve=>{
   try{
     const tx=db.transaction(STORAGE_STORE,'readonly');
     const req=tx.objectStore(STORAGE_STORE).get(STORAGE_KEY);
     req.onsuccess=()=>{db.close();resolve(req.result||null);};
     req.onerror=()=>{db.close();resolve(null);};
   }catch(e){db.close();resolve(null);}
 });
}
async function writeIndexedState(state){
 const db=await openStateDb(); if(!db)return false;
 return new Promise(resolve=>{
   try{
     const tx=db.transaction(STORAGE_STORE,'readwrite');
     tx.objectStore(STORAGE_STORE).put(state,STORAGE_KEY);
     tx.oncomplete=()=>{db.close();resolve(true);};
     tx.onerror=()=>{db.close();resolve(false);};
     tx.onabort=()=>{db.close();resolve(false);};
   }catch(e){db.close();resolve(false);}
 });
}
async function removeIndexedState(){
 const db=await openStateDb(); if(!db)return false;
 return new Promise(resolve=>{
   try{
     const tx=db.transaction(STORAGE_STORE,'readwrite');
     tx.objectStore(STORAGE_STORE).delete(STORAGE_KEY);
     tx.oncomplete=()=>{db.close();resolve(true);};
     tx.onerror=()=>{db.close();resolve(false);};
     tx.onabort=()=>{db.close();resolve(false);};
   }catch(e){db.close();resolve(false);}
 });
}
function stateSnapshot(){return {schema:1,scores,notes,updated:new Date().toISOString()};}
function setSaveStatus(message,isWarning=false){
 const el=document.getElementById('saveStatus'); if(!el)return;
 el.textContent=message;
 el.classList.toggle('save-warning',Boolean(isWarning));
}
function savedTime(iso){
 try{return new Intl.DateTimeFormat(undefined,{hour:'numeric',minute:'2-digit',second:'2-digit'}).format(new Date(iso));}catch(e){return '';}
}
async function loadState(){
 let saved=readLocalState();
 if(!validState(saved))saved=await readIndexedState();
 if(validState(saved)){
   scores=saved.scores||{};
   notes=saved.notes||{};
   lastSavedAt=saved.updated||null;
   return true;
 }
 scores={}; notes={}; lastSavedAt=null; return false;
}
function saveState(){
 const state=stateSnapshot(); lastSavedAt=state.updated;
 const localOK=writeLocalState(state);
 writeIndexedState(state).then(indexedOK=>{
   if(localOK||indexedOK)setSaveStatus(`Progress saved in this browser${savedTime(state.updated)?` at ${savedTime(state.updated)}`:''}.`);
   else setSaveStatus('Automatic browser saving is unavailable. Check browser privacy/storage settings before leaving this page.',true);
 });
}
async function clearSavedState(){
 removeLocalState();
 await removeIndexedState();
 lastSavedAt=null;
 setSaveStatus('Saved progress cleared. New responses will be saved automatically.');
}

function attributionsBlock(context='page'){
 const a=data.attributions;
 if(!a) return '';
 const heading=context==='report'?'Attributions, license, and sources informing HEOSAT':'Attributions and license';
 return `<section class="attributions ${context==='report'?'report-attributions':''}"><h2>${heading}</h2><p>${a.license}</p><ul>${a.items.map(item=>`<li><a href="${item.url}" target="_blank" rel="noopener">${esc(item.title)}</a>${item.note?` — ${esc(item.note)}`:''}</li>`).join('')}</ul><p class="attribution-note">Referenced works inform this assessment framework and guidance. They are cited to acknowledge prior work; inclusion does not imply endorsement by the referenced organizations.</p></section>`;
}

async function render(){
 const restored=await loadState();
 app.innerHTML=`<section class="hero"><h1>${data.title}</h1><p>${data.subtitle}</p><div class="version">${data.version}</div></section><div class="save-progress-banner"><div><strong>Your progress is saved automatically.</strong><span>Scores and evidence notes are stored only in this browser on this device and restored when you return.</span></div><span id="saveStatus" class="save-status" role="status" aria-live="polite">${restored?`Saved progress restored${lastSavedAt&&savedTime(lastSavedAt)?` (last saved ${savedTime(lastSavedAt)})`:''}.`:'No saved responses yet. Your first response will start automatic saving.'}</span></div><div class="toolbar"><button id="expandAll">Expand all guidance</button><button id="collapseAll">Collapse all guidance</button><button id="resetScores">Start over / clear saved progress</button><button id="printPage">Print / Save PDF</button></div><div id="summary"></div>`+data.sections.map((sec,si)=>`<section class="section"><h2>${si+1}. ${sec.title}</h2><p class="section-desc">${sec.description}</p>${sec.questions.map((q,qi)=>question(sec,si,q,qi)).join('')}</section>`).join('')+`<section id="report" class="report"></section>${attributionsBlock('page')}`;
 document.querySelectorAll('input[type=radio]').forEach(i=>{
   if(scores[i.name]!==undefined && Number(i.value)===Number(scores[i.name])) i.checked=true;
   i.addEventListener('change',e=>{scores[e.target.name]=Number(e.target.value); saveState(); updateSummary();});
 });
 document.querySelectorAll('textarea.evidence-notes').forEach(t=>{
   t.value=notes[t.dataset.qid]||'';
   t.addEventListener('input',e=>{notes[e.target.dataset.qid]=e.target.value; saveState(); updateSummary();});
 });
 document.getElementById('expandAll').onclick=()=>document.querySelectorAll('details').forEach(d=>d.open=true);
 document.getElementById('collapseAll').onclick=()=>document.querySelectorAll('details').forEach(d=>d.open=false);
 document.getElementById('resetScores').onclick=()=>{if(confirm('Clear all scores, evidence notes, and saved progress for this assessment?')){scores={};notes={};void clearSavedState();document.querySelectorAll('input[type=radio]').forEach(i=>i.checked=false);document.querySelectorAll('textarea.evidence-notes').forEach(t=>t.value='');updateSummary();}};
 document.getElementById('printPage').onclick=()=>{document.querySelectorAll('details.guidance').forEach(d=>d.open=true); updateSummary(); saveState(); window.print();};
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')saveState();},{passive:true});
 window.addEventListener('pagehide',saveState,{passive:true});
 updateSummary();
}
function question(sec,si,q,qi){ const name=q.id; return `<article class="question"><div class="qhead"><span class="qid">${q.id}</span><h3>${esc(q.text)}</h3></div><div class="scale">${data.scale.map((label,i)=>`<label><input type="radio" name="${name}" value="${i}"><span>${i}</span><em>${label}</em></label>`).join('')}</div><div class="respondent-notes"><label for="notes-${q.id}"><strong>Evidence notes and links</strong><span>Record URLs, repository paths, policy documents, meeting notes, release artifacts, or other evidence that justify the selected maturity level.</span></label><textarea id="notes-${q.id}" class="evidence-notes" data-qid="${q.id}" rows="4" placeholder="Example: LICENSE file URL; governance page; issue tracker evidence; release notes; campus implementation documentation..."></textarea></div><details class="guidance"><summary>Why this practice matters</summary><div class="why">${q.guidance.why}</div><div class="evidence"><h4>Common evidence</h4><ul>${q.guidance.evidence.map(e=>`<li>${esc(e)}</li>`).join('')}</ul></div><div class="next"><h4>Moving to the next level</h4><p>Use the evidence above to identify the weakest missing practice, assign an owner, and make the next improvement visible in the repository, documentation, governance records, or release process.</p></div><div class="learn"><h4>Learn more</h4><ul>${q.guidance.learn.map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a></li>`).join('')}</ul></div></details></article>`}
function scoreLabel(v){return data.scale[Number(v)]||'Not scored';}
function maturityBand(avg){
 if(!isFinite(avg)) return 'Not yet scored';
 if(avg<1) return 'Not present / beginning';
 if(avg<2) return 'Ad hoc / emerging';
 if(avg<3) return 'Documented';
 if(avg<4) return 'Practiced consistently';
 if(avg<4.75) return 'Measured and improving';
 return 'Leading / exemplary';
}
function bar(width,label){return `<div class="bar-wrap" aria-label="${esc(label)}"><div class="bar" style="width:${Math.max(0,Math.min(100,width))}%"></div></div>`;}
function sectionStats(){return data.sections.map(sec=>{const vals=sec.questions.map(q=>scores[q.id]).filter(v=>v!==undefined); const avg=vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:NaN; return {title:sec.title, scored:vals.length, total:sec.questions.length, avg};});}
function distribution(){let counts=[0,0,0,0,0,0]; Object.values(scores).forEach(v=>{if(v>=0&&v<=5)counts[Number(v)]++;}); return counts;}
function radarChart(stats){
 const size=520, cx=260, cy=260, maxR=175;
 const n=stats.length || 1;
 const levels=[1,2,3,4,5];
 const angle=i=>(-Math.PI/2)+(2*Math.PI*i/n);
 const point=(i,r)=>`${(cx+Math.cos(angle(i))*r).toFixed(1)},${(cy+Math.sin(angle(i))*r).toFixed(1)}`;
 const ring=l=>Array.from({length:n},(_,i)=>point(i,maxR*l/5)).join(' ');
 const axes=stats.map((st,i)=>`<line x1="${cx}" y1="${cy}" x2="${point(i,maxR).split(',')[0]}" y2="${point(i,maxR).split(',')[1]}" class="radar-axis"/>`).join('');
 const rings=levels.map(l=>`<polygon points="${ring(l)}" class="radar-ring"/>`).join('');
 const scorePoints=stats.map((st,i)=>point(i, isFinite(st.avg)?maxR*st.avg/5:0)).join(' ');
 const targetPoints=stats.map((st,i)=>point(i,maxR)).join(' ');
 const labels=stats.map((st,i)=>{
   const a=angle(i), lx=cx+Math.cos(a)*(maxR+62), ly=cy+Math.sin(a)*(maxR+62);
   const anchor=Math.cos(a)>0.25?'start':(Math.cos(a)<-0.25?'end':'middle');
   const pct=isFinite(st.avg)?Math.round(st.avg/5*100):0;
   const words=st.title.split(' '); let lines=[]; for(let j=0;j<words.length;j+=2) lines.push(words.slice(j,j+2).join(' '));
   const tspans=lines.map((line,idx)=>`<tspan x="${lx.toFixed(1)}" dy="${idx?13:0}">${esc(line)}</tspan>`).join('')+`<tspan x="${lx.toFixed(1)}" dy="14" class="radar-label-score">${pct}%</tspan>`;
   return `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" class="radar-label">${tspans}</text>`;
 }).join('');
 const levelLabels=levels.map(l=>`<text x="${cx+6}" y="${(cy-maxR*l/5+4).toFixed(1)}" class="radar-level">${l}/5</text>`).join('');
 return `<div class="radar-card"><div class="radar-head"><h3>Maturity by category</h3><div class="radar-legend"><span><i class="legend-score"></i>Your score</span><span><i class="legend-target"></i>Target / Level 5</span></div></div><svg class="radar-chart" viewBox="0 0 ${size} ${size}" role="img" aria-label="Radar chart showing HEOSAT maturity by category"><polygon points="${targetPoints}" class="radar-target"/>${rings}${axes}${levelLabels}<polygon points="${scorePoints}" class="radar-area"/><polyline points="${scorePoints} ${scorePoints.split(' ')[0]||''}" class="radar-line"/>${stats.map((st,i)=>`<circle cx="${point(i,isFinite(st.avg)?maxR*st.avg/5:0).split(',')[0]}" cy="${point(i,isFinite(st.avg)?maxR*st.avg/5:0).split(',')[1]}" r="4" class="radar-dot"><title>${esc(st.title)}: ${isFinite(st.avg)?st.avg.toFixed(2):'Not scored'} / 5</title></circle>`).join('')}${labels}</svg></div>`;
}

function updateSummary(){
 const vals=Object.values(scores); const total=totalQuestions(); const avg=vals.length?(vals.reduce((a,b)=>a+b,0)/vals.length):NaN; const pct=total?Math.round(vals.length/total*100):0;
 document.getElementById('summary').innerHTML=`<div class="summary"><strong>Progress:</strong> ${vals.length} / ${total} questions scored (${pct}%). <strong>Average score:</strong> ${isFinite(avg)?avg.toFixed(2):'—'} / 5. <strong>Overall maturity:</strong> ${maturityBand(avg)}.</div>`;
 renderReport(avg, vals.length, total);
}
function renderReport(avg, scored, total){
 const stats=sectionStats(); const dist=distribution(); const maxDist=Math.max(1,...dist); const answeredWithNotes=Object.values(notes).filter(n=>String(n||'').trim()).length;
 const strengths=stats.filter(s=>isFinite(s.avg)).sort((a,b)=>b.avg-a.avg).slice(0,3);
 const priorities=stats.filter(s=>isFinite(s.avg)).sort((a,b)=>a.avg-b.avg).slice(0,3);
 document.getElementById('report').innerHTML=`<div class="report-title"><h2>HEOSAT Results Report</h2><p>This printable report summarizes the current assessment results, supporting notes, and evidence links entered by respondents. It can be saved as a PDF and shared with peers, governance bodies, funders, institutional adopters, or posted publicly to document project maturity against the HEOSAT standard.</p></div>${attributionsBlock('report')}<div class="report-cards"><div><strong>Overall score</strong><span>${isFinite(avg)?Math.round(avg/5*100):'—'}%</span><small>${isFinite(avg)?avg.toFixed(2):'—'} / 5</small></div><div><strong>Maturity band</strong><span>${maturityBand(avg)}</span></div><div><strong>Questions scored</strong><span>${scored} / ${total}</span></div><div><strong>Questions with evidence notes</strong><span>${answeredWithNotes}</span></div></div><div class="report-visuals">${radarChart(stats)}</div><h3>Section summary</h3><table class="report-table"><thead><tr><th>Section</th><th>Scored</th><th>Average</th><th>Graph</th></tr></thead><tbody>${stats.map(s=>`<tr><td>${esc(s.title)}</td><td>${s.scored}/${s.total}</td><td>${isFinite(s.avg)?s.avg.toFixed(2):'—'}</td><td>${bar(isFinite(s.avg)?s.avg/5*100:0, s.title)}</td></tr>`).join('')}</tbody></table><h3>Score distribution</h3><div class="dist-chart">${dist.map((c,i)=>`<div class="dist-row"><div class="dist-label">${i} — ${esc(data.scale[i])}</div>${bar(c/maxDist*100, data.scale[i])}<div class="dist-count">${c}</div></div>`).join('')}</div><h3>Summary interpretation</h3><div class="interpretation"><p><strong>Strongest areas:</strong> ${strengths.length?strengths.map(s=>`${esc(s.title)} (${s.avg.toFixed(2)})`).join('; '):'No scored sections yet.'}</p><p><strong>Highest-priority improvement areas:</strong> ${priorities.length?priorities.map(s=>`${esc(s.title)} (${s.avg.toFixed(2)})`).join('; '):'No scored sections yet.'}</p><p><strong>Suggested next step:</strong> Use the lowest-scoring questions with missing evidence notes to identify specific documentation, governance, release, security, adoption, or sustainability improvements for the next project cycle.</p></div><h3>Question-level results and evidence notes</h3><table class="report-table question-results"><thead><tr><th>ID</th><th>Question</th><th>Score</th><th>Evidence notes and links</th></tr></thead><tbody>${allQuestions().map(({section,q})=>`<tr><td>${q.id}</td><td><strong>${esc(section)}</strong><br>${esc(q.text)}</td><td>${scores[q.id]!==undefined?`${scores[q.id]} — ${esc(scoreLabel(scores[q.id]))}`:'Not scored'}</td><td>${esc(notes[q.id]||'')}</td></tr>`).join('')}</tbody></table>`;
}
render().catch(()=>{
 if(app)app.innerHTML='<section class="summary"><strong>HEOSAT could not initialize.</strong> Reload the page and check browser storage settings.</section>';
});
})();
