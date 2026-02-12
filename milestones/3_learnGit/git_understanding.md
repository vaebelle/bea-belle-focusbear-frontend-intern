# Pull Request

## Research

### What is pull request and why is it used?


## Tasks
1. Create a new branch - completed
2. make changes and push the branch - completed
3. open a pull request - completed

Please refer to this pull request done on a previous project development as verification my tasks 1, 2, and 3 are completed: https://github.com/vaebelle/Course-Management-System/pull/23

related repository: https://github.com/vaebelle/Course-Management-System.git

4. Review an existing PR in a public open-source repo

proof: <img width="1920" height="1032" alt="Screenshot 2026-02-12 010751" src="https://github.com/user-attachments/assets/b445a465-6af4-4ae7-8172-68b237f60f9b" />

## Reflections

### Why are PRs important in a team workflow?
Pull requests (PRs) are important because they create a structured way for team members to review changes before they are merged. This would avoid merging codes that are still faulty into the main branch. 

### What makes a well-structured PR?
A well-structured PR is contains descriptive title and descriptive details of the different modifications in the code. It must me clear and focused for easy review and correct documentation. 

### What did you learn from reviewing an open-source PR?
Reviewing an open-source PR showed me how important clarity and communication are in collaborative coding. I learned how developers justify their decisions, document their changes, and respond to feedback. 

---
# Git Bisect
Git Bisect is a command that helps developers determine which exact commit introduced the bug. This works by performing a binary search through commit history and automatically narrowing the search range. 

## Test Scenario
test repo: https://github.com/vaebelle/test-repo

In this test, I created a simple code that contains basic mathematical algorithms.

Commits I did during the test:
<img width="1920" height="1032" alt="Screenshot 2026-02-12 110047" src="https://github.com/user-attachments/assets/cdef5074-6f7e-4f33-88fe-287a89880b99" />

As a test, I introduced the bug in one my commits such as changing the plus sign into a minus sign in the addition function I coded.
Commit that contains the bug: https://github.com/vaebelle/test-repo/commit/b8458529e7c1d592f231b57ff38a1c5e89cd9fed

After deliberately adding a bug, I tested out the git bisect command to track down the commit that caused the issue.
documentation:
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/95d84b20-0a33-4c8f-b2f2-68a170c96ec3" />

During this process, each commit were verified starting from the good commit to analyze what commit contains the issue. At the end, it was determined. 

## Reflections

### What does git bisect do?
Git bisect is a debugging tool that helps you find the exact commit that introduced a bug. It starts off by marking a known commmit that is good and Git then guides you through testing commits until the problme is found. 

### When would you use it in a real-world debugging situation?
I would use git bisect when I am unclear of which commit that was changed involves the bug, especially in projects that have a lot of commits already. Instead of blindly guessing which commit has the issue, I can systematically narrow down the issue. 

### How does it compare to manually reviewing commits?
Compared to manually reviewing commits, git bisect is much faster, automatd, and more structured. Manual review can be time-consuming and error-prone.

---
# Commit Messages
## Research
### Best Practices for writing commit messages
Good commit messages help developers understand the history of changes, provide context for decisions, and make collaboration easier for current and future team members.

#### General Guidelines
- Be clear and concise so others can quickly understand the change.
- Explain why the change was made, not just what changed.
- Write messages with future readers in mind.

#### Structure
- Use a short subject line that summarizes the change.
- Write the subject in imperative mood (for example, “Add login validation”).
- Keep the subject line brief and avoid unnecessary punctuation.
- Add a body only when more explanation is needed.
- Format longer descriptions into readable lines.

#### Content Tips
- Keep each commit focused on a single logical change.
- Be specific and avoid vague messages.
- Reference related issues or tickets when applicable.

#### Conventions
- Follow a consistent commit message format within your team.
- Consider using structured conventions (such as prefixes like feat, fix, docs) for clarity and organization.

references: 
- https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/
- https://hashnode.com/post/which-commit-message-convention-do-you-use-at-work-ck3e4jbdd00zyo4s1h7mc7e0g#comments-list

## Tasks
### Explore open-source Github project
reference used: https://github.com/facebook/react/commits/main/

The commit messages found in the repository link I referenced above show good way of writing commit messages since these follow guidelines like clarity, scope tagging, and linking to work tracking as shown in figure 1. 

Figure 1:
<img width="1234" height="552" alt="image" src="https://github.com/user-attachments/assets/1542f986-1033-47eb-bac7-c4d6d732ae62" />

### Making three commits in my repo with different commit message styles.
Attached are images that shows different commit message styles I have done in my past project developments. 
Figure 2: Vague Commit Message
<img width="1305" height="110" alt="image" src="https://github.com/user-attachments/assets/06c1e04a-1c96-4680-aaa9-19728a7ebe34" />

Figure 3: Overly detailed commit message
<img width="1309" height="540" alt="image" src="https://github.com/user-attachments/assets/8252b21f-c63e-4cdf-ba3a-f444dc95260c" />

Figure 4: Well-structured commit message
<img width="1917" height="777" alt="image" src="https://github.com/user-attachments/assets/bfebd009-a91b-41ce-87a3-80e6d2f0bf75" />

## Reflections
### What makes a good commit message?
A good commit message must be concise and specific; addressing the major changes in the code and identifying issues resolved. 

### How does a clear commit message help in team collaboration?
A clear commit message allows team to understand the changes going on with the code. It helps them stay aligned with the task and reduce confusion on the changes done by their other teammates. 

### How can poor commit messages cause issues later?
Poor commit messages is equivalent to poor documentation of the codebase. If there are poor commit messages, it would cause misunderstandings and conflicts which would then compromise the group's progress. 




