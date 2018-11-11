package me.kurchin.bilderlings.homework.currency.api.dto.fee;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import me.kurchin.bilderlings.homework.currency.entities.Fee;

public class FeeDTO {

  private final long id;
  private final String from;
  private final String to;
  private final double fee;

  @JsonCreator
  public FeeDTO(
      @JsonProperty("id") long id,
      @JsonProperty("from") String from,
      @JsonProperty("to") String to,
      @JsonProperty("fee") double fee) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.fee = fee;
  }

  public FeeDTO(Fee fee) {
    this(fee.getId(), fee.getFrom(), fee.getTo(), fee.getFee());
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
}
