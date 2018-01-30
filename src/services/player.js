import { service as ClientApi } from "src/services";

class WebPlayer {
  constructor() {
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new this.AudioContext();
    this.gainNode = this.audioCtx.createGain();
    this.previewUrl;
    this.createBufferSource();
  }

  createBufferSource = () => {
    if (this.source) return;
    this.source = this.audioCtx.createBufferSource();
  };

  getDecodedData = previewUrl => {
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

  start = () => {
    this.source.start(0);
  };

  stop = () => {
    this.source.stop(0);
  };
}
export const webPlayer = new WebPlayer();
