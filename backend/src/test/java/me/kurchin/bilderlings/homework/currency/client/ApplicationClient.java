package me.kurchin.bilderlings.homework.currency.client;

import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.ConvertCurrencyDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionPairDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.currency.CurrencyConversionResultDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.CreateFeeDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.FeeDTO;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface ApplicationClient {

  @POST("/api/v1/fees/")
  Call<ResponseDTO<FeeDTO>> feeCreate(@Body CreateFeeDTO createFeeDTO);

  @GET("/api/v1/fees/")
  Call<ResponseDTO<List<FeeDTO>>> getAll();

  @DELETE("/api/v1/fees/{id}")
  Call<ResponseDTO> feeDelete(@Path("id") long id);

  @GET("/api/v1/currencies/")
  Call<ResponseDTO<List<CurrencyConversionPairDTO>>> getAllPairs();

  @POST("/api/v1/convert/")
  Call<ResponseDTO<CurrencyConversionResultDTO>> convert(
      @Body ConvertCurrencyDTO convertCurrencyDTO
  );
}
