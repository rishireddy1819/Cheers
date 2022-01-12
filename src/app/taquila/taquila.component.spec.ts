import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaquilaComponent } from './taquila.component';

describe('TaquilaComponent', () => {
  let component: TaquilaComponent;
  let fixture: ComponentFixture<TaquilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaquilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaquilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
