package me.kurchin.bilderlings.homework.currency.api;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.Status;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.CreateFeeDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.FeeDTO;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import retrofit2.Response;

public class FeeControllerTest extends BaseControllerTest {

  @Test
  public void testCreateFee() throws Exception {
    FeeDTO feeDTO = createFee("RUB", "EUR", 0.07);

    assertThat(feeDTO.getId()).isPositive();
    assertThat(feeDTO.getFrom()).isEqualTo("RUB");
    assertThat(feeDTO.getTo()).isEqualTo("EUR");
    assertThat(feeDTO.getFee()).isEqualTo(0.07);
  }

  @Test
  public void testDeleteFee() throws Exception {
    FeeDTO feeDTO = createFee("EUR", "USD", 0.05);
    int id = feeDTO.getId();
    Response<ResponseDTO> deleteFeeResponse = client
        .feeDelete(id)
        .execute();

    ResponseDTO responseDTO = deleteFeeResponse.body();
    assertThat(responseDTO).isNotNull();
    assertThat(responseDTO.getStatus()).isEqualTo(Status.OK);
  }

  @Test
  public void testGetAllFeesIfNotExist() throws Exception {
    Response<ResponseDTO<List<FeeDTO>>> response = client
        .getAll()
        .execute();

    assertThat(response.code()).isEqualTo(HttpStatus.OK.value());

    ResponseDTO<List<FeeDTO>> responseDTO = response.body();

    assertThat(responseDTO).isNotNull();
    assertThat(responseDTO.getStatus()).isEqualTo(Status.OK);
    assertThat(responseDTO.getResult().size()).isEqualTo(0);
  }

  @Test
  public void testGetAllFeesIfOneFeeExists() throws Exception {
    createFee("RUB", "EUR", 0.05);
    Response<ResponseDTO<List<FeeDTO>>> response = client
        .getAll()
        .execute();
    assertThat(response.code()).isEqualTo(HttpStatus.OK.value());

    ResponseDTO<List<FeeDTO>> responseDTO = response.body();

    assertThat(responseDTO).isNotNull();
    assertThat(responseDTO.getStatus()).isEqualTo(Status.OK);

    List<FeeDTO> fees = responseDTO.getResult();

    assertThat(fees.size()).isEqualTo(1);

    FeeDTO feeDTO = fees.get(0);

    assertThat(feeDTO.getId()).isPositive();
    assertThat(feeDTO.getFrom()).isEqualTo("RUB");
    assertThat(feeDTO.getTo()).isEqualTo("EUR");
    assertThat(feeDTO.getFee()).isEqualTo(0.05);
  }

  private FeeDTO createFee(
      String from,
      String to,
      double fee
  ) throws Exception {
    Response<ResponseDTO<FeeDTO>> response = client
        .feeCreate(new CreateFeeDTO(from, to, fee))
        .execute();

    assertThat(response.code()).isEqualTo(HttpStatus.OK.value());

    ResponseDTO<FeeDTO> responseDTO = response.body();

    assertThat(responseDTO).isNotNull();
    assertThat(responseDTO.getStatus()).isEqualTo(Status.OK);

    return responseDTO.getResult();
  }
}