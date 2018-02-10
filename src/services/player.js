import { service as ClientApi } from "src/services";

class WebPlayer {
  constructor() {
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new this.AudioContext();
    this.gainNode = this.audioCtx.createGain();
  }

  play = previewUrl => {
    //this.disconnect();
    if (this.audioCtx.state === "suspended") return this.audioCtx.resume();
    this._createBufferSource();
    return this._getDecodedData(previewUrl).then(this._start);
  };

  _createBufferSource = () => {
    this.source = this.audioCtx.createBufferSource();
  };

  disconnect = () => {
    if (!this.source) return;
    return this.source.disconnect();
  };

  _getDecodedData = previewUrl => {
    return this._getData(previewUrl).then(this._decodeAudioData);
  };

  _getData = previewUrl => {
    return ClientApi.getAudioData(previewUrl);
  };

  _decodeAudioData = buffer => {
    return this.audioCtx.decodeAudioData(buffer).then(decodedData => {
      this.source.buffer = decodedData;
      this.source.connect(this.audioCtx.destination);
    });
  };

  _start = () => {
    if (!this.source) return;
    this.source.start(0);
  };

  stop = () => {
    if (!this.source) return;
    if (this.audioCtx.state === "running") return this.audioCtx.suspend();
  };
}
export const webPlayer = new WebPlayer();
