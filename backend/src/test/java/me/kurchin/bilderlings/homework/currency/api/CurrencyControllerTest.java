package me.kurchin.bilderlings.homework.currency.api;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.IOException;
import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.Status;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.ConvertCurrencyDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionPairDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionResultDTO;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import retrofit2.Response;

public class CurrencyControllerTest extends BaseControllerTest {
  /*
    - Convert provided currency with default fee
    - Convert currency with non-default fee
   */

  @Test
  public void testGetAllCurrencyPairsIfOneExits() throws IOException {
    List<CurrencyConversionPairDTO> conversion = getConversionPairs();

    assertThat(conversion.size()).isEqualTo(2);
    assertThat(conversion.get(0).getFrom()).isEqualTo("EUR");
    assertThat(conversion.get(0).getTo()).isEqualTo("USD");
    assertThat(conversion.get(1).getFrom()).isEqualTo("EUR");
    assertThat(conversion.get(1).getTo()).isEqualTo("RUB");
  }

  @Test
  public void testCovertProvidedCurrencyPairWithNonDefaultFee() throws IOException {
    ConvertCurrencyDTO convertCurrencyDTO = new ConvertCurrencyDTO(
        100,
        "USD",
        "RUB"
    );

    // get appropriate fee

    Response<ResponseDTO<CurrencyConversionResultDTO>> response = client
        .convert(convertCurrencyDTO)
        .execute();

    assertThat(response).isNotNull();
    assertThat(response.code()).isEqualTo(HttpStatus.OK.value());

    ResponseDTO<CurrencyConversionResultDTO> body = response.body();
    assertThat(body).isNotNull();

    double conversionResult = body.getResult().getAmount();
    assertThat(conversionResult).isEqualTo(100.0);
  }

  private List<CurrencyConversionPairDTO> getConversionPairs() throws IOException {
    Response<ResponseDTO<List<CurrencyConversionPairDTO>>> response = client
        .getAllPairs()
        .execute();
    assertThat(response.code()).isEqualTo(HttpStatus.OK.value());
    assertThat(response).isNotNull();

    ResponseDTO<List<CurrencyConversionPairDTO>> body = response.body();
    assertThat(body).isNotNull();
    assertThat(body.getStatus()).isEqualTo(Status.OK);

    return body.getResult();
  }
}