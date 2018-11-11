package me.kurchin.bilderlings.homework.currency.api;

import me.kurchin.bilderlings.homework.currency.client.ApplicationClient;
import org.junit.Before;
import org.junit.runner.RunWith;
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

  protected ApplicationClient client;

  @Before
  public void setUp() throws Exception {
    Retrofit retrofit = new Retrofit.Builder()
        .baseUrl("http://localhost:" + serverPort)
        .addConverterFactory(JacksonConverterFactory.create())
        .build();

    client = retrofit.create(ApplicationClient.class);
  }
}
