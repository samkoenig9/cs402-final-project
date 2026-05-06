# DodgeBall Boxing Game

**Authors:** Riordin Dupree, Sam Koenig, Parker Smith  
**Class:** CS 402 - Mobile App Development

---

## Overview

DodgeBall Boxing Game is a mobile fighting game inspired by arcade boxing games. The player selects an opponent from a fight list, enters a fight, attacks the enemy by tapping the opponent, and defends against incoming attacks using Guard or Duck.

The goal is to reduce the enemy's health to 0 before the player's health reaches 0.

The app is built with **React Native** and **Expo**.

---

## Main Features

- Fight Select screen with multiple opponents
- Optional Home Screen / title screen
- Real-time combat screen
- Player health and enemy health bars
- Tap-based player attacks
- Guard and Duck defense buttons
- Enemy attack warnings
- Idle, windup, and attack enemy states
- Win and loss screens
- Rematch and return-to-menu options
- Data-driven fight configuration using fight states and graph transitions

---

## How to Run the App

### Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- [Expo Go](https://expo.dev/client) app on your phone, or an iOS/Android simulator

### Setup

Download and extract the ZIP file. 

Open a terminal and move into extracted project folder.

Install dependencies: npm install

Start Expo server: npx expo start

If the app does not load correctly, clear the cache: npx expo start -c

If your phone cannot connect to the QR code, try tunnel mode: npx expo start --tunnel


## How to Use the App

1. Open the app through Expo Go or a simulator.
2. If the Home Screen is included, tap **FIGHT SELECT**.
3. Choose a fight from the Fight Select screen.
4. Tap **FIGHT!!!** to begin.
5. Tap the opponent to attack.
6. Watch for incoming attack warnings.
7. Hold **Guard** to block guard attacks.
8. Hold **Duck** to dodge duck attacks.
9. For "both" attacks, either Guard or Duck can defend.
10. Win by lowering the enemy's health to 0.
11. If defeated, choose **Rematch** or return to the menu.

---

## Fight System

The fight system uses a state-based structure. Each fight can define its own enemy behavior through data.

Each opponent can have:

- Idle state
- Windup state
- Attack state
- Guard attacks
- Duck attacks
- Both-type attacks
- Custom damage values
- Custom timing values
- Custom image sprites
- Custom graph transitions between states

This makes it easier to add new fights without rewriting the main combat screen.

---

## Known Limitations

- The app currently runs through Expo and is not published to an app store.
- High score saving is not implemented.
- Enemy animations are limited to images.
- Some balancing values may need adjustment.
- The app does not currently save long-term user progress.

---

## Testing

The app was tested using Expo Go. Testing included:

- Opening the app
- Navigating from the Home Screen to Fight Select
- Selecting fights
- Entering combat
- Attacking enemies
- Defending with Guard and Duck
- Testing "both" attacks
- Testing win and loss conditions
- Testing Rematch
- Returning to the fight menu
- Verifying enemy sprite changes during idle, windup, and attack states

---

## Asset Credits

Some enemy images were adapted from external GIF sources for use in this class project.

**Fight 2 - Boxer** enemy images adapted from:
> Tenor. "Boxing Woman GIF." Tenor, 16 Dec. 2024.  
> https://tenor.com/view/boxing-woman-pov-first-person-gif-14706033760261335031

**Fight 3 - Dodgeballer** enemy images adapted from:
> Tenor. "Dodgeball Movie GIF." Tenor, 2 Sept. 2019.  
> https://tenor.com/view/dodgeball-movie-white-goodman-ben-stiller-burn-gif-14926681

These assets are used for educational, non-commercial class project purposes.

---

## Notes

This project was built for **CS 402 Mobile App Development**. The main goal was to demonstrate mobile UI design, list-based navigation, state management, touch interaction, and real-time gameplay behavior in a React Native app.
