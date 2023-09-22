import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryConfigComponent } from './dictionary-config.component';

describe('DictionaryConfigComponent', () => {
  let component: DictionaryConfigComponent;
  let fixture: ComponentFixture<DictionaryConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
