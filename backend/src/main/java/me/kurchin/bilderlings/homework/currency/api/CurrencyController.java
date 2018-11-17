package me.kurchin.bilderlings.homework.currency.api;

import java.util.Arrays;
import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.Response;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionPairDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/currencies")
public class CurrencyController {

  @GetMapping("/")
  public ResponseDTO<List<CurrencyConversionPairDTO>> getAll() {
    return Response.ok(Arrays.asList(
        new CurrencyConversionPairDTO("USD", "EUR"),
        new CurrencyConversionPairDTO("EUR", "USD"),
        new CurrencyConversionPairDTO("RUB", "USD")
    ));
  }
}
