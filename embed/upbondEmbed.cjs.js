/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ src_embed)
});

// UNUSED EXPORTS: BUTTON_POSITION, LOGIN_PROVIDER, PAYMENT_PROVIDER, SUPPORTED_PAYMENT_NETWORK, TORUS_BUILD_ENV, TorusInpageProvider, WALLET_OPENLOGIN_VERIFIER_MAP, WALLET_VERIFIERS

;// CONCATENATED MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
const objectWithoutProperties_namespaceObject = require("@babel/runtime/helpers/objectWithoutProperties");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/http-helpers"
const http_helpers_namespaceObject = require("@toruslabs/http-helpers");
;// CONCATENATED MODULE: external "@toruslabs/openlogin-jrpc"
const openlogin_jrpc_namespaceObject = require("@toruslabs/openlogin-jrpc");
;// CONCATENATED MODULE: external "lodash.merge"
const external_lodash_merge_namespaceObject = require("lodash.merge");
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_namespaceObject);
;// CONCATENATED MODULE: ./src/interfaces.ts
const LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  TWITCH: "twitch",
  REDDIT: "reddit",
  DISCORD: "discord"
};
const WALLET_VERIFIERS = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  TWITCH: "twitch",
  REDDIT: "reddit",
  DISCORD: "discord",
  EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless"
};
const WALLET_OPENLOGIN_VERIFIER_MAP = {
  [WALLET_VERIFIERS.GOOGLE]: "tkey-google",
  [WALLET_VERIFIERS.FACEBOOK]: "tkey-facebook",
  [WALLET_VERIFIERS.TWITCH]: "tkey-twitch",
  [WALLET_VERIFIERS.REDDIT]: "tkey-reddit",
  [WALLET_VERIFIERS.DISCORD]: "tkey-discord",
  [WALLET_VERIFIERS.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless"
};
const PAYMENT_PROVIDER = {
  MOONPAY: "moonpay",
  WYRE: "wyre",
  RAMPNETWORK: "rampnetwork",
  XANPOOL: "xanpool",
  MERCURYO: "mercuryo",
  TRANSAK: "transak"
};
const SUPPORTED_PAYMENT_NETWORK = {
  MAINNET: "mainnet",
  MATIC: "matic",
  BSC_MAINNET: "bsc_mainnet",
  AVALANCHE_MAINNET: "avalanche_mainnet",
  XDAI: "xdai"
};
const TORUS_BUILD_ENV = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
  BINANCE: "binance",
  TESTING: "testing",
  LRC: "lrc",
  BETA: "beta",
  BNB: "bnb",
  POLYGON: "polygon"
};
const BUTTON_POSITION = {
  BOTTOM_LEFT: "bottom-left",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP_RIGHT: "top-right"
};
;// CONCATENATED MODULE: ./src/supportedCurrencies.ts

/**
 * From https://min-api.cryptocompare.com/data/v2/pair/mapping/fsym?fsym=BTC&extraParams=YourSite
 * GET https://min-api.cryptocompare.com/data/v2/pair/mapping/fsym?fsym=BTC
 * Then map over returned entries, picking tsym
 *
 * Last updated: Date of commit
 */

const CRYPTO_COMPARE_CURRENCIES = ["ETH", "USDT", "USDC", "TUSD", "EOSDT", "USD", "DAI", "GUSD", "DKKT", "PAX", "ILS", "RUB", "BYN", "EUR", "GBP", "JPY", "KRW", "PLN", "MXN", "AUD", "BRL", "CAD", "CHF", "KPW", "LAK", "LBP", "LKR", "XOF", "CNHT", "DOGE", "UAH", "TRY", "HKD", "XJP", "SGD", "USC", "NZD", "NGN", "RUR", "COP", "GHS", "EGP", "IDR", "BHD", "CRC", "PEN", "AED", "DOP", "PKR", "HUF", "VND", "XAR", "LTC", "RON", "OMR", "MYR", "DKK", "UGX", "ZMW", "SAR", "SEK", "GEL", "RWF", "IRR", "TZS", "CNY", "VEF", "BDT", "HRK", "CLP", "THB", "XAF", "ARS", "UYU", "SZL", "KZT", "NOK", "KES", "PAB", "INR", "CZK", "MAD", "TWD", "PHP", "ZAR", "BOB", "CDF", "DASH", "VES", "ISK", "MWK", "BAM", "TTD", "XRP", "JOD", "RSD", "HNL", "BGN", "GTQ", "BWP", "XMR", "MMK", "QAR", "AOA", "KWD", "MUR", "WUSD", "WEUR", "WAVES", "WTRY", "LRD", "LSL", "LYD", "AWG", "MDL", "BTO", "EURS", "CHFT", "MKD", "MNT", "MOP", "MRO", "MVR", "VOLLAR", "CKUSD", "KHR", "VUV", "BITCNY", "QC", "BBD", "NAD", "NPR", "PGK", "PYG", "BIF", "BMD", "BND", "XLM", "BNB", "SCR", "BAT", "CRO", "HT", "KCS", "LEO", "LINK", "MKR", "NPXS", "OMG", "REP", "ZB", "ZIL", "ZRX", "BCH", "BZD", "CUP", "CVE", "DJF", "DZD", "ERN", "ETB", "FJD", "FKP", "BUSD", "ANCT", "ALL", "AMD", "ANG", "CNYX", "IQD", "UZS", "TND", "GGP", "XAU", "KGS", "GIP", "JMD", "ZEC", "USDP", "BSV", "EMC2", "SNT", "GTO", "POWR", "EUSD", "EURT", "BCY", "BTS", "ATM", "BLOCKPAY", "ARDR", "AMP", "B2X", "BITGOLD", "BITEUR", "ATB", "BITUSD", "AGRS", "DFXT", "HIKEN", "BIX", "KNC", "EOS", "COB", "COSS", "BMH", "NANO", "BDG", "BNT", "XVG", "LKK1Y", "LKK", "USDK", "EURN", "NZDT", "JSE", "GMD", "GNF", "GYD", "YER", "XPF", "HTG", "SLL", "SOS", "WST", "SVC", "SYP", "NEO", "KMF", "JUMP", "AYA", "BLAST", "WGR", "BCN", "BTG", "URALS", "INN", "USDQ", "CNH", "HUSD", "BKRW", "NZDX", "EURX", "CADX", "USDEX", "JPYX", "AUDX", "VNDC", "EON", "GBPX", "CHFX", "USDJ", "IDRT", "USDS", "USDN", "BIDR", "IDK", "BSD", "BTN", "KYD", "NIO", "SBD", "SDG", "SHP", "TOP", "XCD", "XCHF", "CNYT", "GYEN", "ZUSD", "GOLD", "TRX", "TRYB", "PLATC", "STRAX", "UST", "GLM", "VAI", "BRZ", "DDRST", "XAUT", "MIM"];
/**
 * currencies supported by the payment provider
 * Last updated: Date of commit
 */

const PROVIDER_SUPPORTED_FIAT_CURRENCIES = {
  // https://integrations.simplex.com/supported_currencies
  // https://support.moonpay.com/hc/en-gb/articles/360011931457-Which-fiat-currencies-are-supported-
  [PAYMENT_PROVIDER.MOONPAY]: ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "COP", "CZK", "DKK", "DOP", "EGP", "EUR", "GBP", "HKD", "HRK", "IDR", "ILS", "JPY", "JOD", "KES", "KRW", "KWD", "LKR", "MAD", "MXN", "MYR", "NGN", "NOK", "NZD", "OMR", "PEN", "PKR", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD", "VND", "ZAR"],

  /**
   * https://docs.sendwyre.com/docs/supported-currencies#fiat
   * The ones where credit card is supported
   */
  [PAYMENT_PROVIDER.WYRE]: ["USD", "EUR", "GBP", "AUD", "CAD", "NZD", "ARS", "BRL", "CHF", "CLP", "COP", "CZK", "DKK", "HKD", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "PHP", "PLN", "SEK", "THB", "VND", "ZAR"],
  // https://support.ramp.network/en/articles/471-why-am-i-paying-in-usd-eur-gbp
  [PAYMENT_PROVIDER.RAMPNETWORK]: ["USD", "EUR", "GBP"],
  // From https://xanpool.com/ fiat select dropdown
  [PAYMENT_PROVIDER.XANPOOL]: ["SGD", "HKD", "THB", "PHP", "INR", "IDR", "MYR", "AUD", "NZD", "KRW"],
  // https://support.aax.com/en/articles/5295762-mercuryo
  // RUB / UAH currently not supported
  [PAYMENT_PROVIDER.MERCURYO]: ["EUR", "USD", "GBP", "TRY", "JPY", "BRL", "NGN", "VND", "MXN", "KRW"],

  /**
   * https://support.transak.com/hc/en-us/articles/360020615578-Credit-and-Debit-Card-Payments-through-Transak
   * or
   * https://transak.stoplight.io/docs/transak-docs/b3A6OTk1ODQ0-2-get-fiat-currencies
   */
  [PAYMENT_PROVIDER.TRANSAK]: ["ARS", "AUD", "BBD", "BGN", "BMD", "BRL", "CAD", "CHF", "CLP", "CRC", "CZK", "DKK", "DOP", "EUR", "FJD", "FKP", "GBP", "GIP", "HRK", "HUF", "IDR", "ILS", "ISK", "JMD", "JPY", "KES", "KRW", "MDL", "MXN", "MYR", "NOK", "NZD", "PEN", "PHP", "PLN", "PYG", "RON", "SEK", "SGD", "THB", "TRY", "TZS", "USD", "ZAR"]
};
const cryptoCompareCurrenciesSet = new Set(CRYPTO_COMPARE_CURRENCIES);
/**
 * Fiat currencies that we support
 */

function supportedFiatCurrencies(provider) {
  const providerSupportedFiatCurrencies = PROVIDER_SUPPORTED_FIAT_CURRENCIES[provider];
  return providerSupportedFiatCurrencies.filter(currency => cryptoCompareCurrenciesSet.has(currency));
}
;// CONCATENATED MODULE: ./src/config.ts


