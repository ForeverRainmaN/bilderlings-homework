package me.kurchin.bilderlings.homework.currency.configuration;

import me.kurchin.bilderlings.homework.currency.client.FixerClient;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import retrofit2.Retrofit;
import retrofit2.Retrofit.Builder;
import retrofit2.converter.jackson.JacksonConverterFactory;

@Configuration
public class RetrofitConfiguration {

  private CurrencyConverterConfiguration configuration;

  @Autowired
  public RetrofitConfiguration(CurrencyConverterConfiguration configuration) {
    this.configuration = configuration;
  }

  @Bean
  public FixerClient createFixerClient() {
    OkHttpClient.Builder httpClient = new OkHttpClient.Builder();
    httpClient.addInterceptor(chain -> {
      Request originalRequest = chain.request();

      HttpUrl urlWithAccessKey = originalRequest
          .url()
          .newBuilder()
          .addQueryParameter("access_key", configuration.getFixer().getAccessKey())
          .build();

      Request.Builder requestBuilder = originalRequest
          .newBuilder()
          .url(urlWithAccessKey);

      Request requestWithAccessKey = requestBuilder.build();
      return chain.proceed(requestWithAccessKey);
    });

    Retrofit retrofit =
        new Builder()
            .baseUrl(configuration.getFixer().getHost())
            .client(httpClient.build())
            .addConverterFactory(JacksonConverterFactory.create())
            .build();

    return retrofit.create(FixerClient.class);
  }
}
