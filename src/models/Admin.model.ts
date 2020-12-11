import { Time } from '@angular/common';

/**
 * The basic admin interface
 */
export interface Admin {
    id: number;
    user_name: string;
    email: string;
    password?: string;
    email_verified_at?: Time;
    created_at?: Time;
    updated_at?: Time;
}
