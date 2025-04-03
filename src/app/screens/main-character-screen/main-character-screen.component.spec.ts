import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCharacterScreenComponent } from './main-character-screen.component';

describe('MainCharacterScreenComponent', () => {
  let component: MainCharacterScreenComponent;
  let fixture: ComponentFixture<MainCharacterScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCharacterScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCharacterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
