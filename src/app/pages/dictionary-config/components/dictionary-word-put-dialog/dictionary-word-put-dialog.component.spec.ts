import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryWordPutDialogComponent } from './dictionary-word-put-dialog.component';

describe('DictionaryWordPutDialogComponent', () => {
  let component: DictionaryWordPutDialogComponent;
  let fixture: ComponentFixture<DictionaryWordPutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryWordPutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryWordPutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
