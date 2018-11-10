package me.kurchin.bilderlings.homework.currency.api;


import java.util.Collections;
import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.Response;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.CreateFeeDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.FeeDTO;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("fees")
public class FeeController {

  @GetMapping("/")
  public ResponseDTO<List<FeeDTO>> getAll() {
    return Response.ok(
        Collections.singletonList(
            new FeeDTO(
                1,
                "USD",
                "EUR",
                0.05
            )));
  }

  @PostMapping("/")
  public ResponseDTO<FeeDTO> create(@RequestBody CreateFeeDTO createFeeDTO) {
    return Response.ok(
        new FeeDTO(
            1,
            "USD",
            "EUR",
            0.05
        ));
  }

  @DeleteMapping("/{id}")
  public ResponseDTO delete(@PathVariable("id") int id) {
    return Response.ok();
  }
}
