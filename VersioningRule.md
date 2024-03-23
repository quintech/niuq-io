## Angular Versioning Rules

Major version number (page completion number): Increment when all features of a single page are completed.
Common component revision number: Increment when adding, modifying, or removing common components, styles, images, services.
Minor version number: Increment when releasing new features for a single page, but it does not significantly affect the entire website.
Revision version number: Increment when page style, logic is corrected.

When a version number is advanced, CHANGELOG.md needs to be updated synchronously with the version update content.

Uniformly write CHANGELOG.md in master.


## Git comment standards
The status is divided into the following types:
1.  feat: Add/modify features (feature).
2.  del: Remove features or files.
3.  fix: Fix bugs (bug fix).
4.  docs: Documentation.
5.  style: Format (changes that do not affect code execution such as white-space, formatting, missing semi colons, etc).
6.  refactor: Refactoring (code changes that are neither adding features nor fixing bugs).
7.  perf: Improve performance (A code change that improves performance).
8.  test: Add tests (when adding missing tests).
9.  chore: Changes to the build process or auxiliary tools (maintain).
10. revert: Revert to a previous commit e.g., revert: type(scope): subject (revert version: xxxx).
11. tmp: Temporary, used for synchronizing unfinished code between different computers.

The git comment content format is as follows:

"Status" (required, choose the most appropriate status from the above): "Subject" (required, a brief description of this comment, do not exceed 50 words, no period at the end).