import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  const menuCtrl = document.querySelector('ion-menu-controller');

  function openFirst() {
    menuCtrl.enable(true, 'first');
    menuCtrl.open('first');
  }

  function openEnd() {
    menuCtrl.open('end');
  }

  function openCustom() {
    menuCtrl.enable(true, 'custom');
    menuCtrl.open('custom');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
