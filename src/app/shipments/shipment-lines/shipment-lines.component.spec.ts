import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentLinesComponent } from './shipment-lines.component';


describe('ShipmentLinesComponent', () => {
  let component: ShipmentLinesComponent;
  let fixture: ComponentFixture<ShipmentLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
