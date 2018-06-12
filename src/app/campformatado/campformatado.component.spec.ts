import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampformatadoComponent } from './campformatado.component';

describe('CampformatadoComponent', () => {
  let component: CampformatadoComponent;
  let fixture: ComponentFixture<CampformatadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampformatadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampformatadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
