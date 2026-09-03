# AccessPoint — Accessible Information Portal
Yuva Intern Week 3: Enhancing User Experience with Accessibility

## Overview
AccessPoint is a blog/information-portal style webpage redesigned with accessibility and inclusive UX as core requirements.

## Files
- index.html — semantic page structure and accessible controls
- style.css — responsive layout, contrast-conscious styling and visible focus states
- script.js — mobile navigation, keyboard interaction and dynamic search status
- README.md — audit and implementation documentation

## Accessibility audit approach
The page was reviewed using browser accessibility checks and manual keyboard testing. The review focused on:
- semantic landmarks and heading hierarchy
- accessible names and labels
- keyboard reachability
- visible focus indicators
- responsive behavior
- contrast-conscious text/control styling
- dynamic status communication
- reduced-motion preferences

Recommended manual checks:
1. Open the page and press Tab repeatedly.
2. Confirm the skip link appears when focused.
3. Activate navigation with Enter/Space.
4. On mobile width, open the navigation using the menu button.
5. Press Escape to close the mobile menu.
6. Submit an empty search and verify the accessible error/status message.
7. Submit a search term and verify the live result message.
8. Resize the browser and verify there is no horizontal overflow.
9. Run Lighthouse Accessibility in Chrome DevTools for an automated check.

## Improvements and rationale
- Semantic header/nav/main/section/article/aside/footer landmarks improve page understanding.
- A skip link lets keyboard users bypass repeated navigation.
- Native buttons and links provide reliable keyboard behavior.
- aria-expanded communicates the mobile menu state.
- aria-label gives the navigation and menu control clear accessible names.
- role="search" identifies the search region.
- role="status" and aria-live announce dynamic search feedback.
- Strong :focus-visible styling makes keyboard position obvious.
- Text and controls use high-contrast, readable combinations.
- No important meaning is conveyed by color alone.
- Responsive CSS preserves usability on mobile devices.
- prefers-reduced-motion reduces unnecessary animation for users who request it.
- JavaScript checks required elements and fails gracefully if the expected DOM is incomplete.

## WCAG-oriented considerations
The implementation addresses common WCAG 2.x principles including:
- Perceivable: readable text, clear structure and contrast-conscious styling.
- Operable: keyboard navigation, skip link, visible focus and accessible controls.
- Understandable: predictable navigation, clear labels and useful feedback.
- Robust: semantic HTML and appropriate ARIA for dynamic states.

Automated tools should be used together with manual testing because automated accessibility checks cannot identify every usability issue.
