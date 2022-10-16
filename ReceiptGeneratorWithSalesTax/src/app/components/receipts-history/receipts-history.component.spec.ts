import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiptsHistoryComponent } from './receipts-history.component';

describe('ReceiptsHistoryComponent', () => {
  let component: ReceiptsHistoryComponent;
  let fixture: ComponentFixture<ReceiptsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
