import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
   providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {
   constructor(private router: Router, private service: UserService) { }
   token=JSON.stringify(this.service.isLoggedIn());
   user=this.service.localStorage();
   decode:any;
   expireTime!: number;
   
   canActivate() {
      this.decode=this.service.getDecodedAccessToken(this.token);
      let Totaltime = parseInt(new Date().getTime().toString().slice(0,-3));
      this.expireTime= this.decode.exp;
     let total=this.expireTime-Totaltime;
      if (this.decode!=null && this.decode.iss!=null &&  this.decode.iss==this.user.email && this.user!=null && this.expireTime!=Totaltime && this.expireTime>Totaltime) {
         console.log("check ==>",this.decode.iss==this.user.email)
         this.expireTime=this.expireTime+100;
         return true;
      }
      else {
         alert("Please login first")
         this.router.navigate(['']);
         localStorage.clear();
         return false;
      }
   }
}



