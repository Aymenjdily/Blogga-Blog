
export type IntroProps = {
    category:string;
    date?:Date;
    description?:string;
    bgColor:string;
    categoryClasses?:string;
    username?: string;
}

export type FormFieldProps = {
    type?: string;
    title: string;
    state: string;
    placeholder: string;
    isTextArea?: boolean;
    setState: (value: string) => void
}

export type CustomFieldProps = {
    title: string;
    state: string;
    filters: Array<string>;
    setState: (value: string) => void
}    

export type ButtonProps = {
    bgColor: string;
    number: number;
    setNumber: (value: number) => void
}    

export type CustomButtonProps = {
    title: string;
    type?: 'button' | 'submit';
    submitting: boolean;
}

export type PostCardProps = {
    isDeleted?: boolean;
    post:any;
    handleDelete?: (value: string) => void
}