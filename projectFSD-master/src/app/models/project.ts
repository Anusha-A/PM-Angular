import { Employee } from './employee';

export class Project {
    constructor(
       public _id:string,
        public projectId: number,
        public name:string,
        
        public budget:number,
        public startDate:Date,
        public endDate:Date,
       
        public githubLink:string,
        public managerId:Employee
    ) { }
}
