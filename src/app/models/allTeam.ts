import { BaseModel } from "./baseModel";

export class AllTeam  {
  id:string;
  teamId: number;
  teamName: string;
  teamLeadId?: string;

  constructor(
    id:string,
    teamId: number,
    teamName: string,
    teamLeadId?: string
  ) {
    this.id=id
    this.teamId = teamId;
    this.teamName = teamName;
    this.teamLeadId = teamLeadId;
  }
}
