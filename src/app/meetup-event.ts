export class MeetupEvent {
    created: number;
    duration: number;
    id: number;
    name: string;
    status: string;
    time: number;
    updated: number;
    utc_offset: number;
    waitlist_count: number;
    yes_rsvp_count: number;
    venue: {
        id: number;
        name: String;
        lat: number;
        lon: number;
        repinned: boolean;
        address_1: string;
        city: string;
        country: string;
        localized_country_name: string;
    }
    group: {
        created: number;
        name: string;
        id: number;
        join_mode: string;
        lat: number;
        lon: number;
        urlname: string;
        who: string;
    }
    link: string;
    description: string;
    visibility: string;
}
