import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidePanelLayoutComponent } from './side-panel-layout.component';

describe('SidePanelLayoutComponent', () => {
  let component: SidePanelLayoutComponent;
  let fixture: ComponentFixture<SidePanelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidePanelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
