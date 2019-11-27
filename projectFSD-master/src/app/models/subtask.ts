export class Subtask {
    constructor(

        private subTaskId: number,
        private subTaskTitle: String,
        private subTaskDescription: String,
        private startDate: Date,
        private dueDate: Date,
        private progressPercentage: number

    ) {}
}
