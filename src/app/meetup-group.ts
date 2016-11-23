export class MeetupGroup {
    id: number;
    name: string;
    link: string;
    urlname: string;
    description: string;
    created: number;
    city: string;
    country: string;
    localized_country_name: string;
    state: string;
    join_mode: string;
    visibility: string;
    lat: number;
    lon: number;
    members: number;
    organizer: {
        id: number;
        name: string;
        bio: string;
        photo: {
            id: number;
            photo_link: string;
            thumb_link: string;
            type: string;
            base_url: string;
        }
    }
    who: string;
    group_photo: {
        id: number;
        highres_link: string;
        photo_link: string;
        thumb_link: string;
        type: string;
        base_url: string;
    }
    timezone: string;
    next_event: {
        id: number;
        name: string;
        yes_rsvp_count: number;
        time: number;
        utc_offset: number;
    }
    category: {
        id: number;
        name: string;
        shortname: string;
        sort_name: string;
    }
    photos: [
        {
        id: number;
        highres_link: string;
        photo_link: string;
        thumb_link: string;
        type: string;
        base_url: string;
        }
    ]
}
