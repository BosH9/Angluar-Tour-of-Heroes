import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyIpComponent } from './show-my-ip.component';

describe('ShowMyIpComponent', () => {
  let component: ShowMyIpComponent;
  let fixture: ComponentFixture<ShowMyIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
