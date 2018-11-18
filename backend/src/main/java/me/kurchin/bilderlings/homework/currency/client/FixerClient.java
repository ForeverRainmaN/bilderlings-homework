package me.kurchin.bilderlings.homework.currency.client;

import me.kurchin.bilderlings.homework.currency.client.fixer.FixerGetLatestRatesResponse;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface FixerClient {

  @GET("/api/latest")
  Call<FixerGetLatestRatesResponse> getLatestRates(
      @Query("base") String base,
      @Query("symbols") String symbols
  );
}
