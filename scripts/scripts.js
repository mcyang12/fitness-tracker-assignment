const exerciseLogs = [];
const fitnessTracker = [
    {name: "Interval Training", time: 40 },
    {name: "Squats", time: 20 },
    {name: "Bent-Over-Row", time: 15 },
    {name: "Upright Row", time: 15 },

    ];
    const fitnessTimes = [20, 30, 50];

//Task 1: Function to calculate Total Workouts Completed
    function calculateTotalWorkouts(){
        return exerciseLogs.length;
    }

//Task 2: Function to calculate total duration of workouts
    function calculateTotalDuration(){
        let totalDuration = 0;
        exerciseLogs.forEach(log => {
            totalDuration += log.duration;
        });
    }

//Task 3: Class representing a workout
    class Workout {
        constructor(type, name, duration){
            this.type = type;
            this.name = name;
            this.duration = duration;
        }
        displayInfo(){
            return `Type: ${this.type}, Name: ${this.name}, Duration: ${this.duration} minutes`;
        }
    }


//Task 5: Function add A New Workout
    function addNewWorkout(){
        const exerciseType = document.getElementById('exercise-type').value;
        const exerciseName = document.getElementById('exercise-name').value;
        const duration = document.getElementById('duration').value;
    }