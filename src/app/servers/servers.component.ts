import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
    selector: 'app-servers',
    // template: `
    //     <app-server></app-server>
    //     <app-server></app-server>`,
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

    allowNewServer = false;
    serverCreationStatus = "no server was created";
    serverName = 'Testserver';
    serverCreated = false;
    servers = ['Testserver', 'Testserver2'];
    
    constructor () {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit () {
    
    }

    onCreateServer () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Server Name: '+ this.serverName;
    }

    onUpdateServer (event: any) {
        // console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}