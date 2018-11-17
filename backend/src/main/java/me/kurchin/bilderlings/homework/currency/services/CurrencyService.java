package me.kurchin.bilderlings.homework.currency.services;

import java.util.Arrays;
import java.util.List;
import me.kurchin.bilderlings.homework.currency.entities.CurrencyPair;
import org.springframework.stereotype.Service;

@Service
public class CurrencyService {

  public List<CurrencyPair> getCurrencies() {
    return Arrays.asList(
        new CurrencyPair("USD", "RUB"),
        new CurrencyPair("EUR", "USD"),
        new CurrencyPair("RUB", "EUR")
    );
  }
}
