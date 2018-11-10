package me.kurchin.bilderlings.homework.currency.api.dto.currency;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CurrencyConversionPairDTO {

  private final String from;
  private final String to;

  @JsonCreator
  public CurrencyConversionPairDTO(
      @JsonProperty("from") String from,
      @JsonProperty("to") String to
  ) {
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
