function FindProxyForURL(url, host) {
  if (shExpMatch(url, ".*/overseas/check.*")) return "DIRECT";

  return "PROXY 127.0.0.1";
}
