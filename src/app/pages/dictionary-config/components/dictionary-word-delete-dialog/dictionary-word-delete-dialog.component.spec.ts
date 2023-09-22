import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryWordDeleteDialogComponent } from './dictionary-word-delete-dialog.component';

describe('DictionaryWordDeleteDialogComponent', () => {
  let component: DictionaryWordDeleteDialogComponent;
  let fixture: ComponentFixture<DictionaryWordDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryWordDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryWordDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
