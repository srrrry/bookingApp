import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.page.html',
    styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
    symptom = "";
    appointment_date = "";
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
    }
    GoToProfile() {
        this.session.LinkTo("profile");
    }
    GoToAppointment() {
        this.session.LinkTo("appointment");
    }
}
