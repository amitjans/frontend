import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptdataComponent } from './scriptdata.component';

describe('ScriptdataComponent', () => {
  let component: ScriptdataComponent;
  let fixture: ComponentFixture<ScriptdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
