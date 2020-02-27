export class AdminUser {
    constructor(
        public email: string,
        public firstName: string,
        public lastName: string,
        public BadgeId: string,
        public Role: string,
        public Department: string
    ){}
}

export class CommonUser {
    FirstName: string;
    LastName: string;
    EmailId: string;
    Password: string;
    PhoneNumber: string;
    governmentIdType: string;
    governmentIdNumber: string;
    IsVolunteering: boolean;
    VolunteeringField: string;
}
