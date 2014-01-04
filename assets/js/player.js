String.prototype.splice = function(idx, rem, s) {
    return (this.slice(0, idx) + s + this.slice(idx + Math.abs(rem)));
};

String.prototype.truncate = function(limit) {
    if (this.length > limit) {
        return (this.substring(0, limit) + '…');
    }
    return this;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function syncSpacing(master, slave) {
    var fresh = slave.split(' ').join('');

    for (var i=0, len=master.length; i < len; i++) {
        if (master[i] == ' ') {
            fresh = fresh.splice(i, 0, ' ');
        }
    }
    return fresh
}

function vClean(aString) {
    return aString.replace(/\.|\'|\,/g, '').replace(/\-/g, ' ');
}

function vFormat(aString) {
    return aString.split('').join('<br />');
}

function updateDisplay(title, alias, url) {
    $('.player #title').html(vFormat(title.truncate(20)));
    $('.player #alias').html(vFormat(syncSpacing(title, alias).truncate(20)));
    $('.player .credit').attr('href', url);
}

var Player = {
    loadingInitiated: [],
}

Player.play = function(audioElem) {
    if ($.inArray(audioElem, this.loadingInitiated) == -1) {
        audioElem.load();
        this.loadingInitiated.push(audioElem);
    }
    audioElem.play();
    $(audioElem).siblings('.control').removeClass('play');
}
Player.pause = function(audioElem) {
    audioElem.pause();
    $(audioElem).siblings('.control').addClass('play');
}
