document.addEventListener('DOMContentLoaded', function () {

    const exerciseLogs = [];
// const fitnessTracker = [
        //     {name: "Interval Training", time: 40 },
        //     {name: "Squats", time: 20 },
        //     {name: "Bent-Over-Row", time: 15 },
        //     {name: "Upright Row", time: 15 },
        
        //     ];
        //     const fitnessTimes = [20, 30, 50];
        

// Class representing a workout entry
    class WorkoutEntry {
        constructor(type, name, duration){
            this.type = type;
            this.name = name;
            this.duration = duration;
        }
    }

// Function to calculate Total Workouts Completed
    function calculateTotalWorkouts(){
        return exerciseLogs.length;
    }

// Function to calculate total duration of workouts
    function calculateTotalDuration(){
        let totalDuration = 0;
        exerciseLogs.forEach(log => {
            totalDuration += log.duration;
        });
    }

// Function adding a new workout
    function addNewWorkout(){
        const exerciseType = document.getElementById('exercise-type').value;
        const exerciseName = document.getElementById('exercise-name').value;
        const exerciseDuration = document.getElementById('exercise-duration').value;
        
// Create a new workout entry
        const newWorkout = new WorkoutEntry(exerciseType, exerciseName, exerciseDuration);

// Append the new workout entry to workout log
        const workoutLog = document.getElementById('workout-log');
        const workoutEntryDiv = document.createElement('div');
        workoutEntryDiv.textContent = `Type: ${newWorkout.type}, Name: ${newWorkout.name}, Duration: ${newWorkout.duration} minutes`;
        workoutLog.appendChild(workoutEntryDiv);

        document.getElementById('exercise-type').value = '';
        document.getElementById('exercise-name').value = '';
        document.getElementById('exercise-duration').value = '';
    }

// Function to log past workout
    function logPastWorkout(){
        const exerciseName = document.getElementById('past-exercise-name').value;
        const sets = document.getElementById('sets').value;
        const reps = document.getElementById('reps').value;

// Create a new past workout entry
        const pastWorkoutEntry = {
            name: exerciseName,
            sets: sets,
            reps: reps
        };

// Append past workout log
        const workoutLog = document.getElementById('workout-log');
        const pastWorkoutEntryDiv = document.createElement('div');
        pastWorkoutEntryDiv.textContent = `Exercise: ${pastWorkoutEntry.name}, Sets: ${pastWorkoutEntry.sets}, Reps: ${pastWorkoutEntry.reps}`;
        workoutLog.appendChild(pastWorkoutEntryDiv);
        
        document.getElementById('past-exercise-name').value = '';
        document.getElementById('sets').value = '';
        document.getElementById('reps').value = '';
    }

});

