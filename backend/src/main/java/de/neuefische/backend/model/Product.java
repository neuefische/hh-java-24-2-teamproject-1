package de.neuefische.backend.model;
import jakarta.validation.constraints.*;


public record Product(
        String id,
        @NotBlank
        String name,
        @Min(value = 0, message = "Stock must be greater than or equal to 0")
        int stock,
        @DecimalMin(value = "0.01", inclusive = false, message = "Price must be greater than 0")
        double price
) {
}
