/* OBS DOESNT APPEAR TO BE USED
    static dateFormat(n) {
        // This could be turned into an alternative if anyone can figure out how to get toLocaleString to output dd mmm yy in UK and mmm dd, yy in US !
        return n.toISOString().substr(0,10); //YYYY-MM-DD
    }
*/
/* Seems to be obsolete - used once in TileComponent and simplified version put there)

    // pass in a <mediatype> value
    static mediatype_canonical(mediatype) {
        const ICONS = {
            "account": "person",
            "audio": "audio",
            "collection": "collection",
            "etree": "etree",
            "image": "image",
            "data": "data",
            "movies": "movies",
            "software": "software",
            "texts": "texts",
            "video": "movies",
            "web": "web",
            // The remainder have no items found with search?query=metadata:xyz
            "search": "search",
            "forum": "comments",
            "unknown": "question",
            "other": "question",
            "tv": "tv",
            "movingimage": "movies",
            "sound": "audio",
            "stillimages": "image",
            "text": "texts",
            "article": "article",
            "quote": "quote",
            "ad": "tv-commercial"
        };

        let icon = ICONS[mediatype];
        if (!icon)
            icon = 'question';

        return icon;
    }
   */

/* OBS UNUSED
    static natcompare(a, b) {
        return natcompare(a, b);
    }
*/

/* OBS not used since code in SearchPage.jsx commented out
    static metaFromUpdater({uploader=undefined, email=undefined}={}) {
        // Need to be able to convert email to uploader see https://webarchive.jira.com/browse/PBOX-3047?focusedCommentId=109572#comment-109572
        const u = uploader ||email; // TODO need to be able to convert back and forth with uploader and email
        const id = `@${u}`; // TODO This needs some character stripping/conversion from update to id - @IA figure out what this is
        return {
            updater: u,
            name: u,
            id: id,
            detailslink: `/details/@${id}`, //TODO-IAUX move callers to AnchorDetails but if AnchorDetails is React then reqs wrapping ReactComponent
            title: "Member", // TODO can sometimes be Archivist etc figure out how to look this up

        }
    }
*/
/* OBS not used since code in SearchPage.jsx commented out
    static listperson(uu) {
        // Note - might need to tighten up layout to avoid extra spaces/breaks
        return (
            <div class="items_list person">
                <div class="items_list_img">
                    <a
                        href={uu.detailslink}
                        style="background-image: url('/images/person2.png');"
                        aria-hidden="true"
                        data-event-click-tracking="DetailsPage|CollectionLink"></a>
                </div>
                <div>
                    <a class="stealth boxy-label" data-event-click-tracking="DetailsPage|CollectionLink" href={uu.detailslink}>{uu.name}</a><br/>
                    <small>{uu.title}</small>
                </div>
            </div>
        );
    }

}
*/
/* OBS Not used anywhere
// minified FROM http://sourcefrog.net/projects/natsort/natcompare.js
function isWhitespaceChar(B){const A=B.charCodeAt(0);if(A<=32){return true;}else{return false;}}
function isDigitChar(B){const A=B.charCodeAt(0);if(A>=48&&A<=57){return true;}else{return false;}}
function compareRight(E,B){let G=0;let F=0;let D=0;for(;;F++,D++){const C=E.charAt(F);const A=B.charAt(D);if(!isDigitChar(C)&&!isDigitChar(A)){return G;}else{if(!isDigitChar(C)){return -1;}else{if(!isDigitChar(A)){return +1;}else{if(C<A){if(G==0){G=-1;}}else{if(C>A){if(G==0){G=+1;}}else{if(C==0&&A==0){return G;}}}}}}}}
function natcompare(I,H){let C=0,A=0;let D=0,B=0;let F,E;let G;while(true){D=B=0;F=I.charAt(C);E=H.charAt(A);while(isWhitespaceChar(F)||F=="0"){if(F=="0"){D++;}else{D=0;}F=I.charAt(++C);}while(isWhitespaceChar(E)||E=="0"){if(E=="0"){B++;}else{B=0;}E=H.charAt(++A);}if(isDigitChar(F)&&isDigitChar(E)){if((G=compareRight(I.substring(C),H.substring(A)))!=0){return G;}}if(F==0&&E==0){return D-B;}if(F<E){return -1;}else{if(F>E){return +1;}}++C;++A;}}
*/

const config = { // SEE-OTHER-ADDTRANSPORT add a transport in here if its prefered for Video
  preferredAVtransports: ['WEBTORRENT', 'IPFS'], // Current reliability issues with IPFS streams accompanied by lack of negative feedback on fail, HTTP is worst case
};
// Same code in dweb-archive/util.js and ia-components/util.js

export { config };
