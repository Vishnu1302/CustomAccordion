// <copyright file="accordion.component.ts" company="API Healthcare">
// Copyright © 2019 API Healthcare Corporation.  All rights reserved.  Confidential and Proprietary.
// </copyright>

import { Component, ContentChildren, QueryList, AfterContentInit, OnInit } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';
@Component({
  selector: 'wfm-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  /**
   * Invoked when all children (groups or panels) are ready
   */
  ngAfterContentInit() {
    // Set active to first element
    // this.groups.toArray()[0].opened = true;
    // Loop through all Groups
    this.groups.toArray().forEach((t) => {
      // when title bar is clicked
      // (toggle is an @output event of Group)
      t.toggle.subscribe(() => {
        // Open the group
        this.openGroup(t);
      });
      /*t.toggle.subscribe((group) => {
        // Open the group
        this.openGroup(group);
      });*/
    });
  }

  /**
   * Open an accordion group
   * @param group   Group instance
   */
  openGroup(group: any) {
    // close other groups
    this.groups.toArray().forEach((t) => {
      if (t.header !== group.header) {
        t.opened = false;
      }
      // open current group
    });
    group.opened = !group.opened;
  }

}
