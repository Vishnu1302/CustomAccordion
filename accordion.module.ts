// <copyright file="accordion.module.ts" company="API Healthcare">
// Copyright © 2019 API Healthcare Corporation.  All rights reserved.  Confidential and Proprietary.
// </copyright>

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionGroupComponent } from './accordion-group.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent, AccordionGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [AccordionComponent, AccordionGroupComponent]
})
export class AccordionModule { }
