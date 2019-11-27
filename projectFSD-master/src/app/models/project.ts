import { Employee } from './employee';

export class Project {
    constructor(
       public  _id:string,
   public projectId: number,
    public name:string,
    public projectDesc:string,
    public startDate:Date,
    public endDate:Date,
    public stakeholders:string,
    public gitUrl:string,
    public manager:Employee,
    ) { }
}
