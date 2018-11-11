package me.kurchin.bilderlings.homework.currency.api;


import java.util.List;
import java.util.stream.Collectors;
import me.kurchin.bilderlings.homework.currency.api.dto.Response;
import me.kurchin.bilderlings.homework.currency.api.dto.Response.ResponseDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.CreateFeeDTO;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.FeeDTO;
import me.kurchin.bilderlings.homework.currency.entities.Fee;
import me.kurchin.bilderlings.homework.currency.exceptions.FeeExistsException;
import me.kurchin.bilderlings.homework.currency.services.FeeService;
import org.springframework.beans.factory.annotation.Autowired;
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

  private final FeeService feeService;

  @Autowired
  public FeeController(FeeService feeService) {
    this.feeService = feeService;
  }

  @PostMapping("/")
  public ResponseDTO<FeeDTO> create(@RequestBody CreateFeeDTO createFeeDTO)
      throws FeeExistsException {
    Fee fee = feeService.create(createFeeDTO);
    return Response.ok(new FeeDTO(fee));
  }

  @GetMapping("/")
  public ResponseDTO<List<FeeDTO>> getAll() {
    return Response.ok(feeService.getAll()
        .stream()
        .map(FeeDTO::new)
        .collect(Collectors.toList()));
  }

  @DeleteMapping("/{id}")
  public ResponseDTO delete(@PathVariable("id") long id) {
    feeService.delete(id);
    return Response.ok();
  }
}
