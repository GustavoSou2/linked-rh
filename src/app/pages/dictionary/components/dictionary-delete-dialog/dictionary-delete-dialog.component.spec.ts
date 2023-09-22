import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryDeleteDialogComponent } from './dictionary-delete-dialog.component';

describe('DictionaryDeleteDialogComponent', () => {
  let component: DictionaryDeleteDialogComponent;
  let fixture: ComponentFixture<DictionaryDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
