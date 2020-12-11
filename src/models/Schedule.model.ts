
/**
 * The basic response interface
 */
export interface Schedule {
    id: number;
    begin: Date;
    control: Date;
    registration: Date;
    sort_students: Date;
    exchange: Date;
    projects: Date;
    end: Date;
}
