package juntas.handler;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DetailError {
    private String name;
    private String message;

    public DetailError(Exception e){
        this.name = e.getClass().getName();
        this.message = e.getMessage();
    }
}
