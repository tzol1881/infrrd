import { AbstractControl, ValidatorFn } from '@angular/forms';

export function empIdCheck(rides): ValidatorFn {
    return (control: AbstractControl): { [key: string]: true } | null => {
        if (control.value !== sessionStorage.getItem('username')) {
            return { invalidUser: true };
        }
        return null;
    };
}

export function timeValidator(control: AbstractControl): { [key: string]: true } | null {
    const today = new Date();
    if (Number((control.value).replace(':', '.')) < (Number((today.getHours()) + '.' + today.getMinutes()))) {
        return { invalidTime: true };
    }
    return null;
}
