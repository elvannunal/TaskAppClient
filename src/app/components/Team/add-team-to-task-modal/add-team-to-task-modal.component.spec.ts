import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamToTaskModalComponent } from './add-team-to-task-modal.component';

describe('AddTeamToTaskModalComponent', () => {
  let component: AddTeamToTaskModalComponent;
  let fixture: ComponentFixture<AddTeamToTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTeamToTaskModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamToTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
