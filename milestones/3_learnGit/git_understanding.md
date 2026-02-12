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

---
# Advanced Git Commands
## Research
### Git commands
- git checkout main --<file> - restores a specific file from main without affecting other changes
- git cherry-pick <commit> - apply a specific commit from another branch without merging the whole branch
- git log - view commit history and understand how changes evolved
- git blame <file> - see who lsat modified each line in a file and when

## Tasks
### Experiment with each command in my test repo:
1. Modify a file -  I added another function that has the purpose of subtracting two integers. As shown in the image below, when I entered "git status" theres a prompt that main.cpp was modifed
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/75654af5-e6f9-4bea-9bcb-d9a8be83f622" />
  
2. Restore using checkout - I restored the original code by typing in "git checkout -- main.cpp" as shown in the image below. When I entered "git status", the prompt that says that the main.cpp was modified is already gone. 
<img width="1920" height="1020" alt="Screenshot 2026-02-12 121048" src="https://github.com/user-attachments/assets/9a1737af-2751-4b8f-8d4f-986987196a8c" />

3. Commit changes on a branch and cherry pick one commit into main. - I made a change on another branch by styling its display outputs. After that I went back to the main branch and cherry picked the commit I made from the other branch to apply its changes in my main branch. Refer to the image below.
<img width="727" height="384" alt="image" src="https://github.com/user-attachments/assets/b4593b17-046b-4f89-a027-f497c1d5935f" />

4. Use git log - I used git log to access and view the commit history. Refer to the image below.
<img width="632" height="1007" alt="image" src="https://github.com/user-attachments/assets/651bdf5b-ea4d-4e9b-b809-4daf0eb51067" />

5. Use git blame - I used git blame to identify who modified and other changes on a specific file. Refer to the image below.
<img width="984" height="590" alt="image" src="https://github.com/user-attachments/assets/e1c2ab71-f30f-484f-85e6-0856515101f8" />

## Reflections
### What does each command do?
Git checkout main -- <file> restores a specific file without affecting other changes. Git cherry-pick <commit>, updates the main branch with a selected commit from another existing branch in your repository. Git log allows developers to view history and changes made in the branch. Finally, git blame <File> allows developer to identify who modified and the changes made on a specific file. 

### When would you use it in a real project?
These commands are especially useful in long-running projects with multiple developers:  
- `git checkout` can restore files accidentally modified.  
- `git cherry-pick` allows you to pick important bug fixes or features from other branches without merging everything.  
- `git log` helps understand the history of changes for debugging or planning new work.  
- `git blame` is useful for tracing the origin of bugs or understanding why a particular change was made.

### What surprised you while testing these commands?
I was surprised by how powerful `git cherry-pick` is. It lets you bring in a single commit from another branch without merging the entire branch, which is very handy for managing bug fixes or updates selectively.

---
# Merge Conflicts and Conflict Resolution

## Research
### Causes of merge conflicts in Git
Merge conflicts occur when Git cannot automatically reconcile differences between branches. Common causes include:
- **Concurrent edits to the same line of a file**: Two developers modify the same line in different branches.  
- **Changes in overlapping regions**: One branch deletes a line or section that another branch modifies.  
- **File renames or moves**: A file is renamed or moved in one branch while being modified in another.  
- **Binary file changes**: Git cannot automatically merge changes to binary files like images or compiled files.  
- **Complex merges with multiple branches**: When many branches with overlapping changes are merged at once, conflicts are more likely.

Merge conflicts require manual intervention to decide which changes to keep before completing the merge.

## Tasks
1. Create a merge conflict in your test repo by creating a branch and editing a file, switching back to `main`.
I created a merge conflict by changing a code my test_repo branch that is very different from the main branch. I modified the same line from different branches that cannot be easily mered without manually checking it. Please refer to the image below. 
<img width="1912" height="458" alt="image" src="https://github.com/user-attachments/assets/0a65afca-d3dc-4af2-b14d-341fb1aad532" />

2. Switch back to main and make a conflicting edit in the same file.
I went back to my IDE to resolve the conflict and accepted the incoming change rather than the current commit. Refer to the image below.
<img width="1915" height="1018" alt="image" src="https://github.com/user-attachments/assets/e685958b-7aa4-4071-91ee-d0a0460509c6" />

3. Merge the branch back into main
After resolving the conflict, I merged the updated code into my main branch. Please refer to the image below.
<img width="1268" height="236" alt="image" src="https://github.com/user-attachments/assets/e3503ac9-3bdd-4d7a-a6b6-682c664fdb6a" />

## Reflection
### What caused the conflict?
The reason of the conflict is that I changed a similar code in the same line in both the main branch and my test branch, hence creating a merge conflict when I tried to merge my commit from my test branch into my main branch. 

### How did you resolve it?
I have to manually resolve it my IDE by reviewing the changes and choose which commit to accept. 

### What did you learn?
I learned that Git protects your code by preventing automatic merges when changes conflict, and it provides clear markers so you can safely resolve conflicts without losing work.

---
# Branching and Team Collaboration
## Task
1. Create a new branch in your Git desktop client
I have already performed this already in different projects. Including this repository.

Please refer to this repo: https://github.com/vaebelle/bea-belle-focusbear-frontend-intern

Proof: <img width="1919" height="1028" alt="image" src="https://github.com/user-attachments/assets/10534909-4ba6-462d-b9e5-fab89f29ed73" />

2. Make a small change in you repo and commit it to the new branch.
I have tihs experience already and have performed it a couple of times. Including this repository.

Please refer to this repo: https://github.com/vaebelle/test-repo/tree/test_branch

Proof: <img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/53dd84cc-4703-4834-885a-f34d0db75d17" />

3. Switch back to main and check your chanes are not there.
I have tihs experience already and have performed it a couple of times. Including this repository.

Please refer to this repo: https://github.com/vaebelle/bea-belle-focusbear-frontend-intern
Proof:
milestone-3-learn-git branch have changes that have are not in the main branch. (the branch is 5 commits ahead of main)
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/d22928c6-771a-40a6-80b4-8ab360dec680" />

## Reflection
### Why is pushing directly to main problematic?
Pushing new commits to main directly is problematic because there might still be issues with the new code changes that are directly added to the working and developed codebase in the main branch. This would create conflicts and bugs would be a hassle to track. 

### How do branches help with reviewing code?
It helps developers assess if the code is ready for deployment and has no bugs/issues. 

### what happens if two people edit the same file on different branches?
There would be no conflict at all since they are working on the different branches. Their code changes will not affect each other. 











