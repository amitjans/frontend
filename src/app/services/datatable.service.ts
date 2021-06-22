import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor() { }

  datafilter(obj: {[key:string]: any}, query: string, properties: string[]) {
    for (let prop of properties) {
      if (!!obj[prop]) {
        if (obj[prop].toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  }

  dataTableValues() {
    return { limit: '10', page: 1, maxpage: 0, from: 1, to: 10, q: '', total: 0, sublist: [] };
  }

  dataTable(listado: object[], { page, maxpage, from, to, limit, q }: any, { property, order }: any, ...properties: string[]) {
    let temp = ( property == '' ? listado : listado.sort(function (a: {[key:string]: any}, b: {[key:string]: any}) { return a[property].localeCompare(b[property]) }) );
    if (!!property) {
      temp = (order == 'ASC' ? temp : temp.reverse());
    }
    temp = temp.filter(item => this.datafilter(item, q || '', properties));
    maxpage = Math.ceil(temp.length / limit);
    from = page == 0 ? 1 : ((page * limit) + 1);
    to = from + parseInt(limit) - 1;
    to = (temp.length < to) ? temp.length : limit * (page + 1);
    from = from < to ? from : to < limit ? 1 : ((to / limit) * limit) + 1;
    let pages = [...Array(maxpage + 1).keys()].slice(1);
    if (maxpage > 5) {
      if (page > 3) {
        pages = pages.splice(page - 3, 5);
      }
    }

    return { page: page, maxpage: maxpage, from: from, to: to, limit: limit, sublist: temp.slice(from - 1, to), total: temp.length, pages: pages };
  }
}
