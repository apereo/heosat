# HEOSAT

## Higher Education Community Open Source Assessment Toolkit

**Developed and maintained by the [Apereo Foundation](https://www.apereo.org/)**

HEOSAT is an open source assessment toolkit designed to help higher education institutions, open source projects, and software communities evaluate the health, openness, sustainability, and maturity of open source software.

Rather than simply asking whether software is technically open source, HEOSAT looks at the practices and conditions that help a project become **understandable, adoptable, governable, sustainable, and useful across institutions**.

The toolkit provides a structured assessment, guidance for each question, supporting resources, scoring, and a visual summary of results.

---

## What HEOSAT Is For

Higher education depends heavily on open source software, but evaluating an open source project can be difficult.

A repository may be publicly available while important questions remain unanswered:

- Licensing issues beyond copyright, e.g., trademarks.
- Is project governance documented?
- Is there a functioning community?
- Is the project dependent on one person, department, institution, or funder?
- Are documentation and contribution processes sufficient for wider adoption?
- Does the project demonstrate a pathway toward long-term sustainability?

HEOSAT provides a common framework for examining these questions.

It can be used by:

- Higher education institutions evaluating software
- Faculty and research teams developing open source projects
- Campus IT and procurement organizations
- Libraries and academic technology groups
- Open Source Program Offices (OSPOs)
- Funders and grant programs
- Open source foundations and communities
- Project incubators
- Open source projects assessing their own development

HEOSAT is intended as a **decision-support and improvement tool**, not simply a pass/fail certification.

---

## HEOSAT in 60 Seconds

The basic HEOSAT workflow is:

1. **Assess** the project against the HEOSAT criteria.
2. **Review evidence** supporting each assessment.
3. **Identify gaps** in project practices or documentation.
4. **Prioritize improvements** that would strengthen the project.
5. **Reassess** periodically to measure progress.

HEOSAT is most useful when assessment results lead to concrete improvements in project practices.

---

## What HEOSAT Assesses

HEOSAT examines multiple dimensions of open source project maturity and sustainability.

### Licensing and Legal

Evaluates whether the software uses a clearly identified **Open Source Initiative (OSI) Approved Open Source License®**, whether licensing and copyright information are appropriately included, and whether users and contributors can clearly understand their rights and obligations.

### Governance

Looks at how decisions are made, who has authority within the project, how new participants can become involved, and whether governance can expand beyond the project's original institution, laboratory, department, or founding team.

### Community

Examines whether the project has an identifiable and accessible community, communication channels, contribution pathways, community norms, and opportunities for participation.

### Development Practices

Considers repository accessibility, development processes, issue tracking, releases, documentation, contribution workflows, and other practices that allow people outside the original development team to understand and contribute to the software.

### Adoption and Deployment

Assesses whether prospective adopters can understand, install, configure, operate, and support the software and whether sufficient information exists to evaluate the project for institutional use.

### Sustainability

Explores factors affecting the project's ability to continue over time, including community participation, institutional dependencies, leadership continuity, resources, funding, and organizational support.

### Institutional and Procurement Readiness

Helps institutions identify information that may be needed during technical evaluation, security review, procurement, accessibility review, risk assessment, and related institutional processes.

---

## How the Assessment Works

HEOSAT presents a series of assessment questions about the project.

Each question includes:

- The **assessment criterion**
- A **rating scale**
- An explanation of **why the question matters**
- Guidance relevant to higher education
- Examples of the kinds of evidence that may support an assessment
- **Learn More** resources for users who want additional background

Users evaluate the project against the available evidence and select the response that best represents its current state.

The resulting scores provide both an overall picture and a way to identify specific areas for improvement.

---

## Scoring

HEOSAT uses a maturity-oriented scoring approach.

A higher score generally indicates that a practice is:

- More clearly documented
- More consistently implemented
- More accessible to people outside the original project team
- Less dependent on informal knowledge or individual participants
- Better positioned to support adoption and long-term community participation

The purpose of scoring is not to declare one project "better" than another.

The score is most useful as a **baseline and improvement measure**.

For example, a project can complete an assessment, identify areas requiring attention, make improvements, and repeat the assessment later to measure progress.

---

## Assessment Results

HEOSAT produces a summary of the assessment that can include:

- Scores by assessment area
- An overall project profile
- A **radar/spider chart** showing strengths and gaps
- Individual question responses
- Explanatory guidance
- A printable assessment report

The graphical profile is particularly useful for identifying uneven project maturity.

A project may, for example, have excellent development practices while still needing improvements in governance, documentation, community development, or sustainability.

---

## Using HEOSAT as a Project Development Tool

HEOSAT is designed to support improvement as well as evaluation.

Projects can use the assessment to:

1. Establish a baseline
2. Identify gaps
3. Prioritize improvements
4. Document evidence of progress
5. Reassess periodically
6. Demonstrate increasing maturity to adopters, institutions, funders, and community members

HEOSAT can therefore complement incubation, mentoring, grant-funded project development, institutional open source programs, and community sustainability initiatives.

---

## Getting Started

HEOSAT is available in two forms:

- A **standalone web version**
- A **Drupal 10 module**

Both versions implement the same underlying assessment framework.

---

## Standalone Version

The standalone version can be hosted on a standard web server and does not require Drupal or another content management system.

Download or clone the repository:

```bash
git clone <repository-url>
```

Then place the standalone HEOSAT files on a web server or open the appropriate entry page in a local development environment.

A typical deployment requires only:

- HTML
- CSS
- JavaScript
- A modern web browser

No external application database is required for the basic assessment.

> **Note:** Browser security policies may affect some functionality when files are opened directly from the local filesystem. Running HEOSAT through a local web server is recommended for development and testing.

For example:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## Drupal 10 Module

A Drupal-compatible version of HEOSAT is also provided.

Copy the module into:

```text
web/modules/custom/
```

or the equivalent custom module directory for your Drupal installation.

Enable the HEOSAT module through Drupal administration or with Drush:

```bash
drush en heosat
```

After installation, configure access and placement according to the module documentation and your Drupal site's requirements.

Site administrators should review permissions and configuration before making the assessment publicly available.

---

## Recommended Assessment Process

For the most useful results, assessments should be based on **evidence rather than impressions**.

Before beginning, consider collecting:

- Source code repository URLs
- Project website
- License information
- Governance documentation
- Contributor documentation
- Issue tracker
- Release history
- Technical documentation
- Installation instructions
- Community communication channels
- Contributor or maintainer lists
- Funding or sponsorship information
- Project roadmaps
- Institutional or organizational documentation

An assessment can be completed by one person, but projects may obtain better results by involving people with different perspectives, such as developers, community managers, institutional adopters, project leadership, and users.

---

## Interpreting Results

HEOSAT scores should be understood in context.

A young project emerging from a university research laboratory, for example, should not necessarily be expected to have the same governance structure or community processes as a mature multi-institutional project.

The important question is often not:

> **What is the project's score?**

but rather:

> **What would need to change for this project to become easier for other people and institutions to understand, adopt, contribute to, and sustain?**

HEOSAT is designed to help answer that question.

---

## Evidence Matters

Whenever possible, ratings should be supported by publicly accessible evidence.

Examples include:

| Assessment Area | Possible Evidence |
| --- | --- |
| Licensing | `LICENSE` file, copyright notices, repository documentation |
| Governance | Governance document, decision-making process, leadership roles |
| Community | Mailing lists, forums, chat channels, meeting records |
| Development | Public repository, issue tracker, pull requests, release history |
| Contribution | `CONTRIBUTING` file, contributor guide, onboarding documentation |
| Adoption | Installation documentation, deployment guides, known adopters |
| Sustainability | Funding model, institutional support, succession planning |
| Security | Security policy, vulnerability reporting process, release practices |

Documenting evidence makes assessments more reproducible and makes it easier to track improvements over time.

---

## HEOSAT and Open Source Incubation

HEOSAT can also be used as part of an open source incubation process.

An initial assessment establishes the project's baseline. Incubation activities can then focus on areas where the project needs to mature, for example:

- Licensing
- Governance
- Community building
- Documentation
- Contribution processes
- Institutional adoption
- Sustainability planning
- Project stewardship

Repeating the assessment provides a measurable way to demonstrate progress.

Within an incubation program, HEOSAT should complement—not replace—community mentoring and qualitative review.

---

## Customizing HEOSAT

Organizations may adapt HEOSAT to support their own assessment, incubation, procurement, or project-development processes.

Potential adaptations include:

- Adding organization-specific guidance
- Linking to local procurement requirements
- Adding institutional security requirements
- Integrating assessment results with project dashboards
- Using HEOSAT as part of an OSPO workflow
- Incorporating the assessment into grant reporting
- Using results as milestones within an incubation program

When modifying the assessment itself, organizations should clearly identify local additions or changes so users can distinguish them from the standard HEOSAT framework.

---

## Privacy and Data

HEOSAT is designed so that an assessment can be performed without requiring users to submit project information to a centralized Apereo service.

Organizations deploying HEOSAT should review their own implementation to determine:

- Whether responses are stored
- Where they are stored
- How long they are retained
- Who can access them
- Whether additional privacy notices are required

Deployers are responsible for the privacy and security configuration of their own HEOSAT installation.

---

## Background

HEOSAT builds on a long history of work examining the openness and sustainability of open source software.

The toolkit was originally inspired by and adapted from the **OSS Watch Openness Rating**, while extending the concept for contemporary higher education environments.

HEOSAT incorporates issues particularly important to institutional open source adoption, including:

- Community sustainability
- Multi-institutional governance
- Institutional risk
- Procurement
- Project stewardship
- Adoption readiness
- The transition of software from a locally developed project to a broader open source community

---

## References and Influences

HEOSAT draws on practices and research from the broader open source and higher education communities.

Important influences include:

- **OSS Watch** — Openness Rating and openness assessment resources
- **Open Source Initiative (OSI)** — open source licensing
- **Karl Fogel** — *Producing Open Source Software*
- **Lyrasis** — *It Takes a Village*
- Research and guidance addressing open source software sustainability in higher education
- Higher education technology risk and procurement practices, including resources such as the **EDUCAUSE HECVAT**
- Apereo Foundation experience supporting open source projects and communities

Where specific external materials have been adapted or incorporated, attribution and licensing information should be retained in the distributed HEOSAT files.

---

## Contributing

HEOSAT itself is an open source community resource, and contributions are welcome.

Useful contributions may include:

- Corrections
- Clearer assessment guidance
- Additional higher education examples
- Accessibility improvements
- Documentation improvements
- Software improvements
- Translations
- Additional supporting resources
- Proposals for new or revised assessment criteria

For substantial changes to the assessment framework, opening an issue before submitting a pull request is recommended so the proposed change can be discussed with the community.

### Typical Contribution Workflow

1. Fork the repository.
2. Create a branch for your change.
3. Make and test your changes.
4. Document the reason for the change.
5. Submit a pull request.

When proposing changes to assessment questions, please explain:

- The problem being addressed
- Why it matters to open source projects or higher education
- What evidence could reasonably demonstrate the proposed practice
- Any relevant research, standards, or community practices supporting the change

---

## Reporting Issues

If you encounter a technical problem or believe an assessment question needs clarification, please open a GitHub issue.

When reporting a technical issue, include where possible:

- HEOSAT version
- Deployment type: standalone or Drupal
- Browser
- Operating system
- Steps required to reproduce the problem
- Screenshots or error messages

For assessment-content issues, please identify the specific question and explain the concern or proposed revision.

---

## Versioning

HEOSAT releases use a date-oriented versioning convention where appropriate.

For example:

```text
2026.07
```

indicates the July 2026 edition of the assessment.

Subsequent releases may include changes to:

- Assessment criteria
- Explanatory guidance
- Supporting resources
- User interface
- Reporting
- Accessibility
- Deployment packages

Because assessment criteria may evolve, reports should identify the version of HEOSAT used to conduct the assessment.

---

## License

HEOSAT is intended to be an openly available community resource.

See the repository's `LICENSE` and attribution files for the licenses applying to:

- HEOSAT source code
- Assessment content
- Documentation
- Material adapted from other sources

Please retain required attribution notices when redistributing or adapting HEOSAT.

---

## Attribution

**Higher Education Community Open Source Assessment Toolkit (HEOSAT)**  
Developed and maintained by the **Apereo Foundation**.

HEOSAT was informed by and adapted in part from work originally developed by **OSS Watch** and incorporates concepts and practices from the wider open source and higher education communities.

Please consult the accompanying attribution and licensing documentation for complete details.

---

## About the Apereo Foundation

The **[Apereo Foundation](https://www.apereo.org/)** is a nonprofit organization dedicated to developing and sustaining open source software and communities serving higher education.

Apereo supports institutions and projects through community development, project stewardship, incubation, collaboration, education, and advocacy for open technologies.

Learn more at:

<https://www.apereo.org/>

---

## Contact

For questions about HEOSAT, collaboration, or participation in the Apereo community:

**Apereo Foundation**  
<https://www.apereo.org/>  
[community@apereo.org](mailto:community@apereo.org)

---

## Citation

When referencing HEOSAT in research, reports, grant proposals, or institutional documentation, a citation similar to the following may be used:

> Apereo Foundation. *Higher Education Community Open Source Assessment Toolkit (HEOSAT).* Apereo Foundation, 2026.

Please include the HEOSAT version or release date when referring to a specific assessment.
