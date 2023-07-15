
export type IntroProps = {
    category:string;
    date?:Date;
    description?:string;
    bgColor:string;
    categoryClasses?:string;
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