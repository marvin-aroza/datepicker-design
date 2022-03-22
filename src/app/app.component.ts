import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  AngularMyDatePickerDirective,
  IAngularMyDpOptions,
  IMyDateModel,
  HeaderAction,
} from 'angular-mydatepicker';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @ViewChild('dp')
  mydp!: AngularMyDatePickerDirective;
  @ViewChild('dp') d1!: ElementRef;

  private subscriptions = new Subscription();

  myDatePickerOptions: IAngularMyDpOptions = {
    stylesData: {
      selector: 'dp1',
      styles: ``,
    },
    dayLabels: {
      su: 'S',
      mo: 'M',
      tu: 'T',
      we: 'W',
      th: 'T',
      fr: 'F',
      sa: 'S',
    },
  };

  model: IMyDateModel | null = null;

  constructor(private elementRef: ElementRef) {}

  clearDate(): void {
    this.mydp.clearDate();
  }

  appendDiv() {
    console.log('wor');

    var innerHtmlDiv = `
        <div class="pickerDropdownDiv">
          <label>End Now</label>
        </div>
        <div class="buttonDiv" (click)="clearDate()">
          <input type="checkbox" />
          <label>No End Date</label>
          <h2><span>or</span></h2>
        </div>
      `;

    setTimeout(() => {
      var d2 = this.elementRef.nativeElement.querySelector(
        '.myDpSelectorAbsolute'
      );
      console.log(d2);
      d2.insertAdjacentHTML('afterbegin', innerHtmlDiv);

      this.subscriptions =fromEvent(
        this.elementRef.nativeElement.querySelector('.buttonDiv'),
        'click'
      ).subscribe(() => this.clearDate());
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  
}
