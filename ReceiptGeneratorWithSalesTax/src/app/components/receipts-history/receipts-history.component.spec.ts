import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiptsHistoryComponent } from './receipts-history.component';
import { HttpClientModule } from '@angular/common/http';

describe('ReceiptsHistoryComponent', () => {
  let component: ReceiptsHistoryComponent;
  let fixture: ComponentFixture<ReceiptsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ ReceiptsHistoryComponent ],
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
