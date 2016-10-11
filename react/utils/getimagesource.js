'use strict';

function getImageSource(url: string) :string{
    // var url= String(uri)
    url = url.replace('w.h','160.0');
    return url;
}
module.exports = getImageSource;
