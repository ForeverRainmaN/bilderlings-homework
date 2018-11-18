package me.kurchin.bilderlings.homework.currency.client.fixer;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Date;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FixerGetLatestRatesResponse {

  private final boolean success;
  private final long timestamp;
  private final String base;
  private final Date date;
  private final Map<String, Double> rates;

  @JsonCreator
  public FixerGetLatestRatesResponse(
      boolean success,
      long timestamp,
      String base,
      Date date,
      Map<String, Double> rates) {
    this.success = success;
    this.timestamp = timestamp;
    this.base = base;
    this.date = date;
    this.rates = rates;
  }

  public boolean isSuccess() {
    return success;
  }

  public long getTimestamp() {
    return timestamp;
  }

  public String getBase() {
    return base;
  }

  public Date getDate() {
    return date;
  }

  public Map<String, Double> getRates() {
    return rates;
  }
}
