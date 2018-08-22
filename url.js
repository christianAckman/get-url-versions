// SITE.COM
// WWW
// HTTP
// HTTPS
// HTTP://WWW
// HTTPS://WWW


// Returns 6 URLs
function getURLs(url){

    if(!url){
        return null;
    }

    var urls = {
        'url': getURL(url),
        'www': getWWW(url),
        'http': getHTTP(url),
        'https': getHTTPS(url),
        'http_www': getHTTPWWW(url),
        'https_www': getHTTPSWWW(url)
    }

    return urls
}

// Needs tested
function getURL(_website){

    website = _website.toLowerCase()

    if(website.startsWith('http://www.')){
        // Remove {http://www}
        return website.substring(11);
    }
    else if(website.startsWith('https://www.')){
        // Remove {https://www}
        return website.substring(12);
    }
    else if(website.startsWith('http://')){
        // Remove {http://}
        return website.substring(7);
    }
    else if(website.startsWith('https://')){
        // Remove {https://}
        return website.substring(8);
    }
    else if(website.startsWith('www.')){
        // Remove {www.}
        return website.substring(4);
    }
    else{
        return website
    }
}

// Need test
function getWWW(_website){

    website = _website.toLowerCase()

    if(website.startsWith('http://www.')){
        // Remove {http://}
        return website.substring(7)
    }
    else if(website.startsWith('https://www.')){
        // Remove {https://}
        return website.substring(8)
    }
    else if(website.startsWith('http://')){
        // Remove {http://}
        return 'www.' + website.substring(7)
    }
    else if(website.startsWith('https://')){
        // Remove {https://}
        // Add {www.}
        return 'www.' + website.substring(8)
    }
    else if(website.startsWith('www.')){
        return website
    }
    else{
        return 'www.' + website
    }
}

function getHTTPWWW(_website){

    website = _website.toLowerCase()

    if(website.startsWith('http://www.')){
        return website;
    }
    else if(website.startsWith('https://www.')){
        // Remove {s}
        return website.substr(0, 4) + website.substring(5)
    }
    else if(website.startsWith('http://')){
        // Add {www.}
        return website.substr(0, 7) + 'www.' + website.substring(7)
    }
    else if(website.startsWith('https://')){
        // Remove {s}
        // Add {www.}
        return website.substr(0, 4) + '://www.' + website.substring(8)
    }
    else if(website.startsWith('www.')){
        // Add {http://}
        return 'http://' + website
    }
    else{
        return 'http://www.' + website
    }
}
function getHTTPSWWW(_website){

    website = _website.toLowerCase()

    if(website.startsWith('http://www.')){
        // Add {s}
        return website.substr(0, 4) + 's' + website.substring(4)
    }
    else if(website.startsWith('https://www.')){
        return website;
    }
    else if(website.startsWith('http://')){
        // Add {s}
        // Add {www.}
        return website.substr(0, 4) + 's://www.' + website.substring(7)
    }
    else if(website.startsWith('https://')){
        // Remove {s}
        // Add {www.}
        return website.substr(0, 8) + 'www.' + website.substring(8)
    }
    else if(website.startsWith('www.')){
        // Add {https://}
        return 'https://' + website
    }
    else{
        return 'https://www.' + website
    }
}
function getHTTP(_website){

    website = _website.toLowerCase()

    if(website.startsWith('http://www.')){
        // Remove {www.}
        return website.substr(0, 7) + website.substring(11)
    }
    else if(website.startsWith('https://www.')){
        // Remove {s}
        // Remove {www.}
        return website.substr(0, 4) + '://' + website.substring(12)
    }
    else if(website.startsWith('http://')){
        return website;
    }
    else if(website.startsWith('https://')){
        // Remove {s}
        return website.substr(0, 4) + '://' + website.substring(8)
    }
    else if(website.startsWith('www.')){
        // Add {http://}
        // Remove {www.}
        return 'http://' + website.substring(4)
    }
    else{
        return 'http://' + website
    }
}
function getHTTPS(_website){

    website = _website.toLowerCase()

    if(website.startsWith('http://www.')){
        // Add {s}
        // Remove {www.}
        return website.substr(0, 4) + 's://' + website.substring(11)
    }
    else if(website.startsWith('https://www.')){
        // Remove {www.}
        return website.substr(0, 8) + website.substring(12)
    }
    else if(website.startsWith('http://')){
        // Add {s}
        return website.substr(0, 4) + 's' + website.substring(4)
    }
    else if(website.startsWith('https://')){
        return website;
    }
    else if(website.startsWith('www.')){
        // Add {https://}
        // Remove {www.}
        return 'https://' + website.substring(4)
    }
    else{
        return 'https://' + website
    }
}

module.exports = {
    getURLs: getURLs
}