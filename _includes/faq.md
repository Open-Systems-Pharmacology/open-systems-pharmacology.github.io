# Open Systems Pharmacology (OSP) Suite — FAQ

A frequently asked questions guide for users getting started with the OSP Suite, organized from beginner to advanced topics.

---

## 1. Overview

### What is the Open Systems Pharmacology (OSP) Suite?

The OSP Suite is a collection of open-source software tools for physiologically based pharmacokinetic (PBPK) and Quantitative Systems Pharmacology (QSP) modeling and simulation in pharmaceutical and life-sciences applications. The suite is the result of over 25 years of development and was made open-source in early 2017. It is free to use and available to everyone — academia, regulatory agencies, and industry alike.

### What tools are included in the OSP Suite?

- **PK-Sim®** — Whole-body PBPK modeling tool with built-in physiological databases for humans and common laboratory animals (mouse, rat, minipig, dog, monkey, beagle, rabbit).
- **MoBi®** — Systems biology tool for multiscale physiological modeling, allowing full model customization and extension.
- **OSPSuite-R packages** — R packages for scripted workflows: loading, manipulating, and simulating models built in PK-Sim and MoBi.
- **Qualification Framework** — Automated validation of modeling scenarios and generation of qualification reports.
- **Installation Validator** — "1-Click" validation of the OSP Suite installation on a target computer.

### Is the OSP Suite free?

Yes. The OSP Suite is open-source software released under the **GPLv2 License**. It is free for everyone, including commercial use.

### Where is the source code?

