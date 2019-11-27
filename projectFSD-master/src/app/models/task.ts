import { Project } from './project';

export class Task {
    constructor(
        public taskId: number,
        public taskTitle: String,
        public taskDescription: String,
        public startDate: Date,
        public dueDate: Date,
        public subTaskCount: number,
        public progress: number,
        public projectId: Project
    ) {}

}


