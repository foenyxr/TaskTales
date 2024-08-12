import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaComponent } from './gacha.component';

describe('GachaComponent', () => {
  let component: GachaComponent;
  let fixture: ComponentFixture<GachaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GachaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
