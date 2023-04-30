function FindProxyForURL(url, host) {
  if (shExpMatch(url, ".*/overseas/check.*")) return "DIRECT";

  return "PROXY 101.229.242.73:9002";
}
