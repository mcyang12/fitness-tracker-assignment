
# Personal Fitness Tracker Assignment

**Objective:** Develop the foundational structure and styling for the Fitness Tracker System. This is an _in-class_ assignment.

### Part 1: Create the Base Layout with HTML and CSS

**Objective:** Develop the foundational structure and styling for the Fitness Tracker System.

1. **HTML Structure:**
   - Maintain the basic document structure with `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` elements.
   - In `<head>`, link to a CSS file named `stylesheet.css`.
   - In `<body>`, structure the content within a main container div. Include:
     - A header or logo container for the fitness tracker branding.
     - An `<h1>` title, e.g., "Personal Fitness Tracker".
     - Sections for different functionalities: a **_daily workout summary_** section, a section for **_adding new workouts or exercises_**, and a section for **_viewing past workout logs_**.
     - The section to create a new exercise log must have at least three inputs.
      - **Tip:** Input elements for new exercise logs might include dropdowns for exercise type, text inputs for exercise names, and number inputs for sets, reps, or duration.

2. **CSS Styling:**
   - Use vibrant, energetic colors suitable for a fitness application, adjusting the background, font colors, and elements like buttons and inputs to match this new theme. **_Use at least two colors_**.

### Part 2: Implement Base Functionality with JavaScript

**Objective:** Add functionality to handle workout data, form interactions, and dynamically update the webpage with user input.

1. **Data Structures:**
   - Define an array to store exercise logs, with each session being an object that includes properties for the exercise type, name, and performance metrics (e.g., sets, reps, duration).
Stretch Goal: 
   - Optionally, include a structure to track daily or weekly goals and accomplishments.

2. **Workout Summary Calculation:**
   - Create at least two functions to calculate summaries from the exercise log data, such as total workouts completed, total duration, or calories burned (if applicable). Keep in mind these numbers will later need to be displayed.

3. **Workout Class:**
   - Define a `Workout` class with properties for exercise details and a method to display a summary of the workout session. This will be used to log exercise sessions.

### Part 3: Dynamic Content and DOM Manipulation

**Objective:** Enable the Fitness Tracker to dynamically display workout summaries, accept new workout data, and show historical workout logs.

1. **Displaying Workout Summaries:**
   - On page load, show a summary of recent workouts or the day's accomplishments in a dedicated section.

2. **Adding New Workouts:**
   - Attach an event listener to an "Add Workout" button. This button will collect data from the input fields, create a new `Workout` instance, add it to the workouts array, and refresh the display to include the new workout.

3. **Viewing Workout Logs:**
   - Implement a function to list all stored workouts in the workout log section, displaying key metrics and details for each.
