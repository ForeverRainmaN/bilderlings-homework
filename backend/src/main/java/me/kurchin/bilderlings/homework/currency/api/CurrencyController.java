package me.kurchin.bilderlings.homework.currency.api;

import static java.util.Collections.singletonList;

import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.Response;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.ConvertCurrencyDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionPairDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionResultDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("currencies")
public class CurrencyController {

  @GetMapping("/")
  public ResponseDTO<List<CurrencyConversionPairDTO>> getAll() {
    return Response.ok(singletonList(
        new CurrencyConversionPairDTO("USD", "EUR")
    ));
  }

  @PostMapping("/convert")
  public ResponseDTO<CurrencyConversionResultDTO> convert(
      @RequestBody ConvertCurrencyDTO convertionCurrencyDTO) {
    return Response.ok(
        new CurrencyConversionResultDTO(120)
    );
  }
}
