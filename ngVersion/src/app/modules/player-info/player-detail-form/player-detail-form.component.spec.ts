import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailFormComponent } from './player-detail-form.component';

describe('PlayerDetailFormComponent', () => {
  let component: PlayerDetailFormComponent;
  let fixture: ComponentFixture<PlayerDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
