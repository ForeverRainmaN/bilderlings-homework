package me.kurchin.bilderlings.homework.currency.persistance;

import java.util.ArrayList;
import java.util.List;
import me.kurchin.bilderlings.homework.currency.api.dto.fee.CreateFeeDTO;
import me.kurchin.bilderlings.homework.currency.entities.Fee;
import me.kurchin.bilderlings.homework.currency.exceptions.FeeExistsException;
import org.springframework.stereotype.Repository;

@Repository
public class FeeStorage {

  private List<Fee> storage = new ArrayList<>();
  private long id = 0;

  public synchronized List<Fee> getAll() {
    return storage;
  }

  public synchronized Fee create(CreateFeeDTO createFeeDTO) throws FeeExistsException {
    id++;
    Fee fee = new Fee(id, createFeeDTO.getFrom(), createFeeDTO.getTo(), createFeeDTO.getFee());
    boolean exists = storage.stream().anyMatch(fee::isSameCurrencyPair);
    if (exists) {
      throw new FeeExistsException();
    }
    storage.add(fee);
    return fee;
  }

  public synchronized boolean delete(long id) {
    return storage.stream()
        .filter(fee -> fee.getId() == id)
        .findFirst()
        .map(fee -> storage.remove(fee))
        .orElseThrow(IllegalArgumentException::new);
  }

  public synchronized void deleteAll() {
    storage.clear();
  }
}
