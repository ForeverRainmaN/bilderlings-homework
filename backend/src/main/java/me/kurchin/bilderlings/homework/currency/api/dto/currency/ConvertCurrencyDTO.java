package me.kurchin.bilderlings.homework.currency.api.dto.currency;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ConvertCurrencyDTO {
  private final int amount;
  private final String from;
  private final String to;

  @JsonCreator
  public ConvertCurrencyDTO(
      @JsonProperty("amount") int amount,
      @JsonProperty("from") String from,
      @JsonProperty("to") String to
  ) {
    this.amount = amount;
    this.from = from;
    this.to = to;
  }

  public int getAmount() {
    return amount;
  }

  public String getFrom() {
    return from;
  }

  public String getTo() {
    return to;
  }
}
