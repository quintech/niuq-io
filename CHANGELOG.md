# Changelog
All feature changes for this project will be documented in this file.
At least a summary of significant changes made each day should be recorded during the last upload of the day.

Major version number (page completion number): Incremented when all features on a single page are completed.

Shared component revision number: Incremented when shared components, styles, images, or services are added, modified, or removed.

Minor version number: Incremented when new features are released for a single page that do not significantly affect the entire website.

Patch version number: Incremented when there are style or logic fixes on a page.

Please follow these rules when writing this file:
- Use conversational explanations.
- Each version corresponds to a chapter.
- The latest version should be on top, and the oldest at the bottom.
- Use the 'YYYY-MM-DD' format for all dates.
- Indicate the category using English. The following conventions should be followed:
  - 'Added' for new features
  - 'Changed' for feature changes
  - 'Deprecated' for features that are not recommended and will be removed in the future
  - 'Removed' for features that were previously not recommended and have now been removed
  - 'Fixed' for bug fixes
  - 'Security' for security-related bug fixes
  - 'View' for page style adjustments
  - 'Refactor' for refactoring

## 0.1.0.0 - 2021-12-23
### View
  1. Mobile and desktop Nav design
  2. Homepage
  3. Initialization page (IP detection screen)
  4. Footer
  5. News center
  6. News detail page
  7. Login screen
### Added
  1. Added React-Bootstrap package
  2. Added mdb-react-ui-kit package
  3. Added Redux package
  4. Added React-icons package for salary icons
  5. Added login and registration functionality
  6. Added Google login functionality
  
## 0.1.1.0 - 2022-3-10
### View
 1. Completed Google login screen
 2. User is displayed in the NAV bar after login
### Added
 1. Added account creation

## 0.1.2.0 - 2022-3-16
### View
1. After Google login, users can choose to fill in their information or cancel registration and fill it in later
2. Added About Us page
### Added
1. Added react-rainbow-components package for date selection
2. Added About route validation in React, added About route in Laravel

## 0.1.2.1 - 2022-3-17
### Fixed
1. Fixed error caused by Next Time button

## 0.1.3.0 - 2022-3-18
### View
1. Added user settings page

## 0.1.4.0 - 2022-3-24
### Added
1. Added automatic deployment with master branch

## 0.1.5.0.1 - 2022-6-6
### View
1. Added summary overview to news detail page
2. Modified the first API to display more data (modified database fields)
3. Displayed more data in the second API

## 0.1.5.1.2 - 2022-6-14
### View
1. Added third API to display overall score results on news detail page
2. Adjusted behavior when clicking on URLs in news detail page, they now open in a new tab
3. Adjusted logo sizes for all logos, updated all logos in the third API
4. Fixed news sorting in the news center

## 0.1.5.2.3 - 2022-6-16
### View
1. Added all news sections to the news center and implemented pagination

## 0.1.5.3.4 - 2022-6-16
### View
1. Modified the display of results in the third API
2. Changed the filter content in the overview of the second API

## 0.1.6.0.5 - 2022-7-05
### View
1. Unified the test and production sites to use HTTPS
2. Fixed other links in the footer

## 0.1.6.1.6 - 2022-7-05
### View
1. Modified HTTP content to HTTPS

## 0.1.6.2.7 - 2022-07-08
### View
1. Modified the Google login key ID in the configuration file

## 0.1.6.3.8 - 2022-07-08
### View
1. Added Google Analytics tracking

## 0.1.6.4.9 - 2022-07-08
### View
1. Added email subscription

## 0.1.6.4.9 - 2022-07-11
### View
1. Modified contact link

## 0.1.6.5.10 - 2022-07-12
### View
1. Hide score display

## 0.1.6.6.11 - 2022-07-12
### View
1. Fixed NO DATA display style

## 0.1.6.7.12 - 2022-07-12
### View
1. Modified frontend display (footer, partners)
2. Temporarily removed Google screen

## 0.1.6.8.13 - 2022-07-20
### Fixed
1. Optimized memory usage and reduced console errors
2. Removed counter when the screen changes, it no longer runs in the background

## 0.1.7.0.14 - 2022-07-20
### View
1. Added page icon
### Refactor
1. Refactored most popular section

## 0.1.7.1.15 - 2022-07-22
### View
1. Modified font and icon colors in the footer
2. Fixed button spacing in the footer

## 0.1.8.0.16 - 2022-08-15
### Changed
1. Changed project requirement to PHP 7.4
### Added
1. Added token sending for sharing events
2. Personal information page can now view transaction records

## 0.1.9.0.17 - 2022-08-20
### Changed
1. Removed API return log in the news center
### Fixed
1. Fixed bypassing IP restriction through a specific URL method

## 0.1.10.0.18 - 2022-08-21
### Fixed
1. Fixed NODATA error in the first API

## 0.1.11.0.19 - 2022-08-21
### Fixed
1. Fixed the way the second API retrieves summaries

## 0.1.12.0.20 - 2022-08-25
### Added
1. Added API functionality to calculate averages

## 0.1.13.0.21 - 2022-08-26
### Fixed
1. Fixed issues with API calculation

## 0.1.14.0.22 - 2022-08-29
### Fixed
1. Fixed API calculation issues
2. Changed Facebook URL

## 0.1.14.0.22 - 2022-08-29
### Fixed
1. Modified the layout of the score circles in the news center
