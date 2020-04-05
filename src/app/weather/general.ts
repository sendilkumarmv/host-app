import { InjectionToken } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('Base Url');



export function covertToDate(unix_timestamp, onlyTime = false) {
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  if (onlyTime)
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  else
    return date;
}

export function getFlags(countryCode: string) {
  return `https://www.countryflags.io/${countryCode.toLowerCase()}/flat/24.png`;
}
