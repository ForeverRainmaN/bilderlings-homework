package me.kurchin.bilderlings.homework.currency.exceptions;

public class FeeExistsException extends RuntimeException {
  public FeeExistsException() {
    super("Failed to create element. Element with the same fee already exists");
  }
}
