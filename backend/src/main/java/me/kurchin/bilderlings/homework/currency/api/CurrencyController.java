package me.kurchin.bilderlings.homework.currency.api;

import java.util.List;
import java.util.stream.Collectors;
import me.kurchin.bilderlings.homework.currency.api.dto.Response;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionPairDTO;
import me.kurchin.bilderlings.homework.currency.services.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/currencies")
public class CurrencyController {

  private final CurrencyService currencyService;

  @Autowired
  public CurrencyController(CurrencyService currencyService) {
    this.currencyService = currencyService;
  }

  @GetMapping("/")
  public ResponseDTO<List<CurrencyConversionPairDTO>> getAll() {
    return Response.ok(
        currencyService
            .getCurrencies()
            .stream()
            .map(CurrencyConversionPairDTO::new)
            .collect(Collectors.toList()));
  }
}
