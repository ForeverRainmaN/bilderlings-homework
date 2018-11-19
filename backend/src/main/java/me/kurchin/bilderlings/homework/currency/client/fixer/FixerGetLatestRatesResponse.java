package me.kurchin.bilderlings.homework.currency.client.fixer;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FixerGetLatestRatesResponse {

  private final boolean success;
  private final long timestamp;
  private final String base;
  private final String date;
  private final Map<String, Double> rates;

  @JsonCreator
  public FixerGetLatestRatesResponse(
      @JsonProperty("success") boolean success,
      @JsonProperty("timestamp") long timestamp,
      @JsonProperty("base") String base,
      @JsonProperty("date") String date,
      @JsonProperty("rates") Map<String, Double> rates) {
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

  public String getDate() {
    return date;
  }

  public Map<String, Double> getRates() {
    return rates;
  }
}
