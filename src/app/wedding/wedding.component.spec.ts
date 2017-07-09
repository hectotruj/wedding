import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingComponent } from './wedding.component';

describe('WeddingComponent', () => {
  let component: WeddingComponent;
  let fixture: ComponentFixture<WeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
