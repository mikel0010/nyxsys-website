import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMediaNetworkComponent } from './extended-media-network.component';

describe('ExtendedMediaNetworkComponent', () => {
  let component: ExtendedMediaNetworkComponent;
  let fixture: ComponentFixture<ExtendedMediaNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedMediaNetworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendedMediaNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
