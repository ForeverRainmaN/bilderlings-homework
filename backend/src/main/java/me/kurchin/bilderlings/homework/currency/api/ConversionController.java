package me.kurchin.bilderlings.homework.currency.api;

import java.util.Random;
import me.kurchin.bilderlings.homework.currency.api.dto.Response;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.ConvertCurrencyDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionResultDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/convert")

public class ConversionController {

  @PostMapping("/")
  public ResponseDTO<CurrencyConversionResultDTO> convert(
      @RequestBody ConvertCurrencyDTO convertionCurrencyDTO) {
    return Response.ok(
        new CurrencyConversionResultDTO(new Random().nextInt())
    );
  }
}
