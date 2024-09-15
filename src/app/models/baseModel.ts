export class BaseModel {
  id: string;
  createdDate: string;
  UpdatedDate: string;

  constructor(id: string, createdDate: string, UpdatedDate: string) {
    this.id = id;
    this.createdDate = createdDate;
    this.UpdatedDate = UpdatedDate;
  }
}
