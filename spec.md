# Specification

## Summary
**Goal:** Correct the messaging throughout the app to accurately reflect the one-date context — the tone should be sweet and hopeful ("please come back 🥺"), with no implications of a longer relationship, mistakes, or apologies.

**Planned changes:**
- Update `MainCard` message to reflect the one-date context, prominently featuring the 🥺 emoji and asking Saachi to please come back, with no language implying wrongdoing or a longer relationship
- Update `CelebrationScreen` (shown after clicking "Yes") to be joyful and forward-looking, celebrating the prospect of a second date (e.g. "Yay! Can't wait for our next date! 🥺") with no "making things right" language
- Audit and update all `RunawayButton` quips so none imply a relationship, past mistake, or apology — keeping them playful and witty for the one-date scenario (at least 10 quips)

**User-visible outcome:** The app clearly and sincerely asks Saachi to come back after their first date, with a sweet hopeful tone throughout — from the main message to the celebration screen to the runaway button quips — while preserving the Slytherin/Harry Potter visual theme.
