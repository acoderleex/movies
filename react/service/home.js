'use strict';

import { clientUrl } from '../config/configure';
import { HomeModel } from '../model/home';


class Home {
  async getSpalshData(){
    var url =`${clientUrl}/`;
    let response = await fetch(url);
    const result = await response.json();
    return {
        imageUrl: result.imageUrl,
        url: result.url
    }
  }
}

module.exports = Home;
