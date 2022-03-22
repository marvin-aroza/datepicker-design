import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {AngularMyDatePickerDirective, 
  IAngularMyDpOptions, 
  IMyDateModel, HeaderAction} from 'angular-mydatepicker';
  import { fromEvent, Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('dp')
  mydp!: AngularMyDatePickerDirective;
  @ViewChild('dp') d1!:ElementRef;

    myDatePickerOptions: IAngularMyDpOptions = {
      stylesData: {
        selector: 'dp1',
        styles: `
            * {
              font-family: 'Poppins'
            }
            .myDpSelector {
              width: 360px !important;
              height: fit-content !important;
              top: 52px !important;
            }
            .myDpMonthYearSelBar {
              margin-bottom:12px !important;
            }
            .myDpSelector::after, .myDpSelector::before {
              content: none !important;
            }
            .myDpCalTable {
              height: 320px;
            }
           .dp1 .myDpIconLeftArrow,
           .dp1 .myDpIconRightArrow,
           .dp1 .myDpHeaderBtn {
              color: #6c757d;
           }
           .dp1 .myDpHeaderBtn:focus,
           .dp1 .myDpMonthLabel:focus,
           .dp1 .myDpYearLabel:focus {
              color: #154F5B;
           }
           .myDpHeaderBtn {
             color: #154F5B !important;
             font-family: 'Poppins'
           }
           .dp1 .myDpDaycell:focus,
           .dp1 .myDpMonthcell:focus,
           .dp1 .myDpYearcell:focus {
              box-shadow: inset 0 0 0 1px #ccc;
           }
           .dp1 .myDpSelector:focus {
              box-shadow: -1px 1px 6px 0px #bbb;
           }
           .dp1 .myDpSelectorArrow:focus:before {
              border-bottom-color: #bbb;
           }
           .dp1 .myDpCurrMonth,
           .dp1 .myDpMonthcell,
           .dp1 .myDpYearcell {
              color: #6c757d;
              font-weight: bold;
           }
           .dp1 .myDpDaycellWeekNbr {
              color: #6c757d;
           }
           .dp1 .myDpPrevMonth,
           .dp1 .myDpNextMonth {
              color: #aaa;
           }
           .dp1 .myDpWeekDayTitle {
              background-color: transparent;
              color: #154F5B;
              font-weight: bold;
           }
           .dp1 .myDpHeaderBtnEnabled:hover,
           .dp1 .myDpMonthLabel:hover,
           .dp1 .myDpYearLabel:hover,
           .dp1 .myDpFooterBtn:hover {
              color: #212529;
           }
           .dp1 .myDpMarkCurrDay, 
           .dp1 .myDpMarkCurrMonth, 
           .dp1 .myDpMarkCurrYear {
              color : #00A4B7 !important;
              border : none;
           }
           .dp1 .myDpDisabled {
              color: #999;
           }
           .dp1 .myDpHighlight {
              color: #cd5c5c;
           }
           .dp1 .myDpTableSingleDay:hover, 
           .dp1 .myDpTableSingleMonth:hover, 
           .dp1 .myDpTableSingleYear:hover {
              background: linear-gradient(90deg, #359CBB 23.53%, #64C299 79.78%);
              color: #FFFFFF;
              border-radius: 50px;
           }
           .dp1 .myDpTableSingleYear .myDpDayValue:hover {
            background: linear-gradient(90deg, #359CBB 23.53%, #64C299 79.78%);
            color: #FFFFFF !important;
            border-radius: 50px;
         }
         .myDpTableSingleDay:hover .myDpDayValue,  .myDpSelectedDay .myDpDayValue {
           color:#FFFFFF !important;
         }
           .dp1 .myDpRangeColor {
              background-color: #eee;
           }
           .dp1 .myDpDayValue {
             color : rgba(21, 79, 91, 0.33);
             font-family: 'Poppins'
           }
           
           .dp1 .myDpSelectedDay,
           .dp1 .myDpSelectedMonth,
           .dp1 .myDpSelectedYear {
              background: linear-gradient(90deg, #359CBB 23.53%, #64C299 79.78%);
              color : #FFFFFF !important;
              border-radius: 50px;
           }
           .myDpIcon {
            height: 5.985879898071289px;
            width: 9.991594314575195px;          
           }
         `
      },
      dayLabels: 	{su: 'S', mo: 'M', tu: 'T', we: 'W', th: 'T', fr: 'F', sa: 'S'}
    }

    model: IMyDateModel | null = null;

    constructor(private elementRef : ElementRef) {}

    // call the clearDate() function of the directive
    clearDate(): void {
      console.log('asd');
        this.mydp.clearDate();
    }

    // call the isDateValid() function of the directive
    checkDateValidity(): void {
        let valid: boolean = this.mydp.isDateValid();
        console.log('Valid date in the input box: ', valid);
    }

    // header action examples
    clickPreviousBtn(): void {
        this.mydp.headerAction(HeaderAction.PrevBtnClick);
    }

    clickNextBtn(): void {
        this.mydp.headerAction(HeaderAction.NextBtnClick);
    }

    clickMonthBtn(): void {
        this.mydp.headerAction(HeaderAction.MonthBtnClick);
    }

    clickYearBtn(): void {
        this.mydp.headerAction(HeaderAction.YearBtnClick);
    }

    appendDiv() {

      
      console.log("wor")

      var innerHtmlDiv = `
        <div class="pickerDropdownDiv">
          <label>End Now</label>
        </div>
        <div class="buttonDiv" (click)="clearDate()">
          <input type="checkbox" />
          <label>No End Date</label>
          <h2><span>or</span></h2>
        </div>
      `
      // this.d1.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
      setTimeout(() => {
        var d2 = this.elementRef.nativeElement.querySelector('.myDpSelectorAbsolute');
      console.log(d2)
      d2.insertAdjacentHTML('afterbegin', innerHtmlDiv);

      fromEvent(this.elementRef.nativeElement.querySelector('.buttonDiv'), 'click').subscribe(() => this.clearDate());

      }, 100)
      
    }

    ngAfterViewInit() {
    }
  
    ngOnDestroy() {
      // add this for performance reason
      // this.clickedElement.unsubscribe();
    }
}

