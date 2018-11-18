package me.kurchin.bilderlings.homework.currency.configuration;

import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("currency-converter")
public class CurrencyConverterConfiguration {

  @Valid
  private FixerConfig fixer;

  @Valid
  private List<CurrencyPairConfig> currencies;

  public FixerConfig getFixer() {
    return fixer;
  }

  public void setFixer(FixerConfig fixerConfig) {
    this.fixer = fixerConfig;
  }

  public List<CurrencyPairConfig> getCurrencies() {
    return currencies;
  }

  public void setCurrencies(List<CurrencyPairConfig> currencies) {
    this.currencies = currencies;
  }


  public static class CurrencyPairConfig {

    @NotEmpty
    private String from;

    @NotEmpty
    private List<String> to;

    public String getFrom() {
      return from;
    }

    public void setFrom(String from) {
      this.from = from;
    }

    public List<String> getTo() {
      return to;
    }

    public void setTo(List<String> to) {
      this.to = to;
    }
  }

  public static class FixerConfig {

    @NotEmpty
    private String host;

    @NotEmpty
    private String accessKey;

    public String getHost() {
      return host;
    }

    public void setHost(String host) {
      this.host = host;
    }

    public String getAccessKey() {
      return accessKey;
    }

    public void setAccessKey(String accessKey) {
      this.accessKey = accessKey;
    }
  }
}
