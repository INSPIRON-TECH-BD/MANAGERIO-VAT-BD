/**
 * manager-io.js — Manager.io API Client
 * Works with BOTH cloud and desktop editions.
 * Auth received via window.postMessage — NEVER hardcoded.
 * n-Law 01: Handles the PascalCase/camelCase asymmetry trap.
 */

var ManagerIO = (function () {
  var _endpoint = "";
  var _token = "";
  var _ready = false;
  var _onReady = [];

  // Listen for Manager.io context handshake
  window.addEventListener("message", function (event) {
    if (!event.data) return;
    if (event.data.type !== "manager-context") return;
    var payload = event.data.payload;
    if (!payload || !payload.apiEndpoint || !payload.apiAccessToken) return;
    _endpoint = payload.apiEndpoint.replace(/\/+$/, ""); // strip trailing slash
    _token = payload.apiAccessToken;
    _ready = true;
    _onReady.forEach(function (fn) {
      fn();
    });
    _onReady = [];
  });

  function onReady(fn) {
    if (_ready) {
      fn();
    } else {
      _onReady.push(fn);
    }
  }

  // Core GET request
  // Returns parsed JSON or throws with message
  async function get(path) {
    if (!_ready) throw new Error("Manager.io context not received yet");
    var url = _endpoint + "/api2" + path;
    var resp = await fetch(url, {
      headers: { Authorization: "Bearer " + _token },
    });
    if (!resp.ok) {
      throw new Error("API error " + resp.status + " for " + path);
    }
    return resp.json();
  }

  // ── SALES INVOICES ────────────────────────────────────────────────
  // Returns camelCase fields (list endpoint convention)
  async function getSalesInvoices(opts) {
    opts = opts || {};
    var params = "?pageSize=" + (opts.pageSize || 500);
    if (opts.startDate) params += "&startDate=" + opts.startDate;
    if (opts.endDate) params += "&endDate=" + opts.endDate;
    if (opts.fields) params += "&fields=" + opts.fields;
    return get("/sales-invoices" + params);
  }

  // ── PURCHASE INVOICES ─────────────────────────────────────────────
  async function getPurchaseInvoices(opts) {
    opts = opts || {};
    var params = "?pageSize=" + (opts.pageSize || 500);
    if (opts.startDate) params += "&startDate=" + opts.startDate;
    if (opts.endDate) params += "&endDate=" + opts.endDate;
    if (opts.fields) params += "&fields=" + opts.fields;
    return get("/purchase-invoices" + params);
  }

  // ── TAX CODES ─────────────────────────────────────────────────────
  async function getTaxCodes() {
    return get("/tax-codes");
  }

  // ── CUSTOMERS ─────────────────────────────────────────────────────
  async function getCustomers() {
    return get("/customers?pageSize=1000");
  }

  // ── SUPPLIERS ─────────────────────────────────────────────────────
  async function getSuppliers() {
    return get("/suppliers?pageSize=1000");
  }

  // ── BUSINESS INFO (for Mushak header) ─────────────────────────────
  async function getBusinessInfo() {
    return get("/businesses");
  }

  // ── DATE HELPERS ──────────────────────────────────────────────────
  function getPeriodRange(month, year) {
    var m = parseInt(month);
    var y = parseInt(year);
    var last = new Date(y, m, 0).getDate();
    var pad = function (n) {
      return n < 10 ? "0" + n : "" + n;
    };
    return {
      startDate: y + "-" + pad(m) + "-01",
      endDate: y + "-" + pad(m) + "-" + last,
    };
  }

  return {
    onReady: onReady,
    get: get,
    getSalesInvoices: getSalesInvoices,
    getPurchaseInvoices: getPurchaseInvoices,
    getTaxCodes: getTaxCodes,
    getCustomers: getCustomers,
    getSuppliers: getSuppliers,
    getBusinessInfo: getBusinessInfo,
    getPeriodRange: getPeriodRange,
  };
})();
