import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagedetailComponent } from './packagedetail.component';

describe('PackagedetailComponent', () => {
  let component: PackagedetailComponent;
  let fixture: ComponentFixture<PackagedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
