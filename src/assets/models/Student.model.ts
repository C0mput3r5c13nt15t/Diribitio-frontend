import { Time } from '@angular/common';

export interface Student {
    id: number;
    user_name: string;
    email: string;
    email_verified_at?: Time;
    password: string;
    first_name: string;
    last_name: string;
    grade: number;
    letter: string;
    exchange_id: number;
    exchange_requests?: any[];
    first_friend: number;
    second_friend: number;
    third_friend: number;
    first_wish: number;
    second_wish: number;
    third_wish: number;
    project_id: number;
    project_title?: string;
    role: number;
    created_at?: Time;
    updated_at?: Time;
}
