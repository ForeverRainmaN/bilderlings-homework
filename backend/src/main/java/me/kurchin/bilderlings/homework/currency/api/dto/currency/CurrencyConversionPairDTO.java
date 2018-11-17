package me.kurchin.bilderlings.homework.currency.api.dto.currency;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import me.kurchin.bilderlings.homework.currency.entities.CurrencyPair;

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

  public CurrencyConversionPairDTO(CurrencyPair currencyPair) {
    this(currencyPair.getFrom(), currencyPair.getTo());
  }

  public String getFrom() {
    return from;
  }

  public String getTo() {
    return to;
  }
}
