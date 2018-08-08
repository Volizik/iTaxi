import {Component, Input} from '@angular/core';


@Component({
    selector: 'tabs',
    templateUrl: 'tabs.html'
})
export class Tabs {

    tabs: Tab[] = [];

    constructor() {
    }

    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }

}

@Component({
    selector: 'tab',
    templateUrl: 'tab.html'
})
export class Tab {

    @Input() tabTitle: string;
    active: boolean;

    constructor(tabs: Tabs) {
        tabs.addTab(this)
    }

}
