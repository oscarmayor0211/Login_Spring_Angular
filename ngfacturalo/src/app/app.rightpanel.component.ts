import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {AppComponent} from './app.component';
import {ScrollPanel} from 'primeng/primeng';

@Component({
    selector: 'app-rightpanel',
    templateUrl: './app.rightpanel.component.html'
})
export class AppRightPanelComponent {

    // @ViewChild('scrollRightPanel', { static: false }) rightPanelMenuScrollerViewChild: ScrollPanel;

    constructor(public app: AppComponent) {}

    // ngAfterViewInit() {
    //     setTimeout(() => {this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
    // }

    // onTabChange(event) {
    //     setTimeout(() => {this.rightPanelMenuScrollerViewChild.moveBar(); }, 450);
    // }
    onRightPanelClick(){}

}
 