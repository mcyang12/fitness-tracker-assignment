const summary = [];
const fitnessTracker = [
    {name: "Interval Training", time: 40 },
    {name: "Squats", time: 20 },
    {name: "Bent-Over-Row", time: 15 },
    {name: "Upright Row", time: 15 },

    ];
    const fitnessTimes = [20, 30, 50];

    //Estimated Fitness times for Task 1

//Task 1: Calculate Total Fitness Times
    function calculateTotalTimes(time){
        return time.reduce((total, time) => total + time, 0);
    };
    //returning the times less or greater than the listed times above

//Task 2: Filter Old Workout Class
    function filterOldClasses(workouts){
        return filterOldClasses.filter(workoutClass => workoutClass.time > 0);
    }
    //filtering out old workout classes to incorporate new workout classes

//Task 3: Workout Exercise Class
    class WorkoutExercise{
        constructor (workoutName, workoutType){
            this.workoutNamename = workoutName;
            this.workoutType = workoutType;
        }
        displayInfo(){
            return `Workout Name: ${this.workme} | Workout Type: ${this.workoutType}`;

        }
    }

//Task 4: Additional New Workout Class
    class AdditionalNewWorkout extends WorkoutExercise{
        constructor (workoutNameame, workoutType, )
    }
