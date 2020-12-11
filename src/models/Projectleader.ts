import { Time } from '@angular/common';

/**
 * The basic projectleader interface
 */
export interface Projectleader {
    id: number;
    user_name: string;
    email: string;
    email_verified_at?: Time;
    password: string;
    project_id: number;
    project_title?: string;
    created_at?: Time;
    updated_at?: Time;
}
