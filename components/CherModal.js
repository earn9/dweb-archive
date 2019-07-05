import React from 'react';
import IAReactComponent from './IAReactComponent';

/**
 */

class CherModal extends IAReactComponent {
  constructor(props) {
    super(props); // identifier, creator, mediatype, title
  }


  render() {
    //Common text across Image and Text and possibly other subclasses
    const detailsURL = `https://archive.org/details/${this.props.identifier}`; // Note this should remain as pointing at details/identifier since its only used in sharing - FB, Twitter etc
    const sharingText =   `${this.props.title} : ${(this.props.creator || []).join(', ')}`; //String used
    const sharingTextUriEncoded = encodeURIComponent(sharingText);
    // Note this shortEmbedURL is just displayed in a form used to explain how to embed, its not actually called from dweb code.
    const shortEmbedURL = `https://archive.org/stream/${this.props.identifier}?ui=embed`;    //Note on archive.org/details this is different from iframeURL and not clear if that is intentional
    const helpURL = `https://archive.org/help/${this.props.mediatype}.php?identifier=${this.props.identifier}`;
    return (
      <div id="cher-modal" className="modal fade" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{padding:"10px"}}>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span
                className="iconochive-remove-circle" aria-hidden="true"></span><span className="sr-only">remove-circle</span>
              </button>
              <h3 className="modal-title">Share or Embed This {(this.props.mediatype === "collection") ? "Collection" : "Item"}</h3>
            </div>{/*--/.modal-header--*/}
            <div id="cher-body">
              <div style={{textAlign: "center", margin: "50px auto"}}>
                <div className="topinblock">
                  <div id="sharer">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${detailsURL}&amp;via=internetarchive&amp;text=${sharingTextUriEncoded}+%3A+Free+Download+%26+Streaming+%3A+Internet+Archive`}
                      target="_blank">
                      <div className="sharee iconochive-twitter" data-toggle="tooltip"
                           data-placement="bottom" title=""
                           data-original-title="Share to Twitter"></div>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${detailsURL}`}
                       target="_blank">
                      <div className="sharee iconochive-facebook" data-toggle="tooltip"
                           data-placement="bottom" title=""
                           data-original-title="Share to Facebook"></div>
                    </a>
                    <a href={`https://plus.google.com/share?url=${detailsURL}`}
                       target="_blank">
                      <div className="sharee iconochive-googleplus" data-toggle="tooltip"
                           data-placement="bottom" title=""
                           data-original-title="Share to Google+"></div>
                    </a>
                    <a
                      href={`http://www.reddit.com/submit?url=${detailsURL}&amp;title=${sharingTextUriEncoded}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                      target="_blank">
                      <div className="sharee iconochive-reddit" data-toggle="tooltip"
                           data-placement="bottom" title=""
                           data-original-title="Share to Reddit"></div>
                    </a>
                    <a
                      href={`https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2Farchive.org%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&;name=${this.props.identifier}+%3A+${(this.props.creator || []).join(', ')}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                      target="_blank">
                      <div className="sharee iconochive-tumblr" data-toggle="tooltip"
                           data-placement="bottom" title=""
                           data-original-title="Share to Tumblr"></div>
                    </a>
                    <a
                      href={`http://www.pinterest.com/pin/create/button/?url=${detailsURL}&amp;description=${sharingTextUriEncoded}+%3A+Free+Download+%26amp%3B+Streaming+%3A+Internet+Archive`}
                      target="_blank">
                      <div className="sharee iconochive-pinterest" data-toggle="tooltip"
                           data-placement="bottom" title=""
                           data-original-title="Share to Pinterest"></div>
                    </a>
                    <a href={`https://archive.org/pop/editor.html?initialMedia=${detailsURL}`}
                       target="_blank">
                      <div className="sharee iconochive-popcorn" data-toggle="tooltip"
                           data-placement="bottom" title="Share to Popcorn Maker"></div>
                    </a>
                    <a
                      href={`mailto:?body=${detailsURL}&amp;subject=${sharingText} : Free Download &amp; Streaming : Internet Archive`}>
                      <div className="sharee iconochive-email" data-toggle="tooltip"
                           data-placement="bottom" title=""
                           data-original-title="Share via email"></div>
                    </a>
                  </div>
                  <br clear="all" className="clearfix"/>
                </div>
              </div>
              { (!["image", "audio", "video"].includes(this.props.mediatype)) ? null :
                <>
                  <div>
                    <form className="form" role="form">
                      <div className="form-group">
                        <label>EMBED</label>
                        <textarea id="embedcodehere" className="form-control textarea-invert-readonly"
                                  rows="3" readOnly="readonly">{`<iframe 
                                      src=${shortEmbedURL}
                                      width="480" height="430" frameborder="0"
                                      webkitallowfullscreen="true" mozallowfullscreen="true"
                                      allowfullscreen></iframe>`}</textarea>
                      </div>
                    </form>
                  </div>
                  {/* Wordpress embed */}
                  <div>
                    <form className="form" role="form">
                      <div className="form-group">
                        <label>EMBED (for wordpress.com hosted blogs)</label>
                        <textarea id="embedcodehereWP" className="form-control textarea-invert-readonly"
                                  rows="3" readOnly="readonly">{`[archiveorg ${this.props.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`}</textarea>
                      </div>
                    </form>
                  </div>
                  <div>
                    Want more?
                    <a href={helpURL}>Advanced embedding details, examples, and help</a>!
                  </div>
                </>
              }
            </div>{/*--/#cher-body--*/}
          </div>{/*--/.modal-content--*/}
        </div>{/*--/.modal-dialog--*/}
      </div>
  ); }
}

export { CherModal };

