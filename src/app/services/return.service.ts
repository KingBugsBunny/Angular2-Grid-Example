import { Injectable } from '@angular/core';

import { RestService } from './rest.service';

@Injectable()
export class ReturnService {

  private baseUrl = 'http://13.84.149.217:8000';

  constructor(private restService: RestService) { }

  loadAll() {
    let url = this.baseUrl + '/returns/countdistinct/return_reason?start_date=2016-06-18&end_date=2016-07-25&category=&limit=50';

    return this.restService.get(url, null, null);
  }
}