All source code is hosted on GitHub at [github.com/Open-Systems-Pharmacology](https://github.com/Open-Systems-Pharmacology).

---

## 2. Installation & Setup

### Where do I download the OSP Suite?

Download installation packages from [setup.open-systems-pharmacology.org](http://setup.open-systems-pharmacology.org/). The latest version is **OSP Suite Version 12 Update 2**.

### How do I install the OSP Suite?

1. Download and run `OSPSuite-Full.X.Y.Z.exe` (e.g., `OSPSuite-Full.12.0.397.exe`).
2. Follow the instructions in the installation wizard — default settings work in most cases.
3. Restart your computer after installation if required.
4. Download PK-Sim gene expression databases and configure them (see [PK-Sim Options](https://docs.open-systems-pharmacology.org/working-with-pk-sim/pk-sim-documentation/pk-sim-options) in the documentation).

**Note:** Administrator rights are required for installation. If you don't have admin rights, ask your IT administrator to install it.

### Can I install PK-Sim and MoBi separately?

Yes. Both PK-Sim and MoBi can be installed as stand-alone packages to reduce disk space. However, installing both is recommended to get the full modeling and simulation capabilities.

### What are the system requirements?

The OSP Suite runs on **Windows**. The full installer includes all necessary components.

### Is there a portable version?

Yes, portable versions are available (particularly useful for R users). Before extracting the downloaded archive, you must right-click the file, select "Properties," and check the "Unblock" checkbox — Windows Defender blocks applications from untrusted sources by default.

**Notes for Portable Versions:**

- Portable versions do not affect the installed OSP Suite and do not interfere with each other.
- If you only need one tool (e.g., only PK-Sim) — there is no need to download another portable tool(s).
- PK-Sim and MoBi rely on some common Windows components: .NET Framework and C++ Runtime Redistributable. In most cases these components are already installed on the target machine. In the very unlikely case that they aren't:
  - If PK-Sim (or MoBi) Portable crashes immediately on startup: The .NET Framework is missing. Download and install it from [here](https://go.microsoft.com/fwlink/?LinkID=863265).
  - If the program starts and you can create a simulation, but running a simulation crashes: The C++ Runtime is missing. Download and install it from [here](https://aka.ms/vs/17/release/vc_redist.x64.exe).
- If you use the functionality "Send to MoBi" in PK-Sim: you have to enter the location of MoBi.exe (portable) in the program options (vice versa for MoBi).
- When you double-click a PK-Sim or MoBi project in Windows Explorer — it will always start the installed application (the one installed with the full OSP Suite setup), not one of the portables.
- If you are using the OSP Qualification Runner (as part of the OSP Qualification Framework) — the path to the portable PK-Sim folder must be passed as an argument, otherwise the installed version will be used.

### Does the OSP Suite work with Excel and R?

The OSP Suite includes interfaces to **MS Excel®** and **R**, but these are separate programs that must be installed independently. You need R already installed on your machine to use its interface. For importing/exporting of Excel files no Excel installation is required.

---

## 3. Understanding the Tools

### What is PK-Sim and when should I use it?

PK-Sim is a comprehensive tool for whole-body PBPK modeling. It provides rapid access to anatomical and physiological parameters for humans and laboratory animals through an integrated database. It automatically accounts for relevant passive processes (like distribution through blood flow) and active processes (like enzyme-mediated metabolism).

PK-Sim is designed for use by **non-modeling experts** and is the recommended starting point for most users. Use PK-Sim when you need standard PBPK modeling with built-in databases and automated processes.

For details on how to use PK-Sim, see the [PK-Sim Quick Guide](https://docs.open-systems-pharmacology.org/working-with-pk-sim/pk-sim-documentation/pk-sim-quick-guide) and the full [PK-Sim Documentation](https://docs.open-systems-pharmacology.org/working-with-pk-sim/pk-sim-documentation).

### What is MoBi and when should I use it?

MoBi is a systems biology tool for multiscale physiological modeling. Within the framework of ordinary differential equations, almost any kind of biological model can be imported or set up from scratch — biochemical reaction networks, compartmental disease progression models, PBPK models, and combinations of these.

Use MoBi when you need to customize or extend a model beyond what PK-Sim allows, build pharmacodynamic (PD) models, or combine PBPK with complex signaling pathways. A common workflow is to build a base PBPK model in PK-Sim and then export it to MoBi for further customization.

For details, see the [MoBi Documentation](https://docs.open-systems-pharmacology.org/working-with-mobi/mobi-documentation/first-steps).

### What is the difference between PK-Sim and MoBi?

PK-Sim focuses on whole-body PBPK modeling and is designed for non-expert modelers who need to quickly build and simulate pharmacokinetic models using its built-in databases. MoBi provides full access to all model details with the option for extensive modifications and extensions — it operates at a deeper, more flexible level but requires more expertise. PK-Sim is your starting point; MoBi is where you go when you need full control.

### What are the OSPSuite-R packages?

The OSP ecosystem provides several R packages for scripted workflows:

| Package | Purpose |
|---|---|
| **ospsuite** | Core package — load, manipulate, and simulate models from PK-Sim/MoBi |
| **ospsuite.plots** | Create standardized reporting Tables, Listings, and Figures |
| **ospsuite.reportingengine** | Automated generation of qualification/evaluation reports |
| **ospsuite.parameteridentification** | Parameter identification (fitting models to observed data) |
| **ospsuite.utils** | Utility functions shared across the OSP R ecosystem |

More details on the OSP R packages landscape (including short descriptions of further packages) is given under [R_PACKAGES.md](https://github.com/Open-Systems-Pharmacology/Suite/blob/master/R_PACKAGES.md).

### How do I install the OSPSuite-R packages?

The `ospsuite` package is **not available on CRAN** because it contains binary files. It must be installed from GitHub or archive files.

**Requirements:** R version 4.x.x, Windows or Linux (Ubuntu), Visual C++ Redistributable, and .NET 8.

**From GitHub (recommended):**

```r
install.packages("remotes")
remotes::install_github("Open-Systems-Pharmacology/OSPSuite-R@*release")
```

**From pre-built archive files:** Download archives from the [GitHub releases page](https://github.com/Open-Systems-Pharmacology/OSPSuite-R/releases) and install manually in this order: `rSharp` → `ospsuite.utils` → `tlf` → `ospsuite`.

Full installation instructions: [open-systems-pharmacology.org/OSPSuite-R/#installation](https://www.open-systems-pharmacology.org/OSPSuite-R/#installation)

### Can I save R workspace objects from ospsuite?

No. The `ospsuite` package creates .NET objects (e.g., simulations) that **cannot be saved as part of the R workspace**. Upon restoring the workspace, these objects will be `NULL`. You need to re-load models each session.

---

## 4. Tutorials & Learning

### Where do I start as a complete beginner?

Start with the [Getting Started](https://docs.open-systems-pharmacology.org/open-systems-pharmacology-suite/getting-started) page in the official documentation. It walks you through installation and first steps. From there, explore the tool-specific documentation for PK-Sim or MoBi depending on your needs.

### Are there video tutorials?

Yes. The OSP website at [open-systems-pharmacology.org](https://www.open-systems-pharmacology.org) hosts several tutorials including:

- **Introduction to PBPK modeling** — Build a basic PBPK model in PK-Sim
- **Pediatric PBPK modeling** — Scale adult models to pediatric populations
- **Drug-Drug Interaction (DDI) modeling** — Set up a fully mechanistic DDI model in PK-Sim
- **Chart customization** — Advanced chart settings and templates in PK-Sim and MoBi
- **Favorites feature** — Efficiently locate specific parameters in your models

### Are there example projects?

Yes. Over **30 real-world examples** in PK-Sim and MoBi, as well as simulations in R, are available in the [OSP PBPK Model Library](https://github.com/Open-Systems-Pharmacology/OSP-PBPK-Model-Library).

### Are there workshops or training events?

The OSP community has organized hands-on workshops at scientific conferences (e.g., PAGE, WCOP). Workshop materials — including slides and example projects — are often shared as GitHub repositories. Search the [OSP GitHub organization](https://github.com/Open-Systems-Pharmacology) for repositories with "Workshop" in their name.

### Where is the full documentation?

The official documentation is at [docs.open-systems-pharmacology.org](https://docs.open-systems-pharmacology.org/). It covers the full OSP Suite including PK-Sim, MoBi, OSPSuite-R, the Qualification Framework, and appendices.

The handbook also includes "Mechanistic Modeling of Pharmacokinetics and Dynamics" — a general introduction to computational systems biology with a focus on mechanistic PK/PD modeling.

---

## 5. Community & Support

### Where can I ask questions or get help?

The primary support channel is the **OSP Forum** on GitHub Discussions:
[github.com/Open-Systems-Pharmacology/Forum/discussions](https://github.com/Open-Systems-Pharmacology/Forum/discussions)

The forum has a dedicated **"Questions & Problems"** category for troubleshooting:
[Questions & Problems](https://github.com/Open-Systems-Pharmacology/Forum/discussions/categories/questions-problems)

A GitHub account is required to post. The forum is actively moderated by OSP community members.

### Should I read the documentation before posting?

Yes. The OSP team encourages everyone to read the documentation before opening a new issue or discussion. Many common questions are already covered in the official docs.

### How can I upload a model?

If you want to contribute a PBPK model to the OSP community, follow the guidelines in [CREATING_MODEL_REPOSITORY.md](https://github.com/Open-Systems-Pharmacology/Suite/blob/develop/CREATING_MODEL_REPOSITORY.md).

### How do I report bugs?

Use the GitHub issue tracker in the relevant repository (e.g., [PK-Sim issues](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues), [MoBi issues](https://github.com/Open-Systems-Pharmacology/MoBi/issues), or the [Forum](https://github.com/Open-Systems-Pharmacology/Forum/discussions)).

### How do I stay up-to-date?

Subscribe to the OSP Forum to receive updates on new software releases, models, and community discussions. You can also watch the relevant GitHub repositories for release notifications.

---

## 6. Contributing

### How can I contribute?

The OSP project welcomes contributions. You can contribute by:

- **Reporting issues** — Submit bugs or feature requests via GitHub issues.
- **Submitting code changes** — Fork a repository, make changes, and submit a pull request.
- **Sharing models** — Contribute PBPK models and qualification scenarios.
- **Participating in discussions** — Help answer questions in the forum.
- **Improving documentation** — Submit pull requests to the docs repository.

If you are a software developer, you can find the developer documentation at [dev.open-systems-pharmacology.org](https://dev.open-systems-pharmacology.org/).

### How do I contribute to the documentation?

1. You need a **GitHub account** (free).
2. Fork the [docs repository](https://github.com/Open-Systems-Pharmacology/docs) and make your changes.
3. Submit a **pull request**.
4. The documentation core team will review your changes and provide feedback if needed.

For adding entirely new content, open an issue in the docs repository first to discuss what you want to add.

Full contribution guide: [docs.open-systems-pharmacology.org/how-to-contribute](https://docs.open-systems-pharmacology.org/how-to-contribute)

### GitHub for Beginners (Especially Non‑Programmers)

GitHub can be used without being a programmer - think of it as a place to **store, organize, collaborate on, and publish files** (documents, notes, designs, datasets, etc.), with a clear history of changes.

- Essentials (Start Here)
  - What is GitHub, in plain language?
    - GitHub is a website where people and teams keep files in **repositories** (folders/projects), track changes over time, and collaborate (comments, reviews, suggestions).
  - What should I learn first?
    - Start with a hands-on “Hello World” walkthrough, then learn the basic collaboration workflow used across GitHub.
    - Essentials: **Hello World Example**  
      https://docs.github.com/en/get-started/start-your-journey/hello-world
    - Bit more details: **GitHub flow** (the usual “branch → change → pull request → review → merge” pattern)  
      https://docs.github.com/en/get-started/using-github/github-flow
  - What do “issues” and “pull requests” mean? (Non-programmer translation)
    - **Issue**: a task, question, or idea thread (like a to-do item with discussion).
    - **Pull request (PR)**: “I made changes; please review and add them.” It’s a review + approval step before changes become official.

- Mastering Markdown (Writing on GitHub)
  - Do I need to learn Markdown?
    - If you write README files, documentation, **qualification reports**, notes, or project pages on GitHub: yes - Markdown is the easiest way to format text (headings, lists, links, checklists).
    - **Basic writing and formatting syntax**  
      https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  - What “advanced formatting” is worth knowing?
    - Once you know the basics, you can level up your documents with tables, callouts, and other formatting tools.
    - **Working with advanced formatting**  
      https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting
    - **Organizing information with tables**  
      https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
    - Optional deep dives:
      - **Writing mathematical expressions**  
        https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions
      - **Creating diagrams**  
        https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams

- “No Command Line” Option: GitHub Desktop
  - Can I use GitHub without the command line?
    - Yes. **GitHub Desktop** is a beginner-friendly app for working with repositories using buttons and menus (clone, commit, push, pull, branch).
    - **Getting started with GitHub Desktop**  
      https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop
    - **All GitHub Desktop documentation topics**  
      https://docs.github.com/en/desktop

- Releases (Sharing Downloadable Versions)
  - What is a “release” and why would I use it?
    - A **release** is a published snapshot of a repository—useful for sharing a “version” people can download (documents, templates, packaged files, etc.). Releases are often paired with tags like `v1.0`.
    - **Managing releases in a repository**  
      https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository

- Optional: Video Tutorials
  - If you prefer learning by watching:
    - **"GitHub for Beginners" (GitHub’s channel playlist/video)**  
      https://www.youtube.com/watch?v=-RZ03WHqkaY&list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f&index=3
    - **How to Use GitHub Desktop | Beginner’s Step-by-Step GitHub GUI Tutorial**  
      https://www.youtube.com/watch?v=AYJQi6TyPyU
    - **GitHub Tutorial for Beginners**  
      https://www.youtube.com/watch?v=v5gnvDUWqFM
    - **How to Use Git & GitHub Desktop Tutorial for Beginners**  
      https://www.youtube.com/watch?v=MaqVvXv6zrU

- Quick “What should I do next?” Path (Recommended)
  - Do **Hello World** (learn the basic buttons and concepts).
  - Learn **GitHub Flow** (how collaboration is organized).
  - Learn **Markdown basics** (so your pages look clean and readable).
  - If you don’t want a terminal, install and use **GitHub Desktop**.
  - When you have something shareable, learn **Releases**.

---

## 7. Governance

### Who manages the OSP project?

The OSP project has a structured governance model with distinct roles, as described in the [User Roles and Responsibilities](https://dev.open-systems-pharmacology.org/software-engineering-transparency-and-security/overview/user-roles-and-responsibilities) documentation:

- **Management Team (MT)** — The OSP Management Team is a project group of **AGAH e.V.** (Arbeitsgemeinschaft für Angewandte Humanpharmakologie / Association for Applied Human Pharmacology). The MT oversees community and OSP membership management, handles regular review, endorsement, and publication of the roadmap, certifies qualifications, manages platform releases, and coordinates external communications.
- **Sounding Board (SB)** — Provides expert analysis by examining scientific and technical content and identifying emerging trends. They serve as consultants offering guidance to leadership.
- **Core Developers (DEV)** — Handles the technical backbone: development and testing of the OSP software platform and tools, along with evaluating and integrating proposed modifications into the codebase.
- **OSP Community Members** — Create substantive contributions including data and models, software requirements, methods, best practices, qualification frameworks, and training material. They also participate in testing, validation, and knowledge-sharing activities.
- **Users** — Engage with the platform and content while providing feedback. They contribute by reporting observations, needs, and issues, and participate in community discussions and support forums.

### Who decides what changes get made?

The **Management Team** is responsible for regular review, endorsement, and publication of the OSP development roadmap. They oversee and steer all activities, including certification of the software platform, models, parameter databases, and qualification processes. The **Sounding Board** advises on scientific and technological decisions.

For code contributions, changes go through GitHub pull requests and are reviewed by the members of the OSP Sounding Board and OSP Core Developers teams before merging. The continuous development of the suite runs on GitHub and can be monitored by everyone in real time.

### What is AGAH and what is its relationship to OSP?

AGAH (Arbeitsgemeinschaft für Angewandte Humanpharmakologie e.V.) is the Association for Applied Human Pharmacology, a specialist medical-academic organization focused on exploratory medicinal product development and human pharmacological research. The OSP Management Team operates as a project group within AGAH, which provides the organizational umbrella for the project's governance.

### Where can I find the development roadmap?

The OSP development roadmap is maintained on GitHub: [github.com/Open-Systems-Pharmacology/Roadmap](https://github.com/Open-Systems-Pharmacology/Roadmap) and the [OSP Suite Software Roadmap](https://github.com/orgs/Open-Systems-Pharmacology/projects/29). The Management Team is responsible for its regular review and publication.

---

## 8. Validation & Qualification

### How is the software validated?

Validation includes:

- A comprehensive library of test cases that grows with every newly released feature
- Comparison of simulation outputs against verified reference standards for specific combinations of compounds, organisms, and model options
- Automated tests across different software environments (operating systems, etc.)
- Testing of new features by scientific experts — creating simulation scenarios and comparing results with published study data
- The **Installation Validator** tool enables "1-Click" validation of an OSP Suite installation on any target computer

### How is the software qualified for intended use?

The OSP community places strong emphasis on qualification for regulatory acceptance. They establish fully transparent processes for qualification and software validation to certify compliance with regulatory standards. The **Qualification Framework** automates qualification of modeling scenarios, and several qualification repositories for drug-drug interactions and pediatric applications have been published on GitHub.

The Management Team provides certification of platform versions, and the OSP Suite is qualified and accepted by the scientific community including regulatory agencies.

Qualification for intended use is described in detail under:
- [Qualification for Intended Use](https://dev.open-systems-pharmacology.org/software-engineering-transparency-and-security/overview/software-engineering#qualification-for-intended-use)
- [General Qualification of the PBPK Platform](https://dev.open-systems-pharmacology.org/software-engineering-transparency-and-security/overview/software-engineering#general-qualification-of-the-pbpk-platform)

### What is the Qualification Framework?

The Qualification Framework enables automated qualification of modeling scenarios supported by the OSP platform. It is also used for the requalification of the platform when releasing new versions of the OSP Suite. The workflow involves:

1. A **qualification plan** (stored in a GitHub repository) links models, data, and scenarios using PK-Sim project snapshots.
2. The **Qualification Runner** (stand-alone tool) processes the plan and exports project parts.
3. The **Reporting Engine** executes models in a validated environment and generates the final **qualification report** — including goodness-of-fit plots, residual plots, and visual predictive checks.

**Note:** The Qualification Framework and R packages are not included in the main OSP Suite installer and must be installed separately.

Documentation: [docs.open-systems-pharmacology.org — Qualification](https://docs.open-systems-pharmacology.org/shared-tools-and-example-workflows/qualification)

### How is code quality maintained?

The OSP Suite follows rigorous software engineering practices:

- **Continuous Integration (CI)** — Building of OSP libraries and setups is fully automated via integration of CI services (GitHub Actions) with GitHub. The build environments are standardized and nobody except CI administrators can modify them. CI is described in detail under [Continuous Integration](https://dev.open-systems-pharmacology.org/software-engineering-transparency-and-security/overview/software-engineering#continuous-integration).
- **Multi-layered testing** — Unit tests and integration tests are triggered with every software build. Slower integration/module/systems tests run periodically (e.g., nightly). Full testing and code coverage reports are publicly accessible for each build.
- **Code review** — Changes are submitted via GitHub pull requests and reviewed before being merged.
- **Static code analysis** — Code quality analysis tools (including static analysis and test coverage) run as part of the CI pipeline.

### Is the OSP Suite transparent?

Yes. The project is built on three core pillars:

- **Open Source** — All source code is publicly available on GitHub. Development can be monitored by everyone in real time.
- **Open Access** — High-quality software, models, and data sets are provided free of license costs.
- **Open Science** — The community jointly develops scientific concepts, applications, and best practices.

---

## 9. Advanced Topics

### What is Parameter Identification?

Parameter identification (fitting a model to observed data) is available through the **ospsuite.parameteridentification** R package. In PK-Sim/MoBi, you can also run multiple Parameter Identifications in parallel.

GitHub: [OSPSuite.ParameterIdentification](https://github.com/Open-Systems-Pharmacology/OSPSuite.ParameterIdentification)

### Can I use PK-Sim from the command line?

Yes. PK-Sim offers a **Command Line Interface (CLI)** for batch processing and automation. Documentation is available in the [PK-Sim documentation section](https://docs.open-systems-pharmacology.org/working-with-pk-sim/pk-sim-documentation).

---

## Quick Reference Links

| Resource | URL |
|---|---|
| OSP Website | [open-systems-pharmacology.org](https://www.open-systems-pharmacology.org) |
| Documentation | [docs.open-systems-pharmacology.org](https://docs.open-systems-pharmacology.org/) |
| Download / Setup | [setup.open-systems-pharmacology.org](http://setup.open-systems-pharmacology.org/) |
| GitHub Organization | [github.com/Open-Systems-Pharmacology](https://github.com/Open-Systems-Pharmacology) |
| Community Forum | [Forum Discussions](https://github.com/Open-Systems-Pharmacology/Forum/discussions) |
| Questions & Problems | [Forum Q&A](https://github.com/Open-Systems-Pharmacology/Forum/discussions/categories/questions-problems) |
| OSPSuite-R Package | [OSPSuite-R Docs](https://www.open-systems-pharmacology.org/OSPSuite-R/) |
| How to Contribute | [Contribution Guide](https://docs.open-systems-pharmacology.org/how-to-contribute) |
| PK-Sim Documentation | [PK-Sim Docs](https://docs.open-systems-pharmacology.org/working-with-pk-sim/pk-sim-documentation) |
| MoBi Documentation | [MoBi Docs](https://docs.open-systems-pharmacology.org/working-with-mobi/mobi-documentation/first-steps) |
| Development Roadmap | [Roadmap](https://github.com/Open-Systems-Pharmacology/Roadmap) |
| Qualification Framework | [Qualification Docs](https://docs.open-systems-pharmacology.org/shared-tools-and-example-workflows/qualification) |
