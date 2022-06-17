import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxFilhoComponent } from './redux-filho.component';

describe('ReduxFilhoComponent', () => {
  let component: ReduxFilhoComponent;
  let fixture: ComponentFixture<ReduxFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduxFilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduxFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
