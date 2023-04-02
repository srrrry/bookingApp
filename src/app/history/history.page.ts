import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.page.html',
    styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
    data: any = [];
    constructor(
        private session: SessionService
    ) { }

    async ngOnInit() {
        let res: any = await this.session.Ajax(this.session.api + "/booking-get.php", {});
        this.data = res.data;
    }

}
