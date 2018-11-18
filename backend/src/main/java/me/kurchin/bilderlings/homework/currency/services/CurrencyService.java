package me.kurchin.bilderlings.homework.currency.services;

import java.util.List;
import java.util.stream.Collectors;
import me.kurchin.bilderlings.homework.currency.configuration.CurrencyConverterConfiguration;
import me.kurchin.bilderlings.homework.currency.entities.CurrencyPair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CurrencyService {

  private CurrencyConverterConfiguration currencyConverterConfiguration;

  @Autowired
  public CurrencyService(CurrencyConverterConfiguration currencyConverterConfiguration) {
    this.currencyConverterConfiguration = currencyConverterConfiguration;
  }

  public List<CurrencyPair> getCurrencies() {
    return currencyConverterConfiguration
        .getCurrencies()
        .stream()
        .flatMap(
            (currencyPairConfig) -> currencyPairConfig
                .getTo()
                .stream()
                .map(to -> new CurrencyPair(currencyPairConfig.getFrom(), to)))
        .collect(Collectors.toList());
  }
}
