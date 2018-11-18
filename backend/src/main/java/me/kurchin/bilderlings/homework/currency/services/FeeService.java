package me.kurchin.bilderlings.homework.currency.services;

import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.CreateFeeDTO;
import me.kurchin.bilderlings.homework.currency.entities.Fee;
import me.kurchin.bilderlings.homework.currency.exceptions.FeeExistsException;
import me.kurchin.bilderlings.homework.currency.persistance.FeeStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeeService {

  private final FeeStorage feeStorage;

  @Autowired
  public FeeService(FeeStorage feeStorage) {
    this.feeStorage = feeStorage;
  }

  public List<Fee> getAll() {
    return feeStorage.getAll();
  }

  public Fee create(CreateFeeDTO createFeeDTO) throws FeeExistsException {
    return feeStorage.create(createFeeDTO);
  }

  public boolean delete(long id) {
    return feeStorage.delete(id);
  }

  public double getFee(String from, String to) {
    // TODO: 3. Get fee for currency pair
    return 0.0;
  }
}
