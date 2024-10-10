import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteTaskModalComponent } from './update-delete-task-modal.component';

describe('UpdateDeleteTaskModalComponent', () => {
  let component: UpdateDeleteTaskModalComponent;
  let fixture: ComponentFixture<UpdateDeleteTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDeleteTaskModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
