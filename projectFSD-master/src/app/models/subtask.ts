export class Subtask {
    constructor(

        private subTaskId: number,
        private subTaskTitle: string,
        private subTaskDescription: string,
        private startDate: Date,
        private dueDate: Date,
        private progressPercentage: number

    ) {}
}
