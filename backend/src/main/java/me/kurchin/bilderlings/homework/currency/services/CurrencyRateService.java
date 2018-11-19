package me.kurchin.bilderlings.homework.currency.services;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;
import me.kurchin.bilderlings.homework.currency.client.FixerClient;
import me.kurchin.bilderlings.homework.currency.client.fixer.FixerGetLatestRatesResponse;
import me.kurchin.bilderlings.homework.currency.configuration.CurrencyConverterConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import retrofit2.Response;

@Service
public class CurrencyRateService {

  private CurrencyConverterConfiguration currencyConverterConfiguration;
  private FixerClient fixerClient;
  private Map<String, Double> cachedRates;
  private List<FixerGetLatestRatesResponse> rates;

  @Autowired
  public CurrencyRateService(
      CurrencyConverterConfiguration currencyConverterConfiguration,
      FixerClient fixerClient) {
    this.currencyConverterConfiguration = currencyConverterConfiguration;
    this.fixerClient = fixerClient;
  }

  @PostConstruct
  public void loadConversionRates() {
    rates = currencyConverterConfiguration.getCurrencies()
        .stream()
        .map(currencyPairConfig -> {
          try {
            Response<FixerGetLatestRatesResponse> response = fixerClient
                .getLatestRates(
                    currencyPairConfig.getFrom(),
                    String.join(",", currencyPairConfig.getTo())
                )
                .execute();

            if (response.code() != HttpStatus.OK.value()) {
              throw new IllegalStateException("Failed to get rates from Fixer");
            }
            return response.body();
          } catch (IOException e) {
            throw new RuntimeException(e);
          }
        })
        .collect(Collectors.toList());

    // todo: schedule update using @Scheduled
  }

  public double getConversionRate(String from, String to) {
    return rates.stream()
        .filter(rates -> rates.getBase().equals(from))
        .findFirst()
        .map(rates -> rates.getRates().get(to))
        .orElseThrow(IllegalStateException::new);
  }
}
