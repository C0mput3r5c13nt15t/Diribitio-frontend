import { Time } from '@angular/common';
import { Schüler } from './Schüler.model';

export interface Tausch {
    id: number;
    sender_id: number;
    receiver_id: number;
    confirmed: number;
    accomplished: number;
    sender?: Schüler;
    receiver?: Schüler;
    created_at?: Time;
    updated_at?: Time;
}
