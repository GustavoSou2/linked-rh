import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryPutDialogComponent } from './dictionary-put-dialog.component';

describe('DictionaryPutDialogComponent', () => {
  let component: DictionaryPutDialogComponent;
  let fixture: ComponentFixture<DictionaryPutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryPutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryPutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
