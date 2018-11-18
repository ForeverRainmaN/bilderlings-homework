package me.kurchin.bilderlings.homework.currency.services;

import java.util.Random;
import org.springframework.stereotype.Service;

@Service
public class CurrencyConversionService {

  public double convert(String from, String to, double amount) {
    // TODO 4. Use currency rate service to get currency rate
    // TODO 5. Use fee service to get fee
    // TODO 6. Calculate convertion
    return new Random().nextDouble();
  }
}
