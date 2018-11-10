package me.kurchin.bilderlings.homework.currency.api.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Response {

  public static <T> ResponseDTO<T> ok(T result) {
    return new ResponseDTO<>(Status.OK, result);
  }

  public static <T> ResponseDTO<T> ok() {
    return ok(null);
  }

  @JsonInclude(Include.NON_NULL)
  public static class ResponseDTO<T> {

    private final Status status;
    private final T result;

    @JsonCreator
    private ResponseDTO(
        @JsonProperty("status") Status status,
        @JsonProperty("result") T result
    ) {
      this.status = status;
      this.result = result;
    }

    private ResponseDTO(Status status) {
      this(status, null);
    }

    public Status getStatus() {
      return status;
    }

    public T getResult() {
      return result;
    }
  }
}
