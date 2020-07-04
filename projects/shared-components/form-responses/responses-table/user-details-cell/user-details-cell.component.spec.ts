import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsCellComponent } from './user-details-cell.component';

describe('UserDetailsCellComponent', () => {
  let component: UserDetailsCellComponent;
  let fixture: ComponentFixture<UserDetailsCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
