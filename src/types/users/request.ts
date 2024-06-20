export interface RequestBody {
    username: string;
    password: string;
    email: string;
    role?: string;
    firstname: string;
    lastname: string;
    birthdate: Date;
};

export type UserData = {
    username: string;
    password: string;
    email: string;
    role?: string;
    firstname: string;
    lastname: string;
    birthdate: Date;
};
