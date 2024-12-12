import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipperLoadingComponent } from './snipper-loading.component';

describe('SnipperLoadingComponent', () => {
  let component: SnipperLoadingComponent;
  let fixture: ComponentFixture<SnipperLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnipperLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnipperLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
