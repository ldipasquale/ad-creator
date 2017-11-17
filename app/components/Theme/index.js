import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Device from 'components/Device'
import Ad from 'components/Ad'

import modifiers from 'constants/modifiers'
import fontAlignValues from 'constants/modifiers/fontAlign'

import './styles.sass'

class Theme extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modifiers: {
        headline: {
          [modifiers.FONT_COLOR]: '#000',
          [modifiers.IS_FONT_BOLD]: true,
          [modifiers.FONT_ALIGN]: fontAlignValues.LEFT,
        },
        callToAction: {
          [modifiers.FONT_COLOR]: '#fff',
          [modifiers.IS_FONT_BOLD]: true,
          [modifiers.FONT_ALIGN]: fontAlignValues.CENTER,
        },
      },
    }

    this.handleChangeModifiers = this.handleChangeModifiers.bind(this)
    this.handleSelectElement = this.handleSelectElement.bind(this)
    this.handleCancelSelection = this.handleCancelSelection.bind(this)
  }

  handleChangeModifiers(modifiers) {
    this.setState({ modifiers })
  }

  handleSelectElement(element) {
    this.setState({
      higlightedElement: element,
    })
  }

  handleCancelSelection(element) {
    this.setState({
      higlightedElement: null,
    })
  }

  render() {
    return (
      <div>
        <Device model="nexus5">
          <Ad
            width={300}
            height={250}
            onSelectElement={this.handleSelectElement}
            onCancelSelection={this.handleCancelSelection}
            selectedElement={this.state.higlightedElement}
            onChangeModifiers={this.handleChangeModifiers}
            modifiers={this.state.modifiers}
          >
            {"<style>.clear{clear:both;}body{margin:0;padding:0;}.ad{position:absolute;width:100%;height:100%;overflow:hidden;text-decoration:none !important;background:#fff;background:#F05DCF;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #F05DCF), color-stop(100%, #FA7553));background:-webkit-linear-gradient(-45deg, #F05DCF 0%, #FA7553 100%);font-family:'Helvetica Neue', sans-serif;font-size:0;}.container{background:#fff;border-radius:5px;overflow:hidden;}.advertiser-text{display:flex;flex-direction:column;justify-content:center;}.stars{font-size:0;margin-top:4px;}.stars img{width:14px;height:11px;margin-right:1px;}h1{color:#111;font-weight:600;letter-spacing:0;line-height:1.1em;margin:0;}p{color:#566650;font-weight:300;}.image{position:absolute;top:0;left:0;right:0;bottom:0;width:auto;background:no-repeat center;background-size:cover;}button{background:#00D061;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.08);border:0;outline:0;border-radius:100px;font-weight:600;color:#fff;text-transform:uppercase;}</style><style scoped=''>.ad{min-width:300px;min-height:250px;}.container{position:absolute;top:5px;left:5px;right:5px;bottom:5px;width:auto;}.advertiser{margin:5px;}.advertiser-text{height:40px;}.logo{width:40px;height:40px;margin-right:8px;float:left;}h1{font-size:15px;}p{font-size:13px;line-height:18px;letter-spacing:0.2px;margin-top:15px;}.image-container{position:absolute;top:50px;left:-5px;right:-5px;bottom:57px;width:auto;}.button-container{position:absolute;top:auto;left:0;right:0;bottom:0;width:auto;text-align:center;padding-bottom:11px;}button{padding:10px 17px;font-size:13.5px;letter-spacing:0.4px;}</style><meta name='viewport' content='width=device-width, initial-scale=1'><meta charset='utf-8'><a class='ad' href='{click_url}' data-field='container'><div class='container' data-field='adContainer'><div class='advertiser'><img class='logo' src='http://cdn.jampp.com/richmedia/HqJlrv5Y60B4aQEwGmMGYQ.jpg'><div class='advertiser-text'><h1 data-field='headline'>{{headline}}</h1><div class='stars' data-field='rating'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_c7L9EpPZBBbp12GH-uyA7w.svg'></div></div></div><div class='image-container'><div class='image' data-field='media' style='background-image: url(&quot;https://s3.amazonaws.com/creatives.jampp.com/assets/99/1200x627_bHg_K4zBFpbdliQ2ULpGow.jpg&quot;);'></div></div><div class='button-container'><button data-field='callToAction'>{{callToAction}}</button></div></div></a>"}
          </Ad>
        </Device>

        <Device model="nexus5">
          <Ad
            width={320}
            height={480}
            onSelectElement={this.handleSelectElement}
            onCancelSelection={this.handleCancelSelection}
            selectedElement={this.state.higlightedElement}
            onChangeModifiers={this.handleChangeModifiers}
            modifiers={this.state.modifiers}
          >
            {"<style>.clear{clear:both;}body{margin:0;padding:0;}.ad{position:absolute;width:100%;height:100%;overflow:hidden;text-decoration:none !important;background:#fff;background:#F05DCF;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #F05DCF), color-stop(100%, #FA7553));background:-webkit-linear-gradient(-45deg, #F05DCF 0%, #FA7553 100%);font-family:'Helvetica Neue', sans-serif;font-size:0;}.container{background:#fff;border-radius:5px;overflow:hidden;}.advertiser-text{display:flex;flex-direction:column;justify-content:center;}.stars{line-height:1em;font-size:0;margin-top:4px;}.stars img{width:14px;height:11px;margin-right:1px;}h1{color:#111;font-weight:600;letter-spacing:0;line-height:1.1em;margin:0;}p{color:#566650;font-weight:300;}.image{position:absolute;top:0;left:0;right:0;bottom:0;width:auto;background:no-repeat center;background-size:cover;}button{background:#00D061;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.08);border:0;outline:0;border-radius:100px;font-weight:600;color:#fff;text-transform:uppercase;}</style><style scoped=''>.ad{min-width:320px;min-height:480px;}.container{position:absolute;top:10px;left:10px;right:10px;bottom:10px;width:auto;}.advertiser{margin:10px;}.advertiser-text{height:50px;}.logo{width:50px;height:50px;margin-right:8px;float:left;}h1{font-size:15px;}p{font-size:13px;line-height:18px;letter-spacing:0.2px;margin-top:15px;}.image-container{position:absolute;top:140px;left:0;right:0;bottom:100px;width:auto;}.button-container{position:absolute;top:auto;left:0;right:0;bottom:0;width:auto;text-align:center;padding-bottom:33px;}button{padding:10px 20px;font-size:15px;letter-spacing:0.75px;}</style><meta name='viewport' content='width=device-width, initial-scale=1'><meta charset='utf8'><a class='ad' href='{click_url}' data-field='container'><div class='container' data-field='adContainer'><div class='advertiser'><img class='logo' src='http://cdn.jampp.com/richmedia/HqJlrv5Y60B4aQEwGmMGYQ.jpg'><div class='advertiser-text'><h1 data-field='headline'>{{headline}}</h1><div class='stars' data-field='rating'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_c7L9EpPZBBbp12GH-uyA7w.svg'></div></div><div class='clear'></div><p data-field='promoText'>{{promoText}}</p></div><div class='image-container'><div class='image' data-field='media' style='background-image: url(&quot;https://s3.amazonaws.com/creatives.jampp.com/assets/99/1200x627_bHg_K4zBFpbdliQ2ULpGow.jpg&quot;);'></div></div><div class='button-container'><button data-field='callToAction'>{{callToAction}}</button></div></div></a>"}
          </Ad>
        </Device>

        {/*
        <Device model="nexus5" small>
          <Ad width={320} height={50}>
            {"<style>.clear{clear:both;}body{margin:0;padding:0;}.ad{position:absolute;width:100%;height:100%;overflow:hidden;text-decoration:none !important;background:#fff;background:#F05DCF;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #F05DCF), color-stop(100%, #FA7553));background:-webkit-linear-gradient(-45deg, #F05DCF 0%, #FA7553 100%);font-family:'Helvetica Neue', sans-serif;font-size:0;}.container{background:#fff;border-radius:5px;overflow:hidden;}.advertiser-text{display:flex;flex-direction:column;justify-content:center;}.stars{font-size:0;margin-top:4px;}.stars img{width:14px;height:11px;margin-right:1px;}h1{color:#111;font-weight:600;letter-spacing:0;line-height:1.1em;margin:0;}p{color:#566650;font-weight:300;}.image{position:absolute;top:0;left:0;right:0;bottom:0;width:auto;background:no-repeat center;background-size:cover;}button{box-sizing:border-box;background:#00D061;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.08);border:0;outline:0;border-radius:100px;font-weight:600;color:#fff;text-transform:uppercase;}</style><style scoped=''>@-webkit-keyframes 'twoFrames'{0%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:1;}5%,50%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;}55%{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0;}56%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0;}57%,100%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:1;}}@keyframes 'twoFrames'{0%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:1;}5%,50%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;}55%{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0;}56%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0;}57%,100%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:1;}}.ad{min-width:320px;height:50px;}.container{position:absolute;top:3px;left:3px;right:3px;bottom:3px;width:auto;}.logo{display:inline-block;margin:3px;width:38px;height:38px;margin-right:5px;}h1{font-size:12px;}p{font-size:10px;line-height:12px;}.stars{margin-top:3px;}.stars img{width:12px;height:10px;}.button-container{text-align:right;display:inline-block;vertical-align:top;height:44px;padding-top:8px;margin-right:5px;float:right;}button{height:28px;padding:8px 13px;font-size:10.5px;letter-spacing:0.23px;}.frames{display:inline-block;width:45%;height:100%;position:relative;}.frame-1,.frame-2{position:absolute;width:100%;height:100%;display:flex;}.frame-1{-webkit-animation:twoFrames 6s infinite;animation:twoFrames 6s infinite;}.frame-1 .left{flex:3;}.frame-1 .right{flex:1;text-align:center;}.frame-2{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-animation:twoFrames 6s infinite 3s;animation:twoFrames 6s infinite 3s;}.frame-2 .left{flex:20;}.frame-2 .right{flex:auto;}</style><meta name='viewport' content='width=device-width, initial-scale=1'><meta charset='utf8'><a class='ad' href='{click_url}'><div class='container'><img class='logo' src='http://cdn.jampp.com/richmedia/HqJlrv5Y60B4aQEwGmMGYQ.jpg'><div class='frames'><div class='frame-1'><div class='advertiser-text'><h1>Title</h1><div class='stars'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_0mk7n2tWswNbHiSjHqPlBQ.svg'><img src='https://s3.amazonaws.com/creatives.jampp.com/assets/99/14x11_c7L9EpPZBBbp12GH-uyA7w.svg'></div></div></div><div class='frame-2'><p class='advertiser-text'>Subitle</p></div></div><div class='button-container'><button>Call To Action</button></div></div></a>"}
          </Ad>
        </Device>
        */}
      </div>
    )
  }
}

Theme.propTypes = {
}

Theme.defaultProps = {
}

export default Theme
