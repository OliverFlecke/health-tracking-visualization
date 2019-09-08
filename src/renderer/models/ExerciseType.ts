enum ExerciseType {
    Unknown = 'Unknown',
    Other = 'Other',
    Walking = 'Walking',
    Running = 'Running',
    Cycling = 'Cycling',
    RowingMachine = 'Rowing machine'
}

export function toExerciseType(type: Number | String): ExerciseType {
    switch (Number(type)) {
        case 0:
            return ExerciseType.Other;
        case 1001:
            return ExerciseType.Walking;
        case 1002:
            return ExerciseType.Running;
        case 11007:
            return ExerciseType.Cycling;
        case 15004:
            return ExerciseType.RowingMachine;

        default:
            return ExerciseType.Unknown;
    }
}

export function fromString(type: string): ExerciseType {
    switch (type) {
        case 'Unknown':
            return ExerciseType.Unknown;
        case 'Other':
            return ExerciseType.Other;
        case 'Walking':
            return ExerciseType.Walking;
        case 'Running':
            return ExerciseType.Running;
        case 'Cycling':
            return ExerciseType.Cycling;
        case 'RowingMachine':
            return ExerciseType.RowingMachine;

        default:
            return ExerciseType.Unknown;
    }
}

export default ExerciseType;
