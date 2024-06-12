export interface RequestBody {
    username: string;
    password: string;
    email: string;
    role?: string;
    firstname: string;
    lastname_1: string;
    lastname_2?: string;
    birthdate: Date;
};

export type UserData = {
    username: string;
    password: string;
    email: string;
    role?: string;
    firstname: string;
    lastname_1: string;
    lastname_2?: string;
    birthdate: Date;
};
