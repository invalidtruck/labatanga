import { Injectable } from '@angular/core';
import instantsearch from 'instantsearch.js/es';

@Injectable()
export class InstantSearchService {
  search = instantsearch({
    appId: 'HD00BWMGMW',
    apiKey: '42293ab5c8f0c8019b68f3c24d7d4643',
    indexName: 'Providers',
    urlSync: true
  });

  constructor() { }
};