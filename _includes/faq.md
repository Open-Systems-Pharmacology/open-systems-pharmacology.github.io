
# Open Systems Pharmacology (OSP) Suite — FAQ

A frequently asked questions guide for users getting started with the OSP Suite, organized from beginner to advanced topics.

---

## 1. General Overview

### What is the Open Systems Pharmacology (OSP) Suite?

The OSP Suite is a collection of open-source software tools for physiologically based pharmacokinetic (PBPK) modeling and simulation in pharmaceutical and life-sciences applications. The suite is the result of over 15 years of development and was made open-source in early 2017. It is free to use and available to everyone — academia, regulatory agencies, and industry alike.

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
3. Restart your computer after installation.
4. Download PK-Sim gene expression databases and configure them (see PK-Sim Options in the documentation).

**Note:** Administrator rights are required for installation. If you don't have admin rights, ask your IT administrator to install it.

### Can I install PK-Sim and MoBi separately?

Yes. Both PK-Sim and MoBi can be installed as stand-alone packages to reduce disk space. However, installing both is recommended to get the full modeling and simulation capabilities.

### What are the system requirements?

The OSP Suite runs on **Windows** and requires:

- **.NET Framework** — If PK-Sim or MoBi crashes immediately on startup, install the .NET Framework.
- **C++ Runtime Redistributable** — If simulations crash (but the program starts fine), install the C++ Runtime.

These components are typically already present on most Windows machines.

### Is there a portable version?

Yes, a portable version is available (particularly useful for R users). Before extracting the downloaded archive, you must right-click the file, select "Properties," and check the "Unblock" checkbox — Windows Defender blocks applications from untrusted sources by default.

### Does the OSP Suite work with Excel and R?

The OSP Suite includes interfaces to **MS Excel®** and **R**, but these are separate programs that must be installed independently. You need Excel and/or R already installed on your machine to use their respective interfaces.

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
| **tlf** | Create standardized reporting Tables, Listings, and Figures |
| **ospsuite.reportingengine** | Automated generation of qualification/evaluation reports |
| **ospsuite.parameteridentification** | Parameter identification (fitting models to observed data) |
| **ospsuite.utils** | Utility functions shared across the OSP R ecosystem |

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

## 4. Tutorials & Learning Resources

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

Yes. Over **30 real-world examples** in PK-Sim and MoBi, as well as simulations in R, are available. Access is free for academia.

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

### How do I report bugs?

