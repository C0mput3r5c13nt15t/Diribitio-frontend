import { Time } from '@angular/common';
import { Student } from './Student.model';

export interface Exchange {
    id: number;
    sender_id: number;
    receiver_id: number;
    confirmed: number;
    accomplished: number;
    sender?: Student;
    receiver?: Student;
    created_at?: Time;
    updated_at?: Time;
}
