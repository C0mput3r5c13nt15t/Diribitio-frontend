import { Time } from '@angular/common';

export interface Log {
    ID: number;
    error: number;
    message: string;
    user: string;
    thrown_at: Time;
}
