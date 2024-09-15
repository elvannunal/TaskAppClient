import { BaseModel } from "./baseModel";

export class AllTeam  {
  teamId: number;
  teamName: string;
  teamLeadId?: string;

  constructor(
    teamId: number,
    teamName: string,
    teamLeadId?: string
  ) {
    this.teamId = teamId;
    this.teamName = teamName;
    this.teamLeadId = teamLeadId;
  }
}
