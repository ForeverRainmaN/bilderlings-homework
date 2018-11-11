package me.kurchin.bilderlings.homework.currency.exceptions;

public class FeeExistsException extends Exception {
  public FeeExistsException() {
    super("Failed to create element. Element with the same fee already exists");
  }
}
