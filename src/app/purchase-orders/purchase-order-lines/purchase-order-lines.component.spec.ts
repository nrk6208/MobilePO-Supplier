import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchaseOrderLinesComponent } from './purchase-order-lines.component';


describe('PurchaseOrderLinesComponent', () => {
  let component: PurchaseOrderLinesComponent;
  let fixture: ComponentFixture<PurchaseOrderLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