Use the GitHub issue tracker in the relevant repository (e.g., [PK-Sim issues](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues), [MoBi issues](https://github.com/Open-Systems-Pharmacology/MoBi/issues), or the [Forum](https://github.com/Open-Systems-Pharmacology/Forum/discussions)).

### How do I stay up-to-date?

Subscribe to the OSP Forum to receive updates on new software releases, models, and community discussions. You can also watch the relevant GitHub repositories for release notifications.

---

## 6. Contributing to the Project

### How can I contribute?

The OSP project welcomes contributions. You can contribute by:

- **Fixing documentation** — Each page on the docs site corresponds to a GitHub file you can edit directly.
- **Reporting issues** — Submit bugs or feature requests via GitHub issues.
- **Submitting code changes** — Fork a repository, make changes, and submit a pull request.
- **Sharing models** — Contribute PBPK models and qualification scenarios.
- **Participating in discussions** — Help answer questions in the forum.

### How do I contribute to the documentation?

1. You need a **GitHub account** (free).
2. Navigate to the docs site — each page has a link to its corresponding GitHub file.
3. Edit the file and submit a **pull request**.
4. The documentation core team will review your changes and provide feedback if needed.

For adding entirely new content, open an issue in the docs repository first to discuss what you want to add.

Full contribution guide: [docs.open-systems-pharmacology.org/how-to-contribute](https://docs.open-systems-pharmacology.org/how-to-contribute)

---

## 7. Governance & Decision-Making

### Who manages the OSP project?

The OSP project has a structured governance model with four distinct roles:

- **Users** — Anyone using OSP software, models, or content.
- **Contributing Community Members** — Active contributors to the development of OSP content (code, models, documentation).
- **Sounding Board** — Supports the management team on scientific and technological matters.
- **Management Team** — The OSP Management Team is a project group of **AGAH e.V.** (Arbeitsgemeinschaft für Angewandte Humanpharmakologie / Association for Applied Human Pharmacology). The management team is responsible for the development roadmap, formal releases of certified OSP Suite versions, best practices, and coordination of all community activities.

### Who decides what changes get made?

The **Management Team** is responsible for regular review, endorsement, and publication of the OSP development roadmap. They oversee and steer all activities, including certification of the software platform, models, parameter databases, and qualification processes. The **Sounding Board** advises on scientific and technological decisions.

For code contributions, changes go through GitHub pull requests and are reviewed before merging. The continuous development of the suite runs on GitHub and can be monitored by everyone in real time.

### What is AGAH and what is its relationship to OSP?

AGAH (Arbeitsgemeinschaft für Angewandte Humanpharmakologie e.V.) is the Association for Applied Human Pharmacology, a specialist medical-academic organization focused on exploratory medicinal product development and human pharmacological research. The OSP Management Team operates as a project group within AGAH, which provides the organizational umbrella for the project's governance.

### Where can I find the development roadmap?

The OSP development roadmap is maintained on GitHub: [github.com/Open-Systems-Pharmacology/Roadmap](https://github.com/Open-Systems-Pharmacology/Roadmap). The Management Team is responsible for its regular review and publication.

---

## 8. Software Engineering, Security & Quality

### How is code quality maintained?

The OSP Suite follows rigorous software engineering practices:

- **Continuous Integration (CI)** — Building of OSP libraries and setups is fully automated via integration of CI services (AppVeyor) with GitHub. The build environments are standardized and nobody except CI administrators can modify them.
- **Multi-layered testing** — Unit tests and integration tests are triggered with every software build. Slower integration/module/systems tests run periodically (e.g., nightly). Full testing and code coverage reports are publicly accessible for each build.
- **Code review** — Changes are submitted via GitHub pull requests and reviewed before being merged.
- **Static code analysis** — Code quality analysis tools (including static analysis and test coverage) run as part of the CI pipeline.

### How is the software validated?

Validation includes:

- A comprehensive library of test cases that grows with every newly released feature
- Comparison of simulation outputs against verified reference standards for specific combinations of compounds, organisms, and model options
- Automated tests across different software environments (operating systems, etc.)
- Testing of new features by scientific experts — creating simulation scenarios and comparing results with published study data
- The **Installation Validator** tool enables "1-Click" validation of an OSP Suite installation on any target computer

### Is the OSP Suite transparent?

Yes. The project is built on three core pillars:

- **Open Source** — All source code is publicly available on GitHub. Development can be monitored by everyone in real time.
- **Open Access** — High-quality software, models, and data sets are provided free of license costs.
- **Open Science** — The community jointly develops scientific concepts, applications, and best practices.

### Is the software qualified for regulatory use?

The OSP community places strong emphasis on qualification for regulatory acceptance. They establish fully transparent processes for qualification and software validation to certify compliance with regulatory standards. The **Qualification Framework** automates validation of modeling scenarios, and several qualification repositories for drug-drug interactions and pediatric applications have been published on GitHub.

The Management Team provides certification of platform versions, and the OSP Suite is qualified and accepted by the scientific community including regulatory agencies.

---

## 9. Advanced Topics

### What is the Qualification Framework?

The Qualification Framework enables automated validation of modeling scenarios supported by the OSP platform. It is used to verify results when releasing new versions of the OSP Suite. The workflow involves:

1. A **qualification plan** (stored in a GitHub repository) links models, data, and scenarios using PK-Sim project snapshots.
2. The **Qualification Runner** (stand-alone tool) processes the plan and exports project parts.
3. The **Reporting Engine** executes models in a validated environment and generates the final **qualification report** — including goodness-of-fit plots, residual plots, and visual predictive checks.

**Note:** The Qualification Framework and R packages are not included in the main OSP Suite installer and must be installed separately.

Documentation: [docs.open-systems-pharmacology.org — Qualification](https://docs.open-systems-pharmacology.org/shared-tools-and-example-workflows/qualification)

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
