import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazicStringComponent } from './mazic-string.component';

describe('MazicStringComponent', () => {
  let component: MazicStringComponent;
  let fixture: ComponentFixture<MazicStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazicStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazicStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
