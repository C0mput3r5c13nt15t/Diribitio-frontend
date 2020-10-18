import { Time } from '@angular/common';
import { Nachricht } from './Nachricht.model';

export interface Projekt {
    id: number;
    authorized: number;
    editable: number;
    title: string;
    image: string;
    descr: string;
    leader_name: string;
    leader_id: number;
    leader_type?: string;
    messages: Nachricht[];
    cost: number;
    first_day_begin: Time;
    first_day_end: Time;
    second_day_begin: Time;
    second_day_end: Time;
    min_grade: number;
    max_grade: number;
    min_participants: number;
    max_participants: number;
    participants: any[];
    leader?: any;
    assistant_student_leaders?: any[];
    created_at?: Time;
    updated_at?: Time;
}
