import { AbstractControl } from '@angular/forms';

export class PassengerNameValidator {
    static checkName(name: AbstractControl) {
        let value= "" + name.value;
        if(value.match('^[A-Za-z ]+$')) {
            let names = value.split(' ');
            for(let i = 0; i < names.length; i++) {
                if(names[i].trim().length == 1) {
                return { "checkName": true };
                }
            }
        } else {
            return { "checkName": true };
        } return null;
    }
}
//valid way to assign the 'superHeros' array to the Observable returned from the service?
/* 
export class AppComponent {
    superHeros:SuperHero[];
    constructor(public shService:SuperHeroService) {
        shService.getSuperHeroDetail().subscribe(
            (data)=>{
                this.superHeros = data.filter(_=>_.age<25);
            }
        );
    }
}

validations (
    passengerName - required
    noOfTickets - required at least one
    flightId - required it mucst be 7 characters long.  THe first three cahracters must be Capital Letters, 
    followed by a hyphen and followed by three numbers
)
*/
