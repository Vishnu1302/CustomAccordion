// <copyright file="accordion-group.component.ts" company="API Healthcare">
// Copyright © 2019 API Healthcare Corporation.  All rights reserved.  Confidential and Proprietary.
// </copyright>
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'wfm-accordion-panel',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['accordion.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
      })),
      state('closed', style({
        height: '0',
      })),
      transition('open => closed', [
        animate('0.2s ease-out')
      ]),
      transition('closed => open', [
        animate('0.2s ease-out')
      ]),
    ]),
  ]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGroupComponent {

  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the accordion panel title bar
   */
  @Input() header: string;

  /**
   * Emitted when user clicks on accordion panel titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
