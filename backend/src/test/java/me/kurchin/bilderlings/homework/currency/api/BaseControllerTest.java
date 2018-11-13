package me.kurchin.bilderlings.homework.currency.api;

import me.kurchin.bilderlings.homework.currency.client.ApplicationClient;
import me.kurchin.bilderlings.homework.currency.persistance.FeeStorage;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import retrofit2.Retrofit;
import retrofit2.converter.jackson.JacksonConverterFactory;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@RunWith(SpringJUnit4ClassRunner.class)
@ActiveProfiles("test")
public abstract class BaseControllerTest {

  @LocalServerPort
  private int serverPort;

  @Autowired
  private FeeStorage feeStorage;

  protected ApplicationClient client;

  @Before
  public void setUp() {
    Retrofit retrofit = new Retrofit.Builder()
        .baseUrl("http://localhost:" + serverPort)
        .addConverterFactory(JacksonConverterFactory.create())
        .build();

    client = retrofit.create(ApplicationClient.class);
    feeStorage.deleteAll();
  }
}
