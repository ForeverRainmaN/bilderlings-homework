package me.kurchin.bilderlings.homework.currency.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CurrencyConversionService {

  private final CurrencyRateService currencyRateService;
  private final FeeService feeService;

  @Autowired
  public CurrencyConversionService(
      CurrencyRateService currencyRateService,
      FeeService feeService
  ) {
    this.currencyRateService = currencyRateService;
    this.feeService = feeService;
  }

  public double convert(String from, String to, double amount) {
    double rate = currencyRateService.getConversionRate(from, to);
    double fee = feeService.getFee(from, to);
    return amount * (rate - fee);
  }
}
