import { BaseModel } from "./baseModel";

export class CreateTeam extends BaseModel {
  teamId: number;
  teamName: string;
  teamLeadId?: string;

  constructor(
    id: string,
    createdDate: string,
    updatedDate: string,
    teamId: number,
    teamName: string,
    teamLeadId?: string
  ) {
    super(id, createdDate, updatedDate);

    this.teamId = teamId;
    this.teamName = teamName;
    this.teamLeadId = teamLeadId;
  }
}
