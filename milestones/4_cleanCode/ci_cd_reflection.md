# Static Analysis Checks in CI/CD

## Research

### What is CI/CD and why is it used in software development?
CI, referred to as Continuous Integration, is an automation of integrating code changes into an existing codebase. What happens is that in every commit, an automated system builds the code and performs unit testing. If the code works, it will be merged into the codebase and if not, the commit will be rejected. 

CD, referred to as Continuous Deployment, is the next process after CI where the code is automatically deployed to production if all automated tests are passed after extensive integration and load tests are conducted. 

## Tasks

1. Set up a CI workflow that runs Markdown linting and spell checks on PRs in repo.  
   Refer to the image below for the setting up of CI workflow.  

   ![image](https://github.com/user-attachments/assets/193e0aef-5a5f-4c14-b154-9f3d47f1927c)

2. Experiment with Git Hooks (e.g. Husky) to enforce linting before commits.  
   I installed Husk to enforce linting before commits. Please refer to the image below.

   ![image](https://github.com/user-attachments/assets/1133e6e4-825d-4be4-ae0d-2ccf180a732f)

   I also tested it by creating a test markdown file with incorrectly spelled words. Please refer to the image below.

   ![image](https://github.com/user-attachments/assets/727ddc8c-ef7b-4174-8c9d-06fdf910f86d)

   When I tried committing it, it blocks my commit due to the misspelled words.

   ![image](https://github.com/user-attachments/assets/56e9fd3b-1349-46ae-90cf-a9f2ee56deb8)

3. Open a test PR in one of my repositories and review the automated checks.  
   I have tested it in one of my PR and encountered an error. I have 1 check failed due to markdown linting that I have to change, hence, stopping me from merging the PR without fixing the errors. Please refer to the image below.

   ![image](https://github.com/user-attachments/assets/39a21064-b981-4b70-9256-c6a79fd38a3f)

   In order to fix this issue, I have to format my markdown files properly to avoid flagging my PR as unacceptable. 

4. Push your CI/CD configuration to your repo.  
   I have done this already. Please check the following links as reference:  
   - https://github.com/vaebelle/bea-belle-focusbear-frontend-intern/tree/main/.github/workflows  
   - https://github.com/vaebelle/bea-belle-focusbear-frontend-intern/tree/main/.husky

   ![image](https://github.com/user-attachments/assets/82ab5b6f-7285-4029-ab4f-f8636ec97e7f)

## Reflection

### What is the purpose of CI/CD?
The purpose of CI/CD is to automate the integration of code changes into the main codebase (Continuous Integration) and automate deployment after tests and checks pass (Continuous Delivery/Continuous Deployment). This ensures that new code is tested, integrated, and delivered consistently and reliably.

### How does automating style checks improve project quality?
Automating style checks ensures that all code follows consistent formatting and best practices. This makes the codebase easier to read, maintain, and review, reduces bugs caused by inconsistent code, and saves time that would otherwise be spent on manual code review.

### What are some challenges with enforcing checks in CI/CD?
Challenges include:
- Configuring the pipeline correctly to match project needs.
- Balancing strict checks with developer productivity; too many checks can slow down workflow.
- Managing dependencies and environment differences that may cause false failures.
- Ensuring the team understands and follows the enforced rules consistently.

### How do CI/CD pipelines differ between small projects and large teams?
In small projects, CI/CD pipelines are usually simpler, with basic automated tests and deployment steps. Large teams often have more complex pipelines, including multiple stages, parallel testing, automated code reviews, security scans, and deployment to multiple environments. Larger pipelines help maintain quality and coordination across many developers.





