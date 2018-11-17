package me.kurchin.bilderlings.homework.currency.api;

import me.kurchin.bilderlings.homework.currency.api.dto.Response;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.ConvertCurrencyDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionResultDTO;
import me.kurchin.bilderlings.homework.currency.services.CurrencyConversionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/convert")
public class ConversionController {

  private final CurrencyConversionService currencyConversionService;

  @Autowired
  public ConversionController(CurrencyConversionService currencyConversionService) {
    this.currencyConversionService = currencyConversionService;
  }

  @PostMapping("/")
  public ResponseDTO<CurrencyConversionResultDTO> convert(
      @RequestBody ConvertCurrencyDTO conversionCurrencyDTO) {
    return Response.ok(
        new CurrencyConversionResultDTO(currencyConversionService.convert(
            conversionCurrencyDTO.getFrom(),
            conversionCurrencyDTO.getTo(),
            conversionCurrencyDTO.getAmount()
        ))
    );
  }
}
