import { Injectable } from '@angular/core';
import { Invention } from './inventions.class';
@Injectable()
export class InventionsService {

  rawInventions : Invention[]=[
    {
      id : 1,
      name : 'Java',
      inventor : 'James Ghosling',
      year : '1995',
      details : 'Most secure language'
    },
    {
      id : 2,
      name : 'Python',
      inventor : 'Guido van Rosum',
      year : '1991',
      details : 'Python is a scripting language'
    },
    {
      id : 3,
      name : 'C++',
      inventor : 'Bjarne Stroustrup',
      year : '1983',
      details : 'Fastest language'
    }
  ]
  constructor() { }

  getInventions(): Invention[]{
    return this.rawInventions;
  }
  inventionDetails( id ) : Invention{
    for( var i=0;i<this.rawInventions.length;i++ ){
      if(this.rawInventions[i].id==id){
        return this.rawInventions[i];
      }
    }
    return null;
  }
}
