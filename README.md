## React Stockcharts

Forked to fix some small problems with the then current 0.7.0-beta.22:
 - new clamping code did not lint
 - propTypes for clamp did not match defaults
 - ScatterSeries couldn't handle gaps (and I needed it to)
 - no ArrowMarker (for ScatterSeries)


Note: steps to release:
  * change version (and base version) in package.json, src/index.js and this file
  * build `npm run release`
  * publish `cd build && npm publish`

Rest of this file is unchanged, badges point at the original etc.:

[![Join the chat at https://gitter.im/rrag/react-stockcharts](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/rrag/react-stockcharts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/react-stockcharts.svg)](https://badge.fury.io/js/react-stockcharts)


Create highly customizable stock charts

Built with [React JS](http://facebook.github.io/react/) and [d3](http://d3js.org/)

If you like this project checkout <a href="https://gocharting.com" target="_blank">gocharting.com</a>
 - integrates multiple charttypes
 - over 60 technical indicators and overlays
 - drawing objects

Multiple [quick start examples](https://github.com/rrag/react-stockcharts-examples2)

- svg and canvas for improved performance.
- pan and zoom, on touch devices too

#### Chart types

- Scatter
- Area
- Line
- Candlestick
- OHLC
- HeikenAshi
- Renko
- Kagi
- Point & Figure

#### Indicators

- EMA, SMA, WMA, TMA
- Bollinger band
- SAR
- MACD
- RSI
- ATR
- Stochastic (fast, slow, full)
- ForceIndex
- ElderRay
- Elder Impulse

(more to come),

and it is simple to create your own indicator too

#### Interactive Indicators

- Trendline
- Fibonacci Retracements
- Gann Fan
- Channel
- Linear regression channel

---

### Installation
```sh
npm install  --save react-stockcharts
```

### Documentation

[Documentation](http://rrag.github.io/react-stockcharts)

[Ready to use Examples](https://github.com/rrag/react-stockcharts-examples2)

### Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

### Stability

This is alpha state software, the api will change with each minor version.

### Roadmap

[Roadmap](./docs/md/COMING-SOON.md)

### LICENSE

[MIT](./LICENSE)