package me.kurchin.bilderlings.homework.currency.entities;

public class CurrencyPair {

  private final String from;
  private final String to;

  public CurrencyPair(String from, String to) {
    this.from = from;
    this.to = to;
  }

  public String getFrom() {
    return from;
  }

  public String getTo() {
    return to;
  }
}
