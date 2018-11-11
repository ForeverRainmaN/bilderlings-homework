package me.kurchin.bilderlings.homework.currency.api.dto.fee;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFeeDTO {

  private final String from;
  private final String to;
  private final double fee;

  @JsonCreator
  public CreateFeeDTO(
      @JsonProperty("from") String from,
      @JsonProperty("to") String to,
      @JsonProperty("fee") double fee
  ) {
    this.from = from;
    this.to = to;
    this. fee = fee;
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
}
