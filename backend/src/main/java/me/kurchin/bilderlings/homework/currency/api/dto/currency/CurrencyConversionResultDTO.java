package me.kurchin.bilderlings.homework.currency.api.dto.currency;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CurrencyConversionResultDTO {
  private final double amount;

  @JsonCreator
  public CurrencyConversionResultDTO(
      @JsonProperty("amount") double amount
  ) {
    this.amount = amount;
  }

  public double getAmount() {
    return amount;
  }
}
