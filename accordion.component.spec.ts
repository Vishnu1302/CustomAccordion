// <copyright file="accordion.component.spec.ts" company="API Healthcare">
// Copyright © 2019 API Healthcare Corporation.  All rights reserved.  Confidential and Proprietary.
// </copyright>

import { AccordionComponent } from './accordion.component';
import { QueryList, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-test',
  template: '<p>Hello</p>'
})
class MockAppComponent {
  opened = false;
  header = 'accordion-test';
  toggle = new EventEmitter<any>();
}

describe('AccordionComponent', () => {
  let component: AccordionComponent;

  beforeEach(() => {
    component = new AccordionComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngAfterContentInit', () => {
    it('should ngAfterContentInit', () => {
      component.groups = new QueryList<MockAppComponent>();
      component.groups.reset([new MockAppComponent()]);
      spyOn(component, 'openGroup');
      component.ngAfterContentInit();
      component.groups.toArray().forEach(val => {
        val.toggle.next();
      });
      expect(component.openGroup).toHaveBeenCalled();
    });
  });

  describe('#openGroup', () => {
    beforeEach(() => {
      component.groups = new QueryList<MockAppComponent>();
      component.groups.reset([new MockAppComponent()]);
    });

    it('should open group', () => {
      const param = new MockAppComponent();
      component.openGroup(param);
    });

    it('should not open group', () => {
      const param = new MockAppComponent();
      param.header = 'test';
      component.openGroup(param);
    });
  });
});


