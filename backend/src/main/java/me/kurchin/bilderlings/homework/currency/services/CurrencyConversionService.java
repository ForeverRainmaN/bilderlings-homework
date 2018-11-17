package me.kurchin.bilderlings.homework.currency.services;

import java.util.Random;
import org.springframework.stereotype.Service;

@Service
public class CurrencyConversionService {

  public double convert(String from, String to, double amount) {
    return new Random().nextDouble();
  }
}
