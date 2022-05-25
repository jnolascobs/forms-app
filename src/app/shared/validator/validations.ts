import { FormControl } from "@angular/forms";


export const nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// Strider es un nombre de usuario que ya está en uso
export const cantBeStrider = (control: FormControl) => {
    const value: string = control.value?.trim().toLowerCase();
    
    if (value === 'strider') {
      return {
        noStrider: true
      }
    } 
    
    return null;
}
