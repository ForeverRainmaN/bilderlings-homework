package me.kurchin.bilderlings.homework.currency.entities;

public class Fee {

  private long id;
  private String from;
  private String to;
  private double fee;

  public Fee(long id, String from, String to, double fee) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.fee = fee;
  }

  public long getId() {
    return id;
  }

  public String getFrom() {
    return from;
  }

  public String getTo() {
    return to;
  }

  public double getFee() {
    return fee;
  }

  public boolean isSameCurrencyPair(Fee otherFee) {
    return this.from.equals(otherFee.getFrom())
        && this.to.equals(otherFee.getTo());
  }

  @Override
  public String toString() {
    return "Fee{" +
        "id=" + id +
        ", from='" + from + '\'' +
        ", to='" + to + '\'' +
        ", fee=" + fee +
        '}';
  }
}