const paymentProviders = {
  [PAYMENT_PROVIDER.MOONPAY]: {
    line1: "Credit/ Debit Card/ Apple Pay",
    line2: "4.5% or 5 USD",
    line3: "2,000???/day, 10,000???/mo",
    supportPage: "https://help.moonpay.io/en/",
    minOrderValue: 24.99,
    maxOrderValue: 50_000,
    validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.MOONPAY),
    validCryptoCurrenciesByChain: {
      [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [{
        value: "aave",
        display: "AAVE"
      }, {
        value: "bat",
        display: "BAT"
      }, {
        value: "dai",
        display: "DAI"
      }, {
        value: "eth",
        display: "ETH"
      }, {
        value: "mkr",
        display: "MKR"
      }, {
        value: "matic",
        display: "MATIC"
      }, {
        value: "usdt",
        display: "USDT"
      }, {
        value: "usdc",
        display: "USDC"
      }],
      [SUPPORTED_PAYMENT_NETWORK.MATIC]: [{
        value: "eth_polygon",
        display: "ETH"
      }, {
        value: "matic_polygon",
        display: "MATIC"
      }, {
        value: "usdc_polygon",
        display: "USDC"
      }],
      [SUPPORTED_PAYMENT_NETWORK.BSC_MAINNET]: [{
        value: "bnb_bsc",
        display: "BNB"
      }, {
        value: "busd_bsc",
        display: "BUSD"
      }],
      [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [{
        value: "avax_cchain",
        display: "AVAX"
      }]
    },
    includeFees: true,
    api: true,
    enforceMax: false
  },
  [PAYMENT_PROVIDER.WYRE]: {
    line1: "Apple Pay/ Debit/ Credit Card",
    line2: "4.9% + 30?? or 5 USD",
    line3: "$250/day",
    supportPage: "https://support.sendwyre.com/en/",
    minOrderValue: 5,
    maxOrderValue: 500,
    validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.WYRE),
    validCryptoCurrenciesByChain: {
      [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [{
        value: "AAVE",
        display: "AAVE"
      }, {
        value: "BAT",
        display: "BAT"
      }, {
        value: "BUSD",
        display: "BUSD"
      }, {
        value: "DAI",
        display: "DAI"
      }, {
        value: "ETH",
        display: "ETH"
      }, {
        value: "MKR",
        display: "MKR"
      }, {
        value: "UNI",
        display: "UNI"
      }, {
        value: "USDC",
        display: "USDC"
      }, {
        value: "USDT",
        display: "USDT"
      }],
      [SUPPORTED_PAYMENT_NETWORK.MATIC]: [{
        value: "MUSDC",
        display: "USDC"
      }],
      // AVAXC? or AVAX?
      [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [{
        value: "AVAXC",
        display: "AVAXC"
      }]
    },
    includeFees: false,
    api: true,
    enforceMax: false
  },
  [PAYMENT_PROVIDER.RAMPNETWORK]: {
    line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
    line2: "0.49% - 2.9%",
    line3: "5,000???/purchase, 20,000???/mo",
    supportPage: "https://instant.ramp.network/",
    minOrderValue: 50,
    maxOrderValue: 20_000,
    validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.RAMPNETWORK),
    validCryptoCurrenciesByChain: {
      [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [{
        value: "ETH",
        display: "ETH"
      }, {
        value: "DAI",
        display: "DAI"
      }, {
        value: "USDC",
        display: "USDC"
      }, {
        value: "USDT",
        display: "USDT"
      }],
      [SUPPORTED_PAYMENT_NETWORK.MATIC]: [{
        value: "MATIC_DAI",
        display: "DAI"
      }, {
        value: "MATIC_MATIC",
        display: "MATIC"
      }, {
        value: "MATIC_USDC",
        display: "USDC"
      }],
      // what about AVAXC?
      [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [{
        value: "AVAX",
        display: "AVAX"
      }] // Temporary unavailable
      // [SUPPORTED_PAYMENT_NETWORK.XDAI]: [{ value: 'XDAI_XDAI', display: 'XDAI' }],

    },
    includeFees: true,
    api: true,
    receiveHint: "walletTopUp.receiveHintRamp",
    enforceMax: false
  },
  [PAYMENT_PROVIDER.XANPOOL]: {
    line1: "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow",
    line2: "2.5% buying, 3% selling",
    line3: "$2,500 / day",
    supportPage: "mailto:support@xanpool.com",
    minOrderValue: 100,
    maxOrderValue: 2500,
    validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.XANPOOL),
    validCryptoCurrenciesByChain: {
      [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [{
        value: "ETH",
        display: "ETH"
      }, {
        value: "USDT",
        display: "USDT"
      }]
    },
    includeFees: true,
    api: true,
    sell: true,
    enforceMax: false
  },
  [PAYMENT_PROVIDER.MERCURYO]: {
    line1: "Credit/ Debit Card/ Apple Pay",
    line2: "3.95% or 4 USD",
    line3: "10,000???/day, 25,000???/mo",
    supportPage: "mailto:support@mercuryo.io",
    minOrderValue: 30,
    maxOrderValue: 5000,
    validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.MERCURYO),
    validCryptoCurrenciesByChain: {
      [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [{
        value: "ETH",
        display: "ETH"
      }, {
        value: "BAT",
        display: "BAT"
      }, {
        value: "USDT",
        display: "USDT"
      }, {
        value: "DAI",
        display: "DAI"
      }],
      [SUPPORTED_PAYMENT_NETWORK.BSC_MAINNET]: [{
        value: "BNB",
        display: "BNB"
      }, {
        value: "BUSD",
        display: "BUSD"
      }, {
        value: "1INCH",
        display: "1INCH"
      }]
    },
    includeFees: true,
    api: true,
    enforceMax: false
  },
  [PAYMENT_PROVIDER.TRANSAK]: {
    line1: "Apple & Google Pay / Credit/Debit Card<br/>Bangkok Bank Mobile & iPay<br/>Bank Transfer (sepa/gbp) / SCB Mobile & Easy",
    line2: "0.99% - 5.5% or 5 USD",
    line3: "$5,000/day, $28,000/mo",
    supportPage: "https://support.transak.com/hc/en-US",
    minOrderValue: 30,
    maxOrderValue: 500,
    validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.TRANSAK),
    validCryptoCurrenciesByChain: {
      [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [{
        value: "AAVE",
        display: "AAVE"
      }, {
        value: "DAI",
        display: "DAI"
      }, {
        value: "ETH",
        display: "ETH"
      }, {
        value: "USDC",
        display: "USDC"
      }, {
        value: "USDT",
        display: "USDT"
      }],
      [SUPPORTED_PAYMENT_NETWORK.MATIC]: [{
        value: "AAVE",
        display: "AAVE"
      }, {
        value: "DAI",
        display: "DAI"
      }, {
        value: "MATIC",
        display: "MATIC"
      }, {
        value: "USDC",
        display: "USDC"
      }, {
        value: "USDT",
        display: "USDT"
      }, {
        value: "WETH",
        display: "WETH"
      }],
      [SUPPORTED_PAYMENT_NETWORK.BSC_MAINNET]: [{
        value: "BNB",
        display: "BNB"
      }, {
        value: "BUSD",
        display: "BUSD"
      }],
      [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [{
        value: "AVAX",
        display: "AVAX"
      }]
    },
    includeFees: true,
    enforceMax: true
  }
};
const translations = {
  en: {
    embed: {
      continue: "Continue",
      actionRequired: "Authorization required",
      pendingAction: "Click continue to proceed with your request in a popup",
      cookiesRequired: "Cookies Required",
      enableCookies: "Please enable cookies in your browser preferences to access Torus",
      clickHere: "More Info"
    }
  },
  de: {
    embed: {
      continue: "Fortsetzen",
      actionRequired: "Autorisierung erforderlich",
      pendingAction: "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
      cookiesRequired: "Cookies ben??tigt",
      enableCookies: "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
      clickHere: "Mehr Info"
    }
  },
  ja: {
    embed: {
      continue: "????????????",
      actionRequired: "?????????????????????",
      pendingAction: "????????????????????????????????????????????????????????????????????????????????????",
      cookiesRequired: "?????????????????????",
      enableCookies: "Torus??????????????????????????????????????????????????????Cookie?????????????????????????????????",
      clickHere: "????????????"
    }
  },
  ko: {
    embed: {
      continue: "????????????",
      actionRequired: "?????? ??????",
      pendingAction: "???????????? ????????? ??????????????? ????????? ??????????????????.",
      cookiesRequired: "?????? ??????",
      enableCookies: "???????????? ?????? ???????????? ????????? ??????????????? Torus??? ?????????????????????.",
      clickHere: "??? ?????? ??????"
    }
  },
  zh: {
    embed: {
      continue: "??????",
      actionRequired: "????????????",
      pendingAction: "???????????????????????????????????????????????????",
      cookiesRequired: "??????Cookie",
      enableCookies: "???????????????????????????????????????cookie?????????Torus???",
      clickHere: "????????????"
    }
  }
};
/* harmony default export */ const config = ({
  supportedVerifierList: Object.values(WALLET_VERIFIERS),
  paymentProviders,
  api: "https://api.tor.us",
  translations,
  prodTorusUrl: "",
  localStorageKeyPrefix: `torus-`
});
;// CONCATENATED MODULE: ./src/embedUtils.ts
const runOnLoad = fn => new Promise((resolve, reject) => {
  if (window.document.body != null) {
    Promise.resolve(fn()).then(resolve).catch(reject);
  } else {
    window.document.addEventListener("DOMContentLoaded", () => {
      Promise.resolve(fn()).then(resolve).catch(reject);
    });
  }
});
const runOnComplete = fn => {
  const retry = window.setInterval(() => {
    if (window.document.readyState === "complete") {
      window.clearInterval(retry);
      fn();
    }
  }, 300);
};
const htmlToElement = html => {
  const template = window.document.createElement("template");
  const trimmedHtml = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = trimmedHtml;
  return template.content.firstChild;
};
const handleEvent = function (handle, eventName, handler) {
  for (var _len = arguments.length, handlerArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    handlerArgs[_key - 3] = arguments[_key];
  }

  const handlerWrapper = () => {
    handler(...handlerArgs);
    handle.removeEventListener(eventName, handlerWrapper);
  };

  handle.addEventListener(eventName, handlerWrapper);
};
const handleStream = (handle, eventName, handler) => {
  const handlerWrapper = chunk => {
    handler(chunk);
    handle.removeListener(eventName, handlerWrapper);
  };

  handle.on(eventName, handlerWrapper);
};
async function documentReady() {
  return new Promise(resolve => {
    if (document.readyState !== "loading") {
      resolve();
    } else {
      handleEvent(document, "DOMContentLoaded", resolve);
    }
  });
}
;// CONCATENATED MODULE: external "@metamask/obs-store"
const obs_store_namespaceObject = require("@metamask/obs-store");
;// CONCATENATED MODULE: external "eth-rpc-errors"
const external_eth_rpc_errors_namespaceObject = require("eth-rpc-errors");
;// CONCATENATED MODULE: external "fast-deep-equal"
const external_fast_deep_equal_namespaceObject = require("fast-deep-equal");
var external_fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(external_fast_deep_equal_namespaceObject);
;// CONCATENATED MODULE: external "is-stream"
const external_is_stream_namespaceObject = require("is-stream");
;// CONCATENATED MODULE: external "pump"
const external_pump_namespaceObject = require("pump");
var external_pump_default = /*#__PURE__*/__webpack_require__.n(external_pump_namespaceObject);
;// CONCATENATED MODULE: external "loglevel"
const external_loglevel_namespaceObject = require("loglevel");
var external_loglevel_default = /*#__PURE__*/__webpack_require__.n(external_loglevel_namespaceObject);
;// CONCATENATED MODULE: ./src/loglevel.ts

/* harmony default export */ const loglevel = (external_loglevel_default().getLogger("torus-embed"));
;// CONCATENATED MODULE: ./src/messages.ts
/* harmony default export */ const messages = ({
  errors: {
    disconnected: () => "Torus: Lost connection to Torus.",
    permanentlyDisconnected: () => "Torus: Disconnected from iframe. Page reload required.",
    sendSiteMetadata: () => "Torus: Failed to send site metadata. This is an internal error, please report this bug.",
    unsupportedSync: method => `Torus: The Torus Ethereum provider does not support synchronous methods like ${method} without a callback parameter.`,
    invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
    invalidOptions: (maxEventListeners, shouldSendMetadata) => `Invalid options. Received: { maxEventListeners: ${maxEventListeners}, shouldSendMetadata: ${shouldSendMetadata} }`,
    invalidRequestArgs: () => `Expected a single, non-array, object argument.`,
    invalidRequestMethod: () => `'args.method' must be a non-empty string.`,
    invalidRequestParams: () => `'args.params' must be an object or array if provided.`,
    invalidLoggerObject: () => `'args.logger' must be an object if provided.`,
    invalidLoggerMethod: method => `'args.logger' must include required method '${method}'.`
  },
  info: {
    connected: chainId => `Torus: Connected to chain with ID "${chainId}".`
  },
  warnings: {
    // deprecated methods
    enableDeprecation: 'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. ' + 'Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
    sendDeprecation: 'Torus: "ethereum.send(...)" is deprecated and may be removed in the future.' + ' Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
    events: {
      close: 'Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.' + "\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
      data: 'Torus: The event "data" is deprecated and will be removed in the future.' + 'Use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message',
      networkChanged: 'Torus: The event "networkChanged" is deprecated and may be removed in the future.' + ' Please use "chainChanged" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
      notification: 'Torus: The event "notification" is deprecated and may be removed in the future. ' + 'Please use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193'
    },
    publicConfigStore: 'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.'
  }
});
;// CONCATENATED MODULE: ./src/utils.ts





const {
  paymentProviders: utils_paymentProviders
} = config;
const validatePaymentProvider = (provider, params) => {
  const errors = {};

  if (!provider) {
    return {
      errors,
      isValid: true
    };
  }

  if (provider && !utils_paymentProviders[provider]) {
    errors.provider = "Invalid Provider";
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  }

  const selectedProvider = utils_paymentProviders[provider];
  const selectedParams = params || {}; // set default values
  // if (!selectedParams.selectedCurrency) [selectedParams.selectedCurrency] = selectedProvider.validCurrencies
  // if (!selectedParams.fiatValue) selectedParams.fiatValue = selectedProvider.minOrderValue
  // if (!selectedParams.selectedCryptoCurrency) [selectedParams.selectedCryptoCurrency] = selectedProvider.validCryptoCurrencies
  // validations

  if (selectedParams.fiatValue) {
    const requestedOrderAmount = +parseFloat(selectedParams.fiatValue.toString()) || 0;
    if (requestedOrderAmount < selectedProvider.minOrderValue) errors.fiatValue = "Requested amount is lower than supported";
    if (requestedOrderAmount > selectedProvider.maxOrderValue && selectedProvider.enforceMax) errors.fiatValue = "Requested amount is higher than supported";
  }

  if (selectedParams.selectedCurrency && !selectedProvider.validCurrencies.includes(selectedParams.selectedCurrency)) {
    errors.selectedCurrency = "Unsupported currency";
  }

  if (selectedParams.selectedCryptoCurrency) {
    const validCryptoCurrenciesByChain = Object.values(selectedProvider.validCryptoCurrenciesByChain).flat().map(currency => currency.value);
    const finalCryptoCurrency = provider === PAYMENT_PROVIDER.MOONPAY ? selectedParams.selectedCryptoCurrency.toLowerCase() : selectedParams.selectedCryptoCurrency;
    if (validCryptoCurrenciesByChain && !validCryptoCurrenciesByChain.includes(finalCryptoCurrency)) errors.selectedCryptoCurrency = "Unsupported cryptoCurrency";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}; // utility functions

/**
 * json-rpc-engine middleware that logs RPC errors and and validates req.method.
 *
 * @param log - The logging API to use.
 * @returns  json-rpc-engine middleware function
 */

function createErrorMiddleware() {
  return (req, res, next) => {
    // json-rpc-engine will terminate the request when it notices this error
    if (typeof req.method !== "string" || !req.method) {
      res.error = external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidRequest({
        message: `The request 'method' must be a non-empty string.`,
        data: req
      });
    }

    next(done => {
      const {
        error
      } = res;

      if (!error) {
        return done();
      }

      loglevel.error(`MetaMask - RPC Error: ${error.message}`, error);
      return done();
    });
  };
} // resolve response.result or response, reject errors

const getRpcPromiseCallback = function (resolve, reject) {
  let unwrapResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return (error, response) => {
    if (error || response.error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      reject(error || response.error);
    } else {
      resolve(!unwrapResult || Array.isArray(response) ? response : response.result);
    }
  };
};
/**
 * Logs a stream disconnection error. Emits an 'error' if given an
 * EventEmitter that has listeners for the 'error' event.
 *
 * @param log - The logging API to use.
 * @param remoteLabel - The label of the disconnected stream.
 * @param error - The associated error to log.
 * @param emitter - The logging API to use.
 */

function logStreamDisconnectWarning(remoteLabel, error, emitter) {
  let warningMsg = `MetaMask: Lost connection to "${remoteLabel}".`;

  if (error !== null && error !== void 0 && error.stack) {
    warningMsg += `\n${error.stack}`;
  }

  loglevel.warn(warningMsg);

  if (emitter && emitter.listenerCount("error") > 0) {
    emitter.emit("error", warningMsg);
  }
}
const getPreopenInstanceId = () => Math.random().toString(36).slice(2);
const getTorusUrl = async (buildEnv, integrity) => {
  let torusUrl;
  let logLevel; // Do not change this line

  const version = "1.0.4";
  let versionUsed = integrity.version || version;

  try {
    if ((buildEnv === "binance" || buildEnv === "production") && !integrity.version) {
      let response;
      if (!config.prodTorusUrl) response = await (0,http_helpers_namespaceObject.get)(`${config.api}/latestversion?name=@toruslabs/torus-embed&version=${version}`, {}, {
        useAPIKey: true
      });else response = {
        data: config.prodTorusUrl
      };
      versionUsed = response.data; // eslint-disable-next-line require-atomic-updates

      config.prodTorusUrl = response.data;
    }
  } catch (error) {
    loglevel.error(error, "unable to fetch latest version");
  }

  loglevel.info("version used: ", versionUsed);

  switch (buildEnv) {
    case "binance":
      torusUrl = `https://binance.tor.us/v${versionUsed}`;
      logLevel = "info";
      break;

    case "testing":
      torusUrl = "https://wallet-mobile.dev.upbond.io/";
      logLevel = "debug";
      break;

    case "bnb":
      torusUrl = "https://bnb.tor.us";
      logLevel = "error";
      break;

    case "polygon":
      torusUrl = "https://polygon.tor.us";
      logLevel = "error";
      break;

    case "lrc":
      torusUrl = "https://lrc.tor.us";
      logLevel = "debug";
      break;

    case "beta":
      torusUrl = "https://beta.tor.us";
      logLevel = "debug";
      break;

    case "development":
      torusUrl = "http://localhost:3000";
      logLevel = "debug";
      break;

    default:
      torusUrl = `https://wallet.upbond.io/`;
      logLevel = "error";
      break;
  }

  return {
    torusUrl,
    logLevel
  };
};
const getUserLanguage = () => {
  let userLanguage = window.navigator.language || "en-US";
  const userLanguages = userLanguage.split("-");
  userLanguage = Object.prototype.hasOwnProperty.call(config.translations, userLanguages[0]) ? userLanguages[0] : "en";
  return userLanguage;
};
const EMITTED_NOTIFICATIONS = ["eth_subscription" // per eth-json-rpc-filters/subscriptionManager
];
const NOOP = () => {// empty function
};
const FEATURES_PROVIDER_CHANGE_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
const FEATURES_DEFAULT_WALLET_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315";
const FEATURES_DEFAULT_POPUP_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=1200";
const FEATURES_CONFIRM_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
function getPopupFeatures() {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  const w = 1200;
  const h = 700;
  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
  const systemZoom = 1; // No reliable estimate

  const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
  const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
  const features = `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${h / systemZoom},width=${w / systemZoom},top=${top},left=${left}`;
  return features;
}
;// CONCATENATED MODULE: ./src/inpage-provider.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










openlogin_jrpc_namespaceObject.SafeEventEmitter.defaultMaxListeners = 100; // resolve response.result, reject errors

const inpage_provider_getRpcPromiseCallback = function (resolve, reject) {
  let unwrapResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return (error, response) => {
    if (error || response.error) {
      return reject(error || response.error);
    }

    return !unwrapResult || Array.isArray(response) ? resolve(response) : resolve(response.result);
  };
};

class TorusInpageProvider extends openlogin_jrpc_namespaceObject.SafeEventEmitter {
  /**
   * The chain ID of the currently connected Ethereum chain.
   * See [chainId.network]{@link https://chainid.network} for more information.
   */

  /**
   * The user's currently selected Ethereum address.
   * If null, MetaMask is either locked or the user has not permitted any
   * addresses to be viewed.
   */

  /**
   * Indicating that this provider is a MetaMask provider.
   */
  constructor(connectionStream) {
    let {
      maxEventListeners = 100,
      shouldSendMetadata = true,
      jsonRpcStreamName = "provider"
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();

    defineProperty_default()(this, "chainId", void 0);

    defineProperty_default()(this, "selectedAddress", void 0);

    defineProperty_default()(this, "_rpcEngine", void 0);

    defineProperty_default()(this, "networkVersion", void 0);

    defineProperty_default()(this, "shouldSendMetadata", void 0);

    defineProperty_default()(this, "isTorus", void 0);

    defineProperty_default()(this, "_publicConfigStore", void 0);

    defineProperty_default()(this, "tryPreopenHandle", void 0);

    defineProperty_default()(this, "enable", void 0);

    defineProperty_default()(this, "_state", void 0);

    defineProperty_default()(this, "_jsonRpcConnection", void 0);

    defineProperty_default()(this, "_sentWarnings", {
      // methods
      enable: false,
      experimentalMethods: false,
      send: false,
      publicConfigStore: false,
      // events
      events: {
        close: false,
        data: false,
        networkChanged: false,
        notification: false
      }
    });

    if (!(0,external_is_stream_namespaceObject.duplex)(connectionStream)) {
      throw new Error(messages.errors.invalidDuplexStream());
    }

    this.isTorus = true;
    this.setMaxListeners(maxEventListeners); // private state

    this._state = _objectSpread({}, TorusInpageProvider._defaultState); // public state

    this.selectedAddress = null;
    this.networkVersion = null;
    this.chainId = null;
    this.shouldSendMetadata = shouldSendMetadata; // bind functions (to prevent e.g. web3@1.x from making unbound calls)

    this._handleAccountsChanged = this._handleAccountsChanged.bind(this);
    this._handleChainChanged = this._handleChainChanged.bind(this);
    this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this);
    this._handleConnect = this._handleConnect.bind(this);
    this._handleDisconnect = this._handleDisconnect.bind(this);
    this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
    this._sendSync = this._sendSync.bind(this);
    this._rpcRequest = this._rpcRequest.bind(this);
    this._warnOfDeprecation = this._warnOfDeprecation.bind(this);
    this._initializeState = this._initializeState.bind(this);
    this.request = this.request.bind(this);
    this.send = this.send.bind(this);
    this.sendAsync = this.sendAsync.bind(this); // this.enable = this.enable.bind(this);
    // setup connectionStream multiplexing

    const mux = new openlogin_jrpc_namespaceObject.ObjectMultiplex();
    external_pump_default()(connectionStream, mux, connectionStream, this._handleStreamDisconnect.bind(this, "MetaMask")); // subscribe to metamask public config (one-way)

    this._publicConfigStore = new obs_store_namespaceObject.ObservableStore({
      storageKey: "Metamask-Config"
    }); // handle isUnlocked changes, and chainChanged and networkChanged events
    // this._publicConfigStore.subscribe((stringifiedState) => {
    //   // This is because we are using store as string
    //   const state = JSON.parse(stringifiedState as unknown as string);
    //   if ("isUnlocked" in state && state.isUnlocked !== this._state.isUnlocked) {
    //     this._state.isUnlocked = state.isUnlocked;
    //     if (!this._state.isUnlocked) {
    //       // accounts are never exposed when the extension is locked
    //       this._handleAccountsChanged([]);
    //     } else {
    //       // this will get the exposed accounts, if any
    //       try {
    //         this._rpcRequest(
    //           { method: "eth_accounts", params: [] },
    //           NOOP,
    //           true // indicating that eth_accounts _should_ update accounts
    //         );
    //       } catch (_) {
    //         // Swallow error
    //       }
    //     }
    //   }
    //   if ("selectedAddress" in state && this.selectedAddress !== state.selectedAddress) {
    //     try {
    //       this._rpcRequest(
    //         { method: "eth_accounts", params: [] },
    //         NOOP,
    //         true // indicating that eth_accounts _should_ update accounts
    //       );
    //     } catch (_) {
    //       // Swallow error
    //     }
    //   }
    //   // Emit chainChanged event on chain change
    //   if ("chainId" in state && state.chainId !== this.chainId) {
    //     this.chainId = state.chainId || null;
    //     this.emit("chainChanged", this.chainId);
    //     // indicate that we've connected, for EIP-1193 compliance
    //     // we do this here so that iframe can initialize
    //     if (!this._state.hasEmittedConnection) {
    //       this._handleConnect(this.chainId);
    //       this._state.hasEmittedConnection = true;
    //     }
    //   }
    //   // Emit networkChanged event on network change
    //   if ("networkVersion" in state && state.networkVersion !== this.networkVersion) {
    //     this.networkVersion = state.networkVersion || null;
    //     this.emit("networkChanged", this.networkVersion);
    //   }
    // });

    external_pump_default()(mux.createStream("publicConfig"), (0,obs_store_namespaceObject.storeAsStream)(this._publicConfigStore), // RPC requests should still work if only this stream fails
    logStreamDisconnectWarning.bind(this, "MetaMask PublicConfigStore")); // ignore phishing warning message (handled elsewhere)

    mux.ignoreStream("phishing"); // setup own event listeners
    // EIP-1193 connect

    this.on("connect", () => {
      this._state.isConnected = true;
    }); // connect to async provider

    const jsonRpcConnection = (0,openlogin_jrpc_namespaceObject.createStreamMiddleware)();
    external_pump_default()(jsonRpcConnection.stream, mux.createStream(jsonRpcStreamName), jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")); // handle RPC requests via dapp-side rpc engine

    const rpcEngine = new openlogin_jrpc_namespaceObject.JRPCEngine();
    rpcEngine.push((0,openlogin_jrpc_namespaceObject.createIdRemapMiddleware)());
    rpcEngine.push(createErrorMiddleware());
    rpcEngine.push(jsonRpcConnection.middleware);
    this._rpcEngine = rpcEngine; // json rpc notification listener

    jsonRpcConnection.events.on("notification", payload => {
      const {
        method,
        params
      } = payload;

      if (method === "wallet_accountsChanged") {
        this._handleAccountsChanged(params);
      } else if (method === "wallet_unlockStateChanged") {
        this._handleUnlockStateChanged(params);
      } else if (method === "wallet_chainChanged") {
        this._handleChainChanged(params);
      } else if (EMITTED_NOTIFICATIONS.includes(payload.method)) {
        // EIP 1193 subscriptions, per eth-json-rpc-filters/subscriptionManager
        this.emit("data", payload); // deprecated

        this.emit("notification", params.result);
        this.emit("message", {
          type: method,
          data: params
        });
      } // Backward compatibility for older non EIP 1193 subscriptions
      // this.emit('data', null, payload)

    });
  }

  get publicConfigStore() {
    if (!this._sentWarnings.publicConfigStore) {
      loglevel.warn(messages.warnings.publicConfigStore);
      this._sentWarnings.publicConfigStore = true;
    }

    return this._publicConfigStore;
  }
  /**
   * Returns whether the inpage provider is connected to Torus.
   */


  isConnected() {
    return this._state.isConnected;
  }
  /**
   * Submits an RPC request for the given method, with the given params.
   * Resolves with the result of the method call, or rejects on error.
   *
   * @param args - The RPC request arguments.
   * @returns A Promise that resolves with the result of the RPC method,
   * or rejects if an error is encountered.
   */


  async request(args) {
    if (!args || typeof args !== "object" || Array.isArray(args)) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidRequest({
        message: messages.errors.invalidRequestArgs(),
        data: args
      });
    }

    const {
      method,
      params
    } = args;

    if (typeof method !== "string" || method.length === 0) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidRequest({
        message: messages.errors.invalidRequestMethod(),
        data: args
      });
    }

    if (params !== undefined && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidRequest({
        message: messages.errors.invalidRequestParams(),
        data: args
      });
    }

    return new Promise((resolve, reject) => {
      this._rpcRequest({
        method,
        params
      }, inpage_provider_getRpcPromiseCallback(resolve, reject));
    });
  }
  /**
   * Submits an RPC request per the given JSON-RPC request object.
   *
   * @param payload - The RPC request object.
   * @param cb - The callback function.
   */


  sendAsync(payload, callback) {
    this._rpcRequest(payload, callback);
  }
  /**
   * We override the following event methods so that we can warn consumers
   * about deprecated events:
   *   addListener, on, once, prependListener, prependOnceListener
   */


  addListener(eventName, listener) {
    this._warnOfDeprecation(eventName);

    return super.addListener(eventName, listener);
  }

  on(eventName, listener) {
    this._warnOfDeprecation(eventName);

    return super.on(eventName, listener);
  }

  once(eventName, listener) {
    this._warnOfDeprecation(eventName);

    return super.once(eventName, listener);
  }

  prependListener(eventName, listener) {
    this._warnOfDeprecation(eventName);

    return super.prependListener(eventName, listener);
  }

  prependOnceListener(eventName, listener) {
    this._warnOfDeprecation(eventName);

    return super.prependOnceListener(eventName, listener);
  } // Private Methods
  //= ===================

  /**
   * Constructor helper.
   * Populates initial state by calling 'wallet_getProviderState' and emits
   * necessary events.
   */


  async _initializeState() {
    try {
      const {
        accounts,
        chainId,
        isUnlocked,
        networkVersion
      } = await this.request({
        method: "wallet_getProviderState"
      }); // indicate that we've connected, for EIP-1193 compliance

      this.emit("connect", {
        chainId
      });

      this._handleChainChanged({
        chainId,
        networkVersion
      });

      this._handleUnlockStateChanged({
        accounts,
        isUnlocked
      });

      this._handleAccountsChanged(accounts);
    } catch (error) {
      loglevel.error("MetaMask: Failed to get initial state. Please report this bug.", error);
    } finally {
      loglevel.info("initialized state");
      this._state.initialized = true;
      this.emit("_initialized");
    }
  }
  /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound.
   *
   * @param payload - The RPC request object.
   * @param callback - The consumer's callback.
   * @param isInternal - false - Whether the request is internal.
   */


  _rpcRequest(payload, callback) {
    let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let cb = callback;
    const _payload = payload;

    if (!Array.isArray(_payload)) {
      if (!_payload.jsonrpc) {
        _payload.jsonrpc = "2.0";
      }

      if (_payload.method === "eth_accounts" || _payload.method === "eth_requestAccounts") {
        // handle accounts changing
        cb = (err, res) => {
          this._handleAccountsChanged(res.result || [], _payload.method === "eth_accounts", isInternal);

          callback(err, res);
        };
      } else if (_payload.method === "wallet_getProviderState") {
        this._rpcEngine.handle(payload, cb);

        return;
      }
    }

    this.tryPreopenHandle(_payload, cb);
  }
  /**
   * Submits an RPC request for the given method, with the given params.
   *
   * @deprecated Use "request" instead.
   * @param method - The method to request.
   * @param params - Any params for the method.
   * @returns A Promise that resolves with the JSON-RPC response object for the
   * request.
   */


  send(methodOrPayload, callbackOrArgs) {
    if (!this._sentWarnings.send) {
      loglevel.warn(messages.warnings.sendDeprecation);
      this._sentWarnings.send = true;
    }

    if (typeof methodOrPayload === "string" && (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
      return new Promise((resolve, reject) => {
        try {
          this._rpcRequest({
            method: methodOrPayload,
            params: callbackOrArgs
          }, inpage_provider_getRpcPromiseCallback(resolve, reject, false));
        } catch (error) {
          reject(error);
        }
      });
    }

    if (methodOrPayload && typeof methodOrPayload === "object" && typeof callbackOrArgs === "function") {
      return this._rpcRequest(methodOrPayload, callbackOrArgs);
    }

    return this._sendSync(methodOrPayload);
  }
  /**
   * DEPRECATED.
   * Internal backwards compatibility method, used in send.
   */


  _sendSync(payload) {
    let result;

    switch (payload.method) {
      case "eth_accounts":
        result = this.selectedAddress ? [this.selectedAddress] : [];
        break;

      case "eth_coinbase":
        result = this.selectedAddress || null;
        break;

      case "eth_uninstallFilter":
        this._rpcRequest(payload, NOOP);

        result = true;
        break;

      case "net_version":
        result = this.networkVersion || null;
        break;

      default:
        throw new Error(messages.errors.unsupportedSync(payload.method));
    }

    return {
      id: payload.id,
      jsonrpc: payload.jsonrpc,
      result
    };
  }
  /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param chainId - The ID of the newly connected chain.
   * emits MetaMaskInpageProvider#connect
   */


  _handleConnect(chainId) {
    if (!this._state.isConnected) {
      this._state.isConnected = true;
      this.emit("connect", {
        chainId
      });
      loglevel.debug(messages.info.connected(chainId));
    }
  }
  /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * emits MetaMaskInpageProvider#disconnect
   */


  _handleDisconnect(isRecoverable, errorMessage) {
    if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !isRecoverable) {
      this._state.isConnected = false;
      let error;

      if (isRecoverable) {
        error = new external_eth_rpc_errors_namespaceObject.EthereumRpcError(1013, // Try again later
        errorMessage || messages.errors.disconnected());
        loglevel.debug(error);
      } else {
        error = new external_eth_rpc_errors_namespaceObject.EthereumRpcError(1011, // Internal error
        errorMessage || messages.errors.permanentlyDisconnected());
        loglevel.error(error);
        this.chainId = null;
        this._state.accounts = null;
        this.selectedAddress = null;
        this._state.isUnlocked = false;
        this._state.isPermanentlyDisconnected = true;
      }

      this.emit("disconnect", error);
    }
  }
  /**
   * Called when connection is lost to critical streams.
   *
   * emits MetamaskInpageProvider#disconnect
   */


  _handleStreamDisconnect(streamName, error) {
    logStreamDisconnectWarning(streamName, error, this);

    this._handleDisconnect(false, error ? error.message : undefined);
  }
  /**
   * Called when accounts may have changed.
   */


  _handleAccountsChanged(accounts) {
    let isEthAccounts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // defensive programming
    let finalAccounts = accounts;

    if (!Array.isArray(finalAccounts)) {
      loglevel.error("MetaMask: Received non-array accounts parameter. Please report this bug.", finalAccounts);
      finalAccounts = [];
    }

    for (const account of accounts) {
      if (typeof account !== "string") {
        loglevel.error("MetaMask: Received non-string account. Please report this bug.", accounts);
        finalAccounts = [];
        break;
      }
    } // emit accountsChanged if anything about the accounts array has changed


    if (!external_fast_deep_equal_default()(this._state.accounts, finalAccounts)) {
      // we should always have the correct accounts even before eth_accounts
      // returns, except in cases where isInternal is true
      if (isEthAccounts && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !isInternal) {
        loglevel.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', finalAccounts);
      }

      this._state.accounts = finalAccounts;
      this.emit("accountsChanged", finalAccounts);
    } // handle selectedAddress


    if (this.selectedAddress !== finalAccounts[0]) {
      this.selectedAddress = finalAccounts[0] || null;
    }
  }
  /**
   * Upon receipt of a new chainId and networkVersion, emits corresponding
   * events and sets relevant public state.
   * Does nothing if neither the chainId nor the networkVersion are different
   * from existing values.
   *
   * emits MetamaskInpageProvider#chainChanged
   * @param networkInfo - An object with network info.
   */


  _handleChainChanged() {
    let {
      chainId,
      networkVersion
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!chainId || !networkVersion) {
      loglevel.error("MetaMask: Received invalid network parameters. Please report this bug.", {
        chainId,
        networkVersion
      });
      return;
    }

    if (networkVersion === "loading") {
      this._handleDisconnect(true);
    } else {
      this._handleConnect(chainId);

      if (chainId !== this.chainId) {
        this.chainId = chainId;

        if (this._state.initialized) {
          this.emit("chainChanged", this.chainId);
        }
      }
    }
  }
  /**
   * Upon receipt of a new isUnlocked state, sets relevant public state.
   * Calls the accounts changed handler with the received accounts, or an empty
   * array.
   *
   * Does nothing if the received value is equal to the existing value.
   * There are no lock/unlock events.
   *
   * @param opts - Options bag.
   */


  _handleUnlockStateChanged() {
    let {
      accounts,
      isUnlocked
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (typeof isUnlocked !== "boolean") {
      loglevel.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", {
        isUnlocked
      });
      return;
    }

    if (isUnlocked !== this._state.isUnlocked) {
      this._state.isUnlocked = isUnlocked;

      this._handleAccountsChanged(accounts || []);
    }
  }
  /**
   * Warns of deprecation for the given event, if applicable.
   */


  _warnOfDeprecation(eventName) {
    if (this._sentWarnings.events[eventName] === false) {
      loglevel.warn(messages.warnings.events[eventName]);
      this._sentWarnings.events[eventName] = true;
    }
  }

}

defineProperty_default()(TorusInpageProvider, "_defaultState", {
  accounts: null,
  isConnected: false,
  isUnlocked: false,
  initialized: false,
  isPermanentlyDisconnected: false,
  hasEmittedConnection: false
});

/* harmony default export */ const inpage_provider = (TorusInpageProvider);
;// CONCATENATED MODULE: external "create-hash"
const external_create_hash_namespaceObject = require("create-hash");
var external_create_hash_default = /*#__PURE__*/__webpack_require__.n(external_create_hash_namespaceObject);
;// CONCATENATED MODULE: ./src/integrity.ts


const defaults = options => ({
  algorithms: options.algorithms || ["sha256"],
  delimiter: options.delimiter || " ",
  full: options.full || false
}); // Generate list of hashes


const hashes = (options, data) => {
  const internalHashes = {};
  options.algorithms.forEach(algorithm => {
    internalHashes[algorithm] = external_create_hash_default()(algorithm).update(data, "utf8").digest("base64");
  });
  return internalHashes;
}; // Build an integrity string


const integrity = (options, sri) => {
  let output = ""; // Hash list

  output += Object.keys(sri.hashes).map(algorithm => `${algorithm}-${sri.hashes[algorithm]}`).join(options.delimiter);
  return output;
};

const main = (options, data) => {
  // Defaults
  const finalOptions = defaults(options);
  const sri = {
    hashes: hashes(finalOptions, data),
    integrity: undefined
  };
  sri.integrity = integrity(finalOptions, sri);
  return finalOptions.full ? sri : sri.integrity;
};

/* harmony default export */ const src_integrity = (main);
;// CONCATENATED MODULE: external "events"
const external_events_namespaceObject = require("events");
;// CONCATENATED MODULE: ./src/PopupHandler.ts




class PopupHandler extends external_events_namespaceObject.EventEmitter {
  constructor(_ref) {
    let {
      url,
      target,
      features
    } = _ref;
    super();

    defineProperty_default()(this, "url", void 0);

    defineProperty_default()(this, "target", void 0);

    defineProperty_default()(this, "features", void 0);

    defineProperty_default()(this, "window", void 0);

    defineProperty_default()(this, "windowTimer", void 0);

    defineProperty_default()(this, "iClosedWindow", void 0);

    this.url = url;
    this.target = target || "_blank";
    this.features = features || getPopupFeatures();
    this.window = undefined;
    this.windowTimer = undefined;
    this.iClosedWindow = false;

    this._setupTimer();
  }

  _setupTimer() {
    this.windowTimer = Number(setInterval(() => {
      if (this.window && this.window.closed) {
        clearInterval(this.windowTimer);

        if (!this.iClosedWindow) {
          this.emit("close");
        }

        this.iClosedWindow = false;
        this.window = undefined;
      }

      if (this.window === undefined) clearInterval(this.windowTimer);
    }, 500));
  }

  open() {
    var _this$window;

    this.window = window.open(this.url.href, this.target, this.features);
    if ((_this$window = this.window) !== null && _this$window !== void 0 && _this$window.focus) this.window.focus();
    return Promise.resolve();
  }

  close() {
    this.iClosedWindow = true;
    if (this.window) this.window.close();
  }

  redirect(locationReplaceOnRedirect) {
    if (locationReplaceOnRedirect) {
      window.location.replace(this.url.href);
    } else {
      window.location.href = this.url.href;
    }
  }

}

/* harmony default export */ const src_PopupHandler = (PopupHandler);
;// CONCATENATED MODULE: ./src/siteMetadata.ts



/**
 * Returns whether the given image URL exists
 * @param url - the url of the image
 * @returns - whether the image exists
 */

function imgExists(url) {
  return new Promise((resolve, reject) => {
    try {
      const img = document.createElement("img");

      img.onload = () => resolve(true);

      img.onerror = () => resolve(false);

      img.src = url;
    } catch (e) {
      reject(e);
    }
  });
}
/**
 * Extracts a name for the site from the DOM
 */


const getSiteName = window => {
  const {
    document
  } = window;
  const siteName = document.querySelector('head > meta[property="og:site_name"]');

  if (siteName) {
    return siteName.content;
  }

  const metaTitle = document.querySelector('head > meta[name="title"]');

  if (metaTitle) {
    return metaTitle.content;
  }

  if (document.title && document.title.length > 0) {
    return document.title;
  }

  return window.location.hostname;
};
/**
 * Extracts an icon for the site from the DOM
 */


async function getSiteIcon(window) {
  const {
    document
  } = window; // Use the site's favicon if it exists

  let icon = document.querySelector('head > link[rel="shortcut icon"]');

  if (icon && (await imgExists(icon.href))) {
    return icon.href;
  } // Search through available icons in no particular order


  icon = Array.from(document.querySelectorAll('head > link[rel="icon"]')).find(_icon => Boolean(_icon.href));

  if (icon && (await imgExists(icon.href))) {
    return icon.href;
  }

  return null;
}
/**
 * Gets site metadata and returns it
 *
 */


const getSiteMetadata = async () => ({
  name: getSiteName(window),
  icon: await getSiteIcon(window)
});
/**
 * Sends site metadata over an RPC request.
 */


async function sendSiteMetadata(engine) {
  try {
    const domainMetadata = await getSiteMetadata(); // call engine.handle directly to avoid normal RPC request handling

    engine.handle({
      jsonrpc: "2.0",
      id: getPreopenInstanceId(),
      method: "wallet_sendDomainMetadata",
      params: domainMetadata
    }, NOOP);
  } catch (error) {
    loglevel.error({
      message: messages.errors.sendSiteMetadata(),
      originalError: error
    });
  }
}
;// CONCATENATED MODULE: ./src/embed.ts


const _excluded = ["host", "chainId", "networkName"];

function embed_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function embed_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? embed_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : embed_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













const defaultVerifiers = {
  [LOGIN_PROVIDER.GOOGLE]: true,
  [LOGIN_PROVIDER.FACEBOOK]: true,
  [LOGIN_PROVIDER.REDDIT]: true,
  [LOGIN_PROVIDER.TWITCH]: true,
  [LOGIN_PROVIDER.DISCORD]: true
};
const iframeIntegrity = "sha384-RhqFseQpufEgNnJYPxNXx+EmyE55iWEWJwkgS7QX/pit6STKFZRf9K9kwmfpDIPw";
const expectedCacheControlHeader = "max-age=3600";
const UNSAFE_METHODS = ["eth_sendTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "eth_getEncryptionPublicKey", "eth_decrypt"]; // preload for iframe doesn't work https://bugs.chromium.org/p/chromium/issues/detail?id=593267

(async function preLoadIframe() {
  try {
    if (typeof document === "undefined") return;
    const torusIframeHtml = document.createElement("link");
    const {
      torusUrl
    } = await getTorusUrl("production", {
      check: false,
      hash: iframeIntegrity,
      version: ""
    });
    torusIframeHtml.href = `${torusUrl}/popup`;
    torusIframeHtml.crossOrigin = "anonymous";
    torusIframeHtml.type = "text/html";
    torusIframeHtml.rel = "prefetch";

    if (torusIframeHtml.relList && torusIframeHtml.relList.supports) {
      if (torusIframeHtml.relList.supports("prefetch")) {
        document.head.appendChild(torusIframeHtml);
      }
    }
  } catch (error) {
    loglevel.warn(error);
  }
})();

class Torus {
  constructor() {
    let {
      buttonPosition = BUTTON_POSITION.BOTTOM_LEFT,
      buttonSize = 56,
      modalZIndex = 99999,
      apiKey = "torus-default"
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    defineProperty_default()(this, "buttonPosition", BUTTON_POSITION.BOTTOM_LEFT);

    defineProperty_default()(this, "buttonSize", void 0);

    defineProperty_default()(this, "torusUrl", void 0);

    defineProperty_default()(this, "torusIframe", void 0);

    defineProperty_default()(this, "styleLink", void 0);

    defineProperty_default()(this, "isLoggedIn", void 0);

    defineProperty_default()(this, "isInitialized", void 0);

    defineProperty_default()(this, "torusWidgetVisibility", void 0);

    defineProperty_default()(this, "torusAlert", void 0);

    defineProperty_default()(this, "apiKey", void 0);

    defineProperty_default()(this, "modalZIndex", void 0);

    defineProperty_default()(this, "alertZIndex", void 0);

    defineProperty_default()(this, "torusAlertContainer", void 0);

    defineProperty_default()(this, "isIframeFullScreen", void 0);

    defineProperty_default()(this, "whiteLabel", void 0);

    defineProperty_default()(this, "requestedVerifier", void 0);

    defineProperty_default()(this, "currentVerifier", void 0);

    defineProperty_default()(this, "embedTranslations", void 0);

    defineProperty_default()(this, "ethereum", void 0);

    defineProperty_default()(this, "provider", void 0);

    defineProperty_default()(this, "communicationMux", void 0);

    defineProperty_default()(this, "isLoginCallback", void 0);

    defineProperty_default()(this, "paymentProviders", config.paymentProviders);

    defineProperty_default()(this, "loginHint", "");

    defineProperty_default()(this, "useWalletConnect", void 0);

    defineProperty_default()(this, "isCustomLogin", false);

    this.buttonPosition = buttonPosition;
    this.buttonSize = buttonSize;
    this.torusUrl = "";
    this.isLoggedIn = false; // ethereum.enable working

    this.isInitialized = false; // init done

    this.torusWidgetVisibility = true;
    this.requestedVerifier = "";
    this.currentVerifier = ""; // this.nodeDetailManager = new NodeDetailManager();
    // this.torusJs = new TorusJs({
    //   metadataHost: "https://metadata.tor.us",
    //   allowHost: "https://signer.tor.us/api/allow",
    //   network: "mainnet",
    // });

    this.apiKey = apiKey;
    (0,http_helpers_namespaceObject.setAPIKey)(apiKey);
    this.modalZIndex = modalZIndex;
    this.alertZIndex = modalZIndex + 1000;
    this.isIframeFullScreen = false;
  }

  async init() {
    let {
      buildEnv = TORUS_BUILD_ENV.PRODUCTION,
      enableLogging = false,
      // deprecated: use loginConfig instead
      enabledVerifiers = defaultVerifiers,
      network = {
        host: "mainnet",
        chainId: null,
        networkName: "",
        blockExplorer: "",
        ticker: "",
        tickerName: ""
      },
      loginConfig = {},
      showTorusButton = true,
      integrity = {
        check: false,
        hash: iframeIntegrity,
        version: ""
      },
      whiteLabel,
      skipTKey = false,
      useWalletConnect = false,
      mfaLevel = "default"
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.isInitialized) throw new Error("Already initialized");
    const {
      torusUrl,
      logLevel
    } = await getTorusUrl(buildEnv, integrity);
    loglevel.info(torusUrl, "url loaded");
    this.torusUrl = torusUrl;
    this.whiteLabel = whiteLabel;
    this.useWalletConnect = useWalletConnect;
    this.isCustomLogin = !!(loginConfig && Object.keys(loginConfig).length > 0) || !!(whiteLabel && Object.keys(whiteLabel).length > 0);
    loglevel.setDefaultLevel(logLevel);
    if (enableLogging) loglevel.enableAll();else loglevel.disableAll();
    this.torusWidgetVisibility = showTorusButton;
    const torusIframeUrl = new URL(torusUrl);
    if (torusIframeUrl.pathname.endsWith("/")) torusIframeUrl.pathname += "popup";else torusIframeUrl.pathname += "/popup";
    torusIframeUrl.hash = `#isCustomLogin=${this.isCustomLogin}`; // Iframe code

    this.torusIframe = htmlToElement(`<iframe
        id="torusIframe"
        allow=${useWalletConnect ? "camera" : ""}
        class="torusIframe"
        src="${torusIframeUrl.href}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%;
        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex}"
      ></iframe>`);
    this.torusAlertContainer = htmlToElement('<div id="torusAlertContainer"></div>');
    this.torusAlertContainer.style.display = "none";
    this.torusAlertContainer.style.setProperty("z-index", this.alertZIndex.toString());
    const link = window.document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", `${torusUrl}/css/widget.css`);
    this.styleLink = link;
    const {
      defaultLanguage = getUserLanguage(),
      customTranslations = {}
    } = this.whiteLabel || {};
    const mergedTranslations = external_lodash_merge_default()(config.translations, customTranslations);
    const languageTranslations = mergedTranslations[defaultLanguage] || config.translations[getUserLanguage()];
    this.embedTranslations = languageTranslations.embed;

    const handleSetup = async () => {
      await documentReady();
      return new Promise((resolve, reject) => {
        this.torusIframe.onload = async () => {
          // only do this if iframe is not full screen
          this._setupWeb3();

          const initStream = this.communicationMux.getStream("init_stream");
          initStream.on("data", chunk => {
            const {
              name,
              data,
              error
            } = chunk;

            if (name === "init_complete" && data.success) {
              // resolve promise
              this.isInitialized = true;

              this._displayIframe(this.isIframeFullScreen);

              resolve(undefined);
            } else if (error) {
              reject(new Error(error));
            }
          });
          initStream.write({
            name: "init_stream",
            data: {
              enabledVerifiers,
              loginConfig,
              whiteLabel: this.whiteLabel,
              buttonPosition: this.buttonPosition,
              buttonSize: this.buttonSize,
              torusWidgetVisibility: this.torusWidgetVisibility,
              apiKey: this.apiKey,
              skipTKey,
              network,
              mfaLevel
            }
          });
        };

        window.document.head.appendChild(this.styleLink);
        window.document.body.appendChild(this.torusIframe);
        window.document.body.appendChild(this.torusAlertContainer);
      });
    };

    if (buildEnv === "production" && integrity.check) {
      // hacky solution to check for iframe integrity
      const fetchUrl = `${torusUrl}/popup`;
      const resp = await fetch(fetchUrl, {
        cache: "reload"
      });

      if (resp.headers.get("Cache-Control") !== expectedCacheControlHeader) {
        throw new Error(`Unexpected Cache-Control headers, got ${resp.headers.get("Cache-Control")}`);
      }

      const response = await resp.text();
      const calculatedIntegrity = src_integrity({
        algorithms: ["sha384"]
      }, response);
      loglevel.info(calculatedIntegrity, "integrity");

      if (calculatedIntegrity === integrity.hash) {
        await handleSetup();
      } else {
        this.clearInit();
        throw new Error("Integrity check failed");
      }
    } else {
      await handleSetup();
    }

    return undefined;
  }

  login() {
    let {
      verifier = "",
      login_hint: loginHint = ""
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!this.isInitialized) throw new Error("Call init() first");
    this.requestedVerifier = verifier;
    this.loginHint = loginHint;
    return this.ethereum.enable();
  }

  logout() {
    return new Promise((resolve, reject) => {
      if (!this.isLoggedIn) {
        reject(new Error("User has not logged in yet"));
        return;
      }

      const logOutStream = this.communicationMux.getStream("logout");
      logOutStream.write({
        name: "logOut"
      });
      const statusStream = this.communicationMux.getStream("status");

      const statusStreamHandler = status => {
        if (!status.loggedIn) {
          this.isLoggedIn = false;
          this.currentVerifier = "";
          this.requestedVerifier = "";
          resolve();
        } else reject(new Error("Some Error Occured"));
      };

      handleStream(statusStream, "data", statusStreamHandler);
    });
  }

  async cleanUp() {
    if (this.isLoggedIn) {
      await this.logout();
    }

    this.clearInit();
  }

  clearInit() {
    function isElement(element) {
      return element instanceof Element || element instanceof HTMLDocument;
    }

    if (isElement(this.styleLink) && window.document.body.contains(this.styleLink)) {
      this.styleLink.remove();
      this.styleLink = undefined;
    }

    if (isElement(this.torusIframe) && window.document.body.contains(this.torusIframe)) {
      this.torusIframe.remove();
      this.torusIframe = undefined;
    }

    if (isElement(this.torusAlertContainer) && window.document.body.contains(this.torusAlertContainer)) {
      this.torusAlert = undefined;
      this.torusAlertContainer.remove();
      this.torusAlertContainer = undefined;
    }

    this.isInitialized = false;
  }

  hideTorusButton() {
    this.torusWidgetVisibility = false;

    this._sendWidgetVisibilityStatus(false);

    this._displayIframe();
  }

  showTorusButton() {
    this.torusWidgetVisibility = true;

    this._sendWidgetVisibilityStatus(true);

    this._displayIframe();
  }

  setProvider(_ref) {
    let {
      host = "mainnet",
      chainId = null,
      networkName = ""
    } = _ref,
        rest = objectWithoutProperties_default()(_ref, _excluded);

    return new Promise((resolve, reject) => {
      const providerChangeStream = this.communicationMux.getStream("provider_change");

      const handler = chunk => {
        const {
          err,
          success
        } = chunk.data;
        loglevel.info(chunk);

        if (err) {
          reject(err);
        } else if (success) {
          resolve();
        } else reject(new Error("some error occured"));
      };

      handleStream(providerChangeStream, "data", handler);
      const preopenInstanceId = getPreopenInstanceId();

      this._handleWindow(preopenInstanceId, {
        target: "_blank",
        features: FEATURES_PROVIDER_CHANGE_WINDOW
      });

      providerChangeStream.write({
        name: "show_provider_change",
        data: {
          network: embed_objectSpread({
            host,
            chainId,
            networkName
          }, rest),
          preopenInstanceId,
          override: false
        }
      });
    });
  }

  showWallet(path) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const showWalletStream = this.communicationMux.getStream("show_wallet");
    const finalPath = path ? `/${path}` : "";
    showWalletStream.write({
      name: "show_wallet",
      data: {
        path: finalPath
      }
    });

    const showWalletHandler = chunk => {
      if (chunk.name === "show_wallet_instance") {
        // Let the error propogate up (hence, no try catch)
        const {
          instanceId
        } = chunk.data;
        const finalUrl = new URL(`${this.torusUrl}/wallet${finalPath}`); // Using URL constructor to prevent js injection and allow parameter validation.!

        finalUrl.searchParams.append("integrity", "true");
        finalUrl.searchParams.append("instanceId", instanceId);
        Object.keys(params).forEach(x => {
          finalUrl.searchParams.append(x, params[x]);
        });
        finalUrl.hash = `#isCustomLogin=${this.isCustomLogin}`;
        const walletWindow = new src_PopupHandler({
          url: finalUrl,
          features: FEATURES_DEFAULT_WALLET_WINDOW
        });
        walletWindow.open();
      }
    };

    handleStream(showWalletStream, "data", showWalletHandler);
  }

  async getPublicAddress(_ref2) {
    let {
      verifier,
      verifierId,
      isExtended = false
    } = _ref2;
    if (!config.supportedVerifierList.includes(verifier) || !WALLET_OPENLOGIN_VERIFIER_MAP[verifier]) throw new Error("Unsupported verifier");
    const walletVerifier = verifier;
    const openloginVerifier = WALLET_OPENLOGIN_VERIFIER_MAP[verifier];
    const url = new URL(`https://api.tor.us/lookup/torus`);
    url.searchParams.append("verifier", openloginVerifier);
    url.searchParams.append("verifierId", verifierId);
    url.searchParams.append("walletVerifier", walletVerifier);
    url.searchParams.append("network", "mainnet");
    url.searchParams.append("isExtended", isExtended.toString());
    return (0,http_helpers_namespaceObject.get)(url.href, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }, {
      useAPIKey: true
    });
  }

  getUserInfo(message) {
    return new Promise((resolve, reject) => {
      if (this.isLoggedIn) {
        const userInfoAccessStream = this.communicationMux.getStream("user_info_access");
        userInfoAccessStream.write({
          name: "user_info_access_request"
        });

        const userInfoAccessHandler = chunk => {
          const {
            name,
            data: {
              approved,
              payload,
              rejected,
              newRequest
            }
          } = chunk;

          if (name === "user_info_access_response") {
            if (approved) {
              resolve(payload);
            } else if (rejected) {
              reject(new Error("User rejected the request"));
            } else if (newRequest) {
              const userInfoStream = this.communicationMux.getStream("user_info");

              const userInfoHandler = handlerChunk => {
                if (handlerChunk.name === "user_info_response") {
                  if (handlerChunk.data.approved) {
                    resolve(handlerChunk.data.payload);
                  } else {
                    reject(new Error("User rejected the request"));
                  }
                }
              };

              handleStream(userInfoStream, "data", userInfoHandler);
              const preopenInstanceId = getPreopenInstanceId();

              this._handleWindow(preopenInstanceId, {
                target: "_blank",
                features: FEATURES_PROVIDER_CHANGE_WINDOW
              });

              userInfoStream.write({
                name: "user_info_request",
                data: {
                  message,
                  preopenInstanceId
                }
              });
            }
          }
        };

        handleStream(userInfoAccessStream, "data", userInfoAccessHandler);
      } else reject(new Error("User has not logged in yet"));
    });
  }

  initiateTopup(provider, params) {
    return new Promise((resolve, reject) => {
      if (this.isInitialized) {
        const {
          errors,
          isValid
        } = validatePaymentProvider(provider, params);

        if (!isValid) {
          reject(new Error(JSON.stringify(errors)));
          return;
        }

        const topupStream = this.communicationMux.getStream("topup");

        const topupHandler = chunk => {
          if (chunk.name === "topup_response") {
            if (chunk.data.success) {
              resolve(chunk.data.success);
            } else {
              reject(new Error(chunk.data.error));
            }
          }
        };

        handleStream(topupStream, "data", topupHandler);
        const preopenInstanceId = getPreopenInstanceId();

        this._handleWindow(preopenInstanceId);

        topupStream.write({
          name: "topup_request",
          data: {
            provider,
            params,
            preopenInstanceId
          }
        });
      } else reject(new Error("Torus is not initialized yet"));
    });
  }

  async loginWithPrivateKey(loginParams) {
    const {
      privateKey,
      userInfo
    } = loginParams;
    return new Promise((resolve, reject) => {
      if (this.isInitialized) {
        if (Buffer.from(privateKey, "hex").length !== 32) {
          reject(new Error("Invalid private key, Please provide a 32 byte valid secp25k1 private key"));
          return;
        }

        const loginPrivKeyStream = this.communicationMux.getStream("login_with_private_key");

        const loginHandler = chunk => {
          if (chunk.name === "login_with_private_key_response") {
            if (chunk.data.success) {
              resolve(chunk.data.success);
            } else {
              reject(new Error(chunk.data.error));
            }
          }
        };

        handleStream(loginPrivKeyStream, "data", loginHandler);
        loginPrivKeyStream.write({
          name: "login_with_private_key_request",
          data: {
            privateKey,
            userInfo
          }
        });
      } else reject(new Error("Torus is not initialized yet"));
    });
  }

  async showWalletConnectScanner() {
    if (!this.useWalletConnect) throw new Error("Set `useWalletConnect` as true in init function options to use wallet connect scanner");
    return new Promise((resolve, reject) => {
      if (this.isLoggedIn) {
        const walletConnectStream = this.communicationMux.getStream("wallet_connect_stream");

        const walletConnectHandler = chunk => {
          if (chunk.name === "wallet_connect_stream_res") {
            if (chunk.data.success) {
              resolve(chunk.data.success);
            } else {
              reject(new Error(chunk.data.error));
            }

            this._displayIframe();
          }
        };

        handleStream(walletConnectStream, "data", walletConnectHandler);
        walletConnectStream.write({
          name: "wallet_connect_stream_req"
        });

        this._displayIframe(true);
      } else reject(new Error("User has not logged in yet"));
    });
  }

  _handleWindow(preopenInstanceId) {
    let {
      url,
      target,
      features
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (preopenInstanceId) {
      const windowStream = this.communicationMux.getStream("window");
      const finalUrl = new URL(url || `${this.torusUrl}/redirect?preopenInstanceId=${preopenInstanceId}`);
      if (finalUrl.hash) finalUrl.hash += `&isCustomLogin=${this.isCustomLogin}`;else finalUrl.hash = `#isCustomLogin=${this.isCustomLogin}`;
      const handledWindow = new src_PopupHandler({
        url: finalUrl,
        target,
        features
      });
      handledWindow.open();

      if (!handledWindow.window) {
        this._createPopupBlockAlert(preopenInstanceId, finalUrl.href);

        return;
      }

      windowStream.write({
        name: "opened_window",
        data: {
          preopenInstanceId
        }
      });

      const closeHandler = _ref3 => {
        let {
          preopenInstanceId: receivedId,
          close
        } = _ref3;

        if (receivedId === preopenInstanceId && close) {
          handledWindow.close();
          windowStream.removeListener("data", closeHandler);
        }
      };

      windowStream.on("data", closeHandler);
      handledWindow.once("close", () => {
        windowStream.write({
          data: {
            preopenInstanceId,
            closed: true
          }
        });
        windowStream.removeListener("data", closeHandler);
      });
    }
  }

  _setEmbedWhiteLabel(element) {
    // Set whitelabel
    const {
      theme
    } = this.whiteLabel || {};

    if (theme) {
      const {
        isDark = false,
        colors = {}
      } = theme;
      if (isDark) element.classList.add("torus-dark");
      if (colors.torusBrand1) element.style.setProperty("--torus-brand-1", colors.torusBrand1);
      if (colors.torusGray2) element.style.setProperty("--torus-gray-2", colors.torusGray2);
    }
  }

  _getLogoUrl() {
    var _this$whiteLabel, _this$whiteLabel$them;

    let logoUrl = `${this.torusUrl}/images/torus_icon-blue.svg`;

    if ((_this$whiteLabel = this.whiteLabel) !== null && _this$whiteLabel !== void 0 && (_this$whiteLabel$them = _this$whiteLabel.theme) !== null && _this$whiteLabel$them !== void 0 && _this$whiteLabel$them.isDark) {
      var _this$whiteLabel2;

      logoUrl = ((_this$whiteLabel2 = this.whiteLabel) === null || _this$whiteLabel2 === void 0 ? void 0 : _this$whiteLabel2.logoLight) || logoUrl;
    } else {
      var _this$whiteLabel3;

      logoUrl = ((_this$whiteLabel3 = this.whiteLabel) === null || _this$whiteLabel3 === void 0 ? void 0 : _this$whiteLabel3.logoDark) || logoUrl;
    }

    return logoUrl;
  }

  _sendWidgetVisibilityStatus(status) {
    const torusWidgetVisibilityStream = this.communicationMux.getStream("torus-widget-visibility");
    torusWidgetVisibilityStream.write({
      data: status
    });
  }

  _displayIframe() {
    let isFull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const style = {};
    const size = this.buttonSize + 14; // 15px padding
    // set phase

    if (!isFull) {
      style.display = this.torusWidgetVisibility ? "block" : "none";
      style.height = `${size}px`;
      style.width = `${size}px`;

      switch (this.buttonPosition) {
        case BUTTON_POSITION.TOP_LEFT:
          style.top = "0px";
          style.left = "0px";
          style.right = "auto";
          style.bottom = "auto";
          break;

        case BUTTON_POSITION.TOP_RIGHT:
          style.top = "0px";
          style.right = "0px";
          style.left = "auto";
          style.bottom = "auto";
          break;

        case BUTTON_POSITION.BOTTOM_RIGHT:
          style.bottom = "0px";
          style.right = "0px";
          style.top = "auto";
          style.left = "auto";
          break;

        case BUTTON_POSITION.BOTTOM_LEFT:
        default:
          style.bottom = "0px";
          style.left = "0px";
          style.top = "auto";
          style.right = "auto";
          break;
      }
    } else {
      style.display = "block";
      style.width = "100%";
      style.height = "100%";
      style.top = "0px";
      style.right = "0px";
      style.left = "0px";
      style.bottom = "0px";
    }

    Object.assign(this.torusIframe.style, style);
    this.isIframeFullScreen = isFull;
  }

  _setupWeb3() {
    loglevel.info("setupWeb3 running"); // setup background connection

    const metamaskStream = new openlogin_jrpc_namespaceObject.BasePostMessageStream({
      name: "embed_metamask",
      target: "iframe_metamask",
      targetWindow: this.torusIframe.contentWindow,
      targetOrigin: new URL(this.torusUrl).origin
    }); // Due to compatibility reasons, we should not set up multiplexing on window.metamaskstream
    // because the MetamaskInpageProvider also attempts to do so.
    // We create another LocalMessageDuplexStream for communication between dapp <> iframe

    const communicationStream = new openlogin_jrpc_namespaceObject.BasePostMessageStream({
      name: "embed_comm",
      target: "iframe_comm",
      targetWindow: this.torusIframe.contentWindow,
      targetOrigin: new URL(this.torusUrl).origin
    }); // Backward compatibility with Gotchi :)
    // window.metamaskStream = this.communicationStream
    // compose the inpage provider

    const inpageProvider = new inpage_provider(metamaskStream); // detect eth_requestAccounts and pipe to enable for now

    const detectAccountRequestPrototypeModifier = m => {
      const originalMethod = inpageProvider[m];

      inpageProvider[m] = function providerFunc(method) {
        if (method && method === "eth_requestAccounts") {
          return inpageProvider.enable();
        }

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalMethod.apply(this, [method, ...args]);
      };
    };

    detectAccountRequestPrototypeModifier("send");
    detectAccountRequestPrototypeModifier("sendAsync");

    inpageProvider.enable = () => {
      return new Promise((resolve, reject) => {
        // If user is already logged in, we assume they have given access to the website
        inpageProvider.sendAsync({
          jsonrpc: "2.0",
          id: getPreopenInstanceId(),
          method: "eth_requestAccounts",
          params: []
        }, (err, response) => {
          const {
            result: res
          } = response || {};

          if (err) {
            setTimeout(() => {
              reject(err);
            }, 50);
          } else if (Array.isArray(res) && res.length > 0) {
            // If user is already rehydrated, resolve this
            // else wait for something to be written to status stream
            const handleLoginCb = () => {
              if (this.requestedVerifier !== "" && this.currentVerifier !== this.requestedVerifier) {
                const {
                  requestedVerifier
                } = this; // eslint-disable-next-line promise/no-promise-in-callback

                this.logout() // eslint-disable-next-line promise/always-return
                .then(_ => {
                  this.requestedVerifier = requestedVerifier;

                  this._showLoginPopup(true, resolve, reject);
                }).catch(error => reject(error));
              } else {
                resolve(res);
              }
            };

            if (this.isLoggedIn) {
              handleLoginCb();
            } else {
              this.isLoginCallback = handleLoginCb;
            }
          } else {
            // set up listener for login
            this._showLoginPopup(true, resolve, reject);
          }
        });
      });
    };

    inpageProvider.tryPreopenHandle = (payload, cb) => {
      const _payload = payload;

      if (!Array.isArray(_payload) && UNSAFE_METHODS.includes(_payload.method)) {
        const preopenInstanceId = getPreopenInstanceId();

        this._handleWindow(preopenInstanceId, {
          target: "_blank",
          features: FEATURES_CONFIRM_WINDOW
        });

        _payload.preopenInstanceId = preopenInstanceId;
      }

      inpageProvider._rpcEngine.handle(_payload, cb);
    }; // Work around for web3@1.0 deleting the bound `sendAsync` but not the unbound
    // `sendAsync` method on the prototype, causing `this` reference issues with drizzle


    const proxiedInpageProvider = new Proxy(inpageProvider, {
      // straight up lie that we deleted the property so that it doesnt
      // throw an error in strict mode
      deleteProperty: () => true
    });
    this.ethereum = proxiedInpageProvider;
    const communicationMux = (0,openlogin_jrpc_namespaceObject.setupMultiplex)(communicationStream);
    this.communicationMux = communicationMux;
    const windowStream = communicationMux.getStream("window");
    windowStream.on("data", chunk => {
      if (chunk.name === "create_window") {
        // url is the url we need to open
        // we can pass the final url upfront so that it removes the step of redirecting to /redirect and waiting for finalUrl
        this._createPopupBlockAlert(chunk.data.preopenInstanceId, chunk.data.url);
      }
    }); // show torus widget if button clicked

    const widgetStream = communicationMux.getStream("widget");
    widgetStream.on("data", chunk => {
      const {
        data
      } = chunk;

      this._displayIframe(data);
    }); // Show torus button if wallet has been hydrated/detected

    const statusStream = communicationMux.getStream("status");
    statusStream.on("data", status => {
      // login
      if (status.loggedIn) {
        this.isLoggedIn = status.loggedIn;
        this.currentVerifier = status.verifier;
      } // logout
      else this._displayIframe();

      if (this.isLoginCallback) {
        this.isLoginCallback();
        delete this.isLoginCallback;
      }
    });
    this.provider = proxiedInpageProvider;
    if (this.provider.shouldSendMetadata) sendSiteMetadata(this.provider._rpcEngine);

    inpageProvider._initializeState();

    loglevel.debug("Torus - injected provider");
  }

  _showLoginPopup(calledFromEmbed, resolve, reject) {
    const loginHandler = data => {
      const {
        err,
        selectedAddress
      } = data;

      if (err) {
        loglevel.error(err);
        if (reject) reject(err);
      } // returns an array (cause accounts expects it)
      else if (resolve) resolve([selectedAddress]);

      if (this.isIframeFullScreen) this._displayIframe();
    };

    const oauthStream = this.communicationMux.getStream("oauth");

    if (!this.requestedVerifier) {
      this._displayIframe(true);

      handleStream(oauthStream, "data", loginHandler);
      oauthStream.write({
        name: "oauth_modal",
        data: {
          calledFromEmbed
        }
      });
    } else {
      handleStream(oauthStream, "data", loginHandler);
      const preopenInstanceId = getPreopenInstanceId();

      this._handleWindow(preopenInstanceId);

      oauthStream.write({
        name: "oauth",
        data: {
          calledFromEmbed,
          verifier: this.requestedVerifier,
          preopenInstanceId,
          login_hint: this.loginHint
        }
      });
    }
  }

  _createPopupBlockAlert(preopenInstanceId, url) {
    const logoUrl = this._getLogoUrl();

    const torusAlert = htmlToElement('<div id="torusAlert" class="torus-alert--v2">' + `<div id="torusAlert__logo"><img src="${logoUrl}" /></div>` + "<div>" + `<h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1>` + `<p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p>` + "</div>" + "</div>");
    const successAlert = htmlToElement(`<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`);
    const btnContainer = htmlToElement('<div id="torusAlert__btn-container"></div>');
    btnContainer.appendChild(successAlert);
    torusAlert.appendChild(btnContainer);

    const bindOnLoad = () => {
      successAlert.addEventListener("click", () => {
        this._handleWindow(preopenInstanceId, {
          url,
          target: "_blank",
          features: FEATURES_CONFIRM_WINDOW
        });

        torusAlert.remove();
        if (this.torusAlertContainer.children.length === 0) this.torusAlertContainer.style.display = "none";
      });
    };

    this._setEmbedWhiteLabel(torusAlert);

    const attachOnLoad = () => {
      this.torusAlertContainer.style.display = "block";
      this.torusAlertContainer.appendChild(torusAlert);
    };

    runOnLoad(attachOnLoad);
    runOnLoad(bindOnLoad);
  }

}

/* harmony default export */ const src_embed = (Torus);
;// CONCATENATED MODULE: ./src/index.ts



module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=upbondEmbed.cjs.js.map