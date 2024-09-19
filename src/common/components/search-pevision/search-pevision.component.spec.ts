import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPevisionComponent } from './search-pevision.component';

describe('SearchPevisionComponent', () => {
  let component: SearchPevisionComponent;
  let fixture: ComponentFixture<SearchPevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPevisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});