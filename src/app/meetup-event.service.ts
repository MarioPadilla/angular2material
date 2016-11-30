import { Injectable }           from '@angular/core';
import { Http, Response, Jsonp} from '@angular/http';
import { MeetupEvent }          from './meetup-event';
import { Observable }           from 'rxjs/Observable';

@Injectable()
export class MeetupEventService {
  
  private urlBase = "https://api.meetup.com/copenhagenjs"; //'app/events.json';

  private urlOptions = "?callback=JSONP_CALLBACK&key=6d3237026313220269174f5d9f6e&sign=true";
  private urlEvents = this.urlBase + "/events";
  
  private urlEventsList = this.urlEvents + this.urlOptions;
  private urlSimilarGroups=this.urlBase + "/similar_groups" + this.urlOptions;

  constructor (private http: Http, private _jsonp: Jsonp) {}

  getEvents (): Observable<any[]> {
    return this._jsonp.get(this.urlEventsList + "&photo-host=public&page=20")
                    .map((res:Response) => res.json().data)
                    .catch(this.handleError);
  }

  getEvent (id: number): Observable<MeetupEvent> {

    return this._jsonp.get(this.urlEvents + "/" + id + this.urlOptions)
                    .map((res:Response) => res.json().data)
                    .catch(this.handleError);
  }

  getGroup (): Observable<any> {
      return this._jsonp.get(this.urlBase + this.urlOptions)
                    .map((res:Response) => res.json().data)
                    .catch(this.handleError);
  }

  getSimilarGroups (): Observable<any[]> {
    return this._jsonp.get(this.urlSimilarGroups + "&photo-host=public&page=20")
                    .map((res:Response) => res.json().data)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
